import type { APIRoute, GetStaticPaths } from 'astro';

import { i18nLocaleCodes } from '../data/sitemap-locale';
import { renderUrlsetXml, sitemapResponseHeaders } from '../data/sitemap-xml';

export const prerender = true;

export const getStaticPaths = (() =>
	i18nLocaleCodes.map((locale) => ({ params: { locale } }))) satisfies GetStaticPaths;

/** Per-locale page sitemap — empty while locales are noindex (UI-only). */
export const GET: APIRoute = () => {
	const xml = renderUrlsetXml([]);

	return new Response(xml, { headers: sitemapResponseHeaders });
};
