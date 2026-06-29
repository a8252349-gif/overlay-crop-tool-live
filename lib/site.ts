import type { Locale } from "@/lib/i18n";

export const SITE_NAME = "Overlay Crop";
export const SITE_DESCRIPTION =
  "Overlay, align, and crop up to five images to the same frame, aspect ratio, and output dimensions.";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://overlaycrop.com").replace(/\/$/, "");
export const CONTENT_UPDATED_AT = new Date("2026-06-29T00:00:00.000Z");

export const localeLanguageTags: Record<Locale, string> = {
  en: "en-US",
  ko: "ko-KR",
  ja: "ja-JP",
  es: "es-ES",
};

export const localeFeedTitles: Record<Locale, string> = {
  en: "Overlay Crop Guides",
  ko: "오버레이 크롭 가이드",
  ja: "Overlay Crop ガイド",
  es: "Guías de Overlay Crop",
};

export function absoluteUrl(path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
