import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { CookieBanner } from "@/components/CookieBanner";
import { JsonLd } from "@/components/JsonLd";
import OverlayEditor from "@/components/OverlayEditor";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { copy, isLocale, locales } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";
import { absoluteUrl, localeLanguageTags } from "@/lib/site";

export function generateStaticParams(){ return locales.map(locale=>({locale})); }
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{
  const {locale}=await params;
  if(!isLocale(locale))return{};
  return buildPageMetadata({ locale, key: "editor", title: copy[locale].editorTitle, path: "editor" });
}
export default async function EditorPage({params}:{params:Promise<{locale:string}>}){
  const {locale}=await params;
  if(!isLocale(locale))notFound();
  const t=copy[locale];
  const jsonLd={
    "@context":"https://schema.org",
    "@type":"WebApplication",
    name:t.editorTitle,
    url:absoluteUrl(`/${locale}/editor/`),
    applicationCategory:"MultimediaApplication",
    operatingSystem:"Any",
    inLanguage:localeLanguageTags[locale],
    description:t.guideBody,
    offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},
  };
  return <><SiteHeader locale={locale} labels={t}/><main className="editorPage"><JsonLd data={jsonLd}/><div className="editorIntro"><p className="eyebrow">LOCAL IMAGE TOOL</p><h1>{t.editorTitle}</h1><p>{t.privateText}</p></div><OverlayEditor labels={t}/><AdSlot label={t.ad} slot={process.env.NEXT_PUBLIC_ADSENSE_EDITOR_SLOT}/><section className="guideSection"><h2>{t.guideTitle}</h2><p>{t.guideBody}</p><Link href={`/${locale}/how-it-works/`}>{t.navGuide} →</Link></section></main><SiteFooter locale={locale}/><CookieBanner text={t.cookieText} accept={t.accept} reject={t.reject} /></>;
}
