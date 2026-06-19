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
NEXT_PUBLIC_SITE_URL=https://your-domain.com
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
