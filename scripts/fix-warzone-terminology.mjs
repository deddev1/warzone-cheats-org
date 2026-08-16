#!/usr/bin/env node
/**
 * Post-migration cleanup: fix over-aggressive Tarkov→Warzone replacements
 * and normalize Warzone-specific terminology.
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const REPLACEMENTS = [
	['warzone-cheats-raid.webp', 'warzone-cheats-raid.webp'],
	['warzone-cheats-raid', 'warzone-cheats-raid'],
	['/products/warzone', '/products/warzone'],
	['matches', 'matches'],
	['seasoned', 'seasoned'],
	['Resurgence', 'Resurgence'],
	['enemy operators and squads', 'enemy operators and squads'],
	['enemy operators and squads', 'enemy operators and squads'],
	['enemy operators and squads', 'enemy operators and squads'],
	['enemy operators, squads, and UAV pings', 'enemy operators, squads, and UAV pings'],
	['UAV and contract markers', 'UAV and contract markers'],
	['Squad and threat filters', 'Squad and threat filters'],
	['UAV and gulag awareness cues', 'UAV and gulag awareness cues'],
	['UAV threat cues', 'UAV threat cues'],
	['loadout drops, and contracts', 'loadout drops, and contracts'],
	['loadout drops, and contracts', 'loadout drops, and contracts'],
	['Resurgence', 'Resurgence'],
	['Resurgences', 'Resurgence matches'],
	['close-quarters fights', 'close-quarters fights'],
	['close-quarters fight', 'close-quarters fight'],
	['BR and Resurgence Support', 'BR and Resurgence Support'],
	['pmc-matches-and-Resurgences', 'br-and-resurgence-modes'],
	['Operator ESP / wallhack', 'Operator ESP / wallhack'],
	['PMC and Resurgence', 'BR and Resurgence'],
	['Gulag markers', 'Gulag markers'],
	['Gulags', 'Gulags'],
	['Match Soft Aim', 'Match Soft Aim'],
	['tag: \'Raid\'', "tag: 'BR'"],
	['Rebirth Island', 'Rebirth Island'],
	['building clears', 'building clears'],
	['loadout, Rebirth Island', 'Verdansk, Rebirth Island'],
	['xKrypt0_WZ', 'xKrypt0_WZ'],
	['vanLifeWZ', 'vanLifeWZ'],
	['Undetected Warzone cheats', 'Undetected Warzone cheats'],
	['Warzone matches', 'Warzone matches'],
	['BR matches', 'BR matches'],
	['early matches', 'early matches'],
	['for matches', 'for matches'],
	['in matches', 'in matches'],
	['in matches', 'in matches'],
	[' match flow', ' match flow'],
	['What Warzone ESP solves in matches', 'What Warzone ESP solves in matches'],
	['a Call of Duty', 'a Call of Duty'],
	['after a Call of Duty', 'after a Call of Duty'],
	['call-of-duty-warzone-cheats', 'call-of-duty-warzone-cheats'],
	['Warzone visibility for Warzone matches', 'Wallhack visibility for Warzone matches'],
	['BR and Resurgence', 'BR and Resurgence'],
	['match-critical', 'match-critical'],
	['resurgenceCombat', 'resurgenceCombat'],
	['resurgenceMode', 'resurgenceMode'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set(['adapt-tarkov.mjs', 'adapt-tarkov-to-warzone.mjs']);

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
		}
	}
	console.log(`Fixed terminology in ${changed} files`);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
