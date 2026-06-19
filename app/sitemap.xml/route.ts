import { guidesByLocale } from "@/lib/content";
import { locales } from "@/lib/i18n";
import { escapeXml, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const LAST_MODIFIED = "2026-06-19";
const fixedPages = ["", "editor", "how-it-works", "guides", "faq", "about", "contact", "privacy", "terms", "cookies"] as const;

function localizedUrl(locale: string, path: string) {
  const suffix = path ? `${path.replace(/^\/+|\/+$/g, "")}/` : "";
  return `${SITE_URL}/${locale}/${suffix}`;
}

function urlEntry(locale: string, path: string) {
  const loc = localizedUrl(locale, path);
  const links = [
    ...locales.map((item) => `<xhtml:link rel="alternate" hreflang="${item}" href="${escapeXml(localizedUrl(item, path))}" />`),
    `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(localizedUrl("en", path))}" />`,
  ].join("");
  return `<url><loc>${escapeXml(loc)}</loc><lastmod>${LAST_MODIFIED}</lastmod>${links}</url>`;
}

export async function GET() {
  const urls: string[] = [];
  for (const locale of locales) {
    for (const page of fixedPages) urls.push(urlEntry(locale, page));
    for (const guide of guidesByLocale[locale]) urls.push(urlEntry(locale, `guides/${guide.slug}`));
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join("")}</urlset>`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
