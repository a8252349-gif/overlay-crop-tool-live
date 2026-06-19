"use client";

declare global {
  interface Window {
    googlefc?: {
      callbackQueue?: Array<() => void>;
      showRevocationMessage?: () => void;
    };
  }
}

const CONSENT_KEY = "overlay-crop-consent";
const CONSENT_EVENT = "overlay-crop-consent-change";

export function PrivacySettingsButton({ label }: { label: string }) {
  const googleCmpEnabled = process.env.NEXT_PUBLIC_GOOGLE_CMP_ENABLED === "true";

  const openSettings = () => {
    if (googleCmpEnabled) {
      window.googlefc = window.googlefc || {};
      window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
      window.googlefc.callbackQueue.push(() => {
        window.googlefc?.showRevocationMessage?.();
      });
      return;
    }

    window.localStorage.removeItem(CONSENT_KEY);
    window.dispatchEvent(new Event(CONSENT_EVENT));
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  return (
    <button type="button" className="footerPrivacyButton" onClick={openSettings}>
      {label}
    </button>
  );
}
