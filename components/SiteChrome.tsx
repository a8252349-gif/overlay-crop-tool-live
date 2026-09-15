"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy, localeNames, type Locale } from "@/lib/i18n";
import { pageCopy } from "@/lib/page-copy";
import { PrivacySettingsButton } from "@/components/PrivacySettingsButton";

type IconName = "editor" | "how" | "guides" | "resources" | "about";
function Icon({ name }: { name: IconName }) {
  const s = { width: 15, height: 15, marginRight: 5, verticalAlign: "-2px" } as const;
  if (name === "editor") return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={s}><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 8h8v8H8z"/><path d="M8 12h8M12 8v8"/></svg>;
  if (name === "how") return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={s}><circle cx="12" cy="12" r="9"/><path d="M12 10v6M12 7h.01"/></svg>;
  if (name === "guides") return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={s}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5zM20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5A2.5 2.5 0 0 1 20 21.5z"/></svg>;
  if (name === "resources") return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={s}><rect x="5" y="4" width="14" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>;
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={s}><circle cx="12" cy="8" r="3"/><path d="M5 20c1.3-4 3.7-6 7-6s5.7 2 7 6"/></svg>;
}

export function SiteHeader({ locale, labels }: { locale: Locale; labels: (typeof copy)[Locale] }) {
  const pathname = usePathname();
  const suffix = pathname.replace(/^\/(en|ko|ja|es)/, "");
  return <header className="siteHeader"><Link className="brand" href={`/${locale}/`}><svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" style={{marginRight:7,verticalAlign:"-3px"}}><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 8h8v8H8z"/></svg>{labels.siteName}</Link><nav aria-label="Primary navigation">
    <Link href={`/${locale}/editor/`}><Icon name="editor"/>{labels.navEditor}</Link><Link href={`/${locale}/how-it-works/`}><Icon name="how"/>{labels.navGuide}</Link><Link href={`/${locale}/guides/`}><Icon name="guides"/>{labels.navGuides}</Link><Link href={`/${locale}/resources/`}><Icon name="resources"/>{labels.navResources}</Link><Link href={`/${locale}/about/`}><Icon name="about"/>{labels.navAbout}</Link>
    <select aria-label="Language" value={locale} onChange={(e)=>{const next=e.target.value;window.localStorage.setItem("overlay-crop-locale",next);window.location.href=`/${next}${suffix||"/"}`}}>{Object.entries(localeNames).map(([k,v])=><option key={k} value={k}>{v}</option>)}</select>
  </nav></header>;
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const t=copy[locale];
  const p=pageCopy[locale];
  return <footer className="siteFooter"><div><b>{t.siteName}</b><p>{t.privateText}</p></div><nav className="footerLinks" aria-label="Footer navigation">
    <Link href={`/${locale}/guides/`}>{t.navGuides}</Link><Link href={`/${locale}/resources/`}>{t.navResources}</Link><Link href={`/${locale}/faq/`}>{p.faqTitle}</Link><Link href={`/${locale}/about/`}>{t.navAbout}</Link><Link href={`/${locale}/contact/`}>{p.contactTitle}</Link><Link href={`/${locale}/privacy/`}>{p.privacyTitle}</Link><Link href={`/${locale}/terms/`}>{p.termsTitle}</Link><Link href={`/${locale}/cookies/`}>{p.cookiesTitle}</Link><PrivacySettingsButton label={t.cookieSettings} />
  </nav><span>© {new Date().getFullYear()} Overlay Crop</span></footer>;
}
