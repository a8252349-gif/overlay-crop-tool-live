import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
const adsenseScriptEnabled = process.env.NEXT_PUBLIC_ADSENSE_SCRIPT_ENABLED === "true";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
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
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${SITE_NAME} image overlay and crop tool` }],
  },
  twitter: { card: "summary_large_image", title: SITE_NAME, description: SITE_DESCRIPTION, images: ["/og-image.png"] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: googleVerification ? { google: googleVerification } : undefined,
  other: adsenseClient ? { "google-adsense-account": adsenseClient } : undefined,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const graph = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: SITE_NAME,
      alternateName: "OverlayCrop",
      url: SITE_URL,
      inLanguage: ["en", "ko", "ja", "es"],
      description: SITE_DESCRIPTION,
      publisher: { "@id": absoluteUrl("/#organization") },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: absoluteUrl("/icon-512.png"), width: 512, height: 512 },
      ...(contactEmail ? { contactPoint: { "@type": "ContactPoint", contactType: "customer support", email: contactEmail, availableLanguage: ["English", "Korean", "Japanese", "Spanish"] } } : {}),
    },
  ];

  return (
    <html lang="en">
      <body>
        <JsonLd data={graph} />
        {children}
        {adsenseClient && adsenseScriptEnabled && (
          <Script id="adsense" async strategy="afterInteractive" crossOrigin="anonymous" src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`} />
        )}
      </body>
    </html>
  );
}
