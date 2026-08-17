import type { APIRoute } from 'astro';

import { buildLocaleSitemapEntries } from '../data/sitemap-locale';
import { indexedNonEnglishLocaleCodes } from '../data/seo-locale-index';
import { renderLocaleSitemapUrlBlock } from '../data/sitemap-locale';
import { renderUrlsetXml, sitemapResponseHeaders } from '../data/sitemap-xml';

export const prerender = true;

/**
 * Legacy combined localized sitemap — indexed non-English locales only.
 * Submit sitemap.xml in Search Console.
 */
export const GET: APIRoute = () => {
	const urls = indexedNonEnglishLocaleCodes.flatMap((locale) =>
		buildLocaleSitemapEntries(locale).map((entry) => renderLocaleSitemapUrlBlock(entry, locale)),
	);
	const xml = renderUrlsetXml(urls);

	return new Response(xml, { headers: sitemapResponseHeaders });
};
