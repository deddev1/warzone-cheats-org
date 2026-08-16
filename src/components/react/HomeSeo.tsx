import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type FaqItem = { slug: string; question: string; answer: string; href: string };

type Props = {
	locale: string;
	faqs: FaqItem[];
};

function HomeSeoInner({ faqs }: Props) {
	const { t } = useTranslation();

	const categories = [
		{
			titleKey: 'homeSeo.catFeatures',
			hintKey: 'homeSeo.catFeaturesHint',
			links: [
				{ href: '/features/', labelKey: 'homeSeo.linkAllFeatures' },
				{ href: '/warzone-esp/', labelKey: 'homeSeo.linkEsp' },
				{ href: '/warzone-aimbot/', labelKey: 'homeSeo.linkAimbot' },
				{ href: '/warzone-radar-hack/', labelKey: 'homeSeo.linkRadar' },
			],
		},
		{
			titleKey: 'homeSeo.catStatus',
			hintKey: 'homeSeo.catStatusHint',
			links: [
				{ href: '/updates/', labelKey: 'homeSeo.linkLiveStatus' },
				{ href: '/warzone-cheats/', labelKey: 'homeSeo.linkUndetected' },
				{ href: '/setup/', labelKey: 'homeSeo.linkSetup' },
				{ href: '/faq/', labelKey: 'homeSeo.linkFaq' },
			],
		},
		{
			titleKey: 'homeSeo.catStore',
			hintKey: 'homeSeo.catStoreHint',
			links: [
				{ href: '/pricing/', labelKey: 'homeSeo.linkPlans' },
				{ href: '/reviews/', labelKey: 'homeSeo.linkReviews' },
				{ href: '/blog/call-of-duty-warzone-cheats-buyers-guide/', labelKey: 'homeSeo.linkBuyersGuide' },
				{ href: '/warzone-cheats/', labelKey: 'homeSeo.linkWarzoneCheats' },
			],
		},
		{
			titleKey: 'homeSeo.catHelp',
			hintKey: 'homeSeo.catHelpHint',
			links: [
				{ href: '/support/', labelKey: 'homeSeo.linkSupport' },
				{ href: '/setup/', labelKey: 'homeSeo.linkSetupGuide' },
				{ href: '/blog/warzone-cheats-complete-guide-2026/', labelKey: 'homeSeo.linkCompleteGuide' },
				{ href: '/refund-policy/', labelKey: 'homeSeo.linkRefunds' },
			],
		},
	];

	const guideLinks = [
		{
			href: '/blog/warzone-cheats-complete-guide-2026/',
			catKey: 'homeSeo.guideCatCheats',
			labelKey: 'homeSeo.linkCompleteGuide',
		},
		{
			href: '/blog/call-of-duty-warzone-cheats-buyers-guide/',
			catKey: 'homeSeo.guideCatBuyers',
			labelKey: 'homeSeo.linkBuyersGuide',
		},
		{
			href: '/blog/undetected-warzone-cheats-ricochet/',
			catKey: 'homeSeo.guideCatUndetected',
			labelKey: 'homeSeo.linkUndetectedGuide',
		},
		{
			href: '/blog/warzone-esp-wallhack-explained/',
			catKey: 'homeSeo.guideCatEsp',
			labelKey: 'homeSeo.linkEspGuide',
		},
		{
			href: '/blog/warzone-aimbot-settings-guide/',
			catKey: 'homeSeo.guideCatAimbot',
			labelKey: 'homeSeo.linkAimbotGuide',
		},
		{
			href: '/blog/warzone-cheats-2026-whats-new/',
			catKey: 'homeSeo.guideCatUpdates',
			labelKey: 'homeSeo.linkWhatsNewGuide',
		},
	];

	const officialLinks = [
		{
			href: 'https://www.callofduty.com/warzone',
			sourceKey: 'homeSeo.officialSourceActivision',
			labelKey: 'homeSeo.linkOfficialWarzone',
		},
		{
			href: 'https://support.activision.com/',
			sourceKey: 'homeSeo.officialSourceActivision',
			labelKey: 'homeSeo.linkOfficialSupport',
		},
		{
			href: 'https://www.ricochet.com/',
			sourceKey: 'homeSeo.officialSourceActivision',
			labelKey: 'homeSeo.linkOfficialRicochet',
		},
		{
			href: 'https://www.callofduty.com/blog/tag/call-of-duty-warzone',
			sourceKey: 'homeSeo.officialSourceActivision',
			labelKey: 'homeSeo.linkOfficialPatchNotes',
		},
	];

	return (
		<section className="home-seo shell" aria-labelledby="home-seo-title">
			<header className="home-seo__head">
				<div>
					<p className="home-seo__eyebrow">{t('homeSeo.eyebrow')}</p>
					<h2 id="home-seo-title">{t('homeSeo.title')}</h2>
					<p className="home-seo__lede">{t('homeSeo.lede')}</p>
				</div>
			</header>

			<div className="home-seo__cats">
				{categories.map((cat) => (
					<nav key={cat.titleKey} className="home-seo__cat" aria-label={t(cat.titleKey)}>
						<header className="home-seo__cat-head">
							<h3>{t(cat.titleKey)}</h3>
							<p>{t(cat.hintKey)}</p>
						</header>
						<ul>
							{cat.links.map((link) => (
								<li key={link.href + link.labelKey}>
									<a href={link.href}>
										<span>{t(link.labelKey)}</span>
										<span className="home-seo__cat-arrow" aria-hidden="true" />
									</a>
								</li>
							))}
						</ul>
					</nav>
				))}
			</div>

			<section className="home-seo__guides" aria-labelledby="home-guides-title">
				<header className="home-seo__guides-head">
					<div>
						<p className="home-seo__eyebrow">{t('homeSeo.guidesEyebrow')}</p>
						<h3 id="home-guides-title">{t('homeSeo.guidesTitle')}</h3>
						<p className="home-seo__guides-lede">{t('homeSeo.guidesLede')}</p>
					</div>
					<a className="home-seo__faq-link" href="/blog/">
						{t('homeSeo.allGuides')}
					</a>
				</header>
				<ul className="home-seo__guides-list">
					{guideLinks.map((link) => (
						<li key={link.href}>
							<a href={link.href}>
								<span className="home-seo__guides-cat">{t(link.catKey)}</span>
								<span>{t(link.labelKey)}</span>
								<span className="home-seo__cat-arrow" aria-hidden="true" />
							</a>
						</li>
					))}
				</ul>
			</section>

			<section className="home-seo__official" aria-labelledby="home-official-title">
				<header className="home-seo__guides-head">
					<div>
						<p className="home-seo__eyebrow">{t('homeSeo.officialEyebrow')}</p>
						<h3 id="home-official-title">{t('homeSeo.officialTitle')}</h3>
						<p className="home-seo__guides-lede">{t('homeSeo.officialLede')}</p>
					</div>
				</header>
				<ul className="home-seo__official-list">
					{officialLinks.map((link) => (
						<li key={link.href}>
							<a href={link.href} target="_blank" rel="noopener noreferrer">
								<span className="home-seo__guides-cat">{t(link.sourceKey)}</span>
								<span>{t(link.labelKey)}</span>
								<span className="home-seo__external" aria-hidden="true">
									↗
								</span>
							</a>
						</li>
					))}
				</ul>
			</section>

			<section className="home-seo__faq" aria-labelledby="home-faq-title">
				<header className="home-seo__faq-head">
					<div>
						<p className="home-seo__eyebrow">{t('homeSeo.faqEyebrow')}</p>
						<h3 id="home-faq-title">{t('homeSeo.faqTitle')}</h3>
						<p className="home-seo__faq-lede">{t('homeSeo.faqLede')}</p>
					</div>
					<a className="home-seo__faq-link" href="/faq/">
						{t('homeSeo.allAnswers')}
					</a>
				</header>
				<div className="home-seo__faq-list">
					{faqs.map((item) => (
						<details className="home-seo__item" id={item.slug} key={item.slug}>
							<summary>
								<span>{item.question}</span>
								<span className="home-seo__chev" aria-hidden="true" />
							</summary>
							<div className="home-seo__item-body">
								<p>{item.answer}</p>
								<a className="home-seo__item-link" href={item.href}>
									{t('homeSeo.openFullPage')}
								</a>
							</div>
						</details>
					))}
				</div>
			</section>
		</section>
	);
}

export default function HomeSeoApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeSeoInner {...props} />
		</I18nProvider>
	);
}
