#!/usr/bin/env node
/**
 * Publish Warzone gameplay screenshots at simple /images/*.webp URLs.
 * Source files are the user-imported screenshots already in public/images/.
 * Does not touch warzone-ghost-hero* (homepage hero).
 */
import { copyFile, readdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('.');
const imagesDir = path.join(root, 'public/images');
const CONTENT_WIDTHS = [480, 960];

/** Source screenshot → simple public URL basename (no extension). */
const SIMPLE_IMAGES = [
	{ source: 'warzone-esp-player-tags.webp', name: 'esp' },
	{ source: 'warzone-wallhack-skeleton.webp', name: 'wallhack' },
	{ source: 'warzone-aimbot-skeleton.webp', name: 'aimbot' },
	{ source: 'warzone-aimbot-sniper.webp', name: 'sniper' },
	{ source: 'warzone-esp-radar.webp', name: 'radar' },
	{ source: 'warzone-cheats-combat.webp', name: 'combat' },
];

/** Legacy filenames replaced by the simple URLs above. */
const LEGACY_BASES = [
	'warzone-cheats-esp',
	'warzone-cheats-wallhack',
	'warzone-cheats-aimbot',
	'warzone-cheats-aimbot-view',
	'warzone-cheats-radar',
	'warzone-cheats-raid',
];

async function removeLegacyContentImages() {
	const files = await readdir(imagesDir).catch(() => []);
	for (const file of files) {
		const base = file.replace(/(-\d+w)?\.(webp|png)$/i, '');
		if (LEGACY_BASES.includes(base)) {
			await unlink(path.join(imagesDir, file));
			console.log(`Removed legacy ${file}`);
		}
	}
}

async function publishSimpleImages() {
	for (const { source, name } of SIMPLE_IMAGES) {
		const input = path.join(imagesDir, source);
		const output = path.join(imagesDir, `${name}.webp`);
		const buffer = await sharp(input)
			.resize({ width: 1920, withoutEnlargement: true })
			.webp({ quality: 86, effort: 6 })
			.toBuffer();
		await writeFile(output, buffer);
		console.log(`Wrote /images/${name}.webp (${buffer.length} bytes)`);

		const meta = await sharp(buffer).metadata();
		for (const width of CONTENT_WIDTHS) {
			if (meta.width && width >= meta.width) continue;
			const variant = `${name}-${width}w.webp`;
			const variantBuffer = await sharp(buffer)
				.resize({ width, withoutEnlargement: true })
				.webp({ quality: 78, effort: 6 })
				.toBuffer();
			await writeFile(path.join(imagesDir, variant), variantBuffer);
			console.log(`Wrote /images/${variant}`);
		}
	}
}

await removeLegacyContentImages();
await publishSimpleImages();
console.log('Done — simple image URLs published.');
