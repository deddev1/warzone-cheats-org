import type { APIRoute } from 'astro';

import { renderUrlsetXml, sitemapResponseHeaders } from '../data/sitemap-xml';

export const prerender = true;

/**
 * Legacy combined localized sitemap — empty while locales are noindex.
 * Submit sitemap.xml (EN + images) in Search Console.
 */
export const GET: APIRoute = () => {
	const xml = renderUrlsetXml([]);

	return new Response(xml, { headers: sitemapResponseHeaders });
};
