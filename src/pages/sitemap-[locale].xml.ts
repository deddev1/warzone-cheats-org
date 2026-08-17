import type { APIRoute, GetStaticPaths } from 'astro';

import type { LocaleCode } from '../data/i18n/locales';
import {
	buildLocaleSitemapEntries,
	i18nLocaleCodes,
	renderLocaleSitemapUrlBlock,
} from '../data/sitemap-locale';
import { isIndexedLocale } from '../data/seo-locale-index';
import { renderUrlsetXml, sitemapResponseHeaders } from '../data/sitemap-xml';

export const prerender = true;

export const getStaticPaths = (() =>
	i18nLocaleCodes.map((locale) => ({ params: { locale } }))) satisfies GetStaticPaths;

/** Per-locale page sitemap — populated for indexed non-English locales only. */
export const GET: APIRoute = ({ params }) => {
	const locale = params.locale as LocaleCode;
	const entries =
		isIndexedLocale(locale) && locale !== 'en' ? buildLocaleSitemapEntries(locale) : [];
	const urls = entries.map((entry) => renderLocaleSitemapUrlBlock(entry, locale));
	const xml = renderUrlsetXml(urls);

	return new Response(xml, { headers: sitemapResponseHeaders });
};
