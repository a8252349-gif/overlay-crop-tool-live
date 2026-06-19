import type { MetadataRoute } from "next";
import { guidesByLocale } from "@/lib/content";
import { locales } from "@/lib/i18n";
import { CONTENT_UPDATED_AT, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const fixedPages = [
  "",
  "editor",
  "how-it-works",
  "guides",
  "faq",
  "about",
  "contact",
  "privacy",
  "terms",
  "cookies",
] as const;

function localizedAlternates(path: string) {
  return Object.fromEntries(
    locales.map((locale) => [locale, `${SITE_URL}/${locale}/${path}`]),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const rows: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of fixedPages) {
      const suffix = page ? `${page}/` : "";
      rows.push({
        url: `${SITE_URL}/${locale}/${suffix}`,
        lastModified: CONTENT_UPDATED_AT,
        changeFrequency:
          page === "editor" ? "monthly" : page === "guides" || page === "" ? "weekly" : "yearly",
        priority: page === "" ? 1 : page === "editor" ? 0.95 : page === "guides" ? 0.85 : 0.6,
        alternates: {
          languages: {
            ...localizedAlternates(suffix),
            "x-default": `${SITE_URL}/en/${suffix}`,
          },
        },
      });
    }

    for (const guide of guidesByLocale[locale]) {
      const suffix = `guides/${guide.slug}/`;
      rows.push({
        url: `${SITE_URL}/${locale}/${suffix}`,
        lastModified: CONTENT_UPDATED_AT,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: {
            ...localizedAlternates(suffix),
            "x-default": `${SITE_URL}/en/${suffix}`,
          },
        },
      });
    }
  }

  return rows;
}
