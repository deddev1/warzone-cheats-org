import { defaultLocale, type LocaleCode } from './i18n/locales';

/**
 * Locales submitted to Google Search Console.
 * Non-indexed locales stay live for the language switcher but use noindex + EN canonical.
 */
export const indexedLocaleCodes = [defaultLocale] as const satisfies readonly LocaleCode[];

export type IndexedLocaleCode = (typeof indexedLocaleCodes)[number];

export function isIndexedLocale(locale: LocaleCode): locale is IndexedLocaleCode {
	return locale === defaultLocale;
}

/** SEO flags for a rendered locale page. */
export function localeIndexFlags(locale: LocaleCode) {
	return {
		indexed: isIndexedLocale(locale),
		noindex: !isIndexedLocale(locale),
		canonicalLocale: defaultLocale,
	};
}
