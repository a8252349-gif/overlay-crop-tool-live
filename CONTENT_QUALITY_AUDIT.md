# Overlay Crop content-quality revision

Updated: 2026-06-29

This revision was prepared after an AdSense low-value-content decision. It does not guarantee approval. The goal is to publish genuinely useful pages that solve distinct image-cropping problems, explain limitations honestly, and avoid thin keyword variants.

## What changed

### 1. Consolidated overlapping guide pages

Earlier pages with substantially overlapping search intent remain consolidated and redirected to stronger canonical guides. The redirects are defined in `render.yaml`.

Examples of consolidated legacy topics include:

- `crop-multiple-images-same-size`
- `crop-multiple-images-same-frame`
- `align-before-after-photos`
- `before-and-after-photo-alignment-tool`
- `overlay-two-images-online`
- `overlay-two-images-online-for-comparison`
- `best-instagram-image-sizes`

### 2. Expanded the library to 15 distinct guides per locale

Each locale now contains 15 guides, for 60 localized guide pages in total:

1. online image-cropping fundamentals
2. cropping multiple images to identical dimensions
3. aligning before-and-after photographs
4. aspect ratio versus resolution
5. matching face position across photographs
6. preparing frames for before-and-after video
7. browser-local image processing and privacy
8. troubleshooting blurry or low-quality crops
9. consistent product-photo cropping
10. portrait crops that protect hair, hands, joints, and clothing details
11. destination-aware cropping for social media
12. mixed portrait and landscape photos in one carousel
13. transparent PNG cropping and edge preservation
14. large-image editing in mobile browsers
15. repeatable and honest progress-photo documentation

The six new topics address different practical problems rather than repeating the same keyword with a slightly different title.

### 3. Enforced a minimum localized content length

The visible article body includes the introduction, instructional sections, checklists or notes, and FAQs. Automated checks confirmed that every one of the 60 localized guides contains more than 800 characters of body content.

Minimum measured body length by locale:

- English: 2,173 characters
- Korean: 824 characters
- Japanese: 802 characters
- Spanish: 901 characters

These are minimums, not targets for keyword stuffing. The pages remain structured around useful instructions, examples, limitations, and decisions a user must make.

### 4. Added original visual explanations

The six new guides include original SVG illustrations covering:

- portrait-safe crop boundaries
- social-media formats and safe areas
- mixed-orientation carousel frames
- transparent PNG padding and edges
- mobile memory and large-image workflows
- repeatable progress-photo capture

### 5. Kept useful interactive resources

The localized `/[locale]/resources/` page includes:

- an aspect-ratio calculator
- an enlargement-risk checker

These tools provide functional value beyond informational articles.

### 6. Maintained trust and usability content

The site retains substantive localized Home, Editor, How It Works, FAQ, About, Privacy, Terms, Cookies, Contact, and Resources pages. It explains local browser processing, output-quality limits, unsupported expectations, and practical workflow choices.

### 7. Kept advertising disabled during review

Recommended review-stage values:

```env
NEXT_PUBLIC_ADSENSE_SCRIPT_ENABLED=false
NEXT_PUBLIC_ADSENSE_MANUAL_ADS_ENABLED=false
NEXT_PUBLIC_SHOW_AD_PLACEHOLDERS=false
```

The ownership meta tag may remain active through `NEXT_PUBLIC_ADSENSE_CLIENT`.

## Build and quality verification

- Production build: passed
- TypeScript check: passed
- ESLint: passed
- Static routes generated: 114
- Localized guide pages generated: 60
- Sitemap URLs: 104
- Internal links checked: 2,676
- Broken internal links: 0
- Missing guide illustrations: 0

## Deployment verification

After deployment, verify:

1. `/en/guides/`, `/ko/guides/`, `/ja/guides/`, and `/es/guides/` each show 15 guides.
2. `/sitemap.xml` contains 104 URLs.
3. The six new guide slugs open in all four languages.
4. `/en/resources/` and its localized equivalents load both calculators.
5. Legacy overlapping guide URLs redirect to the intended canonical guide.
6. No blank advertisement placeholders appear during review.
7. Important pages work on mobile and desktop.
8. Search Console can fetch representative home, editor, resource, and guide pages.

## Suggested resubmission process

Deploy and verify the live pages first. Submit the refreshed sitemap, request indexing for a small representative set of high-value pages, and allow Google time to recrawl the revised site before requesting another AdSense review. Approval cannot be guaranteed by article count or character length alone; the live site must remain useful, navigable, original, and technically accessible.
