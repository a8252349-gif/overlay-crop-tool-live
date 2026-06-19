import { guidesByLocale } from "@/lib/content";
import { locales } from "@/lib/i18n";
import {
  CONTENT_UPDATED_AT,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  escapeXml,
  localeFeedTitles,
  localeLanguageTags,
} from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const items = locales.flatMap((locale) =>
    guidesByLocale[locale].map((guide) => {
      const url = `${SITE_URL}/${locale}/guides/${guide.slug}/`;
      return `<item>
        <title>${escapeXml(guide.title)}</title>
        <link>${escapeXml(url)}</link>
        <guid isPermaLink="true">${escapeXml(url)}</guid>
        <description>${escapeXml(guide.description)}</description>
        <language>${localeLanguageTags[locale]}</language>
        <pubDate>${CONTENT_UPDATED_AT.toUTCString()}</pubDate>
      </item>`;
    }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${SITE_NAME} Guides`)}</title>
    <link>${escapeXml(SITE_URL)}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-US</language>
    <lastBuildDate>${CONTENT_UPDATED_AT.toUTCString()}</lastBuildDate>
    <atom:link href="${escapeXml(`${SITE_URL}/rss.xml`)}" rel="self" type="application/rss+xml" />
    ${locales
      .map(
        (locale) =>
          `<category domain="${escapeXml(`${SITE_URL}/${locale}/guides/`)}">${escapeXml(localeFeedTitles[locale])}</category>`,
      )
      .join("\n    ")}
    ${items.join("\n    ")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
