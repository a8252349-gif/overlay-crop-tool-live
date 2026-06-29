import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentPage } from "@/components/ContentPage";
import { guidesByLocale } from "@/lib/content";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { pageCopy } from "@/lib/page-copy";
import { buildPageMetadata } from "@/lib/seo";

const countLabels: Record<Locale, (count: number) => string> = {
  en: (count) => `${count} in-depth guides`,
  ko: (count) => `심층 가이드 ${count}개`,
  ja: (count) => `${count}本の詳細ガイド`,
  es: (count) => `${count} guías detalladas`,
};

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildPageMetadata({ locale, key: "guides", title: pageCopy[locale].guidesTitle, description: pageCopy[locale].guidesIntro, path: "guides" });
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const p = pageCopy[locale];
  return <ContentPage locale={locale}>
    <Breadcrumbs locale={locale} items={[{ name: p.guidesTitle }]} />
    <header className="pageHero"><p className="eyebrow">GUIDES</p><h1>{p.guidesTitle}</h1><p>{p.guidesIntro}</p><p className="guideCount">{countLabels[locale](guidesByLocale[locale].length)}</p></header>
    <div className="articleGrid">{guidesByLocale[locale].map((g) => <article className="articleCard" key={g.slug}>
      <div className="cardMeta"><span>{g.category}</span><span>{g.readTime}</span></div>
      <h2>{g.title}</h2><p>{g.description}</p>
      <Link href={`/${locale}/guides/${g.slug}/`}>{p.read}: {g.title} →</Link>
    </article>)}</div>
  </ContentPage>;
}
