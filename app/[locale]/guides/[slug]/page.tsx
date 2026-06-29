import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";
import { getGuide, guidesByLocale } from "@/lib/content";
import { copy, isLocale, locales, type Locale } from "@/lib/i18n";
import { pageCopy } from "@/lib/page-copy";
import { buildPageMetadata } from "@/lib/seo";
import { absoluteUrl, CONTENT_UPDATED_AT, localeLanguageTags, SITE_NAME } from "@/lib/site";

const updatedLabels: Record<Locale, string> = {
  en: "Reviewed and updated June 29, 2026",
  ko: "2026년 6월 29일 검토 및 업데이트",
  ja: "2026年6月29日確認・更新",
  es: "Revisado y actualizado el 29 de junio de 2026",
};
const takeawayLabels: Record<Locale, string> = { en: "Key takeaways", ko: "핵심 요약", ja: "要点", es: "Puntos clave" };
const contentsLabels: Record<Locale, string> = { en: "In this guide", ko: "이 가이드의 구성", ja: "このガイドの内容", es: "Contenido de la guía" };
const faqLabels: Record<Locale, string> = { en: "Frequently asked questions", ko: "자주 묻는 질문", ja: "よくある質問", es: "Preguntas frecuentes" };
const relatedLabels: Record<Locale, string> = { en: "Continue learning", ko: "함께 보면 좋은 가이드", ja: "関連ガイド", es: "Guías relacionadas" };

function anchor(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

export function generateStaticParams() {
  return locales.flatMap((locale) => guidesByLocale[locale].map((g) => ({ locale, slug: g.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const g = getGuide(locale, slug);
  if (!g) return {};
  return buildPageMetadata({ locale, key: "guides", title: g.title, description: g.description, path: `guides/${slug}` });
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const g = getGuide(locale, slug);
  if (!g) notFound();

  const currentIndex = guidesByLocale[locale].findIndex((item) => item.slug === slug);
  const related = [1, 2, 3]
    .map((offset) => guidesByLocale[locale][(currentIndex + offset) % guidesByLocale[locale].length])
    .filter(Boolean);
  const url = absoluteUrl(`/${locale}/guides/${slug}/`);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: g.description,
    image: [absoluteUrl(g.illustration), absoluteUrl("/og-image.png")],
    datePublished: "2026-06-19T00:00:00.000Z",
    dateModified: CONTENT_UPDATED_AT.toISOString(),
    inLanguage: localeLanguageTags[locale],
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", "@id": absoluteUrl("/#organization"), name: SITE_NAME, url: absoluteUrl(`/${locale}/about/`) },
    publisher: { "@type": "Organization", "@id": absoluteUrl("/#organization"), name: SITE_NAME, logo: { "@type": "ImageObject", url: absoluteUrl("/icon-512.png") } },
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: g.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <ContentPage locale={locale}>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqJsonLd} />
      <Breadcrumbs locale={locale} items={[{ name: pageCopy[locale].guidesTitle, path: `/${locale}/guides/` }, { name: g.title }]} />
      <article className="guideArticle">
        <header className="guideHeader">
          <p className="eyebrow">{g.category}</p>
          <h1>{g.title}</h1>
          <div className="articleMeta"><span>{updatedLabels[locale]}</span><span>{g.readTime}</span></div>
          <p className="lead">{g.intro}</p>
        </header>

        <figure className="guideIllustration">
          <Image src={g.illustration} width={1200} height={600} alt={g.title} priority />
        </figure>

        <aside className="takeawayBox" aria-labelledby="takeaways-title">
          <h2 id="takeaways-title">{takeawayLabels[locale]}</h2>
          <ul>{g.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
        </aside>

        <nav className="guideToc" aria-label={contentsLabels[locale]}>
          <h2>{contentsLabels[locale]}</h2>
          <ol>{g.sections.map((section) => <li key={section.heading}><a href={`#${anchor(section.heading)}`}>{section.heading}</a></li>)}</ol>
        </nav>

        {g.sections.map((section) => (
          <section key={section.heading} id={anchor(section.heading)}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {section.bullets && <ul>{section.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
            {section.note && <p className="guideNote"><strong>Note:</strong> {section.note}</p>}
            {section.table && (
              <div className="tableScroll" role="region" aria-label={section.heading} tabIndex={0}>
                <table>
                  <thead><tr>{section.table.headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr></thead>
                  <tbody>{section.table.rows.map((row, index) => <tr key={`${row[0]}-${index}`}>{row.map((cell, cellIndex) => cellIndex === 0 ? <th key={cellIndex} scope="row">{cell}</th> : <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody>
                </table>
              </div>
            )}
          </section>
        ))}

        <section>
          <h2>{faqLabels[locale]}</h2>
          {g.faq.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
        </section>

        <div className="articleCta">
          <h2>{copy[locale].editorTitle}</h2>
          <p>{copy[locale].guideBody}</p>
          <Link className="primaryCta" href={`/${locale}/editor/`}>{copy[locale].start}</Link>
        </div>

        <section className="relatedGuides">
          <h2>{relatedLabels[locale]}</h2>
          <ul>{related.map((item) => <li key={item.slug}><Link href={`/${locale}/guides/${item.slug}/`}>{item.title}</Link><p>{item.description}</p></li>)}</ul>
        </section>
      </article>
    </ContentPage>
  );
}
