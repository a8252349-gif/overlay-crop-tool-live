# Overlay Crop

A deployable multilingual Next.js web app for overlaying up to five images, aligning them with independent opacity/position/scale controls, and exporting identical crops.

## Included

- Working browser-only crop editor; selected images are not uploaded
- Up to five layers, opacity, visibility, lock, move, zoom and rotation
- Shared aspect ratio and output dimensions
- Individual download and ZIP download
- English, Korean, Japanese and Spanish routes
- Browser language landing page
- SEO metadata, canonical links, hreflang, robots and sitemap
- Eight search guides in all four languages (32 localized guide pages)
- How it works, FAQ, About, Contact, Privacy, Terms and Cookie Policy
- Article structured data and internal links to the editor
- AdSense script/slot structure and ad placeholders before account setup
- Cloudflare Pages and Render static deployment configuration

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The static export is generated in `out/`.

## Environment variables

Copy `.env.example` to `.env.local` and set:

```env
NEXT_PUBLIC_SITE_URL=https://overlaycrop.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@your-domain.com
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-0000000000000000
NEXT_PUBLIC_ADSENSE_HOME_SLOT=0000000000
NEXT_PUBLIC_ADSENSE_CONTENT_SLOT=0000000000
NEXT_PUBLIC_ADSENSE_EDITOR_SLOT=0000000000
```

Do not add AdSense values until you have a real account and ad units. Replace `public/ads.txt.example` with `public/ads.txt` using the exact line supplied by AdSense after approval.

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `out`
- Add the environment variables in Pages settings

## Render Static Site

`render.yaml` is included. The equivalent manual settings are:

- Build command: `npm install && npm run build`
- Publish directory: `out`

## Before AdSense review

- Connect a real domain and contact email
- Proofread each language
- Replace placeholder policy/contact details where appropriate
- Verify every editor control on desktop and mobile
- Submit `sitemap.xml` to Google Search Console
- Confirm important pages are indexed
- Configure a Google-certified consent management platform where required
- Add the AdSense site verification value only when applying

## Search-engine endpoints

After deployment, verify these public URLs:

- `/sitemap.xml` — multilingual XML sitemap with hreflang alternates
- `/robots.txt` — crawler rules and sitemap declaration
- `/rss.xml` — RSS 2.0 feed for all multilingual guides
- `/feed.xml` — RSS-compatible alias
- `/atom.xml` — Atom feed
- `/manifest.webmanifest` — web app manifest

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain before building so every canonical, sitemap, and feed URL uses the correct domain.

## Search Console / SEO hardening included

This version includes:

- Explicit UTF-8 XML sitemap at `/sitemap.xml`
- Plain-text fallback sitemap at `/sitemap.txt`
- Crawlable `robots.txt` without blocking Next.js CSS or JavaScript assets
- Absolute canonical and hreflang URLs for English, Korean, Japanese, and Spanish
- Unique page titles and meta descriptions
- WebSite, Organization, WebApplication, Article, and Breadcrumb structured data
- Search-result favicon and Open Graph image
- Google Search Console verification environment variable support
- Descriptive internal links and related-guide links

After deployment, open these URLs and confirm they load:

- `https://overlaycrop.com/robots.txt`
- `https://overlaycrop.com/sitemap.xml`
- `https://overlaycrop.com/sitemap.txt`

Render environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://overlaycrop.com
NEXT_PUBLIC_CONTACT_EMAIL=your-working-email@example.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

The Google verification value is only needed when using the HTML meta-tag verification method.

## Editor gestures

- Desktop: drag to move the selected image. Use the mouse wheel or trackpad over the canvas to zoom around the pointer position. The page will not scroll while the pointer is over the canvas.
- Mobile/tablet: drag with one finger to move. Pinch with two fingers to zoom around the gesture center; move both fingers together to pan while pinching.
- Locked layers ignore movement and zoom gestures.

## Multilingual priority keyword guides

This version includes five additional search-focused guides in English, Korean, Japanese, and Spanish. They are generated from `lib/priority-guides.ts`, displayed first on the home page and guide index, linked to one another, and included automatically in the XML/text sitemaps and RSS/Atom feeds. See `KEYWORD_GUIDES.md` for the exact URLs.
