# Guide library

The guide library is generated from `lib/content.ts` in English, Korean, Japanese, and Spanish. There are 15 distinct topics per locale and 60 localized guide pages in total.

## Current guide slugs

- `image-crop-online`
- `crop-multiple-images-to-the-same-size`
- `align-before-and-after-photos`
- `aspect-ratio-vs-resolution`
- `match-face-position-across-photos`
- `prepare-before-after-video`
- `crop-photos-without-uploading`
- `image-crop-quality-troubleshooting`
- `consistent-product-photo-cropping`
- `crop-portrait-photos-without-cutting-subject`
- `crop-images-for-social-media`
- `crop-mixed-orientation-photos-for-carousel`
- `crop-transparent-png-images`
- `crop-large-images-on-mobile`
- `create-consistent-progress-photos`

Each guide solves a separate user problem and includes localized metadata, canonical and hreflang links, Article and FAQ structured data, instructional sections, limitations, related internal links, and a sitemap/feed entry.

## Content-length validation

Every localized article body exceeds 800 characters. The automated minimums in this build are:

- English: 2,173
- Korean: 824
- Japanese: 802
- Spanish: 901

The count includes the visible introduction, body instructions, notes/checklists, and FAQs. It excludes page-navigation text and unrelated footer content.

## Consolidated legacy URLs

Several earlier pages had substantially overlapping search intent. They are no longer generated as separate articles. Permanent redirects in `render.yaml` send them to the most relevant current guide.

Do not recreate thin variants simply to target another keyword. Expand an existing guide when the underlying task is the same, and add a new guide only when it solves a clearly different problem.
