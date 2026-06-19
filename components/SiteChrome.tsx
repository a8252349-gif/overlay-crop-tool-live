"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy, localeNames, type Locale } from "@/lib/i18n";
import { pageCopy } from "@/lib/page-copy";
import { PrivacySettingsButton } from "@/components/PrivacySettingsButton";

export function SiteHeader({ locale, labels }: { locale: Locale; labels: (typeof copy)[Locale] }) {
  const pathname = usePathname();
  const suffix = pathname.replace(/^\/(en|ko|ja|es)/, "");
  return <header className="siteHeader"><Link className="brand" href={`/${locale}/`}>{labels.siteName}</Link><nav aria-label="Primary navigation">
    <Link href={`/${locale}/editor/`}>{labels.navEditor}</Link><Link href={`/${locale}/how-it-works/`}>{labels.navGuide}</Link><Link href={`/${locale}/guides/`}>{labels.navGuides}</Link><Link href={`/${locale}/about/`}>{labels.navAbout}</Link>
    <select aria-label="Language" value={locale} onChange={(e)=>{const next=e.target.value;window.localStorage.setItem("overlay-crop-locale",next);window.location.href=`/${next}${suffix||"/"}`}}>{Object.entries(localeNames).map(([k,v])=><option key={k} value={k}>{v}</option>)}</select>
  </nav></header>;
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const t=copy[locale];
  const p=pageCopy[locale];
  return <footer className="siteFooter"><div><b>{t.siteName}</b><p>{t.privateText}</p></div><nav className="footerLinks" aria-label="Footer navigation">
    <Link href={`/${locale}/guides/`}>{t.navGuides}</Link><Link href={`/${locale}/faq/`}>{p.faqTitle}</Link><Link href={`/${locale}/about/`}>{t.navAbout}</Link><Link href={`/${locale}/contact/`}>{p.contactTitle}</Link><Link href={`/${locale}/privacy/`}>{p.privacyTitle}</Link><Link href={`/${locale}/terms/`}>{p.termsTitle}</Link><Link href={`/${locale}/cookies/`}>{p.cookiesTitle}</Link><PrivacySettingsButton label={t.cookieSettings} />
  </nav><span>© {new Date().getFullYear()} Overlay Crop</span></footer>;
}
