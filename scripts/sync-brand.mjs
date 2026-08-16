#!/usr/bin/env node
/**
 * Syncs public SEO files from src/data/brand.ts (single source of truth).
 * Run: npm run sync:brand  (also runs before build)
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const PRIVATE_PATHS = ['/brand-studio/', '/brand-studio', '/__brand/', '/__brand'];

/** Major AI crawlers — explicit Allow so search/answer bots can read public pages. */
const AI_CRAWLERS = [
	'GPTBot',
	'OAI-SearchBot',
	'ChatGPT-User',
	'ClaudeBot',
	'Claude-SearchBot',
	'anthropic-ai',
	'Google-Extended',
	'PerplexityBot',
	'CCBot',
];

function readBrand() {
	const src = readFileSync(path.join(ROOT, 'src/data/brand.ts'), 'utf8');
	const str = (key) => {
		const m = src.match(new RegExp(`${key}:\\s*'([^']*)'`));
		if (!m) throw new Error(`brand.ts missing string field: ${key}`);
		return m[1];
	};
	const optionalStr = (key, fallback = '') => {
		const m = src.match(new RegExp(`${key}:\\s*'([^']*)'`));
		return m ? m[1] : fallback;
	};
	const themeBlock = src.match(/theme:\s*\{([\s\S]*?)\n\t\},/);
	const themeField = (key, fallback) => {
		if (!themeBlock) return fallback;
		const m = themeBlock[1].match(new RegExp(`${key}:\\s*'([^']*)'`));
		return m ? m[1] : fallback;
	};
	const plansBlock = src.match(/plans:\s*\[([\s\S]*?)\]\s*as const/);
	const plans = [];
	if (plansBlock) {
		for (const m of plansBlock[1].matchAll(/label:\s*'([^']*)'[\s\S]*?price:\s*(\d+)/g)) {
			plans.push({ label: m[1], price: Number(m[2]) });
		}
	}
	const currencyMatch = src.match(/currency:\s*'([^']*)'/);
	const name = str('name');
	return {
		name,
		shortName: optionalStr('shortName', name),
		url: str('url').replace(/\/$/, ''),
		supportEmail: str('supportEmail'),
		game: str('game'),
		antiCheat: str('antiCheat'),
		primary: (() => {
			const m = src.match(/primary:\s*'([^']*)'/);
			if (!m) throw new Error('brand.ts missing keywords.primary');
			return m[1];
		})(),
		currency: currencyMatch ? currencyMatch[1] : 'USD',
		plans,
		themeBg: themeField('bg', '#08090a'),
		themeAccent: themeField('accent', '#c026d3'),
	};
}

function buildRobotsTxt(brand) {
	const llmsUrl = `${brand.url}/llms.txt`;
	const disallowLines = PRIVATE_PATHS.map((p) => `Disallow: ${p}`).join('\n');
	const aiBlocks = AI_CRAWLERS.map(
		(ua) =>
			`User-agent: ${ua}\nAllow: /\nAllow: /blog/\nAllow: /images/\n${disallowLines}`,
	).join('\n\n');

	return `# =============================================================================
# ${brand.name} — ${brand.url}
# =============================================================================
# About: Official site for undetected ${brand.primary} on Windows PC.
# Product: ESP wallhack, soft aim, and 2D radar for ${brand.game}.
# Updates: Rebuilt after game patches and ${brand.antiCheat} anti-cheat changes.
# AI site guide (summary + key pages): ${llmsUrl}
# =============================================================================

User-agent: *
Allow: /
Allow: /blog/
Allow: /images/
${disallowLines}

# AI crawlers — public pages allowed for search, answers, and site understanding.
${aiBlocks}

# Primary sitemap — index covers EN, locale, and image sitemaps.
Sitemap: ${brand.url}/sitemap.xml
# LLM-readable site guide: ${llmsUrl}
`;
}

function buildLlmsTxt(brand) {
	const u = brand.url;
	const planLine =
		brand.plans.length > 0
			? brand.plans.map((p) => `${p.label} $${p.price} ${brand.currency}`).join(', ')
			: 'See pricing page';

	return `# ${brand.name}

> ${brand.name} is the official website for undetected ${brand.primary} on Windows PC. One license includes ESP wallhack, soft aim, and 2D radar, with updates after ${brand.game} and ${brand.antiCheat} anti-cheat patches.

${brand.name} sells cheat software for ${brand.game} on Windows 10 and 11. This site is run by ${brand.name} — it is not made by Activision.

What is included in one license:
- ESP wallhack — see players, squads, and loot through walls
- Soft aim / aimbot — FOV, smoothness, and bone priority controls
- 2D radar — threat cues outside your field of view
- Patch updates when ${brand.game} or ${brand.antiCheat} changes require maintenance

Pricing: ${planLine}. Digital delivery after payment.

Requirements: Windows 10 or 11, and ${brand.game} installed.

Keywords: ${brand.primary}, call of duty warzone cheats, warzone esp, warzone aimbot, warzone wallhack, undetected warzone cheats.

## Main pages
- [Homepage](${u}/): Product overview, buyer reviews, FAQ, and quick links
- [Warzone cheats overview](${u}/warzone-cheats/): Main product page for ${brand.primary}
- [Features](${u}/features/): Full list of what one license includes
- [Pricing](${u}/pricing/): Monthly and lifetime plans
- [Live status](${u}/updates/): Build status after game and ${brand.antiCheat} patches

## Feature guides
- [ESP wallhack](${u}/warzone-esp/): Player boxes, loot markers, distance readouts
- [Aimbot](${u}/warzone-aimbot/): Soft aim settings and hotkeys
- [Radar hack](${u}/warzone-radar-hack/): 2D threat overlay for ${brand.game}

## Help
- [Setup guide](${u}/setup/): Install on Windows PC after purchase
- [FAQ](${u}/faq/): Delivery, undetected status, and what is included
- [Support](${u}/support/): Contact ${brand.supportEmail}

## Guides
- [Complete Warzone cheats guide (2026)](${u}/blog/warzone-cheats-complete-guide-2026/)
- [Buyers guide](${u}/blog/call-of-duty-warzone-cheats-buyers-guide/)
- [Undetected cheats and ${brand.antiCheat}](${u}/blog/undetected-warzone-cheats-ricochet/)
- [All blog guides](${u}/blog/)

## Optional
- [Buyer reviews](${u}/reviews/)
- [Refund policy](${u}/refund-policy/)
- [Privacy policy](${u}/privacy/)
- [Terms of service](${u}/terms/)
`;
}

const brand = readBrand();
const description = `Undetected ${brand.primary} — ESP, aimbot, and radar for PC`;

writeFileSync(path.join(ROOT, 'public/robots.txt'), buildRobotsTxt(brand), 'utf8');
writeFileSync(path.join(ROOT, 'public/llms.txt'), buildLlmsTxt(brand), 'utf8');

writeFileSync(
	path.join(ROOT, 'public/site.webmanifest'),
	`${JSON.stringify(
		{
			name: brand.name,
			short_name: brand.shortName || brand.name,
			description,
			start_url: '/',
			display: 'standalone',
			background_color: brand.themeBg,
			theme_color: brand.themeBg,
			icons: [
				{ src: '/favicon.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
				{ src: '/favicon.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
				{ src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
			],
		},
		null,
		2,
	)}\n`,
	'utf8',
);

const astroPath = path.join(ROOT, 'astro.config.mjs');
let astro = readFileSync(astroPath, 'utf8');
const nextAstro = astro.replace(/site:\s*'[^']*'/, `site: '${brand.url}'`);
if (nextAstro === astro && !astro.includes(`site: '${brand.url}'`)) {
	throw new Error('Could not update site URL in astro.config.mjs');
}
writeFileSync(astroPath, nextAstro, 'utf8');

console.log(`sync-brand: ${brand.name} → ${brand.url} (robots.txt, llms.txt, Sitemap + Astro site)`);
