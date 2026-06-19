"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeNames, type Locale } from "@/lib/i18n";

export function SiteHeader({ locale, labels }: { locale: Locale; labels: any }) {
  const pathname = usePathname();
  const suffix = pathname.replace(/^\/(en|ko|ja|es)/, "");
  return <header className="siteHeader"><Link className="brand" href={`/${locale}/`}>{labels.siteName}</Link><nav>
    <Link href={`/${locale}/editor/`}>{labels.navEditor}</Link><Link href={`/${locale}/how-it-works/`}>{labels.navGuide}</Link><Link href={`/${locale}/guides/`}>{labels.navGuides}</Link><Link href={`/${locale}/about/`}>{labels.navAbout}</Link>
    <select aria-label="Language" value={locale} onChange={(e)=>{window.location.href=`/${e.target.value}${suffix||"/"}`}}>{Object.entries(localeNames).map(([k,v])=><option key={k} value={k}>{v}</option>)}</select>
  </nav></header>;
}

export function SiteFooter({ locale }: { locale: Locale }) {
  return <footer className="siteFooter"><div><b>Overlay Crop</b><p>Private, browser-based image alignment and cropping.</p></div><div className="footerLinks">
    <Link href={`/${locale}/guides/`}>Guides</Link><Link href={`/${locale}/faq/`}>FAQ</Link><Link href={`/${locale}/about/`}>About</Link><Link href={`/${locale}/contact/`}>Contact</Link><Link href={`/${locale}/privacy/`}>Privacy</Link><Link href={`/${locale}/terms/`}>Terms</Link><Link href={`/${locale}/cookies/`}>Cookies</Link>
  </div><span>© {new Date().getFullYear()} Overlay Crop</span></footer>;
}
