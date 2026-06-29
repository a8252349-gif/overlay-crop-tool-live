import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CookieBanner } from "@/components/CookieBanner";
import { AdSlot } from "@/components/AdSlot";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { copy, isLocale, locales, type Locale } from "@/lib/i18n";
import { guidesByLocale } from "@/lib/content";
import { pageCopy } from "@/lib/page-copy";
import { buildPageMetadata } from "@/lib/seo";
import { absoluteUrl, localeLanguageTags } from "@/lib/site";

const homeKnowledge: Record<Locale, {
  whyTitle: string;
  whyBody: string;
  comparisonTitle: string;
  comparisonBody: string;
  workflowTitle: string;
  workflowIntro: string;
  workflow: { title: string; body: string }[];
  limitsTitle: string;
  limitsBody: string;
  resourceLink: string;
}> = {
  en: {
    whyTitle: "Why matching dimensions alone is not enough",
    whyBody: "Two files can both be 1080 × 1350 pixels and still jump when viewed in a carousel because the face, product, or horizon sits in a different place. Overlay Crop separates the shared output frame from each image's position and zoom, so you can match composition as well as dimensions.",
    comparisonTitle: "Built for comparison, not automatic center cropping",
    comparisonBody: "Automatic batch tools often use the same coordinates for every source. That works for tripod shots, but not for portraits taken at different distances or products photographed with different margins. Here, every layer keeps its own scale, position, rotation, visibility, and opacity while all exports use one final ratio and size.",
    workflowTitle: "A reliable three-step workflow",
    workflowIntro: "Use the same sequence each time to reduce repeated adjustments and avoid accidental quality loss.",
    workflow: [
      { title: "1. Set the destination", body: "Choose the final ratio and dimensions before moving the images. The destination format should determine the frame." },
      { title: "2. Align to a reference", body: "Position one layer first, lock it, then lower the opacity of the next layer and match stable landmarks such as eyes, edges, or a horizon." },
      { title: "3. Review every layer alone", body: "Restore 100% opacity, inspect all four edges, check sharpness at the intended size, and then export the set." },
    ],
    limitsTitle: "What the tool does—and does not do",
    limitsBody: "Overlay Crop aligns and crops images locally in the browser. It does not create missing detail, restore damaged photographs, remove backgrounds, or permanently store your files. Heavy enlargement can still look soft, and very large source files may be limited by the memory available on your device.",
    resourceLink: "Use the ratio and upscale planning tools",
  },
  ko: {
    whyTitle: "해상도만 같다고 같은 구도가 되는 것은 아닙니다",
    whyBody: "두 파일이 모두 1080 × 1350픽셀이어도 얼굴, 상품 또는 수평선의 위치가 다르면 캐러셀이나 전후 비교에서 화면이 튀어 보입니다. Overlay Crop은 공통 출력 프레임과 각 사진의 위치·확대율을 분리해, 크기뿐 아니라 구도까지 맞출 수 있게 합니다.",
    comparisonTitle: "자동 중앙 크롭이 아닌 비교 작업을 위한 도구",
    comparisonBody: "일괄 크롭 도구는 흔히 모든 원본에 같은 좌표를 적용합니다. 삼각대로 찍은 사진에는 맞지만 촬영 거리나 여백이 다른 인물·상품 사진에는 맞지 않을 수 있습니다. 이 도구에서는 각 레이어가 위치, 배율, 회전, 표시 여부, 투명도를 따로 유지하면서도 결과물은 하나의 비율과 크기로 저장됩니다.",
    workflowTitle: "실수를 줄이는 3단계 작업 순서",
    workflowIntro: "매번 같은 순서로 작업하면 반복 조정을 줄이고 과도한 확대나 잘림을 방지할 수 있습니다.",
    workflow: [
      { title: "1. 사용처부터 정하기", body: "사진을 움직이기 전에 최종 비율과 출력 크기를 정합니다. 인스타그램, 상품 목록, 영상 등 실제 사용처가 프레임을 결정해야 합니다." },
      { title: "2. 기준 사진에 맞추기", body: "한 장을 먼저 배치하고 잠근 뒤 다음 사진의 투명도를 낮춰 눈, 윤곽선, 상품 모서리, 수평선 같은 기준점을 겹칩니다." },
      { title: "3. 사진별로 단독 확인하기", body: "투명도를 100%로 되돌리고 네 변의 잘림, 회전, 선명도, 여백을 각각 확인한 후 저장합니다." },
    ],
    limitsTitle: "가능한 작업과 한계",
    limitsBody: "Overlay Crop은 브라우저 안에서 사진을 정렬하고 자르는 도구입니다. 존재하지 않는 디테일을 생성하거나, 오래된 사진을 복원하거나, 배경을 제거하거나, 파일을 서버에 영구 보관하지 않습니다. 작은 사진을 크게 확대하면 흐려질 수 있고 초고해상도 파일 여러 장은 기기의 메모리 한계에 영향을 받을 수 있습니다.",
    resourceLink: "비율·확대 위험 계산 도구 사용하기",
  },
  ja: {
    whyTitle: "同じピクセル数だけでは同じ構図になりません",
    whyBody: "2枚とも1080 × 1350ピクセルでも、顔・商品・水平線の位置が違えばカルーセルや比較動画で画面が跳ねて見えます。Overlay Cropは共通の出力フレームと各画像の位置・拡大率を分け、寸法と構図の両方をそろえます。",
    comparisonTitle: "自動中央切り抜きではなく比較作業のための設計",
    comparisonBody: "一般的な一括切り抜きは、すべての元画像に同じ座標を適用します。三脚撮影には便利ですが、距離や余白が異なる人物・商品写真には合わないことがあります。各レイヤーは位置、倍率、回転、表示、透明度を個別に保ち、出力だけを同じ比率とサイズにできます。",
    workflowTitle: "失敗を減らす3ステップ",
    workflowIntro: "毎回同じ順序で作業すると、やり直しや過度な拡大を減らせます。",
    workflow: [
      { title: "1. 用途を先に決める", body: "画像を動かす前に、最終比率と出力サイズを決めます。投稿、商品一覧、動画など用途からフレームを選びます。" },
      { title: "2. 基準画像に合わせる", body: "1枚を配置してロックし、次の画像の透明度を下げて目、輪郭、商品の端、水平線などを重ねます。" },
      { title: "3. 各レイヤーを単独で確認する", body: "透明度を100%に戻し、四辺の切れ、回転、鮮明さ、余白を確認してから書き出します。" },
    ],
    limitsTitle: "できることと限界",
    limitsBody: "Overlay Cropはブラウザ内で画像を整列・切り抜くツールです。存在しない細部の生成、写真修復、背景除去、ファイルの永久保存は行いません。小さい画像を大きく拡大するとぼやけることがあり、巨大な画像を複数扱う場合は端末メモリの影響を受けます。",
    resourceLink: "比率と拡大リスクの計算ツールを使う",
  },
  es: {
    whyTitle: "Las mismas dimensiones no garantizan el mismo encuadre",
    whyBody: "Dos archivos pueden medir 1080 × 1350 píxeles y aun así saltar al verlos en un carrusel porque el rostro, el producto o el horizonte están en posiciones distintas. Overlay Crop separa el marco de salida compartido de la posición y el zoom de cada imagen para igualar tanto las dimensiones como la composición.",
    comparisonTitle: "Diseñado para comparar, no para recortar automáticamente al centro",
    comparisonBody: "Las herramientas por lotes suelen aplicar las mismas coordenadas a todos los originales. Eso funciona con fotos tomadas desde un trípode, pero no con retratos a distintas distancias o productos con márgenes diferentes. Cada capa conserva su propia escala, posición, rotación, visibilidad y opacidad, mientras todas las exportaciones comparten proporción y tamaño final.",
    workflowTitle: "Un flujo fiable en tres pasos",
    workflowIntro: "Seguir siempre el mismo orden reduce reajustes y evita ampliaciones o cortes accidentales.",
    workflow: [
      { title: "1. Define el destino", body: "Elige la proporción y las dimensiones finales antes de mover las imágenes. El formato de publicación debe determinar el marco." },
      { title: "2. Alinea con una referencia", body: "Coloca una capa, bloquéala y reduce la opacidad de la siguiente para hacer coincidir ojos, bordes, esquinas u horizonte." },
      { title: "3. Revisa cada capa por separado", body: "Vuelve al 100% de opacidad, revisa los cuatro bordes y la nitidez al tamaño final, y después exporta el conjunto." },
    ],
    limitsTitle: "Qué hace la herramienta y qué no hace",
    limitsBody: "Overlay Crop alinea y recorta imágenes localmente en el navegador. No inventa detalle, restaura fotografías dañadas, elimina fondos ni almacena permanentemente tus archivos. Una ampliación excesiva puede verse borrosa y los originales muy grandes dependen de la memoria disponible en el dispositivo.",
    resourceLink: "Usar las herramientas de proporción y riesgo de ampliación",
  },
};

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildPageMetadata({ locale, key: "home", title: copy[locale].heroTitle });
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale];
  const k = homeKnowledge[locale];
  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Overlay Crop",
    url: absoluteUrl(`/${locale}/editor/`),
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires a modern web browser with Canvas support",
    inLanguage: localeLanguageTags[locale],
    description: t.heroText,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: t.features,
  };
  return <>
    <SiteHeader locale={locale} labels={t} />
    <main>
      <JsonLd data={webApp} />
      <section className="hero"><div className="heroBadge">Browser-based · No upload</div><h1>{t.heroTitle}</h1><p>{t.heroText}</p><Link className="primaryCta" href={`/${locale}/editor/`}>{t.start}</Link></section>
      <AdSlot label={t.ad} slot={process.env.NEXT_PUBLIC_ADSENSE_HOME_SLOT} />
      <section className="contentSection"><div><p className="eyebrow">PRIVACY</p><h2>{t.privateTitle}</h2><p>{t.privateText}</p></div><div className="privacyGraphic"><span>01</span><b>LOCAL PROCESSING</b><small>Files remain on your device</small></div></section>
      <section className="featureSection"><p className="eyebrow">FEATURES</p><h2>{t.featuresTitle}</h2><div className="featureGrid">{t.features.map((feature, i) => <article key={feature}><span>0{i + 1}</span><h3>{feature}</h3></article>)}</div></section>
      <section className="knowledgeSection">
        <article><p className="eyebrow">COMPOSITION</p><h2>{k.whyTitle}</h2><p>{k.whyBody}</p></article>
        <article><p className="eyebrow">WORKFLOW</p><h2>{k.comparisonTitle}</h2><p>{k.comparisonBody}</p></article>
      </section>
      <section className="workflowSection"><p className="eyebrow">PRACTICAL WORKFLOW</p><h2>{k.workflowTitle}</h2><p>{k.workflowIntro}</p><div className="workflowGrid">{k.workflow.map((step)=><article key={step.title}><h3>{step.title}</h3><p>{step.body}</p></article>)}</div></section>
      <section className="contentSection"><div><p className="eyebrow">LIMITATIONS</p><h2>{k.limitsTitle}</h2><p>{k.limitsBody}</p><Link className="textLink" href={`/${locale}/resources/`}>{k.resourceLink} →</Link></div><div className="privacyGraphic"><span>05</span><b>LOCAL & MANUAL</b><small>No artificial detail generation</small></div></section>
      <section id="guide" className="guideSection"><p className="eyebrow">GUIDE</p><h2>{t.guideTitle}</h2><p>{t.guideBody}</p><Link href={`/${locale}/how-it-works/`}>{t.navGuide} →</Link></section>
      <section className="guidePreview"><p className="eyebrow">POPULAR GUIDES</p><h2>{pageCopy[locale].guidesTitle}</h2><div className="articleGrid">{guidesByLocale[locale].slice(0,4).map((g)=><article className="articleCard" key={g.slug}><h3>{g.title}</h3><p>{g.description}</p><Link href={`/${locale}/guides/${g.slug}/`}>{pageCopy[locale].read}: {g.title} →</Link></article>)}</div><Link className="textLink" href={`/${locale}/guides/`}>{pageCopy[locale].guidesTitle} →</Link></section>
      <AdSlot label={t.ad} slot={process.env.NEXT_PUBLIC_ADSENSE_CONTENT_SLOT} />
    </main>
    <SiteFooter locale={locale} /><CookieBanner text={t.cookieText} accept={t.accept} reject={t.reject} />
  </>;
}
