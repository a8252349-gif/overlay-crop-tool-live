"use client";

import { useEffect } from "react";

declare global { interface Window { adsbygoogle?: unknown[] } }

export function AdSlot({ label, slot }: { label: string; slot?: string }) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  useEffect(() => {
    if (!client || !slot) return;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
  }, [client, slot]);
  if (!client || !slot) return <div className="adPlaceholder"><span>{label}</span></div>;
  return <ins className="adsbygoogle" style={{ display: "block" }} data-ad-client={client} data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true" />;
}
