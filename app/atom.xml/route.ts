import { guidesByLocale } from "@/lib/content";
import { locales } from "@/lib/i18n";
import {
  CONTENT_UPDATED_AT,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  escapeXml,
  localeLanguageTags,
} from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const entries = locales.flatMap((locale) =>
    guidesByLocale[locale].map((guide) => {
      const url = `${SITE_URL}/${locale}/guides/${guide.slug}/`;
      return `<entry>
        <title>${escapeXml(guide.title)}</title>
        <id>${escapeXml(url)}</id>
        <link href="${escapeXml(url)}" />
        <updated>${CONTENT_UPDATED_AT.toISOString()}</updated>
        <summary>${escapeXml(guide.description)}</summary>
        <content type="text">${escapeXml(guide.intro)}</content>
        <category term="${localeLanguageTags[locale]}" />
      </entry>`;
    }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(`${SITE_NAME} Guides`)}</title>
  <subtitle>${escapeXml(SITE_DESCRIPTION)}</subtitle>
  <id>${escapeXml(SITE_URL)}</id>
  <link href="${escapeXml(SITE_URL)}" />
  <link href="${escapeXml(`${SITE_URL}/atom.xml`)}" rel="self" type="application/atom+xml" />
  <updated>${CONTENT_UPDATED_AT.toISOString()}</updated>
  ${entries.join("\n  ")}
</feed>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
