import { guidesByLocale } from "@/lib/content";
import { locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";
const fixedPages = ["", "editor", "how-it-works", "guides", "faq", "about", "contact", "privacy", "terms", "cookies"] as const;

function url(locale: string, path: string) {
  const suffix = path ? `${path.replace(/^\/+|\/+$/g, "")}/` : "";
  return `${SITE_URL}/${locale}/${suffix}`;
}

export async function GET() {
  const urls: string[] = [];
  for (const locale of locales) {
    for (const page of fixedPages) urls.push(url(locale, page));
    for (const guide of guidesByLocale[locale]) urls.push(url(locale, `guides/${guide.slug}`));
  }
  return new Response(`${urls.join("\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=0, s-maxage=86400" },
  });
}
