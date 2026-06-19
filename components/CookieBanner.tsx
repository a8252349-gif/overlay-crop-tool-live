"use client";

import { useEffect, useState } from "react";

export function CookieBanner({ text, accept, reject }: { text: string; accept: string; reject: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(!localStorage.getItem("overlay-crop-consent")); }, []);
  if (!visible) return null;
  const save = (value: string) => { localStorage.setItem("overlay-crop-consent", value); setVisible(false); };
  return <div className="cookieBanner"><p>{text}</p><div><button onClick={() => save("accepted")}>{accept}</button><button className="secondary" onClick={() => save("rejected")}>{reject}</button></div></div>;
}
