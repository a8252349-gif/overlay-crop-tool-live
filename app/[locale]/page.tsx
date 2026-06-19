import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CookieBanner } from "@/components/CookieBanner";
import { AdSlot } from "@/components/AdSlot";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { copy, isLocale, locales } from "@/lib/i18n";
import { guidesByLocale } from "@/lib/content";
import { pageCopy } from "@/lib/page-copy";

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params; if (!isLocale(locale)) return {};
  return { title: copy[locale].heroTitle, alternates: { canonical: `/${locale}/`, languages: { en: "/en/", ko: "/ko/", ja: "/ja/", es: "/es/", "x-default": "/en/" } } };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (!isLocale(locale)) notFound(); const t = copy[locale];
  return <>
    <SiteHeader locale={locale} labels={t} />
    <main>
      <section className="hero"><div className="heroBadge">Browser-based · No upload</div><h1>{t.heroTitle}</h1><p>{t.heroText}</p><Link className="primaryCta" href={`/${locale}/editor/`}>{t.start}</Link></section>
      <AdSlot label={t.ad} slot={process.env.NEXT_PUBLIC_ADSENSE_HOME_SLOT} />
      <section className="contentSection"><div><p className="eyebrow">PRIVACY</p><h2>{t.privateTitle}</h2><p>{t.privateText}</p></div><div className="privacyGraphic"><span>01</span><b>LOCAL PROCESSING</b><small>Files remain on your device</small></div></section>
      <section className="featureSection"><p className="eyebrow">FEATURES</p><h2>{t.featuresTitle}</h2><div className="featureGrid">{t.features.map((feature, i) => <article key={feature}><span>0{i + 1}</span><h3>{feature}</h3></article>)}</div></section>
      <section id="guide" className="guideSection"><p className="eyebrow">GUIDE</p><h2>{t.guideTitle}</h2><p>{t.guideBody}</p><Link href={`/${locale}/editor/`}>{t.start} →</Link></section>
      <section className="guidePreview"><p className="eyebrow">POPULAR GUIDES</p><h2>{pageCopy[locale].guidesTitle}</h2><div className="articleGrid">{guidesByLocale[locale].slice(0,4).map((g)=><article className="articleCard" key={g.slug}><h3>{g.title}</h3><p>{g.description}</p><Link href={`/${locale}/guides/${g.slug}/`}>{pageCopy[locale].read} →</Link></article>)}</div><Link className="textLink" href={`/${locale}/guides/`}>{pageCopy[locale].guidesTitle} →</Link></section>
      <AdSlot label={t.ad} slot={process.env.NEXT_PUBLIC_ADSENSE_CONTENT_SLOT} />
    </main>
    <SiteFooter locale={locale} /><CookieBanner text={t.cookieText} accept={t.accept} reject={t.reject} />
  </>;
}
