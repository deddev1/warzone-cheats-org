import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
};

const featureKeys = [
	'home.aboutFeatEsp',
	'home.aboutFeatAim',
	'home.aboutFeatRadar',
	'home.aboutFeatUpdates',
] as const;

function HomeAboutInner() {
	const { t } = useTranslation();

	return (
		<section className="home-about shell" aria-labelledby="home-about-title">
			<div className="home-about__panel">
				<header className="home-about__head">
					<p className="home-about__eyebrow">{t('home.aboutEyebrow')}</p>
					<h2 id="home-about-title">{t('home.aboutTitle')}</h2>
					<p className="home-about__lede">{t('home.aboutP1')}</p>
				</header>

				<ul className="home-about__features" aria-label={t('home.aboutFeaturesAria')}>
					{featureKeys.map((key) => (
						<li key={key}>
							<span className="home-about__check" aria-hidden="true" />
							<span>{t(key)}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner />
		</I18nProvider>
	);
}
