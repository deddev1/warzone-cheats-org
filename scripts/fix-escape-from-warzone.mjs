#!/usr/bin/env node
/**
 * Purge incorrect "Escape from Warzone" / escapefromwarzone.com references.
 * Game: Call of Duty: Warzone. Domain: warzonecheats.org
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const REPLACEMENTS = [
	['https://www.escapefromwarzone.com/support/', 'https://support.activision.com/'],
	['https://www.escapefromwarzone.com/', 'https://www.callofduty.com/warzone'],
	['http://www.escapefromwarzone.com/support/', 'https://support.activision.com/'],
	['http://www.escapefromwarzone.com/', 'https://www.callofduty.com/warzone'],
	['www.escapefromwarzone.com/support', 'support.activision.com'],
	['www.escapefromwarzone.com', 'www.callofduty.com/warzone'],
	['escapefromwarzone.com/support', 'support.activision.com'],
	['escapefromwarzone.com', 'callofduty.com/warzone'],
	['Escape From Warzone', 'Call of Duty: Warzone'],
	['Escape from Warzone', 'Call of Duty: Warzone'],
	['escape from warzone', 'Call of Duty: Warzone'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'adapt-tarkov.mjs',
	'fix-escape-from-warzone.mjs',
	'fix-blog-warzone.mjs',
	'adapt-tarkov-to-warzone.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else files.push(full);
	}
	return files;
}

async function main() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		let updated = original;
		for (const [from, to] of REPLACEMENTS) {
			updated = updated.split(from).join(to);
		}
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
			console.log('updated', path.relative(ROOT, file));
		}
	}
	console.log(`Fixed escape-from-warzone references in ${changed} files`);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
