import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { CookieBanner } from "@/components/CookieBanner";
import { JsonLd } from "@/components/JsonLd";
import OverlayEditor from "@/components/OverlayEditor";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { copy, isLocale, locales, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";
import { absoluteUrl, localeLanguageTags } from "@/lib/site";

const editorHelp: Record<Locale, {
  beforeTitle: string; beforeIntro: string; before: string[];
  useTitle: string; useIntro: string; uses: { title: string; body: string }[];
  qualityTitle: string; qualityBody: string;
}> = {
  en: {
    beforeTitle: "Before you start",
    beforeIntro: "A few decisions made before uploading will save time and protect image quality.",
    before: [
      "Keep the original files. The editor creates new downloads and does not replace your originals.",
      "Choose the final destination ratio and dimensions before aligning layers.",
      "Use the clearest or most important image as the reference layer, then lock it.",
      "If one source is much smaller than the others, plan the output around that limiting file."
    ],
    useTitle: "When this editor is the right tool",
    useIntro: "Overlay Crop is designed for manual, visual consistency rather than automatic subject detection.",
    uses: [
      { title: "Before-and-after comparisons", body: "Match eyes, outlines, horizons, or stable background points before exporting separate files." },
      { title: "Catalog and profile sets", body: "Place products or faces at a consistent scale while preserving a shared output size." },
      { title: "Video transition frames", body: "Reduce the visual jump between frames prepared for dissolves, sliders, or progress videos." }
    ],
    qualityTitle: "Quality reminder",
    qualityBody: "Cropping and enlargement cannot recreate source detail. If the visible crop contains fewer pixels than the requested output, the browser must scale those pixels up. Check the downloaded file at 100% and reduce the output size or zoom when it looks soft."
  },
  ko: {
    beforeTitle: "작업 전 확인사항",
    beforeIntro: "업로드 전에 몇 가지를 정하면 작업 시간을 줄이고 화질 저하도 예방할 수 있습니다.",
    before: [
      "원본 파일은 따로 보관하세요. 편집기는 새 파일을 만들며 원본을 덮어쓰지 않습니다.",
      "레이어를 맞추기 전에 최종 사용처의 비율과 출력 크기를 먼저 정하세요.",
      "가장 선명하거나 중요한 사진을 기준 레이어로 배치한 뒤 잠그세요.",
      "유독 작은 원본이 있다면 그 파일이 감당할 수 있는 크기를 기준으로 출력값을 정하세요."
    ],
    useTitle: "이 편집기가 특히 유용한 작업",
    useIntro: "Overlay Crop은 자동 피사체 인식보다 사용자가 직접 구도를 비교하고 통일하는 작업에 맞춰져 있습니다.",
    uses: [
      { title: "보정 전후 비교", body: "눈, 얼굴 윤곽, 수평선 또는 배경 기준점을 맞춘 뒤 각각의 결과 파일로 저장합니다." },
      { title: "상품·프로필 사진 묶음", body: "공통 출력 크기를 유지하면서 상품이나 얼굴이 비슷한 배율과 위치에 오도록 조절합니다." },
      { title: "전환 영상용 프레임", body: "디졸브, 전후 슬라이더, 변화 영상에서 프레임이 튀는 현상을 줄입니다." }
    ],
    qualityTitle: "화질 관련 안내",
    qualityBody: "크롭과 확대는 원본에 없는 디테일을 만들지 못합니다. 실제 크롭 영역의 픽셀보다 출력값이 크면 브라우저가 픽셀을 확대합니다. 다운로드 파일을 100%로 확인하고 흐리다면 출력 크기나 확대 배율을 줄이세요."
  },
  ja: {
    beforeTitle: "作業を始める前に",
    beforeIntro: "アップロード前にいくつか決めておくと、作業時間と画質低下を減らせます。",
    before: [
      "元画像は別に保存してください。エディターは新しいファイルを書き出し、元画像を上書きしません。",
      "レイヤーを合わせる前に、最終用途の比率と出力サイズを決めてください。",
      "最も鮮明または重要な画像を基準レイヤーとして配置し、ロックしてください。",
      "小さい元画像がある場合は、その画像が無理なく支えられる出力サイズを基準にしてください。"
    ],
    useTitle: "このエディターが向いている作業",
    useIntro: "Overlay Cropは自動被写体検出ではなく、目で比較して構図を統一する作業のために設計されています。",
    uses: [
      { title: "ビフォー・アフター比較", body: "目、輪郭、水平線、背景の固定点を合わせ、別々のファイルとして書き出します。" },
      { title: "商品・プロフィール画像", body: "共通サイズを保ちながら、商品や顔の倍率と位置をそろえます。" },
      { title: "動画トランジション用フレーム", body: "ディゾルブ、比較スライダー、経過動画での画面の跳ねを減らします。" }
    ],
    qualityTitle: "画質について",
    qualityBody: "切り抜きや拡大で元画像にない細部を作ることはできません。切り抜き部分の実ピクセルより出力が大きい場合、ブラウザは既存ピクセルを拡大します。ダウンロード後に100%表示で確認し、ぼやける場合は出力サイズか倍率を下げてください。"
  },
  es: {
    beforeTitle: "Antes de empezar",
    beforeIntro: "Unas decisiones previas reducen el trabajo repetido y ayudan a conservar la calidad.",
    before: [
      "Conserva los originales. El editor crea descargas nuevas y no sustituye tus archivos.",
      "Define la proporción y las dimensiones del destino antes de alinear las capas.",
      "Usa la imagen más clara o importante como referencia y bloquéala.",
      "Si un original es mucho más pequeño, elige una salida que ese archivo pueda soportar."
    ],
    useTitle: "Cuándo conviene usar este editor",
    useIntro: "Overlay Crop está pensado para igualar visualmente la composición, no para detectar sujetos de forma automática.",
    uses: [
      { title: "Comparaciones antes y después", body: "Alinea ojos, contornos, horizontes o puntos estables y exporta archivos separados." },
      { title: "Catálogos y perfiles", body: "Mantén un tamaño común mientras colocas productos o rostros con escala y posición coherentes." },
      { title: "Fotogramas para transiciones", body: "Reduce los saltos en fundidos, deslizadores comparativos y vídeos de progreso." }
    ],
    qualityTitle: "Recordatorio de calidad",
    qualityBody: "Recortar y ampliar no recrea detalle. Si el recorte visible contiene menos píxeles que la salida solicitada, el navegador debe ampliarlos. Revisa el archivo descargado al 100% y reduce el tamaño de salida o el zoom si se ve borroso."
  }
};

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
  const h=editorHelp[locale];
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
  return <><SiteHeader locale={locale} labels={t}/><main className="editorPage"><JsonLd data={jsonLd}/><div className="editorIntro"><p className="eyebrow">LOCAL IMAGE TOOL</p><h1>{t.editorTitle}</h1><p>{t.privateText}</p></div><OverlayEditor labels={t}/><section className="editorHelpSection"><article><h2>{h.beforeTitle}</h2><p>{h.beforeIntro}</p><ul>{h.before.map((item)=><li key={item}>{item}</li>)}</ul></article><article><h2>{h.qualityTitle}</h2><p>{h.qualityBody}</p><Link className="textLink" href={`/${locale}/resources/`}>{t.navResources} →</Link></article></section><section className="workflowSection"><h2>{h.useTitle}</h2><p>{h.useIntro}</p><div className="workflowGrid">{h.uses.map((item)=><article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></section><AdSlot label={t.ad} slot={process.env.NEXT_PUBLIC_ADSENSE_EDITOR_SLOT}/><section className="guideSection"><h2>{t.guideTitle}</h2><p>{t.guideBody}</p><Link href={`/${locale}/how-it-works/`}>{t.navGuide} →</Link></section></main><SiteFooter locale={locale}/><CookieBanner text={t.cookieText} accept={t.accept} reject={t.reject} /></>;
}
