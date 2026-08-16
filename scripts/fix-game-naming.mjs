#!/usr/bin/env node
/**
 * Game naming policy:
 * - Prominent spots (intros, meta descriptions, key image alts, trust badges): "Call of Duty: Warzone"
 * - Tight/keyword spots (titles, H1s, body mid-copy, nav, badges): "Warzone"
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FULL = 'Call of Duty: Warzone';

/** [from, to] — order matters; longer/more specific first. */
const REPLACEMENTS = [
	// Page intros & prominent copy — use full game name
	['undetected cheat package for Warzone on Windows PC', `undetected cheat package for ${FULL} on Windows PC`],
	['undetected Warzone Cheats — ESP wallhack, radar hack, and Aimbot for Warzone on Windows PC', `undetected Warzone Cheats — ESP wallhack, radar hack, and Aimbot for ${FULL} on Windows PC`],
	['Every ESP wallhack, radar hack, and Aimbot control included in the Warzone Cheats package for Warzone on Windows PC', `Every ESP wallhack, radar hack, and Aimbot control included in the Warzone Cheats package for ${FULL} on Windows PC`],
	['Install and configure Warzone Cheats for Warzone on Windows', `Install and configure Warzone Cheats for ${FULL} on Windows`],
	['Ricochet maintenance, checkout, and Warzone compatibility on Windows PC', `Ricochet maintenance, checkout, and ${FULL} compatibility on Windows PC`],
	['Get help with Warzone Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and Ricochet maintenance for Warzone on Windows PC', `Get help with Warzone Cheats licenses, checkout, ESP wallhack setup, Aimbot profiles, and Ricochet maintenance for ${FULL} on Windows PC`],
	['How Warzone Cheats stays maintained for Warzone after Ricochet', `How Warzone Cheats stays maintained for ${FULL} after Ricochet`],
	['Warzone wallhack ESP for Warzone —', `Warzone wallhack ESP for ${FULL} —`],
	['2D radar-style overlay for Warzone —', `2D radar-style overlay for ${FULL} —`],
	['how ESP wallhack, radar hack, and Aimbot rebuild after Warzone security updates', `how ESP wallhack, radar hack, and Aimbot rebuild after ${FULL} security updates`],
	['The 2026 Warzone Cheats package for Warzone —', `The 2026 Warzone Cheats package for ${FULL} —`],
	['How Warzone cheat download works for Warzone —', `How Warzone cheat download works for ${FULL} —`],
	['Warzone mod menu controls for Warzone —', `Warzone mod menu controls for ${FULL} —`],
	['Warzone soft aim settings for Warzone —', `Warzone soft aim settings for ${FULL} —`],
	['Compare the Warzone cheats for Warzone in 2026 —', `Compare the Warzone cheats for ${FULL} in 2026 —`],
	['Warzone aimbot hack tools for Warzone —', `Warzone aimbot hack tools for ${FULL} —`],
	['Warzone ESP hack overlays for Warzone —', `Warzone ESP hack overlays for ${FULL} —`],
	['Warzone unlock all is a common search term for Warzone —', `Warzone unlock all is a common search term for ${FULL} —`],
	['contact support about a Warzone license', `contact support about a ${FULL} license`],
	['purchased through checkout for Warzone.', `purchased through checkout for ${FULL}.`],
	['Warzone Cheats licenses for Warzone on Windows PC.', `Warzone Cheats licenses for ${FULL} on Windows PC.`],
	['Aimbot tools for Warzone firefights.', `Aimbot tools for ${FULL} firefights.`],
	['Warzone esp visibility tools for BR and Resurgence.', `${FULL} esp visibility tools for BR and Resurgence.`],
	['undetected warzone cheats live for Warzone on Windows PC.', `undetected warzone cheats live for ${FULL} on Windows PC.`],
	['undetected warzone cheats live for Warzone on Windows PC', `undetected warzone cheats live for ${FULL} on Windows PC`],
	['If you need undetected ESP wallhack, radar hack, and Aimbot for Warzone on Windows PC', `If you need undetected ESP wallhack, radar hack, and Aimbot for ${FULL} on Windows PC`],
	["Ricochet anti-cheat is Activision' anti-cheat for Warzone on PC", `Ricochet anti-cheat is Activision' anti-cheat for ${FULL} on PC`],
	['Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Warzone on Windows PC only.', `Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for ${FULL} on Windows PC only.`],

	// Meta descriptions — full name where it fits
	['Warzone cheats for Windows PC — ESP, soft aim, radar, and Ricochet updates. Compare plans and buy.', `Warzone cheats for Call of Duty: Warzone on Windows PC — ESP, soft aim, radar, and Ricochet updates. Compare plans and buy.`],
	['Warzone cheats FAQ: ESP boxes, soft aim, Ricochet maintenance, and pricing for PC. Clear answers before you buy.', `Warzone cheats FAQ for Call of Duty: Warzone — ESP boxes, soft aim, Ricochet maintenance, and pricing. Clear answers before you buy.`],
	['Contact warzone cheats support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.', `Contact warzone cheats support for Call of Duty: Warzone licenses — ESP setup, soft aim profiles, and Windows PC help. Include your order ID.`],
	['Set up warzone cheats on Windows PC — activate ESP boxes, soft aim profiles, and . Check Ricochet updates before your first queue.', `Set up warzone cheats for Call of Duty: Warzone on Windows PC — activate ESP, soft aim, and radar. Check Ricochet updates before your first queue.`],
	['Undetected warzone cheats with Ricochet maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.', `Undetected warzone cheats for Call of Duty: Warzone — Ricochet maintenance for ESP, soft aim, and radar on Windows PC. Check status before you queue.`],
	['Track Ricochet maintenance and Warzone patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package.', `Track Ricochet maintenance and Call of Duty: Warzone patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package.`],

	// brand.ts SEO copy
	['Official Warzone Cheats site for Windows PC. Compare features, store plans, and live status — then buy ESP, soft aim, and radar in one license.', `Official Warzone Cheats site for Call of Duty: Warzone on Windows PC. Compare features, store plans, and live status — then buy ESP, soft aim, and radar in one license.`],
];

const FILES = [
	'scripts/i18n-data/pages-en.mjs',
	'scripts/i18n-data/ui-strings-part1.mjs',
	'public/locales/en/translation.json',
	'src/data/brand.ts',
];

async function main() {
	let total = 0;
	for (const rel of FILES) {
		const file = path.join(ROOT, rel);
		const original = await readFile(file, 'utf8');
		let updated = original;
		for (const [from, to] of REPLACEMENTS) {
			updated = updated.split(from).join(to);
		}
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			console.log('updated', rel);
			total++;
		}
	}
	console.log(`Applied game naming in ${total} files`);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
