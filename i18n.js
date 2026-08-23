import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { localeCodes } from './src/data/i18n/locales.ts';
import { catalogs } from './src/i18n/catalog.ts';

export const supportedLngs = [...localeCodes];

const resources = Object.fromEntries(
	localeCodes.map((code) => [code, { translation: catalogs[code] }]),
);

if (!i18n.isInitialized) {
	i18n
		.use(LanguageDetector)
		.use(initReactI18next)
		.init({
			resources,
			fallbackLng: 'en',
			supportedLngs,
			nonExplicitSupportedLngs: true,
			load: 'languageOnly',
			interpolation: {
				escapeValue: false,
			},
			detection: {
				order: ['cookie', 'navigator', 'htmlTag'],
				lookupCookie: 'fc_locale',
				caches: ['cookie'],
				cookieMinutes: 525600,
				cookieOptions: { path: '/', sameSite: 'lax' },
			},
			react: {
				useSuspense: false,
			},
		});
}

export default i18n;
