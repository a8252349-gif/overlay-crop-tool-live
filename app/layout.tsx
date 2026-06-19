import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  manifest: "/manifest.webmanifest",
  alternates: {
    types: {
      "application/rss+xml": [{ url: "/rss.xml", title: `${SITE_NAME} RSS` }],
      "application/atom+xml": [{ url: "/atom.xml", title: `${SITE_NAME} Atom` }],
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: { card: "summary", title: SITE_NAME, description: SITE_DESCRIPTION },
  other: adsenseClient ? { "google-adsense-account": adsenseClient } : undefined,
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}{adsenseClient&&<Script id="adsense" async strategy="afterInteractive" crossOrigin="anonymous" src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}/>}</body></html>;
}
