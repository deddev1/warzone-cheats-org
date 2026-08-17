import { defaultLocale, type LocaleCode } from './i18n/locales';

/**
 * Locales submitted to Google Search Console.
 * Non-indexed locales stay live for the language switcher but use noindex + EN canonical.
 */
export const indexedLocaleCodes = [defaultLocale, 'uk'] as const satisfies readonly LocaleCode[];

/** Non-English locales with populated sitemaps (indexedLocaleCodes minus en). */
export const indexedNonEnglishLocaleCodes = indexedLocaleCodes.filter(
	(code) => code !== defaultLocale,
);

export type IndexedLocaleCode = (typeof indexedLocaleCodes)[number];

export function isIndexedLocale(locale: LocaleCode): locale is IndexedLocaleCode {
	return (indexedLocaleCodes as readonly LocaleCode[]).includes(locale);
}

/** SEO flags for a rendered locale page. */
export function localeIndexFlags(locale: LocaleCode) {
	return {
		indexed: isIndexedLocale(locale),
		noindex: !isIndexedLocale(locale),
		canonicalLocale: defaultLocale,
	};
}
