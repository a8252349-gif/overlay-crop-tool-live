import type { Metadata } from "next";
import { copy, locales, type Locale } from "@/lib/i18n";
import { absoluteUrl, localeLanguageTags, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

const descriptions: Record<Locale, Record<string, string>> = {
  en: {
    home: SITE_DESCRIPTION,
    editor: "Overlay up to five images, adjust each photo's zoom, position and opacity, then export identical crops privately in your browser.",
    "how-it-works": "Learn how to upload, overlay, align and crop multiple images to the same aspect ratio and output dimensions.",
    guides: "Practical guides for matching before-and-after photos, choosing crop ratios and exporting consistent image sets.",
    faq: "Answers about local browser processing, supported image formats, privacy, output quality and using the Overlay Crop editor.",
    about: "Learn why Overlay Crop was built and how the private browser-based image alignment tool works.",
    contact: "Contact Overlay Crop about the image editor, accessibility, privacy, technical issues or site feedback.",
    privacy: "Read how Overlay Crop handles images, cookies, analytics, advertising and contact information.",
    terms: "Read the terms for using the Overlay Crop browser-based image alignment and cropping tool.",
    cookies: "Learn how Overlay Crop may use necessary, analytics and advertising cookies and how consent is managed.",
  },
  ko: {
    home: "최대 5장의 사진을 겹쳐 위치와 투명도를 맞추고 동일한 비율과 크기로 자르는 브라우저 기반 이미지 도구입니다.",
    editor: "최대 5장의 사진을 겹쳐 확대, 위치, 투명도를 조정하고 같은 구도와 출력 크기로 브라우저에서 안전하게 저장하세요.",
    "how-it-works": "여러 사진을 업로드하고 겹쳐 정렬한 뒤 동일한 비율과 크기로 자르는 방법을 안내합니다.",
    guides: "보정 전후 사진 정렬, 이미지 비율 선택, 동일 크기 출력에 관한 실용적인 가이드를 확인하세요.",
    faq: "브라우저 내부 처리, 지원 파일, 개인정보, 출력 화질과 오버레이 크롭 편집기 사용법을 안내합니다.",
    about: "오버레이 크롭을 만든 이유와 브라우저 기반 사진 정렬 도구의 작동 방식을 소개합니다.",
    contact: "편집기 기능, 접근성, 개인정보, 오류 또는 사이트 개선 의견을 오버레이 크롭에 전달하세요.",
    privacy: "사진 처리, 쿠키, 분석, 광고 및 문의 정보에 관한 오버레이 크롭 개인정보처리방침입니다.",
    terms: "브라우저 기반 사진 겹치기 및 크롭 도구인 오버레이 크롭의 이용약관입니다.",
    cookies: "오버레이 크롭의 필수·분석·광고 쿠키 사용과 동의 관리 방식을 안내합니다.",
  },
  ja: {
    home: "最大5枚の画像を重ねて位置と透明度を合わせ、同じ比率とサイズで切り抜くブラウザツールです。",
    editor: "最大5枚の画像を重ね、拡大・位置・透明度を調整し、同じ構図とサイズでブラウザ内に保存できます。",
    "how-it-works": "複数画像をアップロードし、重ねて整列して同じ比率とサイズで切り抜く方法を説明します。",
    guides: "ビフォー・アフター画像の整列、比率の選び方、同一サイズでの出力に関する実用ガイドです。",
    faq: "ブラウザ内処理、対応形式、プライバシー、出力品質、編集ツールの使い方を説明します。",
    about: "Overlay Cropを開発した目的と、ブラウザベースの画像整列ツールの仕組みを紹介します。",
    contact: "編集機能、アクセシビリティ、プライバシー、技術的な問題についてお問い合わせください。",
    privacy: "画像処理、Cookie、解析、広告、お問い合わせ情報に関するプライバシーポリシーです。",
    terms: "ブラウザベースの画像整列・切り抜きツールOverlay Cropの利用規約です。",
    cookies: "必要・解析・広告Cookieの使用方法と同意管理について説明します。",
  },
  es: {
    home: "Superpone hasta cinco imágenes, ajusta posición y opacidad, y recórtalas con la misma proporción y tamaño en el navegador.",
    editor: "Superpone hasta cinco imágenes, ajusta zoom, posición y opacidad, y exporta recortes idénticos de forma privada en el navegador.",
    "how-it-works": "Aprende a subir, superponer, alinear y recortar varias imágenes con la misma proporción y dimensiones.",
    guides: "Guías prácticas para alinear fotos de antes y después, elegir proporciones y exportar series uniformes.",
    faq: "Respuestas sobre procesamiento local, formatos compatibles, privacidad, calidad de salida y uso del editor.",
    about: "Descubre por qué se creó Overlay Crop y cómo funciona su herramienta privada de alineación de imágenes.",
    contact: "Contacta con Overlay Crop sobre el editor, accesibilidad, privacidad, problemas técnicos o sugerencias.",
    privacy: "Consulta cómo Overlay Crop gestiona imágenes, cookies, analítica, publicidad y datos de contacto.",
    terms: "Consulta las condiciones de uso de la herramienta de alineación y recorte de imágenes Overlay Crop.",
    cookies: "Información sobre cookies necesarias, analíticas y publicitarias y la gestión del consentimiento.",
  },
};

export function localeAlternates(path = "") {
  const suffix = path ? `${path.replace(/^\/+|\/+$/g, "")}/` : "";
  return {
    canonical: absoluteUrl(`/en/${suffix}`),
    languages: Object.fromEntries([
      ...locales.map((locale) => [locale, absoluteUrl(`/${locale}/${suffix}`)]),
      ["x-default", absoluteUrl(`/en/${suffix}`)],
    ]),
  };
}

export function localizedAlternates(locale: Locale, path = "") {
  const suffix = path ? `${path.replace(/^\/+|\/+$/g, "")}/` : "";
  return {
    canonical: absoluteUrl(`/${locale}/${suffix}`),
    languages: Object.fromEntries([
      ...locales.map((item) => [item, absoluteUrl(`/${item}/${suffix}`)]),
      ["x-default", absoluteUrl(`/en/${suffix}`)],
    ]),
  };
}

export function buildPageMetadata({
  locale,
  key,
  title,
  description,
  path = "",
}: {
  locale: Locale;
  key: keyof (typeof descriptions)["en"];
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const finalDescription = description || descriptions[locale][key];
  const url = absoluteUrl(`/${locale}/${path ? `${path.replace(/^\/+|\/+$/g, "")}/` : ""}`);
  return {
    title,
    description: finalDescription,
    alternates: localizedAlternates(locale, path),
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description: finalDescription,
      url,
      locale: localeLanguageTags[locale].replace("-", "_"),
      alternateLocale: locales.filter((item) => item !== locale).map((item) => localeLanguageTags[item].replace("-", "_")),
      images: [{ url: absoluteUrl("/og-image.png"), width: 1200, height: 630, alt: `${SITE_NAME} image overlay and crop tool` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: finalDescription,
      images: [absoluteUrl("/og-image.png")],
    },
    robots: { index: true, follow: true },
  };
}

export function pageDescription(locale: Locale, key: keyof (typeof descriptions)["en"]) {
  return descriptions[locale][key];
}
