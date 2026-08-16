#!/usr/bin/env node
/** Fix blog generator Warzone terminology after Tarkov migration. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const file = path.join(path.dirname(fileURLToPath(import.meta.url)), 'generate-blog-posts.mjs');
let content = await readFile(file, 'utf8');

const REPLACEMENTS = [
	['https://www.escapefromwarzone.com/support/', 'https://support.activision.com/'],
	['https://www.escapefromwarzone.com/', 'https://www.callofduty.com/warzone'],
	['warzone-Resurgence-aggressive-strategies', 'warzone-resurgence-aggressive-strategies'],
	['Warzone Scav Run Strategies That Actually Print Loot', 'Warzone Resurgence Strategies That Actually Win Fights'],
	['Warzone Scav Run Strategies: How to Leave With Gear', 'Warzone Resurgence Strategies: How to Win More Fights'],
	['Five aggressive but smart Call of Duty: Warzone Scav strategies', 'Five aggressive but smart Call of Duty: Warzone Resurgence strategies'],
	['Passive Scav players wait behind a bush while two PMC teams erase each other', 'Passive Resurgence players wait behind cover while two squads erase each other'],
	['Strong Resurgence manufacture', 'Strong Resurgence players manufacture'],
	['Scav player moving toward gulag with loot', 'Resurgence player pushing toward a buy station with loot'],
	['Scav kits are random', 'Resurgence loadouts are random'],
	['player Scavs can turn on you', 'enemy operators can third-party you'],
	['Warmup checklist before you queue a Scav', 'Warmup checklist before you queue Resurgence'],
	['PMC loadouts', 'operator loadouts'],
	['PMC and Scav matches', 'BR and Resurgence matches'],
	['PMC loadout comparison', 'operator loadout comparison'],
	['hundred PMC fights', 'hundred squad fights'],
	['Scav strategies article', 'Resurgence strategies article'],
	['Scav aggression guide', 'Resurgence aggression guide'],
	['Scav aggression', 'Resurgence aggression'],
	['category: \'Scav Runs\'', "category: 'Resurgence'"],
	['Scav Run Strategies', 'Resurgence Strategies'],
	['Scav strategies', 'Resurgence strategies'],
	['call of duty warzone scav', 'call of duty warzone resurgence'],
	['normal PMC queues', 'normal ranked queues'],
	['six-match PMC block', 'six-match BR block'],
	['Streets of Warzone', 'Urzikstan'],
	['PMC silhouettes', 'operator silhouettes'],
	['quiet Scav before locking', 'quiet Resurgence match before locking'],
	['scav AI shuffle and a player PMC push', 'AI shuffle and a player operator push'],
	['Warzone Warmup Routine Before Serious PMC Raids', 'Warzone Warmup Routine Before Serious BR Matches'],
	['Before You Queue PMC', 'Before You Queue BR'],
	['pmc warmup routine', 'warzone warmup routine'],
	['expensive PMC kit', 'expensive loadout'],
	['focused Scav or offline', 'focused Resurgence or offline'],
	['holding an gulag', 'holding a gulag'],
	['first two PMC deaths', 'first two squad wipes'],
	['Windows PC PMC and Scav play', 'Windows PC BR and Resurgence play'],
	['"eft hacks"', '"warzone hacks"'],
	['seeing the other PMC first', 'seeing the other operator first'],
	['scavenger panic', 'loot panic'],
	['Warzone Cheats vs Typical Budget EFT Shops', 'Warzone Cheats vs Typical Budget Cheat Shops'],
	['budget EFT cheat shops', 'budget cheat shops'],
	['Comparing Warzone Cheats features against budget EFT cheat shops', 'Comparing Warzone Cheats features against budget cheat shops'],
	['aggressive Scav timing', 'aggressive Resurgence timing'],
	['Scav timing', 'Resurgence timing'],
];

for (const [from, to] of REPLACEMENTS) {
	content = content.split(from).join(to);
}

await writeFile(file, content, 'utf8');
console.log('Updated generate-blog-posts.mjs');
