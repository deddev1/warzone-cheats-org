import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
};

const exploreLinks = [
	{ href: '/warzone-cheats/', labelKey: 'home.aboutLinkOverview', hintKey: 'home.aboutLinkOverviewHint' },
	{ href: '/warzone-esp/', labelKey: 'home.aboutLinkEsp', hintKey: 'home.aboutLinkEspHint' },
	{ href: '/warzone-aimbot/', labelKey: 'home.aboutLinkAimbot', hintKey: 'home.aboutLinkAimbotHint' },
	{ href: '/updates/', labelKey: 'home.aboutLinkStatus', hintKey: 'home.aboutLinkStatusHint' },
	{ href: '/pricing/', labelKey: 'home.aboutLinkPricing', hintKey: 'home.aboutLinkPricingHint' },
] as const;

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

				<p className="home-about__req">{t('home.aboutRequirements')}</p>

				<nav className="home-about__explore" aria-label={t('home.aboutExploreTitle')}>
					<h3 className="home-about__explore-title">{t('home.aboutExploreTitle')}</h3>
					<ul className="home-about__links">
						{exploreLinks.map((link) => (
							<li key={link.href}>
								<a href={link.href}>
									<span className="home-about__link-label">{t(link.labelKey)}</span>
									<span className="home-about__link-hint">{t(link.hintKey)}</span>
									<span className="home-about__link-arrow" aria-hidden="true" />
								</a>
							</li>
						))}
					</ul>
				</nav>
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
