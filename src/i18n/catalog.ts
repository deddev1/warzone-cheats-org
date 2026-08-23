import en from '../../public/locales/en/translation.json';
import es from '../../public/locales/es/translation.json';
import { i18nContent, type LocaleUi } from '../data/i18n';
import { localeCodes, type LocaleCode } from '../data/i18n/locales';

export type TranslationCatalog = typeof en;

function isPlainObject(value: unknown): value is Record<string, unknown> {
	return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function deepMerge<T extends Record<string, unknown>>(base: T, patch: Record<string, unknown>): T {
	const result = { ...base } as Record<string, unknown>;

	for (const [key, value] of Object.entries(patch)) {
		const current = result[key];
		if (isPlainObject(value) && isPlainObject(current)) {
			result[key] = deepMerge(current, value);
		} else if (value !== undefined) {
			result[key] = value;
		}
	}

	return result as T;
}

/** Map generated locale UI into the react-i18next / getT() catalog shape. */
function uiToCatalogPatch(ui: LocaleUi): Record<string, unknown> {
	const footer = ui.footer as LocaleUi['footer'] & { guides?: string; official?: string };

	return {
		nav: {
			...ui.nav,
			preview: ui.nav.hacks,
			store: ui.nav.pricing,
			status: ui.nav.updates,
		},
		hero: {
			accent: ui.hero.accent,
			accentShort: ui.hero.accentShort,
			subtitle: ui.hero.subtitle,
			subtitleShort: ui.hero.subtitleShort,
			buyNow: ui.hero.buyNow,
			seeFeatures: ui.hero.seeFeatures,
		},
		cta: {
			buy: ui.hero.buyNow,
		},
		trust: ui.trust,
		product: {
			title: ui.product.title,
			addToCart: ui.product.addToCart,
			monthly: ui.product.monthly,
			lifetime: ui.product.lifetime,
			available: ui.product.available,
			gameBadge: ui.product.gameBadge,
			platformBadge: ui.product.platformBadge,
			statusBadge: ui.product.statusBadge,
		},
		reviews: {
			title: ui.reviews.title,
			subtitle: ui.reviews.subtitle,
			outOf: ui.reviews.outOf,
			countLabel: ui.reviews.countLabel,
		},
		common: {
			buyNow: ui.common.buyNow,
			readGuide: ui.common.readGuide,
			language: ui.common.language,
			officialLanguageNote: ui.common.officialLanguageNote,
			relatedPages: ui.common.relatedPages,
		},
		footer: {
			explore: footer.explore,
			help: footer.help,
			tagline: footer.tagline,
			...(footer.guides ? { guides: footer.guides } : {}),
			...(footer.official ? { official: footer.official } : {}),
		},
		images: ui.images,
	};
}

/** Full UI catalog for one locale — EN extras + generated UI strings for all 22 locales. */
export function buildCatalog(locale: LocaleCode): TranslationCatalog {
	const ui = i18nContent[locale]?.ui ?? i18nContent.en.ui;
	let catalog = deepMerge(structuredClone(en) as TranslationCatalog, uiToCatalogPatch(ui));

	if (locale === 'es') {
		catalog = deepMerge(catalog, es as TranslationCatalog);
	}

	return catalog;
}

export const catalogs = Object.fromEntries(
	localeCodes.map((code) => [code, buildCatalog(code)]),
) as Record<LocaleCode, TranslationCatalog>;
