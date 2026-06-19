import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";
import { getGuide,guidesByLocale } from "@/lib/content";
import { copy,isLocale,locales, type Locale } from "@/lib/i18n";
import { pageCopy } from "@/lib/page-copy";
import { priorityGuideSlugs } from "@/lib/priority-guides";
import { buildPageMetadata } from "@/lib/seo";
import { absoluteUrl, CONTENT_UPDATED_AT, localeLanguageTags, SITE_NAME } from "@/lib/site";

const updatedLabels:Record<Locale,string>={en:"Updated June 19, 2026",ko:"2026년 6월 19일 업데이트",ja:"2026年6月19日更新",es:"Actualizado el 19 de junio de 2026"};
export function generateStaticParams(){return locales.flatMap(locale=>guidesByLocale[locale].map(g=>({locale,slug:g.slug})))}
export async function generateMetadata({params}:{params:Promise<{locale:string;slug:string}>}):Promise<Metadata>{
  const {locale,slug}=await params;
  if(!isLocale(locale))return{};
  const g=getGuide(locale,slug);
  if(!g)return{};
  return buildPageMetadata({locale,key:"guides",title:g.title,description:g.description,path:`guides/${slug}`});
}
export default async function Page({params}:{params:Promise<{locale:string;slug:string}>}){
  const {locale,slug}=await params;
  if(!isLocale(locale))notFound();
  const g=getGuide(locale,slug);
  if(!g)notFound();
  const prioritySet = new Set<string>(priorityGuideSlugs);
  const related = guidesByLocale[locale]
    .filter((item) => item.slug !== slug)
    .sort((a, b) => Number(prioritySet.has(b.slug)) - Number(prioritySet.has(a.slug)))
    .slice(0, 3);
  const url=absoluteUrl(`/${locale}/guides/${slug}/`);
  const jsonLd={
    "@context":"https://schema.org",
    "@type":"Article",
    headline:g.title,
    description:g.description,
    image:[absoluteUrl("/og-image.png")],
    datePublished:CONTENT_UPDATED_AT.toISOString(),
    dateModified:CONTENT_UPDATED_AT.toISOString(),
    inLanguage:localeLanguageTags[locale],
    mainEntityOfPage:{"@type":"WebPage","@id":url},
    author:{"@type":"Organization","@id":absoluteUrl("/#organization"),name:SITE_NAME,url:absoluteUrl(`/${locale}/about/`)},
    publisher:{"@type":"Organization","@id":absoluteUrl("/#organization"),name:SITE_NAME,logo:{"@type":"ImageObject",url:absoluteUrl("/icon-512.png")}},
  };
  return <ContentPage locale={locale}><JsonLd data={jsonLd}/><Breadcrumbs locale={locale} items={[{name:pageCopy[locale].guidesTitle,path:`/${locale}/guides/`},{name:g.title}]}/><article className="guideArticle"><p className="eyebrow">OVERLAY CROP GUIDE</p><h1>{g.title}</h1><p className="articleDate">{updatedLabels[locale]}</p><p className="lead">{g.intro}</p>{g.sections.map(s=><section key={s.heading}><h2>{s.heading}</h2>{s.paragraphs.map((p,i)=><p key={i}>{p}</p>)}{s.bullets&&<ul>{s.bullets.map(b=><li key={b}>{b}</li>)}</ul>}</section>)}<section><h2>FAQ</h2>{g.faq.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</section><div className="articleCta"><h2>{copy[locale].editorTitle}</h2><p>{copy[locale].guideBody}</p><Link className="primaryCta" href={`/${locale}/editor/`}>{copy[locale].start}</Link></div><section className="relatedGuides"><h2>{pageCopy[locale].guidesTitle}</h2><ul>{related.map(item=><li key={item.slug}><Link href={`/${locale}/guides/${item.slug}/`}>{item.title}</Link><p>{item.description}</p></li>)}</ul></section></article></ContentPage>;
}
