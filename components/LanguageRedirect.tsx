"use client";

import { useEffect } from "react";

export function LanguageRedirect() {
  useEffect(() => {
    const language = navigator.language.toLowerCase();
    const locale = language.startsWith("ko") ? "ko" : language.startsWith("ja") ? "ja" : language.startsWith("es") ? "es" : "en";
    const stored = window.localStorage.getItem("overlay-crop-locale");
    window.location.replace(`/${stored || locale}/`);
  }, []);
  return null;
}
