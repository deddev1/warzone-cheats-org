import type { PageId } from './content.generated';
import { fillBrandTokens, seoDescription } from '../brand';
import { brandCopy, brandSeo, seoPageTitle } from '../site-core';
import { EXT_CITATIONS, EXT_URLS } from '../external-resources';

export type SimpleSection = {
	h2: string;
	paragraphs: string[];
	list?: string[];
};

export type SimplePageCopy = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
	galleryTitle: string;
	sections: SimpleSection[];
};

function page(copy: SimplePageCopy): SimplePageCopy {
	return {
		...copy,
		title: seoPageTitle(copy.title),
		description: seoDescription(copy.description),
		intro: fillBrandTokens(copy.intro),
		sections: copy.sections.map((section) => ({
			...section,
			h2: fillBrandTokens(section.h2),
			paragraphs: section.paragraphs.map(fillBrandTokens),
			list: section.list?.map(fillBrandTokens),
		})),
	};
}

/** Short, plain-English overrides for key EN nav pages — meta from brand.seo */
export const simplePageCopy: Partial<Record<PageId, SimplePageCopy>> = {
	features: page({
		title: brandSeo.featuresTitle,
		description: brandSeo.featuresDescription,
		h1: 'Features',
		intro: brandCopy.featuresIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Official Warzone site',
		ctaSecondaryHref: EXT_URLS.warzone,
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'ESP & wallhack',
				paragraphs: [
					'See enemy operators, squads, and UAV pings, and loot through walls with distance readouts.',
					`Map and loot systems evolve with ${EXT_CITATIONS.warzone} season updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
				],
				list: ['Player boxes & distance', 'Loot and gulag markers', 'Squad and threat filters'],
			},
			{
				h2: 'Aimbot & soft aim',
				paragraphs: [
					'Aim help you can tune to feel natural.',
					`Weapon balance shifts after ${EXT_CITATIONS.patchBlog} — retune FOV and smoothness after major combat patches.`,
				],
				list: ['Smooth aim strength', 'FOV and bone priority', 'Hotkeys mid-match'],
			},
			{
				h2: 'Radar',
				paragraphs: [
					'A simple 2D radar for threats outside your view.',
					'Spot flanks near gulags without filling the whole screen.',
				],
				list: ['Nearby enemy cues', 'Adjustable range', 'Works in BR & Resurgence'],
			},
			{
				h2: 'Updates & support',
				paragraphs: [
					`We rebuild after big {game} or ${EXT_CITATIONS.ricochet} patches.`,
					`Check Status before you play after a patch day, and cross-check ${EXT_CITATIONS.status} if Activision services look unstable.`,
				],
				list: ['Status on the Status page', 'Setup guide included', 'Email support with your order ID'],
			},
		],
	}),
	pricing: page({
		title: brandSeo.storeTitle,
		description: brandSeo.storeDescription,
		h1: 'Store',
		intro: brandCopy.storeIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Official patch notes',
		ctaSecondaryHref: EXT_URLS.patchBlog,
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'Full package access for Windows 10 / 11.',
					'Same ESP, soft aim, and radar on monthly and lifetime plans.',
				],
				list: ['ESP, aimbot, and radar', 'Patch rebuilds while active', 'Digital delivery after checkout'],
			},
			{
				h2: 'Plans',
				paragraphs: [
					'Pick monthly to try first, or lifetime for one payment.',
					`Season calendars and client updates come from ${EXT_CITATIONS.warzone}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				],
				list: ['Monthly — 30 days', 'Lifetime — one-time', 'Instant license by email'],
			},
			{
				h2: 'Before you buy',
				paragraphs: [
					`Read the refund policy if you need it. Cross-check ${EXT_CITATIONS.status} on patch mornings before you assume a download failure.`,
				],
				list: [
					'<a href="/refund-policy/">Refund policy</a>',
					'<a href="/faq/">FAQ</a>',
					'<a href="/support/">Support</a>',
				],
			},
		],
	}),
	updates: page({
		title: brandSeo.statusTitle,
		description: brandSeo.statusDescription,
		h1: 'Status',
		intro: brandCopy.statusIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Official Warzone support',
		ctaSecondaryHref: EXT_URLS.status,
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Current status',
				paragraphs: [
					'As of 13 Aug 2026 the package is online for Call of Duty: Warzone on Windows PC. We post a new note here when a game or Ricochet patch needs a rebuild.',
					`Use ${EXT_CITATIONS.status} for Activision platform health and this page for Warzone Cheats build status — both matter on big update days.`,
				],
				list: [
					'Check this page before every match after a patch',
					'Monthly and lifetime licenses get rebuilds while active',
					'No cheat stays undetected forever — status first, then play',
				],
			},
			{
				h2: 'After a patch',
				paragraphs: [
					`Follow season notes from ${EXT_CITATIONS.warzone}, then confirm our rebuild is live before you queue.`,
					'Do not run yesterday’s build into today’s anti-cheat and call it bad luck.',
				],
				list: ['Read the latest status note', 'Follow setup if something fails', 'Email support with your order ID'],
			},
			{
				h2: 'Important',
				paragraphs: [
					`Anti-cheat background: ${EXT_CITATIONS.ricochet}. No cheat is 100% safe forever — stay updated and use safe settings.`,
				],
				list: ['Status first, then play', '<a href="/support/">Support</a> for license help'],
			},
		],
	}),
	hacks: page({
		title: brandSeo.previewTitle,
		description: brandSeo.previewDescription,
		h1: 'Warzone Cheats',
		intro: brandCopy.previewIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Official patch notes',
		ctaSecondaryHref: EXT_URLS.patchBlog,
		galleryTitle: 'In-match look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					`One license for ${EXT_CITATIONS.warzone} on Windows PC — built for BR and Resurgence-style modes.`,
				],
				list: [
					'ESP / wallhack with distance',
					'Soft aim & aimbot profiles',
					'2D radar for flanks',
					'Ricochet rebuilds after patches',
				],
			},
			{
				h2: 'Built for Warzone matches',
				paragraphs: [
					'Read enemy operators and squads before you push, mark loot worth the risk, and stay aware near gulags. Tune soft aim per weapon class for loadout, Rebirth Island, and long-range maps.',
					`Official game updates come from Activision; cross-check ${EXT_CITATIONS.status} before patch-day queues.`,
				],
				list: [
					'<a href="/warzone-esp/">ESP guide</a>',
					'<a href="/warzone-aimbot/">Aimbot controls</a>',
					'<a href="/warzone-radar-hack/">Radar overlay</a>',
					'<a href="/updates/">Live status</a>',
				],
			},
			{
				h2: 'How to start',
				paragraphs: [
					`See ${EXT_CITATIONS.ricochet} for anti-cheat background, then buy a plan, get your license by email, and follow setup.`,
				],
				list: [
					'<a href="/pricing/">Open store</a>',
					'<a href="/setup/">Setup guide</a>',
					'<a href="/updates/">Check status</a>',
				],
			},
		],
	}),
	'warzone-esp': page({
		title: 'Warzone ESP | {brand}',
		description:
			'Warzone ESP and wallhack for Call of Duty: Warzone on Windows PC — player boxes, distance, loot filters, and clear overlays in matches.',
		h1: 'ESP',
		intro: 'See players and loot through walls during Warzone matches. Part of the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Official Warzone site',
		ctaSecondaryHref: EXT_URLS.warzone,
		galleryTitle: 'ESP in match',
		sections: [
			{
				h2: 'What ESP shows',
				paragraphs: [
					'Boxes, distance, and filters for enemy operators, squads, and UAV pings, and loot.',
					`Warzone’s live seasons and map updates are published by Activision (${EXT_CITATIONS.warzone}). When POIs or loot rules shift, ESP categories stay useful because they track players and contracts — not a single static landmark.`,
				],
				list: ['Player ESP', 'Loot markers', 'Squad and threat filters'],
			},
			{
				h2: 'When to use it',
				paragraphs: [
					'Clear loadout, Rebirth Island, and resurgences without flooding the screen.',
					`Read ${EXT_CITATIONS.ricochet} for how anti-cheat updates ship, then cross-check our <a href="/updates/">maintenance guide</a> after major patches.`,
				],
				list: ['Tune opacity', 'Filter noise', 'Pair with radar'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['ESP is included with aimbot and radar in one plan.'],
				list: [
					'<a href="/warzone-cheats/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	'warzone-aimbot': page({
		title: 'Warzone Aimbot | {brand}',
		description:
			'Warzone aimbot and soft aim for Call of Duty: Warzone on Windows PC — FOV, smoothness, and bone priority you can tune per weapon.',
		h1: 'Aimbot',
		intro: 'Soft aim and aim assist you can tune for Warzone. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Official patch notes',
		ctaSecondaryHref: EXT_URLS.patchBlog,
		galleryTitle: 'Aimbot view',
		sections: [
			{
				h2: 'Controls',
				paragraphs: [
					'Set FOV, smoothness, and bone priority before you match.',
					`Weapon balance and season rules change via ${EXT_CITATIONS.warzone}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
				],
				list: ['Soft aim strength', 'Bone priority', 'Hotkeys mid-match'],
			},
			{
				h2: 'Play styles',
				paragraphs: [
					'Keep settings subtle for longer sessions. Raise strength only when you accept more risk.',
					`Balance patches from ${EXT_CITATIONS.patchBlog} can change ideal FOV — retune after major weapon updates.`,
				],
				list: ['Legit soft aim', 'Per-weapon profiles', 'Works with ESP'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['Aimbot ships with ESP and radar in one license.'],
				list: [
					'<a href="/warzone-cheats/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	radar: page({
		title: 'Warzone Radar | {brand}',
		description:
			'Warzone 2D radar for Call of Duty: Warzone on Windows PC — flank cues near gulags without filling the whole screen.',
		h1: 'Radar',
		intro: 'A simple 2D radar for threats outside your view. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Official Warzone site',
		ctaSecondaryHref: EXT_URLS.warzone,
		galleryTitle: 'Radar overlay',
		sections: [
			{
				h2: 'What it shows',
				paragraphs: [
					'Nearby enemy cues with adjustable range for BR and Resurgence.',
					`Mode rules and seasonal changes come from ${EXT_CITATIONS.warzone}. Radar range remains configurable when map scale or mobility meta shifts.`,
				],
				list: ['Flank awareness', 'Gulag awareness', 'Adjustable range'],
			},
			{
				h2: 'With ESP',
				paragraphs: ['Use radar for threats you cannot see yet. Use ESP when you push.'],
				list: [
					'<a href="/warzone-esp/">ESP guide</a>',
					'<a href="/warzone-cheats/">Full product</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	setup: page({
		title: brandSeo.setupTitle,
		description: brandSeo.setupDescription,
		h1: 'Setup',
		intro: brandCopy.setupIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Official Warzone site',
		ctaSecondaryHref: EXT_URLS.warzone,
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Before you install',
				paragraphs: [
					'Buy a plan first. You get a license by email.',
					`Also glance at ${EXT_CITATIONS.status} if Activision services look unstable on patch day — a platform outage is not a license fault.`,
				],
				list: ['Windows 10 / 11 PC', 'Disable conflicting overlays', 'Have your order email ready'],
			},
			{
				h2: 'Install steps',
				paragraphs: ['Run the loader as admin, paste your license, then launch {game}.'],
				list: ['Download the loader from your delivery email', 'Paste license key', 'Launch the game'],
			},
			{
				h2: 'If something fails',
				paragraphs: [
					`Check Status after a patch. Confirm ${EXT_CITATIONS.warzone} client health if matchmaking fails. Email {email} with your order ID.`,
				],
				list: ['<a href="/updates/">Status page</a>', '<a href="/support/">Support</a>', '<a href="/faq/">FAQ</a>'],
			},
		],
	}),
	support: page({
		title: brandSeo.supportTitle,
		description: brandSeo.supportDescription,
		h1: 'Support',
		intro: brandCopy.supportIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Official game support',
		ctaSecondaryHref: EXT_URLS.status,
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'How to contact us',
				paragraphs: ['Email {email}. Include your order ID and a short note about the issue.'],
				list: ['Order ID from your receipt', 'Windows version', 'What you already tried'],
			},
			{
				h2: 'Faster answers',
				paragraphs: [
					`Check FAQ and Status before you write. Many setup questions are already covered. For Activision account or launcher issues, use ${EXT_CITATIONS.status}.`,
				],
				list: ['<a href="/faq/">FAQ</a>', '<a href="/updates/">Status</a>', '<a href="/setup/">Setup</a>'],
			},
		],
	}),
	faq: page({
		title: brandSeo.faqTitle,
		description: brandSeo.faqDescription,
		h1: 'FAQ',
		intro: brandCopy.faqIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Official game support',
		ctaSecondaryHref: EXT_URLS.status,
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Buying & delivery',
				paragraphs: ['You get a digital license by email after payment.'],
				list: ['Instant delivery after checkout', 'Keep your order email', 'One license per purchase'],
			},
			{
				h2: 'Setup & updates',
				paragraphs: [
					`Follow Setup after you buy. Check Status after big {game} or ${EXT_CITATIONS.ricochet} patches.`,
					`Warzone itself is published by Activision (${EXT_CITATIONS.warzone}). Cheats are third-party tools and may violate Activision rules — use is at your own risk.`,
				],
				list: ['<a href="/setup/">Setup guide</a>', '<a href="/updates/">Status</a>'],
			},
			{
				h2: 'Refunds',
				paragraphs: ['Read the refund policy before you buy if you need details.'],
				list: ['<a href="/refund-policy/">Refund policy</a>', '<a href="/support/">Support</a>'],
			},
		],
	}),
};
