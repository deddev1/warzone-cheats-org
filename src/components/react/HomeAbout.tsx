import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
	videoSrc: string;
	videoPoster: string;
};

const featureKeys = [
	'home.aboutFeatEsp',
	'home.aboutFeatAim',
	'home.aboutFeatRadar',
	'home.aboutFeatUpdates',
] as const;

function HomeAboutInner({ videoSrc, videoPoster }: Pick<Props, 'videoSrc' | 'videoPoster'>) {
	const { t } = useTranslation();

	return (
		<section className="home-about shell" aria-labelledby="home-about-title">
			<div className="home-about__panel">
				<div className="home-about__layout">
					<header className="home-about__head">
						<p className="home-about__eyebrow">{t('home.aboutEyebrow')}</p>
						<h2 id="home-about-title">{t('home.aboutTitle')}</h2>
						<p className="home-about__lede">{t('home.aboutP1')}</p>
					</header>

					<div className="home-about__media">
						<video
							className="home-about__video"
							src={videoSrc}
							poster={videoPoster}
							controls
							playsInline
							preload="metadata"
							aria-label={t('home.aboutVideoAria')}
						/>
						<p className="home-about__video-caption">{t('home.aboutVideoCaption')}</p>
					</div>

					<ul className="home-about__features" aria-label={t('home.aboutFeaturesAria')}>
						{featureKeys.map((key) => (
							<li key={key}>
								<span className="home-about__check" aria-hidden="true" />
								<span>{t(key)}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

export default function HomeAboutApp({ locale, videoSrc, videoPoster }: Props) {
	return (
		<I18nProvider locale={locale}>
			<HomeAboutInner videoSrc={videoSrc} videoPoster={videoPoster} />
		</I18nProvider>
	);
}
