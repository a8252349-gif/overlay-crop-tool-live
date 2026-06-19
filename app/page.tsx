import type { Metadata } from "next";
import Link from "next/link";
import { LanguageRedirect } from "@/components/LanguageRedirect";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Choose your language",
  description: "Choose English, Korean, Japanese or Spanish for the Overlay Crop image alignment and cropping tool.",
  alternates: {
    canonical: absoluteUrl("/en/"),
    languages: {
      en: absoluteUrl("/en/"),
      ko: absoluteUrl("/ko/"),
      ja: absoluteUrl("/ja/"),
      es: absoluteUrl("/es/"),
      "x-default": absoluteUrl("/"),
    },
  },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <main className="legal languageLanding">
      <LanguageRedirect />
      <h1>Overlay Crop</h1>
      <p>Choose a language to continue.</p>
      <nav aria-label="Language selection">
        <Link href="/en/">English</Link> · <Link href="/ko/">한국어</Link> · <Link href="/ja/">日本語</Link> · <Link href="/es/">Español</Link>
      </nav>
      <noscript><p>JavaScript is not required for the editor pages. Select a language above.</p></noscript>
    </main>
  );
}
