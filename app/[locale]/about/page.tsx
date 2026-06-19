import type { Metadata } from "next";
import {notFound} from "next/navigation";
import {Breadcrumbs} from "@/components/Breadcrumbs";
import {ContentPage} from "@/components/ContentPage";
import {isLocale,locales} from "@/lib/i18n";
import {pageCopy} from "@/lib/page-copy";
import {buildPageMetadata} from "@/lib/seo";
export function generateStaticParams(){return locales.map(locale=>({locale}))}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const{locale}=await params;if(!isLocale(locale))return{};const p=pageCopy[locale];return buildPageMetadata({locale,key:"about",title:p.aboutTitle,path:"about"})}
export default async function Page({params}:{params:Promise<{locale:string}>}){const{locale}=await params;if(!isLocale(locale))notFound();const p=pageCopy[locale];return <ContentPage locale={locale}><Breadcrumbs locale={locale} items={[{name:p.aboutTitle}]}/><article className="legalPage"><p className="eyebrow">ABOUT</p><h1>{p.aboutTitle}</h1>{p.aboutBody.map((x:string)=><p key={x}>{x}</p>)}</article></ContentPage>}
