import type { Metadata } from "next";
import {notFound} from "next/navigation";
import {Breadcrumbs} from "@/components/Breadcrumbs";
import {ContentPage} from "@/components/ContentPage";
import {isLocale,locales} from "@/lib/i18n";
import {pageCopy} from "@/lib/page-copy";
import {buildPageMetadata} from "@/lib/seo";
export function generateStaticParams(){return locales.map(locale=>({locale}))}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const{locale}=await params;if(!isLocale(locale))return{};const p=pageCopy[locale];return buildPageMetadata({locale,key:"contact",title:p.contactTitle,path:"contact"})}
export default async function Page({params}:{params:Promise<{locale:string}>}){const{locale}=await params;if(!isLocale(locale))notFound();const p=pageCopy[locale];const email=process.env.NEXT_PUBLIC_CONTACT_EMAIL||"hello@overlaycrop.com";return <ContentPage locale={locale}><Breadcrumbs locale={locale} items={[{name:p.contactTitle}]}/><article className="legalPage"><p className="eyebrow">CONTACT</p><h1>{p.contactTitle}</h1><p>{p.contactBody}</p><a className="primaryCta" href={`mailto:${email}`}>{p.contactLabel}: {email}</a></article></ContentPage>}
