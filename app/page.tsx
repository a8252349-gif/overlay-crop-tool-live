"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Page() {
  useEffect(() => {
    const language = navigator.language.toLowerCase();
    const locale = language.startsWith("ko") ? "ko" : language.startsWith("ja") ? "ja" : language.startsWith("es") ? "es" : "en";
    window.location.replace(`/${locale}/`);
  }, []);
  return <main className="legal"><h1>Overlay Crop</h1><p>Choose a language to continue.</p><p><Link href="/en/">English</Link> · <Link href="/ko/">한국어</Link> · <Link href="/ja/">日本語</Link> · <Link href="/es/">Español</Link></p></main>;
}
