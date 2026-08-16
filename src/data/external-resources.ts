/** Authoritative third-party sources — cited for E-E-A-T and helpful outbound context. */
export type ExternalResource = {
	href: string;
	title: string;
	description: string;
	source: string;
};

export const OFFICIAL_WARZONE_RESOURCES: ExternalResource[] = [
	{
		href: 'https://www.callofduty.com/warzone',
		title: 'Call of Duty: Warzone',
		description: 'Official game hub — seasons, modes, and patch announcements',
		source: 'Activision',
	},
	{
		href: 'https://support.activision.com/',
		title: 'Call of Duty Support',
		description: 'Service status, account help, and patch-day health checks',
		source: 'Activision',
	},
	{
		href: 'https://www.ricochet.com/',
		title: 'Ricochet Anti-Cheat',
		description: 'Official anti-cheat background for Call of Duty titles',
		source: 'Activision',
	},
	{
		href: 'https://www.callofduty.com/blog/tag/call-of-duty-warzone',
		title: 'Warzone patch notes & blog',
		description: 'Balance changes, season notes, and developer updates',
		source: 'Activision',
	},
];

/** Subset for compact footers and blog sidebars. */
export const CORE_OFFICIAL_RESOURCES = OFFICIAL_WARZONE_RESOURCES.slice(0, 3);
