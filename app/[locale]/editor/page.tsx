import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import OverlayEditor from "@/components/OverlayEditor";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { copy, isLocale, locales } from "@/lib/i18n";

export function generateStaticParams(){ return locales.map(locale=>({locale})); }
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale}=await params;if(!isLocale(locale))return{};return{title:copy[locale].editorTitle,alternates:{canonical:`/${locale}/editor/`,languages:{en:"/en/editor/",ko:"/ko/editor/",ja:"/ja/editor/",es:"/es/editor/","x-default":"/en/editor/"}}}}
export default async function EditorPage({params}:{params:Promise<{locale:string}>}){const {locale}=await params;if(!isLocale(locale))notFound();const t=copy[locale];return <><SiteHeader locale={locale} labels={t}/><main className="editorPage"><div className="editorIntro"><p className="eyebrow">LOCAL IMAGE TOOL</p><h1>{t.editorTitle}</h1><p>{t.privateText}</p></div><OverlayEditor labels={t}/><AdSlot label={t.ad} slot={process.env.NEXT_PUBLIC_ADSENSE_EDITOR_SLOT}/><section className="guideSection"><h2>{t.guideTitle}</h2><p>{t.guideBody}</p></section></main><SiteFooter locale={locale}/></>}
