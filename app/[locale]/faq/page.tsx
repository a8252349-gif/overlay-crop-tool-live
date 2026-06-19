import type { Metadata } from "next";
import {notFound} from "next/navigation";
import {Breadcrumbs} from "@/components/Breadcrumbs";
import {ContentPage} from "@/components/ContentPage";
import {isLocale,locales} from "@/lib/i18n";
import {pageCopy} from "@/lib/page-copy";
import {buildPageMetadata} from "@/lib/seo";
export function generateStaticParams(){return locales.map(locale=>({locale}))}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const{locale}=await params;if(!isLocale(locale))return{};const p=pageCopy[locale];return buildPageMetadata({locale,key:"faq",title:p.faqTitle,path:"faq"})}
export default async function Page({params}:{params:Promise<{locale:string}>}){const{locale}=await params;if(!isLocale(locale))notFound();const p=pageCopy[locale];return <ContentPage locale={locale}><Breadcrumbs locale={locale} items={[{name:p.faqTitle}]}/><header className="pageHero"><p className="eyebrow">FAQ</p><h1>{p.faqTitle}</h1></header><div className="faqList">{p.faqs.map((f:string[])=><details key={f[0]}><summary>{f[0]}</summary><p>{f[1]}</p></details>)}</div></ContentPage>}
