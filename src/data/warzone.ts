import { siteConfig } from './site';

/** Screenshots used across product pages — simple /images/*.webp URLs. */
export const warzoneImages = {
	hero: '/images/warzone-ghost-hero-1024w.webp',
	espWallhack: '/images/wallhack.webp',
	aimbotCombat: '/images/aimbot.webp',
	aimbotSkeleton: '/images/sniper.webp',
	playerEsp: '/images/radar.webp',
	cheatsCombat: '/images/combat.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/combat.webp',
	loadoutBuilder: '/images/radar.webp',
	squadFight: '/images/sniper.webp',
	cheatsPackage: '/images/radar.webp',
	headerArt: '/images/sniper.webp',
	battleRoyaleCombat: '/images/combat.webp',
	gulagFight: '/images/aimbot.webp',
	rebootFight: '/images/aimbot.webp',
	resurgenceCombat: '/images/wallhack.webp',
	resurgenceMode: '/images/esp.webp',
	battleRoyaleIsland: '/images/esp.webp',
	matchMap: '/images/esp.webp',
	product: [
		{ src: '/images/esp.webp', alt: 'ESP player boxes in a Call of Duty: Warzone match' },
		{ src: '/images/wallhack.webp', alt: 'Wallhack outlines for enemy operators and squads' },
		{ src: '/images/aimbot.webp', alt: 'Soft aim assist overlay for Warzone' },
		{ src: '/images/esp.webp', alt: 'Loot and gulag ESP markers' },
		{ src: '/images/wallhack.webp', alt: 'Through-wall visibility during a match' },
		{ src: '/images/aimbot.webp', alt: 'Aimbot bone priority settings' },
	],
	gallery: [
		{ src: '/images/esp.webp', alt: 'ESP overlay showing enemy distance', featured: true },
		{ src: '/images/wallhack.webp', alt: 'Wallhack view through terrain' },
		{ src: '/images/aimbot.webp', alt: 'Soft aim FOV ring in combat' },
		{ src: '/images/radar.webp', alt: 'Radar overlay with player positions' },
		{ src: '/images/sniper.webp', alt: 'Sniper scope aimbot view in Warzone' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/esp.webp', title: '', caption: '' },
		{ src: '/images/wallhack.webp', title: '', caption: '' },
		{ src: '/images/aimbot.webp', title: '', caption: '' },
		{ src: '/images/sniper.webp', title: '', caption: '' },
		{ src: '/images/radar.webp', title: '', caption: '' },
		{ src: '/images/combat.webp', title: '', caption: '' },
	],
} as const;
