"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdSlot({ label, slot }: { label: string; slot?: string }) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const manualAdsEnabled = process.env.NEXT_PUBLIC_ADSENSE_MANUAL_ADS_ENABLED === "true";
  const showPlaceholders = process.env.NEXT_PUBLIC_SHOW_AD_PLACEHOLDERS === "true";

  useEffect(() => {
    if (!manualAdsEnabled || !client || !slot) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense may reject duplicate initialization during development hot reload.
    }
  }, [client, manualAdsEnabled, slot]);

  if (!manualAdsEnabled || !client || !slot) {
    return showPlaceholders ? (
      <div className="adPlaceholder" aria-hidden="true">
        <span>{label}</span>
      </div>
    ) : null;
  }

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
