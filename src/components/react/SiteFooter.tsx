import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type FooterLink = { labelKey: string; href: string };
type GuideLink = { href: string; title: string };
type OfficialLink = { href: string; title: string };

type Props = {
	locale: string;
	siteName: string;
	supportEmail: string;
	shareUrl: string;
	explore: FooterLink[];
	help: FooterLink[];
	guides?: GuideLink[];
	official?: OfficialLink[];
};

function SiteFooterInner({
	siteName,
	supportEmail,
	shareUrl,
	explore,
	help,
	guides = [],
	official = [],
}: Props) {
	const { t } = useTranslation();
	const year = new Date().getFullYear();
	const encodedUrl = encodeURIComponent(shareUrl);
	const encodedName = encodeURIComponent(siteName);
	const tagline = t('footer.tagline').split('\n')[0];

	const shareLinks = [
		{
			label: t('common.shareX'),
			href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedName}`,
		},
		{
			label: t('common.shareReddit'),
			href: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedName}`,
		},
		{
			label: t('common.shareFacebook'),
			href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
		},
	];

	return (
		<footer className="site-footer">
			<div
				className={`shell site-footer__grid${guides.length === 0 && official.length === 0 ? ' site-footer__grid--no-guides' : ''}${official.length > 0 ? ' site-footer__grid--with-official' : ''}`}
			>
				<div>
					<p className="site-footer__brand">{siteName}</p>
					<p>{tagline}</p>
					<p className="site-footer__share-label">{t('common.share')}</p>
					<ul className="site-footer__share">
						{shareLinks.map((link) => (
							<li key={link.href}>
								<a href={link.href} rel="noopener noreferrer" target="_blank">
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div>
					<p className="site-footer__label">{t('footer.explore')}</p>
					<ul>
						{explore.map((link) => (
							<li key={link.href}>
								<a href={link.href}>{t(link.labelKey)}</a>
							</li>
						))}
					</ul>
				</div>
				{guides.length > 0 && (
					<div>
						<p className="site-footer__label">{t('footer.guides')}</p>
						<ul>
							{guides.map((link) => (
								<li key={link.href}>
									<a href={link.href}>{link.title}</a>
								</li>
							))}
							<li>
								<a href="/blog/">{t('common.blog')}</a>
							</li>
						</ul>
					</div>
				)}
				{official.length > 0 && (
					<div>
						<p className="site-footer__label">{t('footer.official')}</p>
						<ul>
							{official.map((link) => (
								<li key={link.href}>
									<a href={link.href} rel="noopener noreferrer" target="_blank">
										{link.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				)}
				<div>
					<p className="site-footer__label">{t('footer.help')}</p>
					<ul>
						{help.map((link) => (
							<li key={link.href}>
								<a href={link.href}>{t(link.labelKey)}</a>
							</li>
						))}
						<li>
							<a href={`mailto:${supportEmail}`}>{supportEmail}</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="shell site-footer__bottom">
				<p>{t('common.copyright', { year, brand: siteName })}</p>
			</div>
		</footer>
	);
}

export default function SiteFooterApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<SiteFooterInner {...props} />
		</I18nProvider>
	);
}
