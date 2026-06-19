# Priority keyword guides

This build adds five SEO-focused guides in English, Korean, Japanese, and Spanish.
Each guide is statically generated with its own metadata, canonical URL, hreflang links, Article structured data, RSS/Atom entry, and sitemap entry.

## New guide slugs

- `crop-multiple-images-to-the-same-size`
- `align-before-and-after-photos`
- `before-and-after-photo-alignment-tool`
- `overlay-two-images-online-for-comparison`
- `crop-multiple-images-same-frame`

The three older overlapping guides were removed from the generated guide list to reduce keyword cannibalization:

- `crop-multiple-images-same-size`
- `align-before-after-photos`
- `overlay-two-images-online`

## Deployment

Replace the files in the current GitHub project with this build, then run:

```bash
git add .
git commit -m "Add multilingual priority keyword guides"
git push
```

Render will rebuild the static site automatically when the repository is connected.
After deployment, resubmit `https://overlaycrop.com/sitemap.xml` in Google Search Console if needed.
