import { siteConfig } from './site';

/** Screenshots used across product pages — simple warzone cheats keyword alts. */
export const warzoneImages = {
	hero: '/images/warzone-cheats-hero-full.png',
	espWallhack: '/images/warzone-cheats-wallhack.webp',
	aimbotCombat: '/images/warzone-cheats-aimbot.webp',
	aimbotSkeleton: '/images/warzone-cheats-aimbot-view.webp',
	playerEsp: '/images/warzone-cheats-radar.webp',
	cheatsCombat: '/images/warzone-cheats-raid.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/warzone-cheats-raid.webp',
	loadoutBuilder: '/images/warzone-cheats-radar.webp',
	squadFight: '/images/warzone-cheats-aimbot-view.webp',
	cheatsPackage: '/images/warzone-cheats-radar.webp',
	headerArt: '/images/warzone-cheats-aimbot-view.webp',
	battleRoyaleCombat: '/images/warzone-cheats-raid.webp',
	gulagFight: '/images/warzone-cheats-aimbot.webp',
	rebootFight: '/images/warzone-cheats-aimbot.webp',
	resurgenceCombat: '/images/warzone-cheats-wallhack.webp',
	resurgenceMode: '/images/warzone-cheats-esp.webp',
	battleRoyaleIsland: '/images/warzone-cheats-esp.webp',
	matchMap: '/images/warzone-cheats-esp.webp',
	product: [
		{ src: '/images/warzone-cheats-esp.webp', alt: 'ESP player boxes in a Call of Duty: Warzone match' },
		{ src: '/images/warzone-cheats-wallhack.webp', alt: 'Wallhack outlines for enemy operators and squads' },
		{ src: '/images/warzone-cheats-aimbot.webp', alt: 'Soft aim assist overlay for Warzone' },
		{ src: '/images/warzone-cheats-esp.webp', alt: 'Loot and gulag ESP markers' },
		{ src: '/images/warzone-cheats-wallhack.webp', alt: 'Through-wall visibility during a match' },
		{ src: '/images/warzone-cheats-aimbot.webp', alt: 'Aimbot bone priority settings' },
	],
	gallery: [
		{ src: '/images/warzone-cheats-esp.webp', alt: 'ESP overlay showing enemy distance', featured: true },
		{ src: '/images/warzone-cheats-wallhack.webp', alt: 'Wallhack view through terrain' },
		{ src: '/images/warzone-cheats-aimbot.webp', alt: 'Soft aim FOV ring in combat' },
		{ src: '/images/warzone-cheats-esp.webp', alt: 'Container and loot ESP pins' },
		{ src: '/images/warzone-cheats-wallhack.webp', alt: 'Boss and player wallhack filters' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/warzone-cheats-esp.webp', title: '', caption: '' },
		{ src: '/images/warzone-cheats-wallhack.webp', title: '', caption: '' },
		{ src: '/images/warzone-cheats-aimbot.webp', title: '', caption: '' },
		{ src: '/images/warzone-cheats-aimbot-view.webp', title: '', caption: '' },
		{ src: '/images/warzone-cheats-radar.webp', title: '', caption: '' },
		{ src: '/images/warzone-cheats-raid.webp', title: '', caption: '' },
	],
} as const;
