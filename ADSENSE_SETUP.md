# AdSense activation checklist

The site is prepared so approval-stage settings and live-ad settings are separate.

## Already configured

- Publisher ownership meta tag through `NEXT_PUBLIC_ADSENSE_CLIENT`
- Root-level `/ads.txt` for publisher `pub-9328837907414732`
- Privacy, cookie, contact, about, terms, and guide pages
- Hidden manual ad units until they are explicitly enabled
- No empty advertisement placeholders on the production site
- A privacy/cookie settings button in the footer

## During review

Use these Render values:

```env
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-9328837907414732
NEXT_PUBLIC_ADSENSE_SCRIPT_ENABLED=false
NEXT_PUBLIC_GOOGLE_CMP_ENABLED=false
NEXT_PUBLIC_ADSENSE_MANUAL_ADS_ENABLED=false
NEXT_PUBLIC_SHOW_AD_PLACEHOLDERS=false
```

The ownership meta tag remains present even while the AdSense JavaScript is disabled.

## After the site status becomes Ready

### 1. Publish Google's consent message

In AdSense:

1. Open **Privacy & messaging**.
2. Create and publish a **European regulations** message for `overlaycrop.com`.
3. After the message is published, change Render to:

```env
NEXT_PUBLIC_ADSENSE_SCRIPT_ENABLED=true
NEXT_PUBLIC_GOOGLE_CMP_ENABLED=true
```

This disables the site's simple preference banner so it does not compete with Google's certified CMP.

### 2. Choose automatic or manual ads

#### Automatic ads

Enable Auto ads in AdSense. Add page exclusions for the four editor routes:

```text
https://overlaycrop.com/en/editor/
https://overlaycrop.com/ko/editor/
https://overlaycrop.com/ja/editor/
https://overlaycrop.com/es/editor/
```

Keep the editor excluded so advertising does not cover or interrupt the image controls.

#### Manual ads

Create responsive display units in AdSense and add the slot IDs in Render:

```env
NEXT_PUBLIC_ADSENSE_HOME_SLOT=0000000000
NEXT_PUBLIC_ADSENSE_CONTENT_SLOT=0000000000
NEXT_PUBLIC_ADSENSE_EDITOR_SLOT=
NEXT_PUBLIC_ADSENSE_MANUAL_ADS_ENABLED=true
```

Leave `NEXT_PUBLIC_ADSENSE_EDITOR_SLOT` empty unless a carefully tested ad below the editor is desired.

### 3. Verify public files

Open:

```text
https://overlaycrop.com/ads.txt
```

It should show:

```text
google.com, pub-9328837907414732, DIRECT, f08c47fec0942fa0
```

### 4. Redeploy

Any `NEXT_PUBLIC_` variable is inserted at build time. After changing one in Render, trigger a new deployment.
