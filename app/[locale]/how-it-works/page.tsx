import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentPage } from "@/components/ContentPage";
import { copy,isLocale,locales } from "@/lib/i18n";
import { pageCopy } from "@/lib/page-copy";
import { buildPageMetadata } from "@/lib/seo";
export function generateStaticParams(){return locales.map(locale=>({locale}))}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const{locale}=await params;if(!isLocale(locale))return{};const p=pageCopy[locale];return buildPageMetadata({locale,key:"how-it-works",title:p.howTitle,description:p.howIntro,path:"how-it-works"})}
export default async function Page({params}:{params:Promise<{locale:string}>}){const{locale}=await params;if(!isLocale(locale))notFound();const p=pageCopy[locale];const t=copy[locale];return <ContentPage locale={locale}><Breadcrumbs locale={locale} items={[{name:p.howTitle}]}/><header className="pageHero"><p className="eyebrow">HOW IT WORKS</p><h1>{p.howTitle}</h1><p>{p.howIntro}</p></header><div className="stepGrid">{p.steps.map((s:string[],i:number)=><article key={s[0]}><span>0{i+1}</span><h2>{s[0]}</h2><p>{s[1]}</p></article>)}</div><div className="articleCta"><h2>{t.editorTitle}</h2><p>{t.guideBody}</p><Link className="primaryCta" href={`/${locale}/editor/`}>{t.start}</Link></div></ContentPage>}
