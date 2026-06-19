"use client";

import { useSyncExternalStore } from "react";

const CONSENT_KEY = "overlay-crop-consent";
const CONSENT_EVENT = "overlay-crop-consent-change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_EVENT, callback);
  };
}

function getSnapshot() {
  return window.localStorage.getItem(CONSENT_KEY) || "pending";
}

function getServerSnapshot() {
  return "hidden";
}

export function CookieBanner({ text, accept, reject }: { text: string; accept: string; reject: string }) {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (consent !== "pending") return null;

  const save = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(CONSENT_KEY, value);
    window.dispatchEvent(new Event(CONSENT_EVENT));
  };

  return <div className="cookieBanner"><p>{text}</p><div><button onClick={() => save("accepted")}>{accept}</button><button className="secondary" onClick={() => save("rejected")}>{reject}</button></div></div>;
}
