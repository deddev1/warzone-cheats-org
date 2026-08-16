import type { PageId } from '../i18n/routing';
import { defaultLocale, type LocaleCode } from '../i18n/locales';
import { blogPosts, getBlogPostPath, type BlogPostDefinition } from './helpers';

/** Cheat/product blog posts — priority targets for internal links. */
export const CHEAT_BLOG_IDS = [
	'warzone-cheats-complete-guide',
	'call-of-duty-warzone-cheats-buyers-guide',
	'warzone-cheats-2026-whats-new',
	'undetected-warzone-cheats-ricochet',
	'warzone-aimbot-settings-guide',
	'warzone-esp-wallhack-explained',
	'warzone-cheats-vs-cheatvault',
	'warzone-cheats-vs-ghostware',
] as const;

const CHEAT_CATEGORIES = new Set([
	'Cheats Guide',
	'Buyers Guide',
	'Product Updates',
	'Aimbot',
	'ESP',
	'Undetected',
	'Comparisons',
]);

/** Page → blog post ids for contextual internal links (EN blog URLs). */
export const PAGE_BLOG_LINKS: Partial<Record<PageId, readonly string[]>> = {
	hacks: [
		'warzone-cheats-complete-guide',
		'call-of-duty-warzone-cheats-buyers-guide',
		'undetected-warzone-cheats-ricochet',
		'warzone-cheats-2026-whats-new',
	],
	undetected: [
		'undetected-warzone-cheats-ricochet',
		'warzone-cheats-complete-guide',
		'call-of-duty-warzone-cheats-buyers-guide',
	],
	ricochet: [
		'undetected-warzone-cheats-ricochet',
		'warzone-cheats-2026-whats-new',
		'warzone-cheats-complete-guide',
	],
	'warzone-esp': [
		'warzone-esp-wallhack-explained',
		'warzone-cheats-complete-guide',
		'warzone-loot-routes',
	],
	'warzone-aimbot': [
		'warzone-aimbot-settings-guide',
		'warzone-cheats-complete-guide',
		'call-of-duty-warzone-cheats-buyers-guide',
	],
	wallhack: ['warzone-esp-wallhack-explained', 'warzone-cheats-complete-guide'],
	radar: ['warzone-cheats-complete-guide', 'warzone-esp-wallhack-explained'],
	features: [
		'warzone-cheats-complete-guide',
		'call-of-duty-warzone-cheats-buyers-guide',
		'warzone-aimbot-settings-guide',
		'warzone-esp-wallhack-explained',
	],
	pricing: [
		'call-of-duty-warzone-cheats-buyers-guide',
		'warzone-cheats-complete-guide',
		'warzone-cheats-2026-whats-new',
	],
	setup: [
		'warzone-cheats-complete-guide',
		'call-of-duty-warzone-cheats-buyers-guide',
		'undetected-warzone-cheats-ricochet',
	],
	updates: [
		'undetected-warzone-cheats-ricochet',
		'warzone-cheats-2026-whats-new',
		'warzone-cheats-complete-guide',
	],
	faq: [
		'call-of-duty-warzone-cheats-buyers-guide',
		'warzone-cheats-complete-guide',
		'undetected-warzone-cheats-ricochet',
	],
	'cheats-2026': [
		'warzone-cheats-2026-whats-new',
		'warzone-cheats-complete-guide',
		'call-of-duty-warzone-cheats-buyers-guide',
	],
	'soft-aim': ['warzone-aimbot-settings-guide', 'warzone-cheats-complete-guide'],
	'aimbot-hack': ['warzone-aimbot-settings-guide', 'warzone-cheats-complete-guide'],
	'esp-hack': ['warzone-esp-wallhack-explained', 'warzone-cheats-complete-guide'],
	'best-cheats': [
		'call-of-duty-warzone-cheats-buyers-guide',
		'warzone-cheats-complete-guide',
		'warzone-cheats-vs-cheatvault',
	],
	'mod-menu': ['warzone-cheats-complete-guide', 'warzone-aimbot-settings-guide'],
	'cheat-download': [
		'warzone-cheats-complete-guide',
		'call-of-duty-warzone-cheats-buyers-guide',
	],
	home: [
		'warzone-cheats-complete-guide',
		'call-of-duty-warzone-cheats-buyers-guide',
		'undetected-warzone-cheats-ricochet',
	],
	'unlock-all': [
		'warzone-cheats-complete-guide',
		'call-of-duty-warzone-cheats-buyers-guide',
		'warzone-cheats-2026-whats-new',
	],
	support: [
		'call-of-duty-warzone-cheats-buyers-guide',
		'warzone-cheats-complete-guide',
		'undetected-warzone-cheats-ricochet',
	],
};

export type BlogLinkItem = {
	id: string;
	href: string;
	title: string;
	category: string;
};

function resolvePost(id: string): BlogPostDefinition | undefined {
	return blogPosts.find((p) => p.id === id);
}

export function getBlogLink(id: string, locale: LocaleCode = defaultLocale): BlogLinkItem | undefined {
	const post = resolvePost(id);
	if (!post) return undefined;
	const t = post.translations[defaultLocale];
	return {
		id: post.id,
		href: getBlogPostPath(locale, t.slug),
		title: t.title,
		category: post.category,
	};
}

export function getBlogLinksForPage(
	pageId: PageId,
	locale: LocaleCode = defaultLocale,
): BlogLinkItem[] {
	const ids = PAGE_BLOG_LINKS[pageId];
	if (!ids?.length) return [];
	return ids.map((id) => getBlogLink(id, locale)).filter((x): x is BlogLinkItem => Boolean(x));
}

export function getCheatBlogLinks(locale: LocaleCode = defaultLocale): BlogLinkItem[] {
	return CHEAT_BLOG_IDS.map((id) => getBlogLink(id, locale)).filter((x): x is BlogLinkItem =>
		Boolean(x),
	);
}

/** Smart related posts: same category → cheat cluster → recent featured. */
export function getRelatedBlogPosts(
	currentId: string,
	limit = 4,
	locale: LocaleCode = defaultLocale,
): BlogLinkItem[] {
	const current = resolvePost(currentId);
	if (!current) return [];

	const scored = blogPosts
		.filter((p) => p.id !== currentId)
		.map((post) => {
			let score = 0;
			if (post.category === current.category) score += 10;
			if (CHEAT_CATEGORIES.has(post.category) && CHEAT_CATEGORIES.has(current.category)) {
				score += 6;
			}
			if (post.featured) score += 2;
			if (CHEAT_BLOG_IDS.includes(post.id as (typeof CHEAT_BLOG_IDS)[number])) score += 3;
			return { post, score };
		})
		.sort((a, b) => b.score - a.score || (a.post.updated < b.post.updated ? 1 : -1));

	const picked: BlogLinkItem[] = [];
	for (const { post } of scored) {
		const link = getBlogLink(post.id, locale);
		if (link) picked.push(link);
		if (picked.length >= limit) break;
	}
	return picked;
}
