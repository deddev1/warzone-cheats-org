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

/** External URLs for secondary CTAs and citations. */
export const EXT_URLS = {
	warzone: 'https://www.callofduty.com/warzone',
	status: 'https://support.activision.com/',
	ricochet: 'https://www.ricochet.com/',
	patchBlog: 'https://www.callofduty.com/blog/tag/call-of-duty-warzone',
} as const;

/** Inline HTML citations (open in new tab) for page copy. */
export const EXT_CITATIONS = {
	warzone: `<a href="${EXT_URLS.warzone}" target="_blank" rel="noopener noreferrer">Call of Duty: Warzone</a>`,
	status: `<a href="${EXT_URLS.status}" target="_blank" rel="noopener noreferrer">Call of Duty Support</a>`,
	ricochet: `<a href="${EXT_URLS.ricochet}" target="_blank" rel="noopener noreferrer">Ricochet Anti-Cheat</a>`,
	patchBlog: `<a href="${EXT_URLS.patchBlog}" target="_blank" rel="noopener noreferrer">official Warzone patch notes</a>`,
} as const;
