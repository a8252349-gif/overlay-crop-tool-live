import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentPage } from "@/components/ContentPage";
import { ImagePlanningTools } from "@/components/ImagePlanningTools";
import { copy, isLocale, locales, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

const text: Record<Locale,{title:string;intro:string;why:string;body:string;guide:string}>={
 en:{title:"Image Cropping Calculators and Planning Tools",intro:"Calculate ratio dimensions and estimate whether a planned export will enlarge the visible source crop.",why:"Why these calculations matter",body:"A crop can have the correct shape and still be too small for the requested output. Use the ratio calculator before editing, then use the enlargement checker with the approximate pixel dimensions of the visible crop. The result is an estimate, not a guarantee of sharpness, because focus, compression and motion blur also matter.",guide:"Read the aspect ratio and resolution guide"},
 ko:{title:"이미지 크롭 계산기와 작업 계획 도구",intro:"비율에 맞는 가로·세로 크기를 계산하고 실제 크롭 영역보다 출력이 얼마나 확대되는지 확인합니다.",why:"계산이 필요한 이유",body:"비율은 올바르지만 실제 출력에 필요한 픽셀이 부족할 수 있습니다. 편집 전에 비율 계산기를 사용하고, 실제로 보이는 원본 영역의 대략적인 픽셀과 출력 크기를 확대 위험 확인 도구에 입력하세요. 초점, 압축과 흔들림도 화질에 영향을 주므로 결과는 참고값입니다.",guide:"비율과 해상도 가이드 보기"},
 ja:{title:"画像切り抜き計算・計画ツール",intro:"比率に合う寸法を計算し、見えている元画像に対する出力の拡大率を確認します。",why:"計算が役立つ理由",body:"形が正しくても出力に必要な元ピクセルが不足する場合があります。編集前に比率を計算し、見えている切り抜き範囲と出力寸法を拡大確認へ入力してください。ピント、圧縮、手ぶれも画質に影響するため結果は目安です。",guide:"比率と解像度ガイドを読む"},
 es:{title:"Calculadoras y herramientas para planificar recortes",intro:"Calcula dimensiones según una proporción y estima cuánto se ampliará el recorte visible.",why:"Por qué conviene calcularlo",body:"Un recorte puede tener la forma correcta y no disponer de suficientes píxeles para la salida prevista. Usa primero la calculadora de proporción y después compara la zona visible del origen con el tamaño final. El resultado es orientativo porque el enfoque, la compresión y el movimiento también afectan la nitidez.",guide:"Leer la guía de proporción y resolución"}
};
export function generateStaticParams(){return locales.map(locale=>({locale}))}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const{locale}=await params;if(!isLocale(locale))return{};const t=text[locale];return buildPageMetadata({locale,key:"resources",title:t.title,description:t.intro,path:"resources"})}
export default async function Page({params}:{params:Promise<{locale:string}>}){const{locale}=await params;if(!isLocale(locale))notFound();const t=text[locale];return <ContentPage locale={locale}><Breadcrumbs locale={locale} items={[{name:t.title}]}/><header className="pageHero"><p className="eyebrow">RESOURCES</p><h1>{t.title}</h1><p>{t.intro}</p></header><ImagePlanningTools locale={locale}/><section className="resourceExplanation"><h2>{t.why}</h2><p>{t.body}</p><Link href={`/${locale}/guides/aspect-ratio-vs-resolution/`}>{t.guide} →</Link><Link className="primaryCta" href={`/${locale}/editor/`}>{copy[locale].start}</Link></section></ContentPage>}
