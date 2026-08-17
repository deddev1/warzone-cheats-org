import type { APIRoute } from 'astro';
import { getBlogSitemapEntries } from '../data/blog/helpers';
import { siteConfig } from '../data/site';
import { latestPageLastmod } from '../data/sitemap-meta';
import { renderSitemapIndexXml, sitemapResponseHeaders } from '../data/sitemap-xml';

export const prerender = true;

/**
 * Primary sitemap index for Google Search Console — English + image sitemaps only.
 * Locale UI pages (/es/, /fr/, …) are noindex with EN canonical until human translations ship.
 */
export const GET: APIRoute = () => {
	const pageLastmod = latestPageLastmod();
	const englishLastmod = getBlogSitemapEntries().reduce(
		(max, entry) => (entry.lastmod > max ? entry.lastmod : max),
		pageLastmod,
	);

	const subSitemaps: { loc: string; lastmod: string }[] = [
		{ loc: new URL('/sitemap-en.xml', siteConfig.url).href, lastmod: englishLastmod },
		{ loc: new URL('/sitemap-images.xml', siteConfig.url).href, lastmod: pageLastmod },
	];

	const xml = renderSitemapIndexXml(subSitemaps);

	return new Response(xml, { headers: sitemapResponseHeaders });
};
