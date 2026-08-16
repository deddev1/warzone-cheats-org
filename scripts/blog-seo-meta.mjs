/** SEO overrides + extra sections for blog posts — applied at generation time. */

/** @typedef {{ title: string, h1: string, keywords: string[], introAppend?: string, extraSection?: { h2: string, paragraphs: string[] } }} BlogSeoPatch */

/** @type {Record<string, BlogSeoPatch>} */
export const BLOG_SEO = {
	'patch-notes-breakdown': {
		title: 'Warzone Patch Notes Guide 2026',
		h1: 'How to Read Warzone Patch Notes',
		keywords: ['warzone patch notes', 'warzone meta', 'ricochet update'],
		introAppend:
			'This guide focuses on Call of Duty: Warzone balance changes, loot economy shifts, and what to verify after Ricochet or client updates — so your loadout matches the live game.',
		extraSection: {
			h2: 'Patch-day checklist for Warzone players',
			paragraphs: [
				'Before you queue after a major update, skim the official notes, list every removed item, and note which weapons moved tier. Run three offline or low-stakes Resurgence matches to feel recoil and TTK changes before you risk a full loadout.',
				'If Ricochet or the client also updated, treat anti-cheat maintenance separately from balance — platform outages on patch mornings are common. Cross-check service health, then read our <a href="/updates/">Warzone Cheats status log</a> if you use overlays.',
				'Bookmark our <a href="/blog/warzone-weapon-tier-list/">weapon tier list</a> and <a href="/blog/warzone-resurgence-aggressive-strategies/">Resurgence guide</a> so patch reading turns into a repeatable habit instead of a one-time panic.',
				'If a change looks minor on paper but shifts TTK in your main lobby playlist, give it two evenings before you revert — some nerfs only show up once everyone swaps attachments.',
			],
		},
	},
	'warzone-skin-leaks': {
		title: 'Warzone Skins Guide 2026',
		h1: 'Warzone Skins: What Is Worth Buying',
		keywords: ['warzone skins', 'warzone cosmetics', 'cod warzone'],
		introAppend:
			'Whether you follow leak accounts or only the official store, the goal is the same: spend on skins that stay readable in BR and Resurgence — not on bundles you unequip after one clip.',
		extraSection: {
			h2: 'Season budget rules for Warzone cosmetics',
			paragraphs: [
				'Set a CP or real-money cap before each season launch. If a bundle exceeds that cap, wait one week — most FOMO drops feel less urgent after the first streamer cycle.',
				'Readable silhouettes beat flashy patterns in night lobbies and Rebirth Island hallways. If you cannot spot enemy outlines during a quick review clip, skip the skin.',
				'For competitive readability, pair this with our <a href="/blog/warzone-pro-settings-guide/">settings guide</a> and <a href="/warzone-esp/">ESP overview</a> so looks never fight information.',
			],
		},
	},
	'warzone-weapon-tier-list': {
		title: 'Warzone Weapon Tier List 2026',
		h1: 'Best Warzone Guns Tier List',
		keywords: ['warzone tier list', 'warzone meta', 'best warzone guns'],
		extraSection: {
			h2: 'How to rebuild your loadout after a tier shift',
			paragraphs: [
				'When your main AR drops a tier, test one backup gun for ten matches before buying attachments or overhauling perks. Meta lists describe averages — your recoil control still decides fights.',
				'Pair mid-range and close-range options so Verdansk rotations and Rebirth Island gulags both have an answer. Keep one sniper or long-range alternative only if you actually win those lobbies.',
				'After patches, re-read our <a href="/blog/warzone-patch-notes-guide/">patch notes guide</a> and check <a href="/warzone-aimbot/">aimbot profiles</a> if you tune soft aim per weapon.',
			],
		},
	},
	'warzone-resurgence-meta': {
		title: 'Warzone Resurgence Guide 2026',
		h1: 'Warzone Resurgence Strategies',
		keywords: ['warzone resurgence', 'warzone gulag', 'warzone pushes'],
		extraSection: {
			h2: 'Resurgence mistakes that cost free lives',
			paragraphs: [
				'Dying on spawn because you chased a grey fight is the fastest way to bleed lives. Play for information first — UAV timing, buy station control, and gulag positioning beat ego pushes.',
				'Third-parties win Resurgence more than raw aim. Hold angles that let you disengage when another squad enters audio range.',
				'Combine these habits with <a href="/blog/warzone-loot-routes-guide/">loot routes</a> and <a href="/warzone-radar-hack/">radar awareness</a> so every life starts with an advantage.',
			],
		},
	},
	'warzone-tournament-meta': {
		title: 'Warzone Competitive Guide 2026',
		h1: 'Competitive Warzone Meta Tips',
		keywords: ['warzone competitive', 'warzone tournament', 'warzone meta'],
		extraSection: {
			h2: 'Weekly habits strong Warzone players repeat',
			paragraphs: [
				'Review one VOD segment per week — not full streams — and note where information beat mechanics. Pros lose fights to bad rotates more often than bad aim.',
				'Keep a short patch note when weapons or gulag rules change. Tournament players write three bullets, not essays.',
				'For tool-assisted clarity in scrims, see <a href="/warzone-esp/">ESP controls</a> and <a href="/blog/warzone-pro-settings-guide/">pro settings</a> without copying entire configs.',
			],
		},
	},
	'warzone-loot-routes': {
		title: 'Warzone Loot Routes Guide 2026',
		h1: 'Best Warzone Loot Routes',
		keywords: ['warzone loot routes', 'warzone spawn', 'verdansk loot'],
		extraSection: {
			h2: 'Spawn planning for BR and Resurgence',
			paragraphs: [
				'Pick one primary route per map and one backup when the plane path shifts. Consistency beats a perfect line you can only hit once per night.',
				'Mark where you expect third-parties — hot POIs, contract starts, and gulag exits — and decide early whether to fight or reroute.',
				'Loot ESP filters help during learning weeks; long term, read <a href="/blog/warzone-esp-wallhack-explained/">ESP explained</a> and <a href="/warzone-esp/">wallhack categories</a> so routes stay sharp without clutter.',
			],
		},
	},
	'warzone-pro-settings': {
		title: 'Warzone Settings Guide 2026',
		h1: 'Best Warzone Settings for Visibility',
		keywords: ['warzone settings', 'warzone sensitivity', 'warzone fps'],
		extraSection: {
			h2: 'Settings to change first on a new PC',
			paragraphs: [
				'Cap FPS only after you find a stable target — stutter hurts tracking more than a few extra frames. Lower shadow and clutter settings before touching sensitivity.',
				'Use the same field of view for at least a week. FOV swaps hide recoil problems and reset muscle memory.',
				'If you add overlays later, match in-game sens first, then read <a href="/blog/warzone-aimbot-settings-guide/">aimbot settings</a> and <a href="/setup/">setup</a> before tuning assist.',
			],
		},
	},
	'warzone-warmup-maps': {
		title: 'Warzone Warmup Guide 2026',
		h1: 'Warzone Warmup Before BR Matches',
		keywords: ['warzone warmup', 'warzone aim practice', 'warzone routine'],
		extraSection: {
			h2: 'Warmup mistakes that waste time',
			paragraphs: [
				'Do not use ranked or high-stakes lobbies as your only practice — ego queueing while cold burns kits and hides bad habits.',
				'Track one skill per session: peeks, tracking, or audio. Switching goals every five minutes trains nothing.',
				'Before serious queues, skim <a href="/updates/">status</a> after patches and review <a href="/blog/warzone-pro-settings-guide/">settings</a> so hardware and software match.',
			],
		},
	},
	'warzone-cheats-complete-guide': {
		title: 'Warzone Cheats Guide 2026',
		h1: 'Warzone Cheats Complete Guide',
		keywords: ['warzone cheats', 'undetected cheats', 'warzone esp'],
		introAppend:
			'This warzone cheats guide covers ESP, soft aim, radar, Ricochet maintenance, and how to buy safely for Call of Duty: Warzone on Windows PC — without hype or empty undetected promises.',
		extraSection: {
			h2: 'Common warzone cheats questions answered',
			paragraphs: [
				'Most buyers want three things: readable ESP, tunable soft aim, and honest status after Ricochet patches. A single license should cover that loop — not three separate downloads.',
				'Undetected does not mean immortal. It means maintained against current detections with public rebuild notes. Read <a href="/undetected-warzone-cheats/">undetected warzone cheats</a> before you assume otherwise.',
				'Compare <a href="/pricing/">pricing</a>, follow <a href="/setup/">setup</a>, and bookmark <a href="/blog/call-of-duty-warzone-cheats-buyers-guide/">buyers guide</a> if this is your first purchase.',
				'Warzone Cheats targets BR and Resurgence on Windows 10 and 11. Treat overlays as amplifiers for map knowledge and audio — not replacements for them.',
			],
		},
	},
	'call-of-duty-warzone-cheats-buyers-guide': {
		title: 'Warzone Cheats Buyers Guide 2026',
		h1: 'Buy Warzone Cheats Safely',
		keywords: ['warzone cheats', 'buy warzone cheats', 'undetected cheats'],
		introAppend:
			'Use this warzone cheats buyers guide before you pay — status pages, feature lists, refund terms, and Ricochet maintenance habits matter more than banner art.',
		extraSection: {
			h2: 'Red flags when shopping for warzone cheats',
			paragraphs: [
				'No dated status page after Ricochet updates, unlock-all marketing copied from other games, and Discord-only support with zero public notes are the usual warning signs.',
				'Compare feature lists side by side — player ESP, loot filters, radar, and soft aim profiles should be explicit, not buried in banners.',
				'When a shop passes the checklist, read <a href="/warzone-cheats/">warzone cheats pillar</a>, <a href="/features/">features</a>, and <a href="/refund-policy/">refund policy</a> before checkout.',
			],
		},
	},
	'warzone-cheats-2026-whats-new': {
		title: 'Warzone Cheats 2026 Updates',
		h1: 'Warzone Cheats: What Changed in 2026',
		keywords: ['warzone cheats 2026', 'ricochet 2026', 'warzone updates'],
		extraSection: {
			h2: 'What to expect from warzone cheats in 2026',
			paragraphs: [
				'Season cadence and Ricochet pushes will keep forcing rebuilds. The vendors that survive publish clear maintenance windows instead of silent downtime.',
				'Feature focus stays on information — ESP, radar, and conservative soft aim — because Warzone fights are won on reads and first peeks.',
				'Start with <a href="/blog/warzone-cheats-complete-guide-2026/">complete guide</a>, track <a href="/updates/">updates</a>, and compare <a href="/pricing/">plans</a> when you are ready.',
			],
		},
	},
	'warzone-aimbot-settings-guide': {
		title: 'Warzone Aimbot Settings Guide',
		h1: 'Warzone Aimbot Settings Guide',
		keywords: ['warzone aimbot', 'soft aim', 'aimbot fov'],
		introAppend:
			'These warzone aimbot settings focus on soft aim and FOV tuning that still looks human in Call of Duty: Warzone firefights — not rage snaps that get reports.',
		extraSection: {
			h2: 'Aim settings checklist before ranked play',
			paragraphs: [
				'Set FOV smaller than you think, raise smoothness, and play five matches before widening anything. Robotic corrections get reports even when binaries are clean.',
				'Use separate profiles for AR, SMG, and sniper lines — one global slider rarely fits Verdansk and Rebirth Island fights.',
				'Pair aim tuning with <a href="/warzone-esp/">ESP categories</a> and <a href="/updates/">patch status</a> so you are not adjusting assist on an outdated build.',
			],
		},
	},
	'warzone-esp-wallhack-explained': {
		title: 'Warzone ESP Guide 2026',
		h1: 'Warzone ESP & Wallhack Explained',
		keywords: ['warzone esp', 'warzone wallhack', 'loot esp'],
		introAppend:
			'This warzone ESP guide explains player boxes, loot markers, distance readouts, and how to keep wallhack overlays readable in busy BR and Resurgence lobbies.',
		extraSection: {
			h2: 'ESP categories worth toggling mid-match',
			paragraphs: [
				'During pushes, show players and threats only. During loot routes, enable loadout and high-value markers. Near gulags, trim noise so decisions stay fast.',
				'Distance readouts matter more than rainbow boxes — know when a squad is one wall away versus across the map.',
				'See <a href="/warzone-wallhack/">wallhack</a>, <a href="/warzone-radar-hack/">radar</a>, and <a href="/blog/warzone-cheats-complete-guide-2026/">cheats guide</a> for the full stack.',
			],
		},
	},
	'undetected-warzone-cheats-ricochet': {
		title: 'Undetected Warzone Cheats Guide',
		h1: 'Undetected Warzone Cheats & Ricochet',
		keywords: ['undetected cheats', 'ricochet warzone', 'warzone status'],
		introAppend:
			'Undetected warzone cheats under Ricochet mean active maintenance and honest status — not a permanent ban shield. Here is the realistic workflow for Call of Duty: Warzone on PC.',
		extraSection: {
			h2: 'Patch-day workflow for undetected play',
			paragraphs: [
				'Wait for a dated status note after Warzone or Ricochet updates. Do not queue on yesterday’s build because friends are already in-game.',
				'Keep soft aim conservative and avoid highlight-reel settings that attract player reports.',
				'Read <a href="/ricochet-bypass/">Ricochet maintenance</a>, <a href="/updates/">live status</a>, and <a href="/blog/warzone-cheats-complete-guide-2026/">complete guide</a> before your next session.',
			],
		},
	},
	'warzone-cheats-vs-cheatvault': {
		title: 'Warzone Cheats vs Budget Shops',
		h1: 'Warzone Cheats vs Budget Shops',
		keywords: ['warzone cheats', 'cheat comparison', 'warzone esp'],
		extraSection: {
			h2: 'Side-by-side checklist before you pay',
			paragraphs: [
				'Open each shop’s status channel, feature list, and refund terms in separate tabs. If any column is blank, treat price as irrelevant.',
				'Budget tiers often skip radar, loot filters, or public rebuild notes — the features you touch every match.',
				'When the checklist favors a full stack, compare <a href="/features/">features</a> and <a href="/pricing/">pricing</a> on Warzone Cheats.',
			],
		},
	},
	'elitefn-two-week-test': {
		title: 'Warzone Cheat Comparison Review',
		h1: 'Two-Week Warzone Cheat Test',
		keywords: ['warzone cheats review', 'cheat comparison', 'soft aim'],
		extraSection: {
			h2: 'What to measure in your own two-week test',
			paragraphs: [
				'Track patch downtime hours, support reply time with order ID, and how often overlays clutter late-game screens — not just day-one screenshots.',
				'Run the same playlists and sens both weeks so comparisons stay fair.',
				'If downtime pushes you to switch, start at <a href="/setup/">setup</a> and <a href="/blog/call-of-duty-warzone-cheats-buyers-guide/">buyers guide</a> before rebuying anywhere.',
			],
		},
	},
	'warzone-cheats-vs-ghostware': {
		title: 'Warzone Cheats vs ESP-Only Tools',
		h1: 'Warzone Cheats vs ESP-Only Tools',
		keywords: ['warzone cheats', 'warzone esp', 'warzone radar'],
		extraSection: {
			h2: 'Who should buy full-stack vs ESP-only',
			paragraphs: [
				'Casual players who only need player boxes in low-pressure lobbies may tolerate ESP-only tools. Players who rotate, loot, and hold gulags usually need radar and tunable soft aim in one menu.',
				'Compare total cost when modules are sold separately — cheap entry prices hide add-ons.',
				'Review <a href="/warzone-cheats/">warzone cheats</a>, <a href="/warzone-radar-hack/">radar</a>, and <a href="/blog/warzone-aimbot-settings-guide/">aimbot settings</a> before choosing.',
			],
		},
	},
};

/** Apply SEO patches and append extra sections. */
export function applyBlogSeo(source) {
	const patch = BLOG_SEO[source.id];
	if (!patch) return source;

	const next = {
		...source,
		title: patch.title,
		h1: patch.h1,
		keywords: patch.keywords,
		intro: patch.introAppend ? `${source.intro} ${patch.introAppend}` : source.intro,
		sections: [...source.sections],
	};

	if (patch.extraSection) {
		next.sections.push(patch.extraSection);
	}

	return next;
}
