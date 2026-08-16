#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Activision'"],
	['Activision\u2019', "Activision'"],
	['Activision services', 'Activision services'],
	['Activision service', 'Activision service'],
	['Activision platform', 'Activision platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Activision bans'],
	['Activision security', 'Ricochet security'],
	['Activision Status', 'Call of Duty: Warzone Support'],
	['Activision Warzone', 'Call of Duty: Warzone'],
	['Activision Support', 'Call of Duty: Warzone Support'],
	['Activision', 'Activision'],
	['EAC guide', 'Ricochet guide'],
	['undetected EAC notes', 'undetected Ricochet notes'],
	['status.epicgames.com', 'support.activision.com'],
	['www.epicgames.com/warzone', 'www.callofduty.com/warzone'],
	['www.warzone.com/competitive', 'www.callofduty.com/warzone'],
	['https://www.warzone.com/', 'https://www.callofduty.com/warzone'],
	['Warzone.com', 'Call of Duty: Warzone'],
	['Warzone Competitive', 'Call of Duty: Warzone'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
