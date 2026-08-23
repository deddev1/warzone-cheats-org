import { buildCatalog, catalogs } from './catalog';
import type { LocaleCode } from '../data/i18n/locales';
import { isLocaleCode } from '../data/i18n/locales';

function lookup(obj: unknown, path: string): string | undefined {
	const parts = path.split('.');
	let cur: unknown = obj;
	for (const part of parts) {
		if (!cur || typeof cur !== 'object') return undefined;
		cur = (cur as Record<string, unknown>)[part];
	}
	return typeof cur === 'string' ? cur : undefined;
}

/** Sync translator for Astro frontmatter (SSR). React islands use useTranslation(). */
export function getT(locale: string) {
	const code = isLocaleCode(locale) ? locale : 'en';
	const catalog = catalogs[code] ?? buildCatalog(code);
	return (key: string, vars?: Record<string, string | number>) => {
		let value = lookup(catalog, key) ?? lookup(catalogs.en, key) ?? key;
		if (vars) {
			for (const [k, v] of Object.entries(vars)) {
				value = value.replaceAll(`{{${k}}}`, String(v));
			}
		}
		return value;
	};
}
