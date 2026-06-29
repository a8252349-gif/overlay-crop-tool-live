import type { Locale } from "./i18n";

export type GuideTable = { headers: string[]; rows: string[][] };
export type GuideSection = { heading: string; paragraphs: string[]; bullets?: string[]; note?: string; table?: GuideTable };
export type Guide = { slug: string; title: string; description: string; intro: string; category: string; readTime: string; illustration: string; takeaways: string[]; sections: GuideSection[]; faq: { q: string; a: string }[] };

export const guidesByLocale: Record<Locale, Guide[]> = {
  "en": [
    {
      "slug": "image-crop-online",
      "title": "Image Crop Online: A Practical Guide to Better Framing",
      "description": "Learn how to crop an image online without losing the subject, choosing the wrong ratio, or exporting a needlessly blurry file.",
      "intro": "Online cropping is not just removing the edges of a photograph. A good crop controls attention, preserves important detail, matches the destination format, and produces an output file that is large enough without pretending to create detail that was never present. This guide explains the full workflow and shows when Overlay Crop is more useful than a basic center-crop tool.",
      "category": "Cropping basics",
      "readTime": "12 min",
      "illustration": "/guides/image-crop-online.svg",
      "takeaways": [
        "Choose the destination ratio before moving the image.",
        "Treat composition and output resolution as separate decisions.",
        "Review the result at full opacity and final size before downloading."
      ],
      "sections": [
        {
          "heading": "1. Decide where the image will be used",
          "paragraphs": [
            "Start with the destination rather than the source file. A website hero, profile photo, marketplace listing, vertical story, and printed portrait all need different shapes. Choosing the destination first prevents repeated cropping and keeps the subject in a sensible position.",
            "If the destination has a fixed size requirement, enter that width and height before you begin. If it only specifies a ratio, choose the ratio first and select a practical pixel size later."
          ],
          "table": {
            "headers": [
              "Use case",
              "Useful ratio",
              "Example output"
            ],
            "rows": [
              [
                "Profile or square grid",
                "1:1",
                "1080 × 1080"
              ],
              [
                "Portrait post or product card",
                "4:5",
                "1080 × 1350"
              ],
              [
                "Traditional portrait",
                "3:4",
                "1200 × 1600"
              ],
              [
                "Vertical video frame",
                "9:16",
                "1080 × 1920"
              ],
              [
                "Wide presentation or video",
                "16:9",
                "1920 × 1080"
              ]
            ]
          }
        },
        {
          "heading": "2. Separate crop ratio from resolution",
          "paragraphs": [
            "Aspect ratio describes shape; resolution describes the number of pixels. A 4:5 crop can be 800 × 1000, 1080 × 1350, or 2400 × 3000. They share the same shape but not the same detail or file size.",
            "Choose a ratio that fits the layout, then choose dimensions appropriate for the destination and the smallest source image. Large output numbers do not restore detail to a small original."
          ],
          "note": "A 600-pixel-wide source exported at 2400 pixels is still based on 600 pixels of real source detail."
        },
        {
          "heading": "3. Place the subject deliberately",
          "paragraphs": [
            "Move the image behind the fixed crop frame until the most important subject is positioned intentionally. Leave breathing room around faces, hands, product edges, and text. Avoid cutting at joints or trimming a logo unless the destination design requires it.",
            "Use visual anchors such as the eyes, horizon, building edges, or the center line of a product. The best crop is not always mathematically centered; it is the crop that makes the subject easiest to understand."
          ]
        },
        {
          "heading": "4. Zoom only as much as necessary",
          "paragraphs": [
            "Zooming helps remove distracting background and match the subject scale across several photos. However, excessive zoom discards pixels and can make the result soft. Compare the required output width with the visible portion of the source before enlarging heavily.",
            "On desktop, use the mouse wheel over the canvas or the zoom control. On mobile, pinch with two fingers. The numeric zoom field is useful when several layers must use comparable values."
          ]
        },
        {
          "heading": "5. Check edges, orientation, and transparency",
          "paragraphs": [
            "Before exporting, inspect all four edges. Check for clipped hair, fingers, product corners, shadows, or important background context. Verify that phone photos are not rotated incorrectly and that transparent PNG areas appear as expected.",
            "When several images are loaded, restore each layer to 100% opacity and review it alone. Transparency is excellent for alignment but can hide edge problems if left enabled."
          ]
        },
        {
          "heading": "6. Export and verify the final file",
          "paragraphs": [
            "Download the selected image or export all layers as a ZIP. Open at least one downloaded file outside the editor and confirm its dimensions, orientation, sharpness, and file type. This final check catches browser download mistakes and unsuitable output dimensions before publication.",
            "Keep the original files. Cropping creates new files and should not replace the only copy of a photograph."
          ],
          "bullets": [
            "Confirm pixel dimensions in the file information panel.",
            "View at 100% to judge sharpness.",
            "Check that the subject is not clipped in the actual download.",
            "Rename files descriptively before publishing."
          ]
        }
      ],
      "faq": [
        {
          "q": "Can I crop an image online without uploading it?",
          "a": "Yes. Overlay Crop processes selected images locally in the browser. The editing file is not uploaded to the Overlay Crop server."
        },
        {
          "q": "What output size should I choose?",
          "a": "Use the dimensions requested by the destination. When there is no fixed requirement, choose a size close to the intended display size and avoid enlarging far beyond the source."
        },
        {
          "q": "Why does a crop look blurry after export?",
          "a": "The crop may contain too few source pixels for the chosen output size, or the image may have been enlarged too aggressively."
        },
        {
          "q": "Does cropping change the original file?",
          "a": "No. The browser generates a new file; the original remains unchanged."
        }
      ]
    },
    {
      "slug": "crop-multiple-images-to-the-same-size",
      "title": "How to Crop Multiple Images to the Same Size",
      "description": "Use one shared crop frame while adjusting the position and zoom of every photo independently.",
      "intro": "A batch crop that uses identical source coordinates works only when every photograph was captured from the same camera position. Overlay Crop uses a different method: one shared output frame with independent movement and zoom for each image. This produces consistent dimensions without forcing different subjects into the wrong position.",
      "category": "Multi-image workflow",
      "readTime": "14 min",
      "illustration": "/guides/same-size.svg",
      "takeaways": [
        "Use one reference layer to define the visual standard.",
        "Match subject position, not just file edges.",
        "Export every layer with one ratio and one output size."
      ],
      "sections": [
        {
          "heading": "1. Understand the difference between same size and same crop",
          "paragraphs": [
            "“Same size” means that every exported file has identical width and height. “Same crop coordinates” means cutting the same location from every original. Those are not the same operation.",
            "When subjects appear in different places, identical coordinates produce inconsistent results. A shared output frame lets each source move independently while the final files remain identical."
          ]
        },
        {
          "heading": "2. Choose a reference image",
          "paragraphs": [
            "Pick the clearest or most important image as the reference. Position it first and decide the ideal subject scale, headroom, side margins, and background balance. Lock the layer when it looks correct.",
            "The reference is a visual rule for the remaining images, not merely the first file in the list. For portraits, use the eye line and chin spacing. For products, use the object center, baseline, and visible margin."
          ]
        },
        {
          "heading": "3. Align each remaining layer",
          "paragraphs": [
            "Select the next image, lower its opacity, and move or zoom it until the important landmarks overlap the reference. Repeat for each layer. Up to five images can be prepared in one session.",
            "If a source has a different perspective, perfect overlap may be impossible. Prioritize the part viewers will compare, such as the face, product body, or room outline."
          ]
        },
        {
          "heading": "4. Use a repeatable quality checklist",
          "paragraphs": [
            "Review every layer separately before export. Consistency should be visible in the subject as well as the file dimensions."
          ],
          "bullets": [
            "Similar subject scale",
            "Similar top and side margins",
            "No accidental clipping",
            "Correct rotation",
            "Acceptable sharpness",
            "100% opacity during final review"
          ]
        },
        {
          "heading": "5. Pick output dimensions based on the smallest source",
          "paragraphs": [
            "The smallest or most heavily cropped source is the limiting file. If one image contains only 700 visible pixels across the crop, exporting all images at 3000 pixels does not make that layer genuinely detailed.",
            "Choose an output that all layers can support. For web sets, consistency and clean composition usually matter more than extremely large dimensions."
          ]
        },
        {
          "heading": "6. Export and use the set",
          "paragraphs": [
            "Download the images individually or as a ZIP. Because every file has matching dimensions, the set can be used in carousels, before-and-after sliders, product grids, staff directories, progress tracking, and video transitions without layout jumps."
          ],
          "table": {
            "headers": [
              "Project",
              "What to match first",
              "Common output"
            ],
            "rows": [
              [
                "Portrait set",
                "Eyes and face scale",
                "1:1 or 4:5"
              ],
              [
                "Product catalog",
                "Object center and baseline",
                "1:1 or 4:5"
              ],
              [
                "Room comparison",
                "Corners and horizon",
                "4:3 or 16:9"
              ],
              [
                "Vertical progress video",
                "Main subject center",
                "9:16"
              ]
            ]
          }
        }
      ],
      "faq": [
        {
          "q": "Can the originals have different resolutions?",
          "a": "Yes. Each layer can be moved and scaled independently, while all exported files use the selected dimensions."
        },
        {
          "q": "Should every layer use the same zoom value?",
          "a": "No. Different source framing often requires different zoom values. The visual result should match, not the numeric value."
        },
        {
          "q": "How many images can I prepare together?",
          "a": "Up to five images in one editing session."
        },
        {
          "q": "Can I download the whole set at once?",
          "a": "Yes. Use the ZIP export after checking every layer."
        }
      ]
    },
    {
      "slug": "align-before-and-after-photos",
      "title": "How to Align Before and After Photos Accurately",
      "description": "Match scale, position, and stable landmarks so the change is visible without a distracting jump.",
      "intro": "Before-and-after images are credible and easy to compare only when the framing is reasonably consistent. Alignment does not mean hiding real differences. It means reducing accidental changes in crop, scale, and position so viewers can focus on the intended edit, restoration, renovation, or progress.",
      "category": "Before and after",
      "readTime": "13 min",
      "illustration": "/guides/before-after.svg",
      "takeaways": [
        "Adjust scale before fine position.",
        "Use two or three stable reference points.",
        "Do not use framing changes to exaggerate the result."
      ],
      "sections": [
        {
          "heading": "1. Choose a trustworthy reference",
          "paragraphs": [
            "Use the original, earliest, or least altered photo as the fixed reference. Place it first and lock it. If the camera positions differ, decide which area matters most to the comparison and state the limitation when context is important."
          ]
        },
        {
          "heading": "2. Lower the upper layer opacity",
          "paragraphs": [
            "Set the comparison layer to roughly 40–60% opacity. Doubled edges immediately show whether the second image is too large, too small, or shifted. High-contrast images may need lower opacity; dark images may need more."
          ]
        },
        {
          "heading": "3. Match scale before position",
          "paragraphs": [
            "First compare a measurable feature: the distance between eyes, width of a product, door frame, or room corner. Change zoom until the feature has the same apparent size. Only then move the image horizontally and vertically.",
            "Trying to fix position before scale leads to repeated corrections because every zoom change also alters alignment."
          ]
        },
        {
          "heading": "4. Prioritize stable landmarks",
          "paragraphs": [
            "Choose points unlikely to have changed because of the edit. For a portrait, use eyes, nose bridge, ear position, or shoulders. For a room, use walls and windows rather than movable furniture. For a product, use hard edges rather than flexible packaging."
          ],
          "bullets": [
            "Use at least two reference points.",
            "Prefer structural features over temporary details.",
            "Accept small differences caused by lens perspective or posture."
          ]
        },
        {
          "heading": "5. Keep the comparison honest",
          "paragraphs": [
            "Avoid zooming one image more tightly simply to make a result appear larger or more dramatic. Preserve similar field of view and subject scale. If the before and after were captured in different lighting or positions, do not imply that alignment removes those differences.",
            "Transparent alignment is a preparation tool, not a substitute for accurate captions and context."
          ]
        },
        {
          "heading": "6. Test the final transition",
          "paragraphs": [
            "Return both layers to full opacity and switch visibility on and off. If the subject appears to pulse, revisit scale. If it slides, revisit position. Export equal dimensions and test the result in the actual slider, carousel, or video."
          ],
          "table": {
            "headers": [
              "Visible problem",
              "Likely cause",
              "Best correction"
            ],
            "rows": [
              [
                "Subject grows or shrinks",
                "Scale mismatch",
                "Adjust zoom"
              ],
              [
                "Subject slides sideways",
                "Position mismatch",
                "Move the layer"
              ],
              [
                "Edges never align",
                "Perspective or pose changed",
                "Prioritize the comparison area"
              ],
              [
                "Transition looks soft",
                "Source crop too small",
                "Reduce output size or zoom"
              ]
            ]
          }
        }
      ],
      "faq": [
        {
          "q": "What opacity is best?",
          "a": "About 50% is a useful starting point, but adjust it so both layers remain visible."
        },
        {
          "q": "Can photos from different cameras be aligned?",
          "a": "Often yes, but lens and perspective differences may prevent perfect overlap."
        },
        {
          "q": "Should I rotate an image during alignment?",
          "a": "Use small rotation corrections when a horizon or head tilt differs because of camera orientation, but do not distort the subject to force a false match."
        },
        {
          "q": "Can I align more than two dates?",
          "a": "Yes. Use one reference and align each additional layer to it."
        }
      ]
    },
    {
      "slug": "aspect-ratio-vs-resolution",
      "title": "Aspect Ratio vs Resolution: A Complete Cropping Reference",
      "description": "Understand image shape, pixel dimensions, enlargement, and how to choose an output that fits the destination.",
      "intro": "Many cropping mistakes come from treating aspect ratio and resolution as the same thing. They are related but answer different questions: ratio controls shape, while resolution controls pixel dimensions and available detail. This guide includes practical calculations and a decision process for output settings.",
      "category": "Technical reference",
      "readTime": "11 min",
      "illustration": "/guides/ratio-resolution.svg",
      "takeaways": [
        "Ratio controls shape; resolution controls pixel count.",
        "Choose the destination ratio first.",
        "Avoid exporting much larger than the visible source crop."
      ],
      "sections": [
        {
          "heading": "1. Aspect ratio describes shape",
          "paragraphs": [
            "Aspect ratio is the relationship between width and height. A 1:1 image is square. A 4:5 image is taller than it is wide. Ratio does not tell you how many pixels the file contains.",
            "The same 4:5 shape can exist at many sizes."
          ],
          "table": {
            "headers": [
              "Ratio",
              "Example dimensions",
              "Typical layout"
            ],
            "rows": [
              [
                "1:1",
                "1080 × 1080",
                "Square grid or profile"
              ],
              [
                "4:5",
                "1080 × 1350",
                "Portrait card or post"
              ],
              [
                "3:4",
                "1200 × 1600",
                "Portrait and print"
              ],
              [
                "9:16",
                "1080 × 1920",
                "Vertical screen"
              ],
              [
                "16:9",
                "1920 × 1080",
                "Wide video or presentation"
              ]
            ]
          }
        },
        {
          "heading": "2. Resolution describes pixel dimensions",
          "paragraphs": [
            "Resolution in this context means the width and height in pixels. More pixels can preserve more detail, but only when the source actually contains that detail. File size, compression, and sharpness also affect the visible result."
          ]
        },
        {
          "heading": "3. Calculate dimensions from a ratio",
          "paragraphs": [
            "To find height from width, multiply the width by the ratio height and divide by the ratio width. For a 4:5 output that is 1080 pixels wide: 1080 × 5 ÷ 4 = 1350 pixels high.",
            "The resources page includes a calculator so you can enter any width, height, or ratio without doing the arithmetic manually."
          ]
        },
        {
          "heading": "4. Understand effective crop resolution",
          "paragraphs": [
            "Cropping removes source pixels. A 4000-pixel-wide image may contain only 1200 visible pixels after a tight crop. That 1200-pixel crop is the meaningful source width for judging enlargement.",
            "If the output is 2400 pixels wide, the browser must interpolate roughly two output pixels for every visible source pixel."
          ]
        },
        {
          "heading": "5. Choose output dimensions responsibly",
          "paragraphs": [
            "Use the destination specification when one exists. Otherwise, choose dimensions close to the maximum display size and supported by the smallest effective crop in the set. A moderate, sharp output is better than a huge but soft file."
          ]
        },
        {
          "heading": "6. Match both ratio and dimensions for multi-image layouts",
          "paragraphs": [
            "Matching ratio prevents shape changes. Matching dimensions prevents layout shifts and inconsistent handling in sliders, carousels, and video editors. For a coordinated set, use both."
          ],
          "note": "A consistent set can still contain different compression levels. Inspect sharpness after export, not just the file dimensions."
        }
      ],
      "faq": [
        {
          "q": "Can two 4:5 images have different quality?",
          "a": "Yes. They can have the same shape but very different pixel counts, compression, focus, and source detail."
        },
        {
          "q": "Does changing resolution change the crop?",
          "a": "Not necessarily. The composition can stay the same while the exported width and height change."
        },
        {
          "q": "How can I avoid upscaling?",
          "a": "Choose output dimensions no larger than the visible source crop whenever possible."
        },
        {
          "q": "Is DPI important for web images?",
          "a": "For web display, pixel dimensions are the primary concern. Printing workflows may also use physical size and DPI."
        }
      ]
    },
    {
      "slug": "match-face-position-across-photos",
      "title": "How to Match Face Position Across Multiple Photos",
      "description": "Use facial landmarks and consistent margins to create stable portrait sets and comparison images.",
      "intro": "Portraits are especially sensitive to small alignment errors. When eyes move between frames or the face changes scale, a carousel or fade feels unstable. This method uses a few reliable landmarks instead of trying to force every facial outline to overlap.",
      "category": "Portrait alignment",
      "readTime": "10 min",
      "illustration": "/guides/face-alignment.svg",
      "takeaways": [
        "Use the eye line as the main horizontal reference.",
        "Match scale with facial distances before moving the layer.",
        "Allow for real differences in expression, pose, and lens perspective."
      ],
      "sections": [
        {
          "heading": "1. Start with the eye line",
          "paragraphs": [
            "The eyes are usually the most stable visual anchor in a portrait. Align the pupils or inner eye corners horizontally before working on the rest of the face. A consistent eye line makes a sequence feel calm even when expressions change."
          ]
        },
        {
          "heading": "2. Match facial scale",
          "paragraphs": [
            "Compare the eye-to-eye distance, face width, or distance from the eye line to the chin. If the eyes align but the chin remains too high or low, the scale is probably different. Adjust zoom before moving the image again."
          ]
        },
        {
          "heading": "3. Use the nose and ears as secondary checks",
          "paragraphs": [
            "The nose bridge helps with vertical alignment, while ear position can reveal head rotation. Do not expect every landmark to overlap when the subject turned, smiled, or changed posture."
          ]
        },
        {
          "heading": "4. Preserve natural margins",
          "paragraphs": [
            "Keep similar space above the hair and around the chin and shoulders. Avoid a tight crop on one image and generous space on another. Consistent margins often matter more than matching every contour."
          ]
        },
        {
          "heading": "5. Handle different expressions and poses",
          "paragraphs": [
            "A smile changes cheek, mouth, and jaw outlines. Head tilt changes apparent eye height. In these cases, align the center of the face and the eye line, then accept real anatomical movement instead of distorting the crop."
          ]
        },
        {
          "heading": "6. Review at the final display size",
          "paragraphs": [
            "A mismatch that looks dramatic at 400% zoom may be invisible in a normal profile card. Check the exported images at their real display size and switch between them quickly."
          ],
          "bullets": [
            "Eye line remains stable",
            "Face scale feels consistent",
            "Headroom is similar",
            "Shoulders do not jump unnecessarily",
            "No hair, chin, or ears are accidentally clipped"
          ]
        }
      ],
      "faq": [
        {
          "q": "Should both eyes overlap perfectly?",
          "a": "Only when pose and perspective are similar. Prioritize the overall eye line and center of the face."
        },
        {
          "q": "What if one photo is taken from closer range?",
          "a": "Reduce or increase that layer’s zoom until facial distances match the reference."
        },
        {
          "q": "Can I use this for ID-style portraits?",
          "a": "Yes, provided the output follows the specific requirements of the organization receiving the image."
        },
        {
          "q": "Why do ears not align when the eyes do?",
          "a": "The head angle or camera perspective probably changed. Do not force a false match."
        }
      ]
    },
    {
      "slug": "prepare-before-after-video",
      "title": "How to Prepare Photos for a Before-and-After Video",
      "description": "Create equal-size frames that stay stable during crossfades, reels, slideshows, and progress videos.",
      "intro": "A before-and-after video looks polished when the subject remains visually stationary and only the intended change appears. Most “shaking” transitions are caused by inconsistent crop, scale, or output dimensions before the images reach the video editor.",
      "category": "Video preparation",
      "readTime": "10 min",
      "illustration": "/guides/video-frames.svg",
      "takeaways": [
        "Choose the video ratio before aligning images.",
        "Use one reference frame for every date or version.",
        "Test a short crossfade before producing the full video."
      ],
      "sections": [
        {
          "heading": "1. Choose the final video canvas",
          "paragraphs": [
            "Use 9:16 for a full vertical screen, 16:9 for wide video, or 1:1 for a square presentation. Set the crop frame to the same ratio before aligning any image.",
            "Leave safety space near the edges because video interfaces, captions, and controls can cover content."
          ]
        },
        {
          "heading": "2. Pick a master reference frame",
          "paragraphs": [
            "Choose the clearest frame or the frame that best represents the desired final composition. Position and lock it. Align every other date or version to this same master rather than aligning each image only to the previous one."
          ]
        },
        {
          "heading": "3. Match scale and center",
          "paragraphs": [
            "Lower opacity and align the main subject. For portraits, use the eyes and shoulders. For renovations, use walls and openings. For products, use the object outline and baseline.",
            "A consistent subject center prevents the image from drifting during a fade."
          ]
        },
        {
          "heading": "4. Export identical dimensions",
          "paragraphs": [
            "Video editors may automatically scale images with different dimensions. Exporting every frame at the exact same width and height prevents hidden auto-fit behavior and makes timing easier."
          ]
        },
        {
          "heading": "5. Test a two-frame crossfade",
          "paragraphs": [
            "Before editing a long sequence, place the first and last images in the timeline and add a short dissolve. If the subject grows, correct zoom. If it slides, correct position. If the frame rotates, correct angle."
          ],
          "table": {
            "headers": [
              "Transition symptom",
              "Correction"
            ],
            "rows": [
              [
                "Pulsing or breathing",
                "Match scale"
              ],
              [
                "Sliding left or right",
                "Match horizontal position"
              ],
              [
                "Jumping up or down",
                "Match vertical position"
              ],
              [
                "Soft frame",
                "Use a smaller output or less zoom"
              ],
              [
                "Important content covered",
                "Increase safe margins"
              ]
            ]
          }
        },
        {
          "heading": "6. Keep the narrative accurate",
          "paragraphs": [
            "Use consistent captions and dates. Avoid crops that exaggerate change, and disclose when the camera, lighting, or pose changed significantly. Visual polish should improve clarity, not alter the meaning of the comparison."
          ]
        }
      ],
      "faq": [
        {
          "q": "What ratio is best for a reel?",
          "a": "A 9:16 canvas is commonly used for full-screen vertical video, but verify the current requirements of the platform where you will publish."
        },
        {
          "q": "Should I align each image to the previous image?",
          "a": "Use one master reference for the whole sequence to avoid cumulative drift."
        },
        {
          "q": "Why does my video editor still zoom the images?",
          "a": "Check project settings and disable automatic pan-and-zoom effects. Also confirm all files have identical dimensions."
        },
        {
          "q": "Can I prepare more than two frames?",
          "a": "Yes. Align up to five frames in one session and repeat with the same reference if you have more."
        }
      ]
    },
    {
      "slug": "crop-photos-without-uploading",
      "title": "How to Crop Photos Without Uploading Them to a Server",
      "description": "Understand local browser processing, what stays on the device, and what ordinary website data may still be transmitted.",
      "intro": "“No upload” should be explained precisely. In Overlay Crop, the selected image files are decoded, transformed, and exported in the browser. They are not sent to the Overlay Crop editing server. The website itself still uses normal network requests to load code, fonts, security services, and—when enabled with consent—analytics or advertising.",
      "category": "Privacy and processing",
      "readTime": "9 min",
      "illustration": "/guides/local-processing.svg",
      "takeaways": [
        "Selected image bytes remain in the browser editing session.",
        "Normal website connection data is separate from the image file.",
        "Use a trusted personal device for highly sensitive work."
      ],
      "sections": [
        {
          "heading": "1. What local browser processing means",
          "paragraphs": [
            "When you select a file, the browser grants the page temporary access to that file for the current session. JavaScript and Canvas APIs read the image in memory, apply the position and crop, and create a new downloadable file.",
            "The selected image is not submitted through an upload form to the Overlay Crop server."
          ]
        },
        {
          "heading": "2. What still travels over the network",
          "paragraphs": [
            "The page itself must be downloaded. Hosting and security providers may receive an IP address, browser information, requested URL, time, and diagnostic details. If analytics or advertising is later enabled, those services may process additional identifiers according to consent and applicable law.",
            "This technical website data is different from uploading the photograph being edited."
          ]
        },
        {
          "heading": "3. How to verify the behavior",
          "paragraphs": [
            "Open browser developer tools and watch the Network panel while selecting and editing an image. You should see page resources and ordinary service requests, but not an upload containing the selected photo.",
            "You can also load the editor, disconnect from the network, and continue a local editing session, although a refreshed page may need the network again."
          ]
        },
        {
          "heading": "4. Good privacy habits",
          "paragraphs": [
            "Local processing reduces unnecessary transfer, but it does not replace good device security."
          ],
          "bullets": [
            "Use a device and browser you trust.",
            "Avoid sensitive work on shared or public computers.",
            "Close the tab after finishing.",
            "Keep originals in secure storage.",
            "Review the privacy policy and cookie settings."
          ]
        },
        {
          "heading": "5. Browser memory and session limits",
          "paragraphs": [
            "Large images consume device memory. A mobile browser may reload the tab if several high-resolution files are opened at once. This is a device limitation, not a server upload. Work with fewer files or smaller copies if the browser becomes unstable."
          ]
        },
        {
          "heading": "6. When a desktop application may be better",
          "paragraphs": [
            "Use a vetted offline desktop application when the material is subject to strict organizational, medical, legal, or contractual controls. Confirm your own compliance obligations before using any web tool, even one that processes files locally."
          ]
        }
      ],
      "faq": [
        {
          "q": "Are my selected photos stored by Overlay Crop?",
          "a": "No. The selected editing files are processed in the browser and are not stored on the Overlay Crop server."
        },
        {
          "q": "Does “no upload” mean no network activity at all?",
          "a": "No. The website still loads over the internet and hosting, consent, analytics, or advertising services may receive ordinary website data."
        },
        {
          "q": "Can I verify that my photo is not uploaded?",
          "a": "Yes. Inspect browser network requests or continue editing after disconnecting once the page has loaded."
        },
        {
          "q": "Is local processing suitable for every confidential workflow?",
          "a": "Not necessarily. Follow your organization’s security and compliance requirements."
        }
      ]
    },
    {
      "slug": "image-crop-quality-troubleshooting",
      "title": "Image Crop Quality Troubleshooting Guide",
      "description": "Diagnose blurry exports, wrong orientation, clipped subjects, memory problems, and inconsistent results.",
      "intro": "When a crop does not look right, the cause is usually one of five things: too few visible source pixels, excessive zoom, incorrect output expectations, orientation metadata, or device memory limits. Use this diagnostic guide before repeating the entire edit.",
      "category": "Troubleshooting",
      "readTime": "12 min",
      "illustration": "/guides/troubleshooting.svg",
      "takeaways": [
        "Identify whether the problem is composition, sharpness, file format, or performance.",
        "Compare the visible source crop with the requested output dimensions.",
        "Test one image first before exporting a large set."
      ],
      "sections": [
        {
          "heading": "1. The exported image looks blurry",
          "paragraphs": [
            "A tight crop may use only a small part of the original. Exporting that crop at a large size stretches limited detail. Reduce zoom, choose a smaller output, or start with a higher-resolution source.",
            "Also inspect the original at 100%. Motion blur, missed focus, and heavy compression cannot be corrected by changing the crop settings."
          ]
        },
        {
          "heading": "2. The subject is clipped after download",
          "paragraphs": [
            "Check the actual downloaded file, not only the editor preview. Restore opacity, review every edge, and leave a small safety margin. Very tight crops are more vulnerable when used by platforms that add their own masks or previews."
          ]
        },
        {
          "heading": "3. A phone photo appears rotated",
          "paragraphs": [
            "Some phone images store orientation as metadata. Modern browsers usually respect it, but converted or older files may behave differently. Re-save the source with the correct orientation or use the rotation control before export."
          ]
        },
        {
          "heading": "4. Transparent areas look different",
          "paragraphs": [
            "PNG and WebP can contain transparency. The editor checkerboard or canvas background may differ from the final page where the image is used. Test the download over the intended background color."
          ]
        },
        {
          "heading": "5. The browser becomes slow or reloads",
          "paragraphs": [
            "High-resolution images require substantial memory, especially when five layers are decoded at once. Close other tabs, use fewer layers, create smaller working copies, or move to a desktop browser.",
            "A 6000 × 4000 image contains 24 million pixels before additional canvas copies are created."
          ]
        },
        {
          "heading": "6. Layers do not align perfectly",
          "paragraphs": [
            "Perspective, lens distortion, camera distance, pose, and flexible objects can prevent perfect overlap. Align the area that matters most and avoid forcing unrelated edges to match."
          ]
        },
        {
          "heading": "7. Exported colors look slightly different",
          "paragraphs": [
            "Color profiles and browser color management can affect appearance. For critical print or brand workflows, convert sources to a known color space and verify in a color-managed application."
          ]
        },
        {
          "heading": "8. Quick diagnostic table",
          "paragraphs": [
            "Use the symptom to choose the first correction instead of changing every setting at once."
          ],
          "table": {
            "headers": [
              "Symptom",
              "First check",
              "Possible fix"
            ],
            "rows": [
              [
                "Soft export",
                "Visible source pixels",
                "Reduce output or zoom"
              ],
              [
                "Clipped edge",
                "Final crop boundary",
                "Add margin"
              ],
              [
                "Wrong rotation",
                "Source orientation",
                "Rotate or re-save"
              ],
              [
                "Tab reloads",
                "Device memory",
                "Use smaller files"
              ],
              [
                "Cannot align all edges",
                "Perspective",
                "Prioritize main subject"
              ],
              [
                "Unexpected background",
                "Transparency",
                "Test on final background"
              ]
            ]
          }
        }
      ],
      "faq": [
        {
          "q": "Why is the preview sharp but the export soft?",
          "a": "The preview may be displayed smaller than the exported file. Judge sharpness at 100% output size."
        },
        {
          "q": "Can the tool improve a low-resolution source?",
          "a": "It can resize the file, but it cannot recover genuine detail that is absent."
        },
        {
          "q": "Why does mobile fail with several camera photos?",
          "a": "The browser may run out of memory while decoding multiple high-resolution images."
        },
        {
          "q": "Should I use PNG or JPG?",
          "a": "Use PNG or WebP when transparency is needed. JPG is often smaller for photographs without transparency."
        }
      ]
    },
    {
      "slug": "consistent-product-photo-cropping",
      "title": "How to Create Consistent Product Photo Crops",
      "description": "Align product scale, baseline, margins, and output dimensions for a cleaner catalog or marketplace grid.",
      "intro": "Product images look professional when the objects follow a repeatable visual system. The goal is not to make every object physically identical in size. It is to apply consistent rules for framing, baseline, whitespace, and output dimensions so shoppers can compare products comfortably.",
      "category": "Product photography",
      "readTime": "11 min",
      "illustration": "/guides/product-grid.svg",
      "takeaways": [
        "Define a visual rule before processing the set.",
        "Use hard product edges and a baseline as references.",
        "Review the set as a grid, not only one image at a time."
      ],
      "sections": [
        {
          "heading": "1. Define the catalog rule",
          "paragraphs": [
            "Decide the background, ratio, subject scale, top margin, side margin, and baseline before cropping the first image. Write the rule down if several people will prepare the catalog.",
            "A shared crop frame ensures identical file dimensions, while independent layer controls accommodate products photographed at different distances."
          ]
        },
        {
          "heading": "2. Choose a representative reference product",
          "paragraphs": [
            "Use a medium-sized, clearly photographed product as the reference. Extremely tall, wide, or unusually shaped items can create a rule that works poorly for the rest of the catalog."
          ]
        },
        {
          "heading": "3. Align the baseline and visual center",
          "paragraphs": [
            "For standing products, align the lowest contact point or packaging baseline. Then adjust the horizontal center. Products with asymmetric shapes may need optical centering rather than exact geometric centering."
          ]
        },
        {
          "heading": "4. Match scale without misrepresenting size",
          "paragraphs": [
            "A consistent grid may use similar visual occupancy, but do not make a small item appear identical in physical scale to a large one when size comparison matters. Use captions or dimension graphics when necessary.",
            "The crop should improve consistency without creating a misleading product impression."
          ]
        },
        {
          "heading": "5. Preserve whitespace and shadows",
          "paragraphs": [
            "Keep similar breathing room around objects. Avoid clipping natural shadows unless the catalog style intentionally removes them. Transparent backgrounds should be tested over the actual site background."
          ]
        },
        {
          "heading": "6. Review as a complete grid",
          "paragraphs": [
            "Export a small test set and place the files in the real product grid. Look for products that jump vertically, feel too crowded, or appear unusually small. Adjust the rule before processing the entire catalog."
          ],
          "table": {
            "headers": [
              "Element",
              "Consistency target"
            ],
            "rows": [
              [
                "Output dimensions",
                "Identical for all files"
              ],
              [
                "Baseline",
                "Same visual row"
              ],
              [
                "Top margin",
                "Similar breathing room"
              ],
              [
                "Horizontal center",
                "Optical center"
              ],
              [
                "Object scale",
                "Comparable but not misleading"
              ],
              [
                "Background",
                "Same color or transparent treatment"
              ]
            ]
          }
        }
      ],
      "faq": [
        {
          "q": "Should all products fill the same percentage of the frame?",
          "a": "Not always. Use a consistent visual rule while preserving meaningful size differences where relevant."
        },
        {
          "q": "Can landscape and portrait originals be mixed?",
          "a": "Yes. Each source can be positioned independently inside the same output frame."
        },
        {
          "q": "What ratio is best for product photos?",
          "a": "Use the ratio required by your marketplace or site design. Square and 4:5 layouts are common, but the destination specification should decide."
        },
        {
          "q": "Can I keep transparent backgrounds?",
          "a": "Yes when the source format supports transparency, but test the final file on the intended background."
        }
      ]
    },
    {
      "slug": "crop-portrait-photos-without-cutting-subject",
      "title": "How to Crop Portrait Photos Without Cutting Off the Subject",
      "description": "Crop portraits online while protecting hair, hands, joints, clothing details, and natural breathing room around the person.",
      "intro": "Portrait cropping is more than placing a face in the center. A careless crop can cut hair, hands, elbows, clothing, or visual context in a way that makes the photograph feel accidental. This guide explains a repeatable method for choosing safe boundaries, controlling headroom, and adapting one portrait to square, vertical, and wide formats without weakening the subject.",
      "category": "Portrait composition",
      "readTime": "12 min",
      "illustration": "/guides/portrait-safe-crop.svg",
      "takeaways": [
        "Choose the final format before moving the portrait.",
        "Avoid cuts at joints and important clothing details.",
        "Judge the downloaded file at its real display size, not only inside the editor."
      ],
      "sections": [
        {
          "heading": "1. Identify what the portrait must communicate",
          "paragraphs": [
            "A professional headshot, family portrait, fashion image, and social profile photo do not need the same amount of body or background. Decide whether the image should emphasize expression, clothing, posture, environment, or a relationship between people. That decision determines which edges are safe to remove.",
            "For a headshot, the eye line and facial expression are usually the priority. For a full-length portrait, hands, feet, and the silhouette matter more. For an environmental portrait, removing too much background can erase the place that gives the image meaning."
          ]
        },
        {
          "heading": "2. Set the destination ratio first",
          "paragraphs": [
            "Choose 1:1, 4:5, 3:4, 9:16, or a custom ratio before fine positioning. A portrait that looks balanced in 3:4 may feel cramped in a square. Setting the ratio first prevents you from perfecting a composition that cannot survive the final format.",
            "If the same portrait will be used in several places, create separate exports rather than stretching one crop everywhere. Keep a generous master crop and make destination-specific versions from the original file."
          ]
        },
        {
          "heading": "3. Protect anatomical and visual boundaries",
          "paragraphs": [
            "Avoid cutting exactly through wrists, elbows, knees, ankles, fingertips, or the top of the head unless the composition is intentionally close. A crop slightly above or below a joint usually looks more deliberate. Also watch for glasses, hats, veils, bouquets, and loose clothing that extend beyond the body outline.",
            "When several people are present, check every face and hand, not only the central subject. A clean crop should feel intentional across all four edges."
          ]
        },
        {
          "heading": "4. Use headroom as a design choice",
          "paragraphs": [
            "Too much empty space above the head can make the subject look low in the frame, while too little can feel crowded. Match headroom to the purpose: tighter for a profile image, more generous for editorial or family photography.",
            "Do not judge headroom only by distance. Consider hair volume, hats, and the direction of the gaze. If the person looks to one side, leaving more space in that direction often creates a calmer composition."
          ]
        },
        {
          "heading": "5. Match several portraits consistently",
          "paragraphs": [
            "When preparing a staff directory, before-and-after set, or family sequence, choose one reference image. Align eye height, face size, shoulder position, and headroom instead of copying identical zoom numbers. Different source distances require different scale values.",
            "Lower the upper layer opacity to compare landmarks, then restore full opacity and inspect each image alone. Alignment should improve consistency without forcing every person into an unnatural crop."
          ]
        },
        {
          "heading": "6. Review at final size",
          "paragraphs": [
            "A crop that looks comfortable on a large editing canvas may feel too tight as a small avatar. Download a test file and view it at the size used by the website or app. Confirm that facial features remain clear and that important edges are not hidden by circular profile masks or interface overlays.",
            "Keep the original photograph unchanged. Export separate versions with descriptive filenames so that future layouts can be created without repeatedly recompressing the same crop."
          ]
        }
      ],
      "faq": [
        {
          "q": "Should the top of the head always remain visible?",
          "a": "Not always. A deliberate close crop can trim hair, but the cut should support the composition rather than look accidental."
        },
        {
          "q": "What ratio works best for portraits?",
          "a": "4:5 and 3:4 are flexible for vertical portraits, while 1:1 is useful for profile images. The destination should decide the ratio."
        },
        {
          "q": "How can I match several headshots?",
          "a": "Use one reference layer and align eye height, face scale, shoulders, and headroom for each photo."
        }
      ]
    },
    {
      "slug": "crop-images-for-social-media",
      "title": "How to Crop Images for Social Media Without Losing Important Details",
      "description": "Prepare square, portrait, story, and landscape crops while protecting faces, text, logos, and interface-safe areas.",
      "intro": "Social platforms display the same image differently in feeds, grids, previews, stories, and profile pages. A crop that looks correct in the editor can lose text, a face, or a logo after the platform adds buttons or creates a thumbnail. This guide focuses on destination-aware cropping, safe areas, and a practical export workflow for publishing one photograph across multiple layouts.",
      "category": "Social media workflow",
      "readTime": "13 min",
      "illustration": "/guides/social-media-crop.svg",
      "takeaways": [
        "Create a separate export for each important placement.",
        "Keep critical text and faces away from interface edges.",
        "Use the platform preview as the final quality check."
      ],
      "sections": [
        {
          "heading": "1. Map the placements before cropping",
          "paragraphs": [
            "List where the image will appear: feed post, profile grid, story, reel cover, thumbnail, link preview, or paid advertisement. Each placement may use a different ratio or crop. One universal file often creates unpredictable automatic trimming.",
            "Prioritize the placement that matters most, then prepare secondary versions. For example, a 4:5 feed image can be accompanied by a 1:1 grid-safe version and a 9:16 story version."
          ]
        },
        {
          "heading": "2. Separate ratio from safe area",
          "paragraphs": [
            "The crop ratio controls the outer shape, but the safe area controls where important content should remain. User-interface elements, captions, profile icons, and navigation controls can overlap the top, bottom, or sides of a vertical image.",
            "Keep faces, product names, prices, and calls to action toward the central area. Decorative background can extend closer to the edges because losing a small part of it does not change the message."
          ]
        },
        {
          "heading": "3. Protect text and logos",
          "paragraphs": [
            "Text near the border is vulnerable to automatic cropping and small-screen display. Leave generous padding around titles, subtitles, and logos. Do not rely on a one-pixel boundary that only looks safe on a desktop monitor.",
            "If text is already embedded in the image, create a test export and view it on a phone. Small type can become unreadable even when it is technically inside the crop."
          ]
        },
        {
          "heading": "4. Build a multi-format set from one source",
          "paragraphs": [
            "Load the same photograph as several layers or repeat the workflow using the original. Create a portrait crop for the feed, a square crop for the grid, and a vertical crop for stories. Reposition the subject for each format instead of merely cutting the center.",
            "When a group portrait does not fit 9:16, consider using a wider background treatment rather than enlarging until people are cut off. The purpose is to preserve meaning, not force every image into the tightest possible frame."
          ]
        },
        {
          "heading": "5. Maintain visual consistency across a campaign",
          "paragraphs": [
            "For a series of posts, define repeatable rules: eye height, product baseline, background margin, logo position, and output dimensions. Use a reference layer to compare each new image. Consistency makes a campaign look planned even when source photos were taken at different times.",
            "Do not make every subject exactly the same size if that would misrepresent a product or create awkward portrait crops. Consistency should support clarity, not erase meaningful differences."
          ]
        },
        {
          "heading": "6. Verify after upload",
          "paragraphs": [
            "Platforms can change previews, compress files, or use a different crop in the profile grid. Upload a draft or private test when possible and inspect the real interface on a phone. Check both portrait and landscape orientation.",
            "Keep the high-quality exported files and the originals. If a platform changes its layout later, you can create a new crop without downloading and recompressing an already published image."
          ]
        }
      ],
      "faq": [
        {
          "q": "Can one image size work everywhere?",
          "a": "It can work, but important placements usually benefit from separate crops because feeds, grids, stories, and thumbnails use different shapes."
        },
        {
          "q": "Where should text be placed?",
          "a": "Keep essential text and logos away from the outer edges and test the actual mobile preview."
        },
        {
          "q": "Should I enlarge a group photo to fill 9:16?",
          "a": "Only if everyone remains comfortably inside the frame. Preserving people is more important than filling every edge."
        }
      ]
    },
    {
      "slug": "crop-mixed-orientation-photos-for-carousel",
      "title": "How to Crop Landscape and Portrait Photos for One Carousel",
      "description": "Turn mixed landscape, portrait, and square images into a consistent carousel without centering every photo blindly.",
      "intro": "A carousel often combines photographs taken in different orientations. If they are uploaded without preparation, the first image can determine the frame and force later photos into awkward automatic crops. This guide shows how to choose one shared ratio, preserve the strongest part of each composition, and make the sequence feel consistent without making every photograph look identical.",
      "category": "Carousel design",
      "readTime": "12 min",
      "illustration": "/guides/mixed-carousel.svg",
      "takeaways": [
        "Choose one carousel ratio before editing the set.",
        "Recompose every image independently inside the shared frame.",
        "Evaluate the sequence as a whole, not only one slide at a time."
      ],
      "sections": [
        {
          "heading": "1. Choose the carousel frame",
          "paragraphs": [
            "Decide whether the sequence should be square, portrait, or landscape. Portrait frames usually provide more screen area in a mobile feed, while square frames are easy to reuse. Landscape frames may suit architecture, travel, or panoramic subjects.",
            "The first image is especially important because some platforms use it to define the display shape. Prepare every slide to the same dimensions before uploading."
          ]
        },
        {
          "heading": "2. Classify the source images",
          "paragraphs": [
            "Separate wide landscapes, vertical portraits, close-ups, and detail shots. Each type needs a different strategy. A wide landscape may require choosing one focal area, while a portrait may need additional side space or a looser scale.",
            "Do not assume that centering is neutral. The important subject may be off-center by design, and forcing it to the middle can weaken the photograph."
          ]
        },
        {
          "heading": "3. Establish a visual rhythm",
          "paragraphs": [
            "A strong carousel alternates scale and information intentionally. You might begin with a wide establishing image, move to a medium portrait, and finish with close details. Consistent dimensions do not require identical subject size on every slide.",
            "Use similar horizon height, margin logic, or background balance to connect images. These repeated visual cues create coherence without making the sequence monotonous."
          ]
        },
        {
          "heading": "4. Recompose landscape images carefully",
          "paragraphs": [
            "When a wide photograph enters a portrait frame, decide what can be removed. Protect the main subject, directional movement, and meaningful context. If two important subjects are far apart, a single narrow crop may not be appropriate.",
            "Avoid excessive enlargement solely to eliminate empty bars. A slightly looser crop with intentional background is often better than a tight crop that loses the scene."
          ]
        },
        {
          "heading": "5. Recompose portrait and square images",
          "paragraphs": [
            "Vertical photos may need less zoom but more attention to headroom and feet. Square images often adapt well, but check whether added top or bottom space changes the balance. Move each layer independently within the common frame.",
            "Use opacity only when matching repeated subjects or landmarks. For a storytelling carousel, exact overlap is not necessary; visual continuity is the goal."
          ]
        },
        {
          "heading": "6. Review the sequence before export",
          "paragraphs": [
            "Hide and show layers in order, or export a small test set. Check whether the subject jumps unpredictably, whether one image is much tighter than the rest, and whether text or faces approach the edges.",
            "Export all slides at identical dimensions and name them in order. This reduces upload mistakes and preserves the intended narrative."
          ]
        }
      ],
      "faq": [
        {
          "q": "What ratio is best for a carousel?",
          "a": "A portrait ratio such as 4:5 uses more mobile screen space, while 1:1 is flexible. Choose based on the content and platform."
        },
        {
          "q": "Should every subject be the same size?",
          "a": "No. Match the visual rhythm and margins, but allow establishing shots and detail shots to use different scales."
        },
        {
          "q": "Can landscape photos work in a portrait carousel?",
          "a": "Yes, if the important content can be recomposed without destructive cropping."
        }
      ]
    },
    {
      "slug": "crop-transparent-png-images",
      "title": "How to Crop Transparent PNG Images Without Losing Clean Edges",
      "description": "Crop logos, cutouts, stickers, and product PNG files while preserving transparency, padding, and edge quality.",
      "intro": "Transparent PNG files behave differently from ordinary photographs. Empty pixels are part of the layout, and a crop can change how a logo, product cutout, or sticker aligns in another design. This guide explains how to inspect transparent margins, choose useful padding, avoid accidental background fills, and verify that the exported file still behaves correctly.",
      "category": "Transparent images",
      "readTime": "11 min",
      "illustration": "/guides/transparent-png.svg",
      "takeaways": [
        "Treat transparent padding as layout information.",
        "Check edge halos against both light and dark backgrounds.",
        "Verify the exported file in another application before publishing."
      ],
      "sections": [
        {
          "heading": "1. Understand the transparent canvas",
          "paragraphs": [
            "A PNG can contain a visible object surrounded by invisible pixels. The file dimensions describe the full canvas, not only the visible object. Two logos can therefore have the same pixel size but appear very different because one contains more transparent padding.",
            "Before cropping, decide whether the padding is intentional. It may provide breathing room, align several assets, or prevent a shadow from being clipped."
          ]
        },
        {
          "heading": "2. Inspect the real object boundary",
          "paragraphs": [
            "View the image over a checkerboard or contrasting background so that transparent areas are obvious. Look for soft shadows, semi-transparent hair, glass, glow effects, and antialiased edges that extend beyond the solid object.",
            "A crop that touches the visible edge too closely can cut these subtle pixels and create a harsh outline."
          ]
        },
        {
          "heading": "3. Define consistent padding",
          "paragraphs": [
            "For a logo set, product catalog, or sticker pack, choose a repeatable amount of space around the visible object. Match the optical margin rather than relying only on the mathematical center. Asymmetric logos may need different left and right padding to appear balanced.",
            "Use one reference layer and compare the apparent size of each object. Different shapes can use the same canvas while occupying slightly different percentages of it."
          ]
        },
        {
          "heading": "4. Avoid unintended background changes",
          "paragraphs": [
            "Confirm that the workflow keeps transparency rather than replacing it with white, black, or another color. A transparent image may look correct on a white editor background while actually containing a solid fill.",
            "After export, open the file over both a dark and light background. This exposes unwanted rectangles, edge halos, and color contamination."
          ]
        },
        {
          "heading": "5. Watch for fringe and halo artifacts",
          "paragraphs": [
            "Cutout images can contain pale or dark edge pixels left from the original background. Cropping does not create these artifacts, but a tighter composition can make them more noticeable. Inspect at 100% and on the background where the asset will be used.",
            "If the halo is part of the source, it requires masking or edge cleanup in an image editor rather than a crop adjustment."
          ]
        },
        {
          "heading": "6. Test the final asset",
          "paragraphs": [
            "Verify the exported width, height, transparency, and padding in the target application. Check how the asset aligns next to other icons or products and whether responsive layouts resize it as expected.",
            "Retain the original high-resolution PNG. Repeatedly resizing and re-exporting a small asset can reduce edge quality."
          ]
        }
      ],
      "faq": [
        {
          "q": "Does cropping remove transparency?",
          "a": "A proper PNG workflow can preserve it, but you should verify the exported file over a contrasting background."
        },
        {
          "q": "How much transparent padding should I keep?",
          "a": "Keep enough for shadows and visual breathing room, then apply a consistent rule across related assets."
        },
        {
          "q": "Why does a white halo appear around my cutout?",
          "a": "The source may contain edge pixels from a previous background. That requires masking or edge cleanup, not only cropping."
        }
      ]
    },
    {
      "slug": "crop-large-images-on-mobile",
      "title": "How to Crop Large Images on a Mobile Browser Without Crashes",
      "description": "Use high-resolution phone photos more reliably by controlling memory, image count, zoom, and export dimensions.",
      "intro": "Modern phone cameras create very large files, but a mobile browser has limited memory. Loading several high-resolution images, decoding them, drawing them on a canvas, and exporting large results can exceed that limit. This guide explains a practical workflow for cropping large images on mobile while reducing freezes, blank canvases, failed downloads, and unnecessary battery use.",
      "category": "Mobile performance",
      "readTime": "12 min",
      "illustration": "/guides/mobile-large-image.svg",
      "takeaways": [
        "Load only the images needed for the current task.",
        "Choose output dimensions based on use, not the camera maximum.",
        "Export and save completed work before opening another heavy set."
      ],
      "sections": [
        {
          "heading": "1. Why large images stress a browser",
          "paragraphs": [
            "A compressed photo may occupy only a few megabytes on disk but require much more memory after decoding. A 12-megapixel image contains millions of pixels, and several layers can multiply the memory demand. Canvas export creates additional temporary copies.",
            "This is why a phone can display one photo normally but struggle when five large images are loaded into an editor at the same time."
          ]
        },
        {
          "heading": "2. Start with a smaller working set",
          "paragraphs": [
            "If the task does not require five layers, load two or three. Complete and export one comparison before starting another. Close unrelated browser tabs and background applications when the device is already under memory pressure.",
            "Use the original files, but avoid adding duplicates merely to test different crops. Make one intentional version at a time."
          ]
        },
        {
          "heading": "3. Choose realistic output dimensions",
          "paragraphs": [
            "A social post does not need the full camera resolution. Select dimensions that match the final display or publishing requirement. Smaller outputs reduce export time, memory use, and file size while preserving enough visible detail.",
            "Do not confuse output dimensions with source quality. Exporting at an extremely large size does not add detail and may increase the chance of failure."
          ]
        },
        {
          "heading": "4. Use touch gestures deliberately",
          "paragraphs": [
            "Move the active layer with one finger and pinch with two fingers to zoom. Begin with moderate movements. Rapid repeated pinches can trigger many redraws and feel less precise on an older device.",
            "Lock layers that are already aligned. This prevents accidental movement and reduces the need to repeat a heavy editing step."
          ]
        },
        {
          "heading": "5. Export safely",
          "paragraphs": [
            "Export one selected image first to confirm that the browser can complete the chosen dimensions. Then use ZIP export for the full set if needed. Wait for the download to finish before switching apps or locking the screen.",
            "Confirm that the file appears in the device download folder or photo workflow. Mobile browsers handle downloaded ZIP files differently, so individual export may be simpler for small sets."
          ]
        },
        {
          "heading": "6. Recover from a failed session",
          "paragraphs": [
            "If the canvas becomes blank or the browser closes, reopen the page and use fewer images or smaller output dimensions. A crash does not mean the original photos were damaged because editing occurs on temporary browser data.",
            "For repeated professional work, a desktop browser may be more reliable for very large sets. Mobile is convenient, but device memory remains a real technical limit."
          ]
        }
      ],
      "faq": [
        {
          "q": "Why does a small JPEG use so much memory?",
          "a": "Compressed file size and decoded pixel memory are different. The browser must expand the image before drawing it."
        },
        {
          "q": "Should I lower the camera resolution first?",
          "a": "Not necessarily. Keep the original, but choose practical export dimensions and load fewer images at once."
        },
        {
          "q": "Why did a ZIP download fail on my phone?",
          "a": "The export may require more memory or the browser may handle ZIP files differently. Try individual exports or a smaller set."
        }
      ]
    },
    {
      "slug": "create-consistent-progress-photos",
      "title": "How to Create Consistent Progress Photos for Honest Comparison",
      "description": "Standardize framing, camera height, distance, lighting, and crop rules for fitness, skincare, renovation, restoration, and project records.",
      "intro": "Progress photos are useful only when differences in the images reflect the subject rather than changes in camera position or framing. A tighter crop, lower camera angle, different lighting, or altered posture can exaggerate progress. This guide explains how to create repeatable photographs and use overlay alignment responsibly so that comparisons remain informative and credible.",
      "category": "Documentation workflow",
      "readTime": "14 min",
      "illustration": "/guides/progress-photo.svg",
      "takeaways": [
        "Standardize capture conditions before relying on cropping.",
        "Use stable landmarks and one reference image.",
        "Do not crop or align in a way that exaggerates change."
      ],
      "sections": [
        {
          "heading": "1. Define the purpose and ethical boundary",
          "paragraphs": [
            "Decide what the sequence is intended to document: body composition, skincare, restoration, construction, cleaning, landscaping, or another measurable change. The comparison should help viewers understand progress, not manipulate their perception.",
            "Record the capture method and avoid using a tighter crop, different posture, or favorable angle only in the “after” image. Honest consistency builds trust."
          ]
        },
        {
          "heading": "2. Standardize the camera position",
          "paragraphs": [
            "Mark the camera location, height, orientation, and approximate focal length. Use a tripod or stable support when possible. For a room or product, choose fixed architectural or object landmarks. For a person, keep the camera level and distance consistent.",
            "Cropping can correct small framing differences, but it cannot fully remove perspective changes caused by moving the camera closer, farther, higher, or lower."
          ]
        },
        {
          "heading": "3. Control subject position and conditions",
          "paragraphs": [
            "Use the same stance, viewing direction, clothing category, background, and lighting when those factors affect interpretation. For skincare documentation, keep face angle and light direction consistent. For renovation, photograph from the same corner and height.",
            "Write a short checklist and reuse it each time. A repeatable capture process reduces the amount of correction required later."
          ]
        },
        {
          "heading": "4. Align with stable landmarks",
          "paragraphs": [
            "Load the reference and new image as separate layers. Reduce the upper opacity and align stable points such as eyes, shoulders, wall corners, door frames, product edges, or floor lines. Match scale before fine position.",
            "Do not force a perfect overlap when the subject genuinely changed shape or position. Align the stable frame of reference and allow the real difference to remain visible."
          ]
        },
        {
          "heading": "5. Apply one crop rule to the series",
          "paragraphs": [
            "Choose a ratio and output size that can be maintained over time. Define headroom, side margins, horizon height, or object baseline. Use the same rule for every session, but adjust each source independently inside the shared frame.",
            "Keep uncropped originals and record the export dimensions. This allows the sequence to be reviewed or recreated later."
          ]
        },
        {
          "heading": "6. Present the comparison transparently",
          "paragraphs": [
            "Label dates, conditions, and relevant context. Avoid filters or color treatments that make only one stage appear more favorable. When lighting or capture conditions differ, disclose that limitation.",
            "A trustworthy progress series may look less dramatic than a manipulated one, but it provides more useful information and supports long-term credibility."
          ]
        }
      ],
      "faq": [
        {
          "q": "Can cropping make progress photos misleading?",
          "a": "Yes. Different scale, angle, or framing can exaggerate change, so use repeatable rules and retain the originals."
        },
        {
          "q": "What should be aligned first?",
          "a": "Align stable landmarks such as camera-level features, eyes, wall corners, or product edges before adjusting the crop."
        },
        {
          "q": "Can software fix a different camera angle?",
          "a": "Only partially. Perspective changes are best prevented during capture rather than corrected afterward."
        }
      ]
    }
  ],
  "ko": [
    {
      "slug": "image-crop-online",
      "title": "온라인 이미지 크롭: 구도와 화질을 지키는 실전 가이드",
      "description": "온라인에서 사진을 자를 때 비율, 피사체 위치, 출력 해상도와 화질을 함께 판단하는 방법입니다.",
      "intro": "온라인 크롭은 단순히 사진 가장자리를 없애는 작업이 아닙니다. 어디에 사용할지 먼저 정하고, 피사체가 잘리지 않도록 구도를 잡고, 원본이 감당할 수 있는 출력 크기를 선택해야 합니다.",
      "category": "크롭 기본",
      "readTime": "약 10분",
      "illustration": "/guides/image-crop-online.svg",
      "takeaways": [
        "용도와 출력 기준을 먼저 정합니다.",
        "기준 사진을 정하고 반복 가능한 절차를 사용합니다.",
        "문제의 원인을 나누어 해결합니다."
      ],
      "sections": [
        {
          "heading": "1. 사용할 위치부터 정하세요",
          "paragraphs": [
            "원본 사진보다 게시 위치를 먼저 생각하세요. 프로필, 상품 카드, 세로 영상, 프레젠테이션은 필요한 모양이 다릅니다. 목적을 먼저 정하면 같은 사진을 여러 번 다시 자르는 일을 줄일 수 있습니다.",
            "최종 규격이 정해져 있다면 처음부터 가로와 세로 픽셀을 입력하세요. 비율만 정해져 있다면 구도를 먼저 맞춘 뒤 적절한 출력 크기를 결정합니다."
          ],
          "table": {
            "headers": [
              "용도",
              "권장 비율",
              "예시 크기"
            ],
            "rows": [
              [
                "프로필·정사각형",
                "1:1",
                "1080×1080"
              ],
              [
                "세로형 게시물·상품 카드",
                "4:5",
                "1080×1350"
              ],
              [
                "인물 사진",
                "3:4",
                "1200×1600"
              ],
              [
                "세로 영상",
                "9:16",
                "1080×1920"
              ],
              [
                "가로 영상·발표",
                "16:9",
                "1920×1080"
              ]
            ]
          }
        },
        {
          "heading": "2. 비율과 해상도를 따로 판단하세요",
          "paragraphs": [
            "비율은 모양이고 해상도는 픽셀 수입니다. 800×1000과 2400×3000은 모두 4:5이지만 실제 세부 정보와 파일 크기는 다릅니다.",
            "목적에 맞는 비율을 정한 뒤 원본이 감당할 수 있는 크기로 저장하세요. 작은 원본을 크게 저장해도 실제 디테일이 새로 생기지는 않습니다."
          ]
        },
        {
          "heading": "3. 피사체 위치를 의도적으로 정하세요",
          "paragraphs": [
            "얼굴, 손, 상품 모서리와 글자가 잘리지 않도록 여백을 남기세요. 수학적으로 정중앙인 구도보다 피사체가 가장 잘 이해되는 구도가 더 좋을 수 있습니다.",
            "눈높이, 수평선, 건물 모서리, 상품 중심선 같은 기준을 사용하면 흔들리지 않는 크롭을 만들 수 있습니다."
          ]
        },
        {
          "heading": "4. 필요한 만큼만 확대하세요",
          "paragraphs": [
            "확대는 불필요한 배경을 줄이는 데 유용하지만 너무 많이 확대하면 사용할 수 있는 원본 픽셀이 줄어듭니다. 최종 출력 크기와 실제로 보이는 원본 영역을 비교하세요.",
            "PC에서는 캔버스 위 마우스 휠, 모바일에서는 두 손가락 핀치, 정확한 조절에는 숫자 입력을 사용할 수 있습니다."
          ]
        },
        {
          "heading": "5. 저장 전 가장자리와 투명도를 확인하세요",
          "paragraphs": [
            "머리카락, 손가락, 그림자, 상품 끝과 필요한 배경이 잘리지 않았는지 네 면을 모두 확인하세요. PNG의 투명 영역은 실제 사용할 배경 위에서도 테스트하는 것이 좋습니다.",
            "여러 사진을 겹쳤다면 마지막에는 각 사진을 100% 투명도로 되돌려 한 장씩 확인하세요."
          ]
        },
        {
          "heading": "6. 다운로드한 실제 파일을 검수하세요",
          "paragraphs": [
            "다운로드한 파일을 편집기 밖에서 열어 픽셀 크기, 방향, 선명도와 파일 형식을 확인하세요. 원본은 별도로 보관하고 결과 파일은 용도를 알 수 있게 이름을 정리하세요."
          ],
          "bullets": [
            "파일 정보에서 크기 확인",
            "100% 화면으로 선명도 확인",
            "피사체 잘림 확인",
            "게시 전 실제 레이아웃에서 확인"
          ]
        }
      ],
      "faq": [
        {
          "q": "서버 업로드 없이 사용할 수 있나요?",
          "a": "네. 선택한 사진은 브라우저에서 처리됩니다."
        },
        {
          "q": "어떤 출력 크기가 좋나요?",
          "a": "게시처가 요구하는 크기를 우선하고 원본보다 지나치게 크게 확대하지 마세요."
        },
        {
          "q": "왜 흐리게 저장되나요?",
          "a": "실제 크롭 영역의 원본 픽셀이 출력 크기보다 부족할 수 있습니다."
        },
        {
          "q": "원본이 바뀌나요?",
          "a": "아닙니다. 새 결과 파일을 만듭니다."
        }
      ]
    },
    {
      "slug": "crop-multiple-images-to-the-same-size",
      "title": "여러 사진을 동일한 크기로 자르는 방법",
      "description": "사진별 위치와 확대율은 따로 조절하면서 결과 파일의 비율과 크기를 동일하게 맞춥니다.",
      "intro": "모든 원본에 같은 좌표를 적용하는 일괄 크롭은 촬영 거리가 다르면 실패하기 쉽습니다. 공통 출력 프레임과 사진별 독립 조절을 함께 사용해야 일관된 결과를 만들 수 있습니다.",
      "category": "다중 이미지",
      "readTime": "약 12분",
      "illustration": "/guides/same-size.svg",
      "takeaways": [
        "용도와 출력 기준을 먼저 정합니다.",
        "기준 사진을 정하고 반복 가능한 절차를 사용합니다.",
        "문제의 원인을 나누어 해결합니다."
      ],
      "sections": [
        {
          "heading": "1. 동일한 크기와 동일한 좌표는 다릅니다",
          "paragraphs": [
            "결과 파일 크기가 같다는 것과 원본의 같은 위치를 잘라낸다는 것은 다른 작업입니다. 촬영 거리와 피사체 위치가 다르면 같은 좌표를 적용해도 구도가 달라집니다.",
            "공통 프레임 뒤에서 각 사진을 따로 이동하고 확대해야 결과 크기와 실제 구도를 함께 맞출 수 있습니다."
          ]
        },
        {
          "heading": "2. 기준 사진을 하나 정하세요",
          "paragraphs": [
            "가장 선명하고 대표적인 사진을 먼저 배치해 얼굴 크기, 머리 위 여백, 상품 바닥선과 좌우 공간의 기준을 만드세요. 기준이 완성되면 잠금 기능으로 고정합니다."
          ]
        },
        {
          "heading": "3. 나머지 사진을 차례로 겹쳐 맞추세요",
          "paragraphs": [
            "다음 사진의 투명도를 낮추고 눈, 상품 모서리, 수평선처럼 변하지 않는 지점을 기준 사진에 맞춥니다. 최대 5장까지 한 번에 처리할 수 있습니다.",
            "원근이나 자세가 다르면 모든 외곽선은 맞지 않을 수 있습니다. 사용자가 실제로 비교할 영역을 우선하세요."
          ]
        },
        {
          "heading": "4. 공통 품질 체크리스트를 사용하세요",
          "paragraphs": [
            "마지막에는 각 사진을 따로 보며 동일한 기준이 적용됐는지 확인합니다."
          ],
          "bullets": [
            "피사체 크기가 비슷함",
            "상단과 좌우 여백이 비슷함",
            "중요한 부분이 잘리지 않음",
            "회전 방향이 올바름",
            "확대 때문에 지나치게 흐리지 않음"
          ]
        },
        {
          "heading": "5. 가장 작은 원본에 맞춰 출력하세요",
          "paragraphs": [
            "가장 많이 확대하거나 가장 작은 원본이 전체 세트의 한계입니다. 한 사진의 실제 크롭 영역이 700픽셀이라면 모든 결과를 3000픽셀로 저장해도 그 사진의 실제 디테일은 늘지 않습니다."
          ]
        },
        {
          "heading": "6. 동일 크기 세트로 활용하세요",
          "paragraphs": [
            "개별 또는 ZIP으로 저장하면 캐러셀, 전후 슬라이더, 상품 목록, 프로필 목록과 영상 전환에서 화면 크기가 튀지 않습니다."
          ],
          "table": {
            "headers": [
              "프로젝트",
              "먼저 맞출 기준",
              "자주 쓰는 비율"
            ],
            "rows": [
              [
                "인물 세트",
                "눈높이와 얼굴 크기",
                "1:1·4:5"
              ],
              [
                "상품 목록",
                "중심과 바닥선",
                "1:1·4:5"
              ],
              [
                "공간 비교",
                "모서리와 수평선",
                "4:3·16:9"
              ],
              [
                "세로 영상",
                "주 피사체 중심",
                "9:16"
              ]
            ]
          }
        }
      ],
      "faq": [
        {
          "q": "원본 해상도가 달라도 되나요?",
          "a": "네. 사진마다 위치와 배율을 따로 조절할 수 있습니다."
        },
        {
          "q": "모든 사진의 배율 숫자가 같아야 하나요?",
          "a": "아닙니다. 숫자보다 실제 피사체 크기가 같아야 합니다."
        },
        {
          "q": "몇 장까지 가능한가요?",
          "a": "한 번에 최대 5장입니다."
        },
        {
          "q": "전체를 한 번에 받을 수 있나요?",
          "a": "네. ZIP 다운로드를 사용할 수 있습니다."
        }
      ]
    },
    {
      "slug": "align-before-and-after-photos",
      "title": "보정 전후 사진을 정확하게 정렬하는 방법",
      "description": "투명도와 기준점을 사용해 전후 사진의 크기와 위치를 맞추는 실전 방법입니다.",
      "intro": "전후 비교는 변화 자체가 아니라 구도 차이 때문에 과장되거나 흔들려 보일 수 있습니다. 기준 사진을 고정하고 안정적인 지점을 맞추면 비교가 더 명확하고 신뢰할 수 있습니다.",
      "category": "보정 전후",
      "readTime": "약 11분",
      "illustration": "/guides/before-after.svg",
      "takeaways": [
        "용도와 출력 기준을 먼저 정합니다.",
        "기준 사진을 정하고 반복 가능한 절차를 사용합니다.",
        "문제의 원인을 나누어 해결합니다."
      ],
      "sections": [
        {
          "heading": "1. 신뢰할 수 있는 기준 사진을 고르세요",
          "paragraphs": [
            "원본 또는 가장 이른 시점의 사진을 기준으로 고정하세요. 카메라 위치가 다르다면 비교에서 가장 중요한 부분을 먼저 정하고 차이가 큰 경우에는 설명으로 밝혀주는 것이 좋습니다."
          ]
        },
        {
          "heading": "2. 위 사진의 투명도를 낮추세요",
          "paragraphs": [
            "비교 사진을 약 40~60%로 낮추면 겹친 외곽선이 두 줄로 보여 확대와 위치 오차를 쉽게 확인할 수 있습니다."
          ]
        },
        {
          "heading": "3. 위치보다 배율을 먼저 맞추세요",
          "paragraphs": [
            "눈 사이 거리, 상품 폭, 문틀처럼 크기를 비교할 수 있는 부분을 보고 확대율을 맞춘 뒤 좌우와 위아래 위치를 조절하세요. 배율이 다른 상태에서 위치부터 맞추면 반복 수정이 생깁니다."
          ]
        },
        {
          "heading": "4. 변하지 않는 기준점을 사용하세요",
          "paragraphs": [
            "인물은 눈과 콧등, 공간은 벽과 창문, 상품은 단단한 모서리를 기준으로 삼으세요. 움직일 수 있는 물건이나 표정은 기준으로 적합하지 않습니다."
          ],
          "bullets": [
            "기준점은 두 개 이상 사용",
            "구조적 특징 우선",
            "원근과 자세 차이는 인정"
          ]
        },
        {
          "heading": "5. 결과를 과장하지 마세요",
          "paragraphs": [
            "전후 변화가 커 보이도록 한 사진만 더 확대하거나 좁게 자르면 비교의 신뢰가 떨어집니다. 비슷한 시야와 피사체 크기를 유지하고 촬영 조건 차이가 크면 설명하세요."
          ]
        },
        {
          "heading": "6. 실제 전환을 테스트하세요",
          "paragraphs": [
            "투명도를 원래대로 돌리고 사진을 빠르게 전환하세요. 커졌다 작아지면 배율, 옆으로 미끄러지면 위치를 다시 맞춥니다."
          ],
          "table": {
            "headers": [
              "증상",
              "원인",
              "수정"
            ],
            "rows": [
              [
                "피사체가 커짐·작아짐",
                "배율 차이",
                "확대 조절"
              ],
              [
                "옆으로 이동",
                "가로 위치 차이",
                "레이어 이동"
              ],
              [
                "모든 선이 맞지 않음",
                "원근·자세 차이",
                "핵심 영역 우선"
              ],
              [
                "전환이 흐림",
                "원본 픽셀 부족",
                "출력 축소"
              ]
            ]
          }
        }
      ],
      "faq": [
        {
          "q": "투명도는 어느 정도가 좋나요?",
          "a": "약 50%에서 시작해 두 사진이 모두 보이도록 조절하세요."
        },
        {
          "q": "다른 카메라 사진도 가능한가요?",
          "a": "가능하지만 원근 차이로 완벽한 중첩이 어려울 수 있습니다."
        },
        {
          "q": "회전도 조절해야 하나요?",
          "a": "수평선이나 카메라 방향 차이가 있을 때 소폭 사용할 수 있습니다."
        },
        {
          "q": "여러 시점을 맞출 수 있나요?",
          "a": "하나의 기준 사진에 각 사진을 차례로 맞추세요."
        }
      ]
    },
    {
      "slug": "aspect-ratio-vs-resolution",
      "title": "가로세로 비율과 해상도의 차이",
      "description": "이미지 모양, 픽셀 크기, 확대와 출력 해상도의 관계를 이해하는 기술 가이드입니다.",
      "intro": "비율은 사진의 모양을, 해상도는 픽셀 수를 뜻합니다. 두 개념을 구분해야 같은 모양의 이미지를 만들면서도 불필요하게 흐린 결과를 피할 수 있습니다.",
      "category": "기술 참고",
      "readTime": "약 9분",
      "illustration": "/guides/ratio-resolution.svg",
      "takeaways": [
        "용도와 출력 기준을 먼저 정합니다.",
        "기준 사진을 정하고 반복 가능한 절차를 사용합니다.",
        "문제의 원인을 나누어 해결합니다."
      ],
      "sections": [
        {
          "heading": "1. 비율은 사진의 모양입니다",
          "paragraphs": [
            "1:1은 정사각형이고 4:5는 세로가 더 긴 모양입니다. 비율만으로 실제 픽셀 수는 알 수 없습니다."
          ],
          "table": {
            "headers": [
              "비율",
              "예시 크기",
              "용도"
            ],
            "rows": [
              [
                "1:1",
                "1080×1080",
                "정사각형"
              ],
              [
                "4:5",
                "1080×1350",
                "세로 카드"
              ],
              [
                "3:4",
                "1200×1600",
                "인물"
              ],
              [
                "9:16",
                "1080×1920",
                "세로 화면"
              ],
              [
                "16:9",
                "1920×1080",
                "가로 화면"
              ]
            ]
          }
        },
        {
          "heading": "2. 해상도는 픽셀 크기입니다",
          "paragraphs": [
            "해상도는 가로와 세로 픽셀 수를 뜻합니다. 픽셀이 많으면 더 많은 세부 정보를 담을 수 있지만 초점, 압축과 원본 품질도 함께 영향을 줍니다."
          ]
        },
        {
          "heading": "3. 비율로 크기를 계산하는 방법",
          "paragraphs": [
            "4:5 비율에서 가로가 1080이면 세로는 1080×5÷4=1350입니다. 사이트의 리소스 계산기에서는 원하는 가로나 세로를 입력해 자동으로 계산할 수 있습니다."
          ]
        },
        {
          "heading": "4. 실제 크롭 영역의 픽셀을 보세요",
          "paragraphs": [
            "4000픽셀 원본도 아주 좁게 자르면 실제로 사용하는 영역은 1200픽셀에 불과할 수 있습니다. 출력 크기는 원본 전체가 아니라 화면에 남은 영역을 기준으로 판단해야 합니다."
          ]
        },
        {
          "heading": "5. 책임 있게 출력 크기를 정하세요",
          "paragraphs": [
            "게시처 규격이 있으면 그 값을 사용하세요. 규격이 없다면 실제 표시 크기에 가깝고 가장 작은 원본이 감당할 수 있는 크기를 선택합니다."
          ]
        },
        {
          "heading": "6. 여러 사진은 비율과 크기를 모두 맞추세요",
          "paragraphs": [
            "비율을 맞추면 모양이 같아지고 픽셀 크기까지 맞추면 슬라이더, 캐러셀과 영상 편집에서 레이아웃이 튀지 않습니다.",
            "출력 크기를 정할 때는 가장 많이 잘리는 원본을 기준으로 남는 실제 픽셀을 계산해보세요. 여러 장을 같은 크기로 만들 경우 한 장만 선명하고 다른 장은 흐려지는 현상을 줄일 수 있습니다. 인쇄와 웹 게시를 함께 한다면 동일 파일을 공용으로 쓰기보다 목적에 맞는 두 가지 출력 버전을 만드는 것이 좋습니다."
          ]
        }
      ],
      "faq": [
        {
          "q": "같은 4:5인데 화질이 다를 수 있나요?",
          "a": "네. 비율이 같아도 픽셀 수와 원본 품질은 다릅니다."
        },
        {
          "q": "해상도를 바꾸면 구도가 바뀌나요?",
          "a": "구도는 유지하면서 출력 픽셀만 바꿀 수 있습니다."
        },
        {
          "q": "확대를 피하려면 어떻게 하나요?",
          "a": "가능하면 실제 크롭 원본 영역보다 작은 출력 크기를 선택하세요."
        },
        {
          "q": "웹에서 DPI가 중요한가요?",
          "a": "웹에서는 주로 픽셀 크기가 중요합니다."
        }
      ]
    },
    {
      "slug": "match-face-position-across-photos",
      "title": "여러 사진에서 얼굴 위치를 맞추는 방법",
      "description": "눈높이, 얼굴 크기와 여백을 기준으로 인물 사진을 안정적으로 정렬합니다.",
      "intro": "인물 사진은 눈높이나 얼굴 크기가 조금만 달라도 연속 화면에서 크게 흔들려 보입니다. 모든 윤곽을 억지로 맞추기보다 몇 가지 안정적인 얼굴 기준점을 사용해야 합니다.",
      "category": "인물 정렬",
      "readTime": "약 8분",
      "illustration": "/guides/face-alignment.svg",
      "takeaways": [
        "용도와 출력 기준을 먼저 정합니다.",
        "기준 사진을 정하고 반복 가능한 절차를 사용합니다.",
        "문제의 원인을 나누어 해결합니다."
      ],
      "sections": [
        {
          "heading": "1. 눈높이를 먼저 맞추세요",
          "paragraphs": [
            "눈은 인물 사진에서 가장 안정적인 수평 기준입니다. 동공이나 눈 안쪽 모서리를 기준으로 먼저 같은 높이에 놓으면 표정이 달라도 화면이 안정적으로 보입니다."
          ]
        },
        {
          "heading": "2. 얼굴 크기를 맞추세요",
          "paragraphs": [
            "눈 사이 거리, 얼굴 폭, 눈에서 턱까지의 거리를 비교하세요. 눈은 맞는데 턱이 크게 어긋난다면 위치보다 배율 차이일 가능성이 큽니다."
          ]
        },
        {
          "heading": "3. 코와 귀를 보조 기준으로 사용하세요",
          "paragraphs": [
            "콧등은 세로 중심을, 귀의 위치는 고개 회전을 확인하는 데 도움이 됩니다. 고개 각도나 카메라가 달라진 경우 모든 기준점을 완벽하게 겹칠 수는 없습니다."
          ]
        },
        {
          "heading": "4. 자연스러운 여백을 유지하세요",
          "paragraphs": [
            "머리 위, 턱 아래와 어깨 주변 공간을 비슷하게 남기세요. 한 장만 지나치게 꽉 차면 얼굴 기준점이 맞아도 전체 세트가 불안정해 보입니다."
          ]
        },
        {
          "heading": "5. 표정과 자세의 실제 차이는 인정하세요",
          "paragraphs": [
            "웃음은 볼과 턱선을 바꾸고 고개 기울기는 눈높이를 바꿉니다. 이런 경우 얼굴 중심과 눈높이를 우선하고 실제 움직임을 억지로 없애지 마세요."
          ]
        },
        {
          "heading": "6. 최종 표시 크기로 확인하세요",
          "paragraphs": [
            "확대 화면의 작은 차이가 실제 프로필 카드에서는 보이지 않을 수 있습니다. 결과 크기로 열고 빠르게 전환해 눈높이, 얼굴 크기와 여백을 확인하세요."
          ],
          "bullets": [
            "눈높이 안정",
            "얼굴 크기 유사",
            "머리 위 여백 유사",
            "머리카락·턱 잘림 없음"
          ]
        }
      ],
      "faq": [
        {
          "q": "두 눈을 완전히 겹쳐야 하나요?",
          "a": "자세와 원근이 비슷할 때만 가능합니다. 전체 눈높이를 우선하세요."
        },
        {
          "q": "가까이 찍힌 사진은 어떻게 하나요?",
          "a": "얼굴 기준 거리가 같아질 때까지 배율을 조절하세요."
        },
        {
          "q": "증명사진에도 사용할 수 있나요?",
          "a": "제출 기관의 구체적인 규격을 별도로 확인해야 합니다."
        },
        {
          "q": "귀가 맞지 않는 이유는 무엇인가요?",
          "a": "고개 각도나 원근이 달라졌을 가능성이 큽니다."
        }
      ]
    },
    {
      "slug": "prepare-before-after-video",
      "title": "보정 전후 영상용 사진 준비 방법",
      "description": "크로스페이드, 릴스와 슬라이드쇼에서 화면이 튀지 않는 동일 크기 프레임을 만듭니다.",
      "intro": "비교 영상이 흔들리는 가장 흔한 이유는 영상 편집 전에 사진의 크롭, 배율, 출력 크기가 서로 달랐기 때문입니다. 하나의 기준 프레임으로 먼저 정렬하면 전환이 훨씬 안정적입니다.",
      "category": "영상 준비",
      "readTime": "약 9분",
      "illustration": "/guides/video-frames.svg",
      "takeaways": [
        "용도와 출력 기준을 먼저 정합니다.",
        "기준 사진을 정하고 반복 가능한 절차를 사용합니다.",
        "문제의 원인을 나누어 해결합니다."
      ],
      "sections": [
        {
          "heading": "1. 최종 영상 비율을 먼저 정하세요",
          "paragraphs": [
            "세로 전체 화면은 9:16, 가로 영상은 16:9, 정사각형 콘텐츠는 1:1을 사용할 수 있습니다. 자막과 앱 인터페이스가 가릴 수 있으므로 가장자리에 안전 여백을 둡니다."
          ]
        },
        {
          "heading": "2. 하나의 기준 프레임을 정하세요",
          "paragraphs": [
            "가장 선명하거나 원하는 구도에 가까운 사진을 기준으로 고정하고 모든 날짜와 버전을 그 사진에 맞추세요. 앞 사진에 다음 사진을 계속 맞추면 오차가 누적될 수 있습니다."
          ]
        },
        {
          "heading": "3. 피사체 크기와 중심을 맞추세요",
          "paragraphs": [
            "인물은 눈과 어깨, 공간은 벽과 창문, 상품은 외곽과 바닥선을 사용합니다. 중심이 같아야 전환할 때 옆으로 흐르지 않습니다."
          ]
        },
        {
          "heading": "4. 모든 프레임을 같은 픽셀 크기로 저장하세요",
          "paragraphs": [
            "파일 크기가 다르면 영상 프로그램이 자동으로 맞춤 확대를 적용할 수 있습니다. 같은 가로와 세로 크기로 저장하면 숨은 자동 확대를 줄일 수 있습니다."
          ]
        },
        {
          "heading": "5. 두 장으로 먼저 크로스페이드를 시험하세요",
          "paragraphs": [
            "첫 장과 마지막 장만 영상 타임라인에 넣고 짧게 전환해보세요. 피사체가 숨 쉬듯 커지면 배율, 미끄러지면 위치, 기울면 회전을 다시 확인합니다."
          ],
          "table": {
            "headers": [
              "전환 문제",
              "수정"
            ],
            "rows": [
              [
                "커졌다 작아짐",
                "배율 맞춤"
              ],
              [
                "좌우 이동",
                "가로 위치 맞춤"
              ],
              [
                "위아래 이동",
                "세로 위치 맞춤"
              ],
              [
                "흐린 프레임",
                "출력 축소·확대 감소"
              ]
            ]
          }
        },
        {
          "heading": "6. 비교의 의미를 정확하게 전달하세요",
          "paragraphs": [
            "날짜와 설명을 일관되게 표시하고 구도 차이로 변화를 과장하지 마세요. 조명, 자세, 촬영 위치가 크게 달라진 경우에는 그 사실을 설명하는 것이 좋습니다."
          ]
        }
      ],
      "faq": [
        {
          "q": "릴스에는 어떤 비율이 좋나요?",
          "a": "일반적으로 9:16을 사용하지만 게시 시점의 플랫폼 규격을 확인하세요."
        },
        {
          "q": "이전 사진에 다음 사진을 맞춰도 되나요?",
          "a": "오차 누적을 막기 위해 하나의 기준을 사용하는 것이 좋습니다."
        },
        {
          "q": "영상 앱이 계속 확대하는 이유는?",
          "a": "자동 팬·줌 효과와 프로젝트 맞춤 설정을 확인하세요."
        },
        {
          "q": "5장보다 많으면 어떻게 하나요?",
          "a": "같은 기준을 유지하며 여러 번 나누어 작업하세요."
        }
      ]
    },
    {
      "slug": "crop-photos-without-uploading",
      "title": "사진을 서버에 업로드하지 않고 자르는 방법",
      "description": "브라우저 내부 처리의 의미와 사진 파일 외에 전송될 수 있는 일반 웹 정보를 구분합니다.",
      "intro": "Overlay Crop은 선택한 사진을 브라우저 안에서 읽고 결과 파일을 만듭니다. 사진 자체는 편집 서버로 전송되지 않지만 사이트를 불러오는 일반적인 네트워크 통신은 존재합니다.",
      "category": "개인정보",
      "readTime": "약 8분",
      "illustration": "/guides/local-processing.svg",
      "takeaways": [
        "용도와 출력 기준을 먼저 정합니다.",
        "기준 사진을 정하고 반복 가능한 절차를 사용합니다.",
        "문제의 원인을 나누어 해결합니다."
      ],
      "sections": [
        {
          "heading": "1. 브라우저 내부 처리의 의미",
          "paragraphs": [
            "파일을 선택하면 브라우저가 현재 작업 세션에서만 사진을 메모리로 읽고 Canvas를 이용해 크롭 결과를 만듭니다. 선택한 사진은 Overlay Crop 편집 서버로 업로드되지 않습니다."
          ]
        },
        {
          "heading": "2. 일반적인 웹 통신은 별개입니다",
          "paragraphs": [
            "사이트 코드 자체는 인터넷으로 내려받습니다. 호스팅과 보안 서비스는 IP, 브라우저 정보, 요청 주소와 오류 정보를 처리할 수 있고 분석이나 광고가 활성화되면 동의에 따라 추가 정보가 처리될 수 있습니다."
          ]
        },
        {
          "heading": "3. 직접 확인하는 방법",
          "paragraphs": [
            "브라우저 개발자 도구의 Network 탭에서 사진 선택 전후의 요청을 확인할 수 있습니다. 페이지를 먼저 불러온 뒤 인터넷 연결을 끊어도 현재 편집 작업이 계속되는지도 확인할 수 있습니다."
          ]
        },
        {
          "heading": "4. 개인정보를 위한 기본 습관",
          "paragraphs": [
            "로컬 처리는 전송을 줄여주지만 기기 보안까지 보장하지는 않습니다."
          ],
          "bullets": [
            "신뢰하는 개인 기기 사용",
            "공용 PC에서 민감한 작업 피하기",
            "작업 후 탭 닫기",
            "원본 안전하게 보관",
            "쿠키 설정 확인"
          ]
        },
        {
          "heading": "5. 모바일 메모리 한계를 이해하세요",
          "paragraphs": [
            "고해상도 사진 여러 장은 브라우저 메모리를 많이 사용합니다. 탭이 새로고침되면 사진 수를 줄이거나 더 작은 작업용 복사본을 사용하세요."
          ]
        },
        {
          "heading": "6. 더 엄격한 보안이 필요한 경우",
          "paragraphs": [
            "의료·법률·조직 내부 규정이 적용되는 자료는 승인된 오프라인 프로그램이나 조직의 보안 지침을 따라야 합니다."
          ]
        }
      ],
      "faq": [
        {
          "q": "선택한 사진이 저장되나요?",
          "a": "Overlay Crop 서버에는 저장되지 않습니다."
        },
        {
          "q": "네트워크 통신이 전혀 없나요?",
          "a": "아닙니다. 사이트를 불러오는 일반 웹 통신은 있습니다."
        },
        {
          "q": "직접 확인할 수 있나요?",
          "a": "브라우저 Network 탭이나 오프라인 상태에서 확인할 수 있습니다."
        },
        {
          "q": "모든 기밀 작업에 적합한가요?",
          "a": "조직의 보안 규정을 우선해야 합니다."
        }
      ]
    },
    {
      "slug": "image-crop-quality-troubleshooting",
      "title": "이미지 크롭 화질과 오류 해결 가이드",
      "description": "흐린 결과, 잘린 피사체, 회전 오류, 투명 배경과 모바일 메모리 문제를 진단합니다.",
      "intro": "크롭 결과가 이상할 때는 구도, 원본 픽셀, 출력 기대치, 방향 정보 또는 기기 메모리 중 무엇이 원인인지 먼저 구분해야 합니다.",
      "category": "문제 해결",
      "readTime": "약 10분",
      "illustration": "/guides/troubleshooting.svg",
      "takeaways": [
        "용도와 출력 기준을 먼저 정합니다.",
        "기준 사진을 정하고 반복 가능한 절차를 사용합니다.",
        "문제의 원인을 나누어 해결합니다."
      ],
      "sections": [
        {
          "heading": "1. 저장한 사진이 흐립니다",
          "paragraphs": [
            "좁게 자른 영역을 큰 크기로 저장하면 부족한 원본 픽셀이 늘어나 보입니다. 확대를 줄이거나 출력 크기를 낮추고 더 큰 원본을 사용하세요. 원본의 흔들림과 초점 문제는 크롭으로 고칠 수 없습니다."
          ]
        },
        {
          "heading": "2. 다운로드 후 피사체가 잘립니다",
          "paragraphs": [
            "편집기 미리보기뿐 아니라 실제 다운로드 파일을 열어 확인하세요. 네 면에 작은 안전 여백을 남기고 마지막에는 투명도를 100%로 돌립니다."
          ]
        },
        {
          "heading": "3. 휴대폰 사진 방향이 이상합니다",
          "paragraphs": [
            "일부 사진은 회전 정보를 메타데이터로 저장합니다. 방향이 틀리면 회전 기능을 사용하거나 원본을 올바른 방향으로 다시 저장하세요."
          ]
        },
        {
          "heading": "4. 투명 배경이 다르게 보입니다",
          "paragraphs": [
            "PNG와 WebP 투명 영역은 편집기 배경과 실제 웹사이트 배경에서 다르게 보일 수 있습니다. 최종 배경 위에서 확인하세요."
          ]
        },
        {
          "heading": "5. 브라우저가 느리거나 새로고침됩니다",
          "paragraphs": [
            "고해상도 사진 5장은 모바일 메모리를 크게 사용합니다. 다른 탭을 닫고 사진 수나 해상도를 줄이거나 PC에서 작업하세요."
          ]
        },
        {
          "heading": "6. 모든 외곽선이 맞지 않습니다",
          "paragraphs": [
            "원근, 렌즈, 자세와 유연한 물체 차이 때문에 완벽한 중첩이 불가능할 수 있습니다. 핵심 비교 영역을 우선합니다."
          ]
        },
        {
          "heading": "7. 증상별 빠른 해결",
          "paragraphs": [
            "한 번에 모든 설정을 바꾸지 말고 증상에 맞는 원인부터 확인하세요.",
            "문제가 반복되면 원본 한 장과 작은 출력 크기로 다시 테스트하세요. 정상이라면 이미지 수나 출력 크기가 원인일 가능성이 높고, 같은 한 장에서도 실패하면 파일 형식이나 브라우저 환경을 살펴봐야 합니다. 오류 상황을 기록하면 재현과 해결이 훨씬 쉬워집니다."
          ],
          "table": {
            "headers": [
              "증상",
              "먼저 확인",
              "해결"
            ],
            "rows": [
              [
                "흐림",
                "실제 원본 픽셀",
                "출력·확대 감소"
              ],
              [
                "잘림",
                "최종 경계",
                "여백 추가"
              ],
              [
                "회전 오류",
                "방향 정보",
                "회전·재저장"
              ],
              [
                "탭 재시작",
                "메모리",
                "파일 축소"
              ],
              [
                "정렬 불가",
                "원근 차이",
                "핵심 영역 우선"
              ]
            ]
          }
        }
      ],
      "faq": [
        {
          "q": "미리보기는 선명한데 결과가 흐린 이유는?",
          "a": "미리보기보다 큰 출력으로 저장했을 수 있습니다."
        },
        {
          "q": "낮은 해상도를 개선할 수 있나요?",
          "a": "파일 크기는 늘릴 수 있지만 실제 디테일을 복구할 수는 없습니다."
        },
        {
          "q": "모바일이 자꾸 종료되는 이유는?",
          "a": "여러 고해상도 사진으로 메모리가 부족할 수 있습니다."
        },
        {
          "q": "PNG와 JPG 중 무엇이 좋나요?",
          "a": "투명 배경은 PNG·WebP, 일반 사진은 JPG가 효율적일 수 있습니다."
        }
      ]
    },
    {
      "slug": "consistent-product-photo-cropping",
      "title": "상품 사진을 일관된 구도로 자르는 방법",
      "description": "상품 크기, 바닥선, 여백과 출력 규칙을 맞춰 정돈된 상품 목록을 만듭니다.",
      "intro": "상품 사진은 모든 물건을 똑같이 크게 보이게 하는 것보다, 같은 기준으로 배치되어 비교하기 쉬운 상태가 중요합니다.",
      "category": "상품 사진",
      "readTime": "약 9분",
      "illustration": "/guides/product-grid.svg",
      "takeaways": [
        "용도와 출력 기준을 먼저 정합니다.",
        "기준 사진을 정하고 반복 가능한 절차를 사용합니다.",
        "문제의 원인을 나누어 해결합니다."
      ],
      "sections": [
        {
          "heading": "1. 상품 목록의 기준을 먼저 정하세요",
          "paragraphs": [
            "배경, 비율, 상품이 차지할 크기, 상단 여백, 좌우 공간과 바닥선을 먼저 정합니다. 여러 사람이 작업한다면 기준을 문서로 남기는 것이 좋습니다."
          ]
        },
        {
          "heading": "2. 대표 상품을 기준으로 선택하세요",
          "paragraphs": [
            "지나치게 크거나 특이한 모양보다 중간 크기의 선명한 상품을 기준으로 사용하세요. 기준 사진을 먼저 배치하고 잠급니다."
          ]
        },
        {
          "heading": "3. 바닥선과 시각적 중심을 맞추세요",
          "paragraphs": [
            "세워진 상품은 바닥 접점이나 포장 하단을 같은 높이에 놓고 좌우 중심을 맞춥니다. 비대칭 상품은 수학적 중심보다 눈으로 보이는 중심이 자연스러울 수 있습니다."
          ]
        },
        {
          "heading": "4. 실제 크기를 오해하게 만들지 마세요",
          "paragraphs": [
            "격자를 정돈하기 위해 비슷한 점유율을 사용할 수 있지만 크기 비교가 중요한 상품을 모두 같은 물리적 크기처럼 보이게 만들면 안 됩니다. 필요하면 실제 치수를 함께 표시하세요."
          ]
        },
        {
          "heading": "5. 여백과 그림자를 일관되게 관리하세요",
          "paragraphs": [
            "상품 주변의 숨 쉴 공간을 비슷하게 두고 자연 그림자를 실수로 자르지 마세요. 투명 배경은 실제 쇼핑몰 배경 위에서 확인합니다."
          ]
        },
        {
          "heading": "6. 개별 사진이 아니라 전체 격자로 확인하세요",
          "paragraphs": [
            "몇 장을 먼저 저장해 실제 상품 목록에 배치하세요. 위아래로 튀거나 너무 답답하거나 지나치게 작아 보이는 상품이 있는지 확인한 뒤 전체 작업을 진행합니다.",
            "최종 규칙을 정하기 전에 서로 크기와 형태가 다른 대표 상품 몇 개를 실제 목록 화면에 배치해보세요. 긴 상품, 넓은 상품, 작은 상품이 모두 자연스럽게 보이는지 확인해야 전체 카탈로그에 적용할 수 있습니다. 한 가지 상품만 보고 만든 규칙은 극단적인 형태에서 쉽게 무너집니다."
          ],
          "table": {
            "headers": [
              "요소",
              "일관성 기준"
            ],
            "rows": [
              [
                "출력 크기",
                "모두 동일"
              ],
              [
                "바닥선",
                "같은 시각적 높이"
              ],
              [
                "상단 여백",
                "비슷한 공간"
              ],
              [
                "가로 중심",
                "시각적 중심"
              ],
              [
                "상품 크기",
                "비교 가능하되 오해 없음"
              ],
              [
                "배경",
                "같은 색 또는 투명 처리"
              ]
            ]
          }
        }
      ],
      "faq": [
        {
          "q": "모든 상품을 같은 크기로 채워야 하나요?",
          "a": "아닙니다. 실제 크기 의미를 해치지 않는 범위에서 일관성을 맞추세요."
        },
        {
          "q": "가로·세로 원본을 섞어도 되나요?",
          "a": "네. 각 사진을 공통 프레임 안에서 따로 조절합니다."
        },
        {
          "q": "어떤 비율이 좋나요?",
          "a": "쇼핑몰이나 마켓의 요구 규격을 우선하세요."
        },
        {
          "q": "투명 배경을 유지할 수 있나요?",
          "a": "지원 형식에서는 가능하며 최종 배경에서 확인해야 합니다."
        }
      ]
    },
    {
      "slug": "crop-portrait-photos-without-cutting-subject",
      "title": "인물사진에서 머리·손·관절을 어색하게 자르지 않는 방법",
      "description": "인물사진을 온라인으로 자를 때 머리카락, 손, 관절, 의상 디테일과 자연스러운 여백을 안전하게 지키는 방법을 안내합니다.",
      "intro": "인물사진 크롭은 얼굴을 화면 중앙에 두는 작업으로 끝나지 않습니다. 경계를 잘못 잡으면 머리카락, 손끝, 팔꿈치, 무릎, 의상 장식이 애매하게 잘려 사진 전체가 우연히 잘린 것처럼 보일 수 있습니다. 이 가이드에서는 최종 사용처에 맞춰 비율을 먼저 정하고, 인물의 시선과 자세를 살리면서 안전한 크롭 경계를 선택하는 실전 기준을 설명합니다.",
      "category": "인물 구도",
      "readTime": "12분",
      "illustration": "/guides/portrait-safe-crop.svg",
      "takeaways": [
        "최종 사용 비율을 먼저 정한 뒤 인물 위치를 조절합니다.",
        "관절과 중요한 의상 디테일을 경계선에서 피합니다.",
        "편집 화면뿐 아니라 실제 표시 크기로 내려받은 파일을 확인합니다."
      ],
      "sections": [
        {
          "heading": "1. 사진이 전달해야 할 내용을 먼저 정하기",
          "paragraphs": [
            "증명형 프로필, 가족사진, 패션 사진, 환경 인물사진은 필요한 배경과 신체 범위가 서로 다릅니다. 표정이 핵심인지, 의상과 자세가 중요한지, 장소의 분위기까지 보여줘야 하는지 먼저 결정해야 안전하게 덜어낼 부분을 찾을 수 있습니다.",
            "얼굴 중심 사진에서는 눈높이와 표정이 우선입니다. 전신 사진은 손과 발, 몸의 실루엣이 중요하고, 환경 인물사진은 배경을 지나치게 제거하면 장소가 전달하는 의미가 사라질 수 있습니다."
          ]
        },
        {
          "heading": "2. 비율을 먼저 정하고 구도 잡기",
          "paragraphs": [
            "1:1, 4:5, 3:4, 9:16 또는 사용자 지정 비율을 먼저 선택하세요. 3:4에서 안정적으로 보이는 인물도 정사각형에서는 갑갑해질 수 있습니다. 최종 비율을 먼저 고르면 나중에 다시 구도를 전부 조정하는 일을 줄일 수 있습니다.",
            "같은 사진을 여러 플랫폼에 사용할 때는 한 장을 억지로 공용으로 쓰기보다 원본에서 용도별 파일을 따로 만드는 편이 좋습니다."
          ]
        },
        {
          "heading": "3. 관절과 소품 경계를 피하기",
          "paragraphs": [
            "손목, 팔꿈치, 무릎, 발목, 손끝처럼 관절이나 끝부분을 경계선이 정확히 통과하면 어색해 보이기 쉽습니다. 관절보다 조금 위나 아래에서 자르면 의도된 구도로 느껴집니다. 안경, 모자, 베일, 부케, 넓게 퍼지는 옷자락처럼 몸 밖으로 이어지는 요소도 함께 확인해야 합니다.",
            "여러 사람이 나온 사진이라면 중앙 인물만 보지 말고 모든 얼굴과 손, 발이 네 면의 경계에서 안전한지 살펴보세요."
          ]
        },
        {
          "heading": "4. 머리 위 여백과 시선 방향 조절",
          "paragraphs": [
            "머리 위 공간이 너무 많으면 인물이 아래로 처져 보이고, 지나치게 적으면 답답합니다. 프로필은 조금 타이트하게, 가족사진이나 에디토리얼 사진은 여유 있게 잡는 식으로 목적에 따라 달리합니다.",
            "인물이 한쪽을 바라본다면 시선이 향하는 방향에 조금 더 공간을 남기는 것이 자연스럽습니다. 모자나 풍성한 머리카락도 실제 시각적 높이에 포함해 판단하세요."
          ]
        },
        {
          "heading": "5. 여러 인물사진을 일정하게 맞추기",
          "paragraphs": [
            "직원 프로필이나 보정 전후 사진처럼 여러 장을 맞출 때는 기준 사진 한 장을 먼저 완성하고 잠급니다. 다른 사진은 눈높이, 얼굴 크기, 어깨 위치, 머리 위 여백을 기준으로 각각 확대와 위치를 조절하세요. 원본 촬영 거리가 다르므로 숫자 배율을 똑같이 맞출 필요는 없습니다.",
            "투명도를 낮춰 주요 지점을 겹친 다음 다시 100%로 돌려 각 사진을 단독으로 확인해야 합니다."
          ]
        },
        {
          "heading": "6. 실제 표시 크기로 최종 점검",
          "paragraphs": [
            "큰 편집 화면에서 넉넉해 보인 크롭도 작은 프로필 원형 마스크에서는 답답할 수 있습니다. 테스트 파일을 내려받아 실제 웹페이지나 앱에서 사용하는 크기로 확인하세요.",
            "원본은 그대로 보관하고 용도와 비율이 드러나는 파일명으로 별도 저장하면 이후 재편집 시 품질 손실을 줄일 수 있습니다."
          ]
        }
      ],
      "faq": [
        {
          "q": "머리 윗부분은 항상 모두 보여야 하나요?",
          "a": "항상 그런 것은 아닙니다. 가까운 클로즈업에서는 일부를 자를 수 있지만, 우연히 잘린 것처럼 보이지 않도록 구도 의도가 분명해야 합니다."
        },
        {
          "q": "인물사진에 가장 좋은 비율은 무엇인가요?",
          "a": "세로 인물은 4:5와 3:4가 유연하고, 프로필은 1:1이 편리합니다. 최종 사용처가 비율을 결정해야 합니다."
        },
        {
          "q": "여러 프로필 사진은 어떻게 맞추나요?",
          "a": "기준 레이어를 정한 뒤 눈높이, 얼굴 크기, 어깨와 머리 위 여백을 사진별로 맞추세요."
        }
      ]
    },
    {
      "slug": "crop-images-for-social-media",
      "title": "소셜미디어용 이미지를 중요한 내용 손실 없이 자르는 방법",
      "description": "피드, 정사각형 그리드, 스토리, 릴스 커버에서 얼굴·문구·로고가 잘리지 않도록 안전 영역과 비율을 설계합니다.",
      "intro": "소셜 플랫폼은 같은 이미지를 피드, 프로필 그리드, 미리보기, 스토리, 릴스 커버에서 서로 다르게 보여줍니다. 편집 화면에서는 잘 보이던 얼굴이나 문구가 실제 업로드 후 버튼과 캡션에 가려질 수 있습니다. 이 글에서는 최종 노출 위치를 먼저 나누고, 중요한 요소를 안전 영역 안에 배치하며, 한 장의 원본으로 여러 비율을 만드는 실전 흐름을 정리합니다.",
      "category": "소셜미디어",
      "readTime": "13분",
      "illustration": "/guides/social-media-crop.svg",
      "takeaways": [
        "중요한 노출 위치마다 별도의 파일을 만듭니다.",
        "얼굴·문구·로고를 인터페이스 가장자리에서 떨어뜨립니다.",
        "실제 모바일 미리보기를 최종 품질 검사로 사용합니다."
      ],
      "sections": [
        {
          "heading": "1. 업로드 위치를 먼저 분류하기",
          "paragraphs": [
            "피드 게시물, 프로필 그리드, 스토리, 릴스 커버, 썸네일, 링크 미리보기 중 어디에 쓸지 목록을 만드세요. 각 위치가 요구하는 비율과 자동 크롭 방식이 달라 한 파일만으로 모두 대응하면 예상하지 못한 잘림이 생길 수 있습니다.",
            "가장 중요한 위치를 우선 제작하고, 4:5 피드용과 1:1 그리드용, 9:16 스토리용처럼 보조 버전을 원본에서 따로 만드세요."
          ]
        },
        {
          "heading": "2. 비율과 안전 영역을 구분하기",
          "paragraphs": [
            "비율은 이미지의 바깥 모양을 정하지만, 안전 영역은 중요한 정보가 머물러야 하는 내부 범위입니다. 세로 화면에서는 상단과 하단의 계정 정보, 버튼, 설명 영역이 사진을 덮을 수 있습니다.",
            "얼굴, 가격, 제품명, 핵심 문구는 중앙에 가깝게 두고, 장식용 배경은 가장자리까지 사용할 수 있습니다."
          ]
        },
        {
          "heading": "3. 문구와 로고를 보호하기",
          "paragraphs": [
            "경계 가까이에 있는 글자는 자동 크롭과 작은 화면에서 위험합니다. 제목, 보조 문구, 로고 주변에는 충분한 여백을 두세요. 데스크톱에서 간신히 보이는 크기는 모바일에서 읽히지 않을 수 있습니다.",
            "문구가 이미지에 포함되어 있다면 테스트 파일을 휴대전화로 확인하고, 줄바꿈과 버튼 겹침까지 점검하세요."
          ]
        },
        {
          "heading": "4. 한 원본으로 여러 비율 만들기",
          "paragraphs": [
            "같은 원본을 이용해 피드용 세로, 그리드용 정사각형, 스토리용 9:16 파일을 각각 만듭니다. 단순히 중앙을 자르지 말고 비율마다 인물이나 제품 위치를 다시 조정하세요.",
            "단체사진이 9:16에 들어가지 않는다면 사람을 자를 정도로 확대하기보다 배경을 여유 있게 남기는 편이 낫습니다."
          ]
        },
        {
          "heading": "5. 캠페인 전체의 규칙 만들기",
          "paragraphs": [
            "연속 게시물은 눈높이, 제품 바닥선, 배경 여백, 로고 위치, 출력 크기를 규칙으로 정하면 일관성이 생깁니다. 기준 레이어를 활용해 새 이미지를 비교하세요.",
            "제품의 실제 크기 차이나 인물의 자연스러운 비율까지 억지로 같게 만들 필요는 없습니다. 일관성은 정보를 명확하게 해야 합니다."
          ]
        },
        {
          "heading": "6. 업로드 후 실제 화면 확인",
          "paragraphs": [
            "플랫폼은 미리보기와 압축 방식을 바꿀 수 있으므로 가능하면 비공개 또는 초안으로 업로드해 휴대전화에서 확인하세요. 피드와 프로필 그리드가 서로 다르게 보이는지도 점검합니다.",
            "원본과 고품질 출력 파일을 보관하면 플랫폼 화면이 바뀌어도 재다운로드로 인한 품질 손실 없이 새 버전을 만들 수 있습니다."
          ]
        }
      ],
      "faq": [
        {
          "q": "한 가지 이미지 크기로 모든 플랫폼에 쓸 수 있나요?",
          "a": "가능은 하지만 피드, 그리드, 스토리, 썸네일의 모양이 달라 중요한 위치는 별도 크롭을 만드는 편이 안전합니다."
        },
        {
          "q": "문구는 어디에 두는 것이 좋나요?",
          "a": "가장자리에서 충분히 떨어뜨리고 실제 모바일 화면에서 인터페이스와 겹치지 않는지 확인하세요."
        },
        {
          "q": "단체사진을 9:16으로 꽉 채워야 하나요?",
          "a": "모든 사람이 안전하게 들어오는 경우에만 확대하세요. 화면을 채우는 것보다 사람을 보존하는 것이 우선입니다."
        }
      ]
    },
    {
      "slug": "crop-mixed-orientation-photos-for-carousel",
      "title": "가로·세로 사진을 하나의 캐러셀 비율로 맞추는 방법",
      "description": "가로, 세로, 정사각형 원본을 무조건 중앙 크롭하지 않고 한 캐러셀에 자연스럽게 정리합니다.",
      "intro": "캐러셀에는 촬영 방향이 다른 사진이 함께 들어가는 경우가 많습니다. 준비 없이 업로드하면 첫 이미지의 비율에 맞춰 이후 사진이 자동으로 잘리거나, 인물과 배경의 핵심 부분이 사라질 수 있습니다. 이 가이드는 하나의 공통 비율을 정한 뒤 각 사진을 독립적으로 재구성하고, 전체 순서가 자연스럽게 이어지도록 만드는 방법을 설명합니다.",
      "category": "캐러셀 구성",
      "readTime": "12분",
      "illustration": "/guides/mixed-carousel.svg",
      "takeaways": [
        "캐러셀 전체가 사용할 한 가지 비율을 먼저 결정합니다.",
        "각 사진은 공통 프레임 안에서 독립적으로 재구성합니다.",
        "한 장씩뿐 아니라 전체 순서의 리듬을 확인합니다."
      ],
      "sections": [
        {
          "heading": "1. 캐러셀의 공통 프레임 정하기",
          "paragraphs": [
            "정사각형, 세로형, 가로형 중 시리즈가 사용할 모양을 먼저 고릅니다. 모바일 피드에서는 4:5가 화면을 넓게 사용하고, 1:1은 다른 채널에 재사용하기 편합니다. 건축이나 풍경이 중심이라면 가로형도 적합할 수 있습니다.",
            "일부 플랫폼은 첫 사진의 비율을 전체 시리즈에 적용하므로 업로드 전에 모든 파일을 같은 크기로 준비하세요."
          ]
        },
        {
          "heading": "2. 원본 사진 유형 분류하기",
          "paragraphs": [
            "넓은 풍경, 세로 인물, 근접 디테일, 정사각형 이미지를 나눠보세요. 가로 사진은 핵심 영역을 선택해야 하고, 세로 사진은 좌우 여백과 확대 정도를 조절해야 합니다.",
            "중앙 정렬이 항상 정답은 아닙니다. 원래 구도에서 의도적으로 한쪽에 배치된 피사체를 중앙으로 옮기면 사진의 힘이 약해질 수 있습니다."
          ]
        },
        {
          "heading": "3. 전체 흐름과 리듬 만들기",
          "paragraphs": [
            "첫 장은 전체를 보여주고, 다음은 중간 거리, 마지막은 디테일로 이어지는 식으로 정보의 크기를 조절할 수 있습니다. 출력 크기가 같다고 피사체 크기까지 모두 똑같아야 하는 것은 아닙니다.",
            "수평선 높이, 여백 방식, 배경의 무게 중심 같은 반복 요소가 서로 다른 사진을 하나의 시리즈로 묶어줍니다."
          ]
        },
        {
          "heading": "4. 가로 사진을 세로 프레임에 넣기",
          "paragraphs": [
            "넓은 사진을 좁은 세로 프레임에 넣을 때 무엇을 포기할지 먼저 정합니다. 핵심 인물, 움직임 방향, 장소 맥락을 보호하세요. 중요한 피사체 두 개가 멀리 떨어져 있다면 하나의 세로 크롭이 적절하지 않을 수도 있습니다.",
            "빈 공간을 없애기 위해 과도하게 확대하기보다 의미 있는 배경을 남긴 느슨한 크롭이 더 자연스러울 수 있습니다."
          ]
        },
        {
          "heading": "5. 세로·정사각형 사진 조정하기",
          "paragraphs": [
            "세로 사진은 확대보다 머리 위와 발 아래 여백을 주의하고, 정사각형 사진은 상하 공간을 추가했을 때 균형이 바뀌는지 확인합니다. 모든 레이어는 공통 프레임 뒤에서 별도로 움직일 수 있습니다.",
            "같은 인물이나 장소를 정확히 맞추는 경우에만 투명도를 활용하고, 이야기형 캐러셀에서는 완벽한 중첩보다 시각적 연속성을 우선하세요."
          ]
        },
        {
          "heading": "6. 내보내기 전 전체 순서 점검",
          "paragraphs": [
            "레이어를 순서대로 켜고 끄거나 작은 테스트 파일을 내려받아 피사체가 갑자기 튀는지, 특정 장만 지나치게 타이트한지 확인합니다.",
            "모든 파일을 같은 크기로 내보내고 순서가 드러나는 파일명으로 저장하면 업로드 실수를 줄일 수 있습니다."
          ]
        }
      ],
      "faq": [
        {
          "q": "캐러셀에는 어떤 비율이 가장 좋나요?",
          "a": "4:5는 모바일 화면을 넓게 사용하고, 1:1은 재사용이 편합니다. 콘텐츠 성격과 플랫폼을 기준으로 선택하세요."
        },
        {
          "q": "모든 피사체 크기를 같게 해야 하나요?",
          "a": "아닙니다. 여백과 흐름은 통일하되 전체 장면과 디테일 사진은 서로 다른 크기를 사용할 수 있습니다."
        },
        {
          "q": "가로 사진도 세로 캐러셀에 넣을 수 있나요?",
          "a": "핵심 내용을 손상하지 않고 재구성할 수 있다면 가능합니다."
        }
      ]
    },
    {
      "slug": "crop-transparent-png-images",
      "title": "투명 PNG 이미지를 깔끔한 가장자리로 자르는 방법",
      "description": "로고, 누끼 제품, 스티커 PNG의 투명 배경과 여백, 부드러운 가장자리를 보존하면서 크롭합니다.",
      "intro": "투명 PNG는 일반 사진과 다르게 보이지 않는 픽셀도 레이아웃의 일부입니다. 같은 해상도라도 투명 여백이 많으면 실제 로고나 제품이 작게 보일 수 있고, 경계를 너무 타이트하게 잡으면 그림자와 반투명 가장자리가 잘릴 수 있습니다. 이 글에서는 투명 영역을 확인하고, 여러 자산에 일관된 여백을 적용하며, 출력 파일의 투명도가 제대로 유지되는지 검사하는 방법을 설명합니다.",
      "category": "투명 이미지",
      "readTime": "11분",
      "illustration": "/guides/transparent-png.svg",
      "takeaways": [
        "투명 여백을 단순한 빈 공간이 아닌 배치 정보로 봅니다.",
        "밝은 배경과 어두운 배경에서 가장자리 번짐을 확인합니다.",
        "출력 파일을 다른 프로그램에서 열어 투명도를 검증합니다."
      ],
      "sections": [
        {
          "heading": "1. 투명 캔버스 이해하기",
          "paragraphs": [
            "PNG 파일은 보이는 물체 주변에 투명 픽셀을 포함할 수 있습니다. 파일 크기는 보이는 물체가 아니라 전체 캔버스를 의미합니다. 같은 1000×1000 파일도 한쪽은 로고가 크게, 다른 쪽은 작게 보일 수 있습니다.",
            "투명 여백이 그림자와 호흡 공간, 정렬 기준을 위해 의도된 것인지 먼저 판단하세요."
          ]
        },
        {
          "heading": "2. 실제 물체 경계 확인하기",
          "paragraphs": [
            "체커보드나 대비되는 배경 위에서 투명 영역을 확인하세요. 부드러운 그림자, 반투명 머리카락, 유리, 발광 효과, 안티앨리어싱 픽셀은 단단한 윤곽 밖으로 이어집니다.",
            "보이는 경계에 너무 가깝게 자르면 미세한 픽셀이 사라져 딱딱한 외곽선이 생길 수 있습니다."
          ]
        },
        {
          "heading": "3. 일관된 투명 여백 정하기",
          "paragraphs": [
            "로고 세트나 제품 카탈로그는 눈에 보이는 물체 주변의 여백 규칙을 정합니다. 비대칭 로고는 수학적 중앙보다 시각적 중앙을 기준으로 좌우 여백을 다르게 잡아야 균형이 맞을 수 있습니다.",
            "기준 레이어를 정하고 각 물체가 캔버스에서 차지하는 시각적 크기를 비교하세요."
          ]
        },
        {
          "heading": "4. 배경이 채워지지 않는지 확인",
          "paragraphs": [
            "출력 과정에서 투명 영역이 흰색이나 검은색으로 바뀌지 않는지 확인해야 합니다. 흰 편집 화면에서는 실제로 단색 배경이 들어간 파일도 투명한 것처럼 보일 수 있습니다.",
            "다운로드 후 밝은 배경과 어두운 배경에 각각 올려 사각형 배경, 테두리, 색 오염이 없는지 확인하세요."
          ]
        },
        {
          "heading": "5. 가장자리 halo 현상 점검",
          "paragraphs": [
            "누끼 파일에는 이전 배경에서 남은 밝거나 어두운 픽셀이 있을 수 있습니다. 크롭이 이를 만들지는 않지만 구도를 타이트하게 하면 더 눈에 띕니다. 실제 사용할 배경에서 100% 확대해 검사하세요.",
            "원본에 halo가 있다면 크롭이 아니라 마스크와 가장자리 정리 작업이 필요합니다."
          ]
        },
        {
          "heading": "6. 최종 자산 테스트",
          "paragraphs": [
            "목표 프로그램에서 폭, 높이, 투명도, 여백을 확인하고 다른 아이콘이나 제품 옆에서 정렬이 자연스러운지 살펴보세요.",
            "고해상도 원본 PNG를 보관하세요. 작은 파일을 반복해서 축소·재출력하면 가장자리 품질이 떨어질 수 있습니다."
          ]
        }
      ],
      "faq": [
        {
          "q": "크롭하면 투명 배경이 사라지나요?",
          "a": "PNG 투명도를 지원하는 출력이라면 유지할 수 있지만, 내려받은 파일을 대비되는 배경에서 반드시 확인하세요."
        },
        {
          "q": "투명 여백은 얼마나 남겨야 하나요?",
          "a": "그림자와 시각적 호흡 공간이 잘리지 않을 만큼 남기고, 관련 자산 전체에 같은 기준을 적용하세요."
        },
        {
          "q": "누끼 주변에 흰 테두리가 생기는 이유는 무엇인가요?",
          "a": "원본에 이전 배경의 가장자리 픽셀이 남았을 수 있습니다. 이는 크롭이 아니라 마스크 정리가 필요한 문제입니다."
        }
      ]
    },
    {
      "slug": "crop-large-images-on-mobile",
      "title": "모바일 브라우저에서 고해상도 사진을 안정적으로 자르는 방법",
      "description": "휴대전화 원본을 작업할 때 메모리, 이미지 수, 출력 크기를 조절해 멈춤과 다운로드 실패를 줄입니다.",
      "intro": "최신 스마트폰 사진은 해상도가 매우 높지만 모바일 브라우저가 사용할 수 있는 메모리는 제한적입니다. 여러 원본을 동시에 불러오고 캔버스에 그린 뒤 큰 파일로 내보내면 화면이 비거나 브라우저가 종료될 수 있습니다. 이 가이드는 모바일에서 큰 사진을 더 안정적으로 크롭하기 위한 이미지 수, 출력 크기, 터치 조작, 다운로드 순서를 설명합니다.",
      "category": "모바일 성능",
      "readTime": "12분",
      "illustration": "/guides/mobile-large-image.svg",
      "takeaways": [
        "현재 작업에 필요한 사진만 불러옵니다.",
        "카메라 최대 해상도가 아니라 실제 사용처에 맞는 출력 크기를 선택합니다.",
        "완료한 작업을 저장한 뒤 다음 대용량 세트를 엽니다."
      ],
      "sections": [
        {
          "heading": "1. 큰 사진이 브라우저 메모리를 많이 쓰는 이유",
          "paragraphs": [
            "저장된 JPEG는 몇 MB에 불과해도 화면에 그리기 위해 압축을 풀면 훨씬 많은 메모리를 사용합니다. 수천만 픽셀을 가진 사진 여러 장과 캔버스 출력용 임시 복사본이 동시에 생기면 모바일 기기의 한계를 넘을 수 있습니다.",
            "한 장은 잘 열리지만 다섯 장을 겹쳤을 때 느려지는 이유가 바로 이 차이입니다."
          ]
        },
        {
          "heading": "2. 작업 이미지 수 줄이기",
          "paragraphs": [
            "반드시 다섯 장이 필요하지 않다면 두세 장만 불러오세요. 한 비교 세트를 완성하고 내보낸 뒤 다음 작업을 시작하는 편이 안전합니다. 메모리가 부족한 기기에서는 다른 브라우저 탭과 앱도 정리하세요.",
            "여러 크롭을 시험하기 위해 같은 원본을 불필요하게 복제하지 말고 한 번에 하나의 의도된 버전을 만드세요."
          ]
        },
        {
          "heading": "3. 현실적인 출력 크기 선택",
          "paragraphs": [
            "소셜 게시물은 카메라 전체 해상도가 필요하지 않습니다. 실제 표시 크기나 플랫폼 요구치에 맞는 폭과 높이를 사용하면 내보내기 시간과 메모리, 파일 용량이 줄어듭니다.",
            "출력 숫자를 크게 만든다고 원본에 없던 디테일이 생기지 않으며, 오히려 실패 가능성만 높일 수 있습니다."
          ]
        },
        {
          "heading": "4. 터치 제스처를 천천히 사용",
          "paragraphs": [
            "한 손가락으로 레이어를 이동하고 두 손가락으로 확대합니다. 짧은 시간에 반복적으로 큰 핀치를 하면 많은 화면 갱신이 발생해 오래된 기기에서 불안정할 수 있습니다.",
            "정렬이 끝난 레이어는 잠가 실수로 움직여 무거운 작업을 다시 하는 일을 줄이세요."
          ]
        },
        {
          "heading": "5. 안전하게 내보내기",
          "paragraphs": [
            "먼저 선택한 사진 한 장을 내려받아 현재 크기에서 출력이 완료되는지 확인하세요. 이후 필요하면 ZIP으로 전체 파일을 받습니다. 다운로드가 끝나기 전에 앱을 전환하거나 화면을 잠그지 않는 편이 좋습니다.",
            "모바일 브라우저는 ZIP 파일을 다르게 처리하므로 소량이면 개별 다운로드가 더 간단할 수 있습니다."
          ]
        },
        {
          "heading": "6. 화면이 비거나 종료되었을 때",
          "paragraphs": [
            "편집 화면이 사라지면 페이지를 다시 열고 이미지 수나 출력 크기를 줄이세요. 편집은 임시 브라우저 데이터에서 이루어지므로 원본 사진이 손상된 것은 아닙니다.",
            "대량의 초고해상도 작업은 데스크톱이 더 안정적일 수 있습니다. 모바일 편의성과 기기 메모리 한계는 별개의 문제입니다."
          ]
        }
      ],
      "faq": [
        {
          "q": "JPEG 파일은 작은데 왜 메모리를 많이 쓰나요?",
          "a": "저장 용량과 압축을 푼 픽셀 메모리는 다릅니다. 브라우저는 그리기 전에 이미지를 펼쳐야 합니다."
        },
        {
          "q": "원본 해상도를 먼저 줄여야 하나요?",
          "a": "원본은 보관하고, 한 번에 불러오는 사진 수와 최종 출력 크기를 현실적으로 조절하는 것이 좋습니다."
        },
        {
          "q": "휴대전화에서 ZIP 다운로드가 실패하는 이유는 무엇인가요?",
          "a": "메모리가 부족하거나 브라우저의 ZIP 처리 방식 때문일 수 있습니다. 이미지 수를 줄이거나 개별로 내려받아 보세요."
        }
      ]
    },
    {
      "slug": "create-consistent-progress-photos",
      "title": "과장 없이 일관된 진행 사진을 만드는 방법",
      "description": "운동, 피부, 리모델링, 복원, 프로젝트 기록에서 구도·카메라 높이·거리·조명을 일정하게 유지합니다.",
      "intro": "진행 사진은 이미지 차이가 실제 변화에서 비롯될 때 의미가 있습니다. 더 타이트한 크롭, 낮은 카메라 각도, 다른 조명, 달라진 자세는 변화를 실제보다 크게 보이게 할 수 있습니다. 이 글에서는 촬영 단계의 조건을 표준화하고, 안정적인 기준점을 이용해 사진을 겹쳐 맞추며, 비교 결과를 과장하지 않는 책임 있는 작업 방법을 설명합니다.",
      "category": "기록 워크플로",
      "readTime": "14분",
      "illustration": "/guides/progress-photo.svg",
      "takeaways": [
        "크롭보다 먼저 촬영 조건을 표준화합니다.",
        "안정적인 기준점과 기준 사진 한 장을 사용합니다.",
        "변화를 과장하는 방식으로 확대하거나 정렬하지 않습니다."
      ],
      "sections": [
        {
          "heading": "1. 기록 목적과 윤리적 기준 정하기",
          "paragraphs": [
            "운동, 피부, 복원, 건축, 청소, 조경 등 무엇을 기록하는지 명확히 하세요. 비교는 사용자가 변화를 이해하도록 도와야 하며, 시각적 착시를 만들기 위한 것이어서는 안 됩니다.",
            "후 사진만 더 가까운 크롭이나 유리한 자세, 각도로 촬영하지 말고 조건이 달랐다면 이를 함께 표시하는 것이 신뢰를 높입니다."
          ]
        },
        {
          "heading": "2. 카메라 위치 표준화",
          "paragraphs": [
            "카메라 위치, 높이, 방향, 대략적인 화각을 기록하고 가능하면 삼각대나 고정 지점을 사용하세요. 실내는 벽 모서리와 문틀, 제품은 외곽과 받침선을 기준으로 삼을 수 있습니다.",
            "크롭은 작은 프레이밍 차이를 줄일 수 있지만 카메라를 앞뒤나 위아래로 크게 옮겨 생긴 원근 변화까지 완전히 고칠 수는 없습니다."
          ]
        },
        {
          "heading": "3. 피사체와 환경 조건 통일",
          "paragraphs": [
            "자세, 바라보는 방향, 배경, 조명, 의상 범주가 결과 해석에 영향을 준다면 동일하게 유지하세요. 피부 기록은 얼굴 각도와 빛 방향을, 리모델링은 같은 모서리와 높이를 반복합니다.",
            "간단한 촬영 체크리스트를 만들어 매번 사용하면 나중에 보정해야 할 차이가 크게 줄어듭니다."
          ]
        },
        {
          "heading": "4. 안정적인 기준점으로 정렬",
          "paragraphs": [
            "기준 사진과 새 사진을 레이어로 올리고 위 레이어의 투명도를 낮춥니다. 눈, 어깨, 문틀, 벽 모서리, 제품 외곽, 바닥선 같은 변하지 않는 지점을 먼저 맞추세요. 크기를 먼저 맞춘 뒤 위치를 미세 조정합니다.",
            "실제로 피사체가 변한 부분까지 억지로 겹치지 말고 안정적인 기준 프레임만 맞춰 진짜 차이가 남도록 해야 합니다."
          ]
        },
        {
          "heading": "5. 시리즈 전체에 한 가지 크롭 규칙 적용",
          "paragraphs": [
            "장기적으로 유지할 비율과 출력 크기를 정하고 머리 위 여백, 좌우 여백, 수평선, 제품 바닥선을 규칙으로 기록하세요. 원본마다 위치와 확대는 달라도 최종 기준은 같아야 합니다.",
            "자르지 않은 원본과 출력 크기를 함께 보관하면 나중에 비교를 검증하거나 다시 만들 수 있습니다."
          ]
        },
        {
          "heading": "6. 비교 결과를 투명하게 제시",
          "paragraphs": [
            "촬영 날짜와 조건, 중요한 맥락을 표시하세요. 한 단계에만 필터나 색 보정을 적용해 더 좋아 보이게 하지 말고 조명이나 촬영 조건이 달랐다면 한계를 알립니다.",
            "과장하지 않은 진행 사진은 덜 극적으로 보일 수 있지만 실제 판단에 더 유익하고 장기적인 신뢰를 만듭니다."
          ]
        }
      ],
      "faq": [
        {
          "q": "크롭만으로도 진행 사진이 왜곡될 수 있나요?",
          "a": "네. 피사체 크기와 각도, 프레임이 달라지면 변화가 과장될 수 있으므로 반복 가능한 규칙과 원본 보관이 필요합니다."
        },
        {
          "q": "무엇을 먼저 맞춰야 하나요?",
          "a": "눈, 벽 모서리, 제품 외곽처럼 안정적인 기준점을 먼저 맞춘 뒤 크롭을 조절하세요."
        },
        {
          "q": "다른 카메라 각도를 소프트웨어로 고칠 수 있나요?",
          "a": "일부만 가능합니다. 원근 변화는 촬영 단계에서 예방하는 것이 가장 정확합니다."
        }
      ]
    }
  ],
  "ja": [
    {
      "slug": "image-crop-online",
      "title": "オンライン画像切り抜き：構図と画質を守る実用ガイド",
      "description": "比率、被写体の位置、出力解像度を判断しながらオンラインで画像を切り抜く方法です。",
      "intro": "オンラインの切り抜きは端を削るだけではありません。用途を先に決め、重要部分を残し、元画像に合った出力サイズを選ぶ必要があります。",
      "category": "切り抜き基本",
      "readTime": "約10分",
      "illustration": "/guides/image-crop-online.svg",
      "takeaways": [
        "用途と出力条件を先に決めます。",
        "基準画像と再現可能な手順を使います。",
        "原因を分けて解決します。"
      ],
      "sections": [
        {
          "heading": "用途を先に決める",
          "paragraphs": [
            "掲載先の形と寸法を先に決めます。プロフィール、商品カード、縦動画では必要なフレームが異なります。"
          ]
        },
        {
          "heading": "比率と解像度を分ける",
          "paragraphs": [
            "比率は形、解像度はピクセル数です。同じ4:5でも800×1000と2400×3000では細部が異なります。"
          ]
        },
        {
          "heading": "被写体を意図的に配置する",
          "paragraphs": [
            "顔、手、商品端、文字を切らないよう余白を残し、目線や水平線を基準にします。"
          ]
        },
        {
          "heading": "必要以上に拡大しない",
          "paragraphs": [
            "拡大しすぎると使える元ピクセルが減ります。出力寸法と見えている元画像の範囲を比較します。"
          ]
        },
        {
          "heading": "端と透明度を確認する",
          "paragraphs": [
            "四辺、向き、透明部分を確認し、複数レイヤーは最後に100%不透明で個別確認します。"
          ]
        },
        {
          "heading": "書き出したファイルを確認する",
          "paragraphs": [
            "ダウンロード後の実ファイルを開き、寸法、向き、鮮明さを確認し、元ファイルは保管します。"
          ]
        },
        {
          "heading": "実務で確認したいポイント",
          "paragraphs": [
            "最終出力だけでなく、元画像の向き、色空間、透明部分、ファイル形式も確認します。特にスマートフォン写真は表示方向の情報を持つため、書き出し後に回転が変わっていないかを見る必要があります。",
            "掲載先が自動圧縮を行う場合は、必要以上に巨大な出力を作らず、実際の表示寸法に近いサイズを選ぶ方が安定します。",
            "重要な写真は一つの結果だけで判断せず、少し広い版と少し狭い版を比較して、被写体と余白のバランスが最も自然なものを残してください。",
            "公開前には、ダウンロードした画像の寸法とファイル形式を確認し、目的のサイトへ試験的に配置します。編集画面では問題がなくても、実際の表示枠や自動圧縮で見え方が変わることがあります。必要なら一段階広い版も保存しておくと、後から安全に調整できます。"
          ]
        }
      ],
      "faq": [
        {
          "q": "サーバーへ画像を送らず使えますか？",
          "a": "はい。選択画像はブラウザ内で処理されます。"
        },
        {
          "q": "出力サイズは？",
          "a": "掲載先の指定を優先し、元画像を過度に拡大しない寸法を選びます。"
        },
        {
          "q": "なぜぼやけますか？",
          "a": "切り抜き範囲の元ピクセルが不足している可能性があります。"
        },
        {
          "q": "元画像は変わりますか？",
          "a": "いいえ。新しいファイルが作られます。"
        }
      ]
    },
    {
      "slug": "crop-multiple-images-to-the-same-size",
      "title": "複数画像を同じサイズで切り抜く方法",
      "description": "画像ごとに位置と倍率を調整しながら同じ比率とピクセル寸法で保存します。",
      "intro": "同じ座標を一括適用すると、撮影距離が違う写真では構図が揃いません。共通フレームと個別調整を組み合わせます。",
      "category": "複数画像",
      "readTime": "約10分",
      "illustration": "/guides/same-size.svg",
      "takeaways": [
        "用途と出力条件を先に決めます。",
        "基準画像と再現可能な手順を使います。",
        "原因を分けて解決します。"
      ],
      "sections": [
        {
          "heading": "同じサイズと同じ座標の違い",
          "paragraphs": [
            "同じ出力寸法と同じ元座標の切り抜きは別です。被写体位置が違う場合は個別移動が必要です。"
          ]
        },
        {
          "heading": "基準画像を選ぶ",
          "paragraphs": [
            "最も代表的な画像で被写体の大きさと余白の基準を作り、完成後にロックします。"
          ]
        },
        {
          "heading": "残りの画像を重ねて揃える",
          "paragraphs": [
            "次の画像を半透明にし、目、角、水平線などを基準画像に合わせます。"
          ]
        },
        {
          "heading": "品質チェック",
          "paragraphs": [
            "被写体スケール、余白、切れ、回転、鮮明さを各レイヤーで確認します。"
          ]
        },
        {
          "heading": "最小の元画像に合わせる",
          "paragraphs": [
            "最も小さい、または最も強く拡大した元画像がセット全体の上限になります。"
          ]
        },
        {
          "heading": "セットとして書き出す",
          "paragraphs": [
            "同じ寸法で保存するとカルーセル、スライダー、商品一覧、動画で画面が跳ねません。"
          ]
        },
        {
          "heading": "作業を再現できる規則",
          "paragraphs": [
            "複数画像の統一では、目線、商品の底辺、地平線、背景余白など、比較に使う基準を言葉で記録すると再現しやすくなります。",
            "数値上のズームが違っても、見た目の占有率と位置が揃っていれば問題ありません。元画像の撮影距離が違うため、同じ数値に固定すると逆に不自然になります。",
            "最終確認では各レイヤーを単独で表示し、他の画像との一致だけでなく、一枚の写真として切れ方が自然かも確認します。",
            "同じ寸法で書き出した後は、実際の一覧画面に並べて確認します。単独では気づきにくい頭上余白や商品の底辺のずれが、グリッドでは明確になります。必要なら基準写真へ戻り、位置だけを微調整して再出力してください。",
            "作業の途中で基準画像を変更すると、他のレイヤーも連鎖的に修正する必要があります。最初に代表性の高い写真を選び、数枚で試験書き出しを行ってから全体へ適用してください。完成後はグリッド表示で余白と被写体位置を再確認します。"
          ]
        }
      ],
      "faq": [
        {
          "q": "サーバーへ画像を送らず使えますか？",
          "a": "はい。選択画像はブラウザ内で処理されます。"
        },
        {
          "q": "出力サイズは？",
          "a": "掲載先の指定を優先し、元画像を過度に拡大しない寸法を選びます。"
        },
        {
          "q": "なぜぼやけますか？",
          "a": "切り抜き範囲の元ピクセルが不足している可能性があります。"
        },
        {
          "q": "元画像は変わりますか？",
          "a": "いいえ。新しいファイルが作られます。"
        }
      ]
    },
    {
      "slug": "align-before-and-after-photos",
      "title": "ビフォー・アフター写真を正確に揃える方法",
      "description": "透明度と基準点を使い、比較写真の大きさと位置を整えます。",
      "intro": "比較では意図した変化だけを見せることが大切です。偶然の拡大や位置ずれを減らすと結果が分かりやすくなります。",
      "category": "比較",
      "readTime": "約10分",
      "illustration": "/guides/before-after.svg",
      "takeaways": [
        "用途と出力条件を先に決めます。",
        "基準画像と再現可能な手順を使います。",
        "原因を分けて解決します。"
      ],
      "sections": [
        {
          "heading": "基準画像を固定する",
          "paragraphs": [
            "元画像または最初の画像を固定します。撮影位置が違う場合は比較したい領域を明確にします。"
          ]
        },
        {
          "heading": "上の画像を半透明にする",
          "paragraphs": [
            "比較レイヤーを40〜60%にすると二重の輪郭からずれが分かります。"
          ]
        },
        {
          "heading": "位置より倍率を先に合わせる",
          "paragraphs": [
            "目の間隔、商品幅、窓枠などで倍率を合わせてから上下左右を調整します。"
          ]
        },
        {
          "heading": "変わらない基準点を使う",
          "paragraphs": [
            "人物は目と鼻、部屋は壁と窓、商品は硬い外縁を使います。"
          ]
        },
        {
          "heading": "比較を誇張しない",
          "paragraphs": [
            "一方だけを大きく切り抜いて結果を誇張せず、似た視野を保ちます。"
          ]
        },
        {
          "heading": "実際の切り替えを確認する",
          "paragraphs": [
            "不透明に戻して素早く切り替え、脈動なら倍率、移動なら位置を修正します。"
          ]
        },
        {
          "heading": "比較を誤解させないために",
          "paragraphs": [
            "整列は変化を見やすくするためのもので、変化を大きく見せるためではありません。目や壁など安定した基準を合わせ、実際に変化した輪郭まで無理に一致させないでください。",
            "撮影距離やレンズが違うと遠近感が変わり、完全一致はできません。その場合は中央の重要部分を優先し、条件差を説明する方が正確です。",
            "比較画像を公開する時は、日付、撮影条件、補正の有無を示すと、見る人が結果を適切に判断できます。",
            "比較用の二枚は同じ比率とピクセル寸法で保存し、ファイル名に日付や前後の区別を入れます。動画やスライダーに使う場合は、書き出し後に短い切替テストを行い、揺れや拡大差が残っていないか確認します。",
            "位置が合っていても、明るさや色温度の差が強いと比較が難しくなります。クロップと色補正は別工程として扱い、比較の目的に必要な範囲だけ調整します。条件差を隠さず説明することで、見る人が変化を正しく判断できます。"
          ]
        }
      ],
      "faq": [
        {
          "q": "サーバーへ画像を送らず使えますか？",
          "a": "はい。選択画像はブラウザ内で処理されます。"
        },
        {
          "q": "出力サイズは？",
          "a": "掲載先の指定を優先し、元画像を過度に拡大しない寸法を選びます。"
        },
        {
          "q": "なぜぼやけますか？",
          "a": "切り抜き範囲の元ピクセルが不足している可能性があります。"
        },
        {
          "q": "元画像は変わりますか？",
          "a": "いいえ。新しいファイルが作られます。"
        }
      ]
    },
    {
      "slug": "aspect-ratio-vs-resolution",
      "title": "アスペクト比と解像度の違い",
      "description": "画像の形、ピクセル寸法、拡大と出力品質の関係を説明します。",
      "intro": "比率は形、解像度はピクセル数です。両者を区別すると、同じ形を保ちながら不要なぼやけを防げます。",
      "category": "技術資料",
      "readTime": "約10分",
      "illustration": "/guides/ratio-resolution.svg",
      "takeaways": [
        "用途と出力条件を先に決めます。",
        "基準画像と再現可能な手順を使います。",
        "原因を分けて解決します。"
      ],
      "sections": [
        {
          "heading": "比率は形",
          "paragraphs": [
            "1:1、4:5、9:16などは幅と高さの関係を示し、ピクセル数は示しません。"
          ]
        },
        {
          "heading": "解像度はピクセル寸法",
          "paragraphs": [
            "解像度は幅×高さのピクセル寸法です。細部は元画像の品質にも依存します。"
          ]
        },
        {
          "heading": "比率から寸法を計算する",
          "paragraphs": [
            "4:5で幅1080なら高さは1080×5÷4=1350です。"
          ]
        },
        {
          "heading": "実際の切り抜きピクセル",
          "paragraphs": [
            "元画像全体が大きくても強い切り抜き後の見えるピクセルは少ない場合があります。"
          ]
        },
        {
          "heading": "適切な出力寸法",
          "paragraphs": [
            "掲載先指定を優先し、指定がなければ実際の表示サイズと最小元画像に合わせます。"
          ]
        },
        {
          "heading": "比率と寸法の両方を揃える",
          "paragraphs": [
            "比率は形を、寸法はレイアウトの安定を揃えます。"
          ]
        },
        {
          "heading": "数値を選ぶ実践手順",
          "paragraphs": [
            "最初に掲載枠の形から比率を決め、次に実際の表示幅からピクセル寸法を決めます。この順番を逆にすると、大きな数値だけを追って不必要な拡大をしやすくなります。",
            "小さな元画像を大きく出力しても新しい細部は増えません。切り抜いた範囲に残る実ピクセル数を意識してください。",
            "複数画像では最も小さい、または最も大きく切る必要がある画像を基準に出力寸法を決めると、セット全体の品質差を抑えられます。",
            "印刷に使う場合は画面表示だけでなく、印刷寸法と必要な画素密度も確認します。ウェブ用の小さな画像を大きく印刷すると粗さが目立つため、用途ごとに別の出力を作り、元画像を共通の保管ファイルとして残します。",
            "複数画像を同じ出力にする場合は、最も小さい元画像または最も強く拡大する画像を基準にします。一枚だけを基準に巨大な出力を選ぶと、他の画像がぼやけることがあります。用途別にウェブ版と印刷版を分ける方法も有効です。"
          ]
        }
      ],
      "faq": [
        {
          "q": "サーバーへ画像を送らず使えますか？",
          "a": "はい。選択画像はブラウザ内で処理されます。"
        },
        {
          "q": "出力サイズは？",
          "a": "掲載先の指定を優先し、元画像を過度に拡大しない寸法を選びます。"
        },
        {
          "q": "なぜぼやけますか？",
          "a": "切り抜き範囲の元ピクセルが不足している可能性があります。"
        },
        {
          "q": "元画像は変わりますか？",
          "a": "いいえ。新しいファイルが作られます。"
        }
      ]
    },
    {
      "slug": "match-face-position-across-photos",
      "title": "複数写真で顔の位置を揃える方法",
      "description": "目線、顔の大きさ、余白を基準にポートレートを整列します。",
      "intro": "顔は小さな位置差でも連続表示で大きく動いて見えます。すべての輪郭より安定した基準点を優先します。",
      "category": "顔の整列",
      "readTime": "約10分",
      "illustration": "/guides/face-alignment.svg",
      "takeaways": [
        "用途と出力条件を先に決めます。",
        "基準画像と再現可能な手順を使います。",
        "原因を分けて解決します。"
      ],
      "sections": [
        {
          "heading": "目線を先に合わせる",
          "paragraphs": [
            "目線は最も安定した水平基準です。"
          ]
        },
        {
          "heading": "顔の大きさを合わせる",
          "paragraphs": [
            "目の間隔、顔幅、目から顎までの距離で倍率を確認します。"
          ]
        },
        {
          "heading": "鼻と耳を補助にする",
          "paragraphs": [
            "鼻筋は中心、耳は頭の回転を確認する補助になります。"
          ]
        },
        {
          "heading": "自然な余白",
          "paragraphs": [
            "髪、顎、肩の周囲に似た余白を残します。"
          ]
        },
        {
          "heading": "表情と姿勢の違い",
          "paragraphs": [
            "笑顔や頭の傾きによる実際の変化は無理に消しません。"
          ]
        },
        {
          "heading": "最終表示サイズで確認する",
          "paragraphs": [
            "実際の表示サイズで素早く切り替えて安定を確認します。"
          ]
        },
        {
          "heading": "自然さを保つ整列",
          "paragraphs": [
            "顔の輪郭は表情、頭の傾き、レンズで変わるため、すべてを完全に重ねる必要はありません。目の高さ、鼻の中心、顎付近など少数の基準を優先します。",
            "髪型や肩幅の違いを無理に合わせると、各写真の自然な印象が失われます。目的は同一人物を見やすく比較することであり、形を同じに見せることではありません。",
            "丸型プロフィールで使う場合は、四角い書き出しだけでなく円形マスクの内側でも顔と髪が安全か確認してください。",
            "表情の違いで口や顎の位置が変わる場合は、目線と鼻付近を主な基準にし、下半分のずれを無理に消さない方が自然です。目的が本人確認、経過記録、デザイン比較のどれかによって、優先する基準点を変えてください。",
            "顔の整列後は、髪、耳、肩、背景を含む全体も確認します。目だけが一致していても頭の傾きや遠近感が大きく異なると、不自然な切替になります。完全一致より、比較目的に合う安定した見え方を優先してください。",
            "最後に二枚を交互に表示し、目線だけでなく顔全体が不自然に移動して見えないか確認します。用途がプロフィール、経過記録、補正比較のどれかによって許容できるずれは異なるため、目的に合う精度で止めることも大切です。"
          ]
        }
      ],
      "faq": [
        {
          "q": "サーバーへ画像を送らず使えますか？",
          "a": "はい。選択画像はブラウザ内で処理されます。"
        },
        {
          "q": "出力サイズは？",
          "a": "掲載先の指定を優先し、元画像を過度に拡大しない寸法を選びます。"
        },
        {
          "q": "なぜぼやけますか？",
          "a": "切り抜き範囲の元ピクセルが不足している可能性があります。"
        },
        {
          "q": "元画像は変わりますか？",
          "a": "いいえ。新しいファイルが作られます。"
        }
      ]
    },
    {
      "slug": "prepare-before-after-video",
      "title": "ビフォー・アフター動画用画像の準備",
      "description": "クロスフェードや縦動画で画面が跳ねない同一サイズのフレームを作ります。",
      "intro": "動画の揺れは編集前の切り抜き、倍率、寸法の違いから起こることが多いです。",
      "category": "動画",
      "readTime": "約10分",
      "illustration": "/guides/video-frames.svg",
      "takeaways": [
        "用途と出力条件を先に決めます。",
        "基準画像と再現可能な手順を使います。",
        "原因を分けて解決します。"
      ],
      "sections": [
        {
          "heading": "動画比率を先に決める",
          "paragraphs": [
            "縦画面は9:16、横は16:9など最終キャンバスを先に決めます。"
          ]
        },
        {
          "heading": "基準フレームを選ぶ",
          "paragraphs": [
            "一枚のマスターにすべての時点を合わせ、累積ずれを防ぎます。"
          ]
        },
        {
          "heading": "被写体の大きさと中心",
          "paragraphs": [
            "人物は目と肩、空間は壁、商品は外縁と基準線を使います。"
          ]
        },
        {
          "heading": "同じピクセル寸法で書き出す",
          "paragraphs": [
            "全フレームを同じ幅と高さで保存し、自動フィットを避けます。"
          ]
        },
        {
          "heading": "短いフェードで試す",
          "paragraphs": [
            "最初と最後で短いフェードを作り、倍率と位置を確認します。"
          ]
        },
        {
          "heading": "意味を正確に伝える",
          "paragraphs": [
            "日付と条件を明確にし、切り抜きで変化を誇張しません。"
          ]
        },
        {
          "heading": "動画での見え方を確認する",
          "paragraphs": [
            "静止画では小さな位置差でも、ディゾルブや高速切替では揺れとして強く見えます。目、商品中心、建物角など一つの主基準を決めて揃えます。",
            "すべてのフレームを同じ寸法、色空間、向きで書き出すと編集ソフトでの自動拡大や黒帯を防げます。",
            "短いテスト動画を作り、スマートフォンで再生して、切替時のジャンプ、端のちらつき、文字の安全領域を確認してから本番を書き出します。",
            "動画編集ソフトへ読み込んだ後、各画像に自動的なフィットやパンが適用されていないか確認します。書き出し寸法が同じでも、ソフト側の設定で拡大率が変わることがあるため、位置とスケールを固定してから切替効果を追加します。",
            "フレームを書き出した後は、実際の編集ソフトで短い試写を作ります。静止画では見えない一、二ピクセルのずれが動画では揺れとして感じられるためです。必要に応じて基準点を一つに絞り、再度位置とスケールを微調整します。",
            "複数の画像を連続して使う場合は、基準フレームを途中で変更しないでください。最初の基準から各画像を合わせることで誤差の累積を防げます。ファイル名に順番を付け、同じ寸法で書き出すと編集時の混乱も減ります。"
          ]
        }
      ],
      "faq": [
        {
          "q": "サーバーへ画像を送らず使えますか？",
          "a": "はい。選択画像はブラウザ内で処理されます。"
        },
        {
          "q": "出力サイズは？",
          "a": "掲載先の指定を優先し、元画像を過度に拡大しない寸法を選びます。"
        },
        {
          "q": "なぜぼやけますか？",
          "a": "切り抜き範囲の元ピクセルが不足している可能性があります。"
        },
        {
          "q": "元画像は変わりますか？",
          "a": "いいえ。新しいファイルが作られます。"
        }
      ]
    },
    {
      "slug": "crop-photos-without-uploading",
      "title": "サーバーにアップロードせず画像を切り抜く方法",
      "description": "ローカル処理と通常のウェブ通信の違いを説明します。",
      "intro": "選択した画像はブラウザ内で処理され、編集サーバーへ送信されません。ただしページを読み込む通常の通信はあります。",
      "category": "プライバシー",
      "readTime": "約10分",
      "illustration": "/guides/local-processing.svg",
      "takeaways": [
        "用途と出力条件を先に決めます。",
        "基準画像と再現可能な手順を使います。",
        "原因を分けて解決します。"
      ],
      "sections": [
        {
          "heading": "ブラウザ内処理とは",
          "paragraphs": [
            "ブラウザが画像をメモリで読み、Canvasで新しいファイルを作ります。画像は編集サーバーへ送信されません。"
          ]
        },
        {
          "heading": "通常の通信は別",
          "paragraphs": [
            "ページの読み込みではIP、ブラウザ、URLなど通常の情報が処理される場合があります。"
          ]
        },
        {
          "heading": "確認方法",
          "paragraphs": [
            "開発者ツールのNetworkや、読込後のオフライン編集で確認できます。"
          ]
        },
        {
          "heading": "基本的な安全習慣",
          "paragraphs": [
            "信頼できる端末を使い、共有PCを避け、作業後にタブを閉じます。"
          ]
        },
        {
          "heading": "端末メモリの制限",
          "paragraphs": [
            "高解像度画像を複数開くと特にスマホでメモリ不足になることがあります。"
          ]
        },
        {
          "heading": "より厳格な管理が必要な場合",
          "paragraphs": [
            "医療・法務・組織規定がある資料は承認された方法を使用します。"
          ]
        },
        {
          "heading": "ローカル処理でも必要な注意",
          "paragraphs": [
            "ブラウザ内処理は編集画像を外部サーバーへ送らない利点がありますが、共有端末ではダウンロードフォルダや履歴の管理も重要です。",
            "作業中にページを再読み込みすると一時状態が失われることがあるため、重要なセットは完成ごとに保存してください。",
            "機密性の高い画像では、使用するブラウザ拡張機能や端末の同期設定も確認し、元ファイルと出力先を自分で管理します。",
            "ローカル処理であっても、ダウンロードした結果をクラウド同期フォルダへ保存すれば別サービスへ送信される可能性があります。機密画像では保存先を確認し、作業後に不要な一時ファイルや共有端末のダウンロード履歴を整理してください。",
            "端末内処理でも、ダウンロード先が自動同期フォルダの場合は外部サービスへ保存される可能性があります。機密写真では保存先、共有設定、ブラウザ拡張機能を確認し、作業後に不要なファイルを整理してください。ローカル処理と端末全体の安全管理は別の課題です。"
          ]
        }
      ],
      "faq": [
        {
          "q": "サーバーへ画像を送らず使えますか？",
          "a": "はい。選択画像はブラウザ内で処理されます。"
        },
        {
          "q": "出力サイズは？",
          "a": "掲載先の指定を優先し、元画像を過度に拡大しない寸法を選びます。"
        },
        {
          "q": "なぜぼやけますか？",
          "a": "切り抜き範囲の元ピクセルが不足している可能性があります。"
        },
        {
          "q": "元画像は変わりますか？",
          "a": "いいえ。新しいファイルが作られます。"
        }
      ]
    },
    {
      "slug": "image-crop-quality-troubleshooting",
      "title": "画像切り抜きの画質・不具合解決ガイド",
      "description": "ぼやけ、切れ、回転、透明背景、端末メモリの問題を診断します。",
      "intro": "問題を直すには、構図・元ピクセル・出力設定・向き・メモリのどれが原因かを分けて考えます。",
      "category": "トラブル解決",
      "readTime": "約10分",
      "illustration": "/guides/troubleshooting.svg",
      "takeaways": [
        "用途と出力条件を先に決めます。",
        "基準画像と再現可能な手順を使います。",
        "原因を分けて解決します。"
      ],
      "sections": [
        {
          "heading": "書き出しがぼやける",
          "paragraphs": [
            "強い切り抜きを大きく出力すると元ピクセル不足でぼやけます。"
          ]
        },
        {
          "heading": "被写体が切れる",
          "paragraphs": [
            "実ダウンロードを開き、四辺に安全余白を追加します。"
          ]
        },
        {
          "heading": "スマホ画像が回転する",
          "paragraphs": [
            "向きメタデータの違いは回転または再保存で直します。"
          ]
        },
        {
          "heading": "透明部分が違って見える",
          "paragraphs": [
            "PNG/WebPの透明部分は実際の背景で確認します。"
          ]
        },
        {
          "heading": "ブラウザが遅い・再読込する",
          "paragraphs": [
            "高解像度の複数画像はメモリを消費するため、枚数や寸法を減らします。"
          ]
        },
        {
          "heading": "完全に重ならない",
          "paragraphs": [
            "遠近、レンズ、姿勢が違えばすべての線は重なりません。"
          ]
        },
        {
          "heading": "症状別の確認",
          "paragraphs": [
            "症状を分け、ぼやけは出力、切れは余白、再読込はメモリから確認します。"
          ]
        },
        {
          "heading": "原因を一つずつ切り分ける",
          "paragraphs": [
            "ぼやけ、回転、色、透明度、ダウンロード失敗を同時に直そうとせず、まず一枚・小さい出力で再現するか確認します。",
            "元画像を100%で見て既にぼやけている場合、クロップだけでは回復できません。元が鮮明で出力だけ悪い場合は、拡大率や出力寸法を見直します。",
            "問題が端末やブラウザに限定されるかを確認するため、別のブラウザやデスクトップで同じ一枚を試すと原因を絞りやすくなります。",
            "問題を報告する時は、使用端末、ブラウザ、元画像の形式と寸法、選択した出力寸法、再現手順を記録します。これらが揃うと、画像固有の問題か、端末のメモリか、ブラウザの処理かを短時間で判断できます。",
            "原因を記録する時は、元画像の寸法、形式、レイヤー数、出力寸法、端末、ブラウザを残します。同じ条件を一つずつ変えて試すと、メモリ不足、拡大しすぎ、ファイル固有の問題を区別できます。複数の要素を同時に変えると原因が分からなくなります。"
          ]
        }
      ],
      "faq": [
        {
          "q": "サーバーへ画像を送らず使えますか？",
          "a": "はい。選択画像はブラウザ内で処理されます。"
        },
        {
          "q": "出力サイズは？",
          "a": "掲載先の指定を優先し、元画像を過度に拡大しない寸法を選びます。"
        },
        {
          "q": "なぜぼやけますか？",
          "a": "切り抜き範囲の元ピクセルが不足している可能性があります。"
        },
        {
          "q": "元画像は変わりますか？",
          "a": "いいえ。新しいファイルが作られます。"
        }
      ]
    },
    {
      "slug": "consistent-product-photo-cropping",
      "title": "商品写真を同じ構図に揃える方法",
      "description": "商品スケール、基準線、余白、出力寸法を統一します。",
      "intro": "商品を同じ物理サイズに見せるのではなく、同じルールで見やすく配置することが目的です。",
      "category": "商品写真",
      "readTime": "約10分",
      "illustration": "/guides/product-grid.svg",
      "takeaways": [
        "用途と出力条件を先に決めます。",
        "基準画像と再現可能な手順を使います。",
        "原因を分けて解決します。"
      ],
      "sections": [
        {
          "heading": "カタログのルールを決める",
          "paragraphs": [
            "背景、比率、占有率、上余白、基準線を先に定義します。"
          ]
        },
        {
          "heading": "代表商品を基準にする",
          "paragraphs": [
            "中程度の代表商品を基準にし、特殊形状だけでルールを作らないようにします。"
          ]
        },
        {
          "heading": "基準線と視覚中心",
          "paragraphs": [
            "接地点や包装下端を揃え、左右は視覚中心で調整します。"
          ]
        },
        {
          "heading": "サイズを誤解させない",
          "paragraphs": [
            "実寸比較が重要な商品を同じ物理サイズに見せないよう注意します。"
          ]
        },
        {
          "heading": "余白と影",
          "paragraphs": [
            "似た余白を保ち、影や透明背景を実ページで確認します。"
          ]
        },
        {
          "heading": "一覧で確認する",
          "paragraphs": [
            "少数を実際の一覧に置き、上下の跳ねや窮屈さを確認してから全体へ進みます。"
          ]
        },
        {
          "heading": "カタログ全体での検証",
          "paragraphs": [
            "商品単体では良く見えても、一覧に並べると底辺、見かけの大きさ、影の量の差が目立ちます。少数を先に書き出して実際のグリッドで確認します。",
            "商品の実寸差が購入判断に重要な場合、すべてを同じ大きさに見せないでください。余白規則を揃えながら実際の比率を保つ方法もあります。",
            "背景色、影、光の方向はクロップでは統一できません。撮影条件と画像編集を分けて管理することで、より信頼できるカタログになります。",
            "商品一覧では画像だけでなく、商品名や価格、ボタンと並んだ時の見え方も確認します。被写体が大きすぎると文字情報を圧迫し、小さすぎると比較しにくくなります。実際のカード幅で数点を試し、ルールを確定してから全商品へ適用します。",
            "規則を決める前に、縦長、横長、小型、大型など異なる形の商品を少数選び、実際の一覧カードに配置します。どれか一種類だけで調整すると、他の形で余白や底辺が崩れます。代表例で検証してから全商品へ展開すると手戻りを減らせます。"
          ]
        }
      ],
      "faq": [
        {
          "q": "サーバーへ画像を送らず使えますか？",
          "a": "はい。選択画像はブラウザ内で処理されます。"
        },
        {
          "q": "出力サイズは？",
          "a": "掲載先の指定を優先し、元画像を過度に拡大しない寸法を選びます。"
        },
        {
          "q": "なぜぼやけますか？",
          "a": "切り抜き範囲の元ピクセルが不足している可能性があります。"
        },
        {
          "q": "元画像は変わりますか？",
          "a": "いいえ。新しいファイルが作られます。"
        }
      ]
    },
    {
      "slug": "crop-portrait-photos-without-cutting-subject",
      "title": "人物写真で髪・手・関節を不自然に切らずにトリミングする方法",
      "description": "髪、指、関節、衣装の細部、視線方向の余白を守りながら人物写真を安全に切り抜く実践ガイドです。",
      "intro": "人物写真のトリミングは、顔を中央に置くだけの作業ではありません。髪、指先、肘、膝、衣装の装飾が境界線で中途半端に切れると、意図した構図ではなく偶然切れた写真に見えます。このガイドでは、用途に合う比率を先に決め、視線や姿勢を活かしながら安全な境界を選ぶ方法を説明します。",
      "category": "人物構図",
      "readTime": "12分",
      "illustration": "/guides/portrait-safe-crop.svg",
      "takeaways": [
        "最終用途の比率を先に決めます。",
        "関節や重要な衣装の細部を境界線から避けます。",
        "編集画面だけでなく実際の表示サイズで確認します。"
      ],
      "sections": [
        {
          "heading": "1. 写真が伝える内容を決める",
          "paragraphs": [
            "プロフィール、家族写真、ファッション、環境ポートレートでは必要な身体範囲と背景が異なります。表情、衣装、姿勢、場所のどれを優先するかを決めると、削ってよい部分が明確になります。",
            "顔中心なら目線と表情、全身なら手足とシルエット、環境写真なら場所を示す背景が重要です。"
          ]
        },
        {
          "heading": "2. 比率を先に設定する",
          "paragraphs": [
            "1:1、4:5、3:4、9:16、またはカスタム比率を選んでから位置を調整します。3:4で自然な写真も正方形では窮屈になるため、完成形を先に固定することが重要です。",
            "複数の媒体で使う場合は、一つの切り抜きを無理に使い回さず、元画像から用途別に書き出します。"
          ]
        },
        {
          "heading": "3. 関節と小物を守る",
          "paragraphs": [
            "手首、肘、膝、足首、指先を境界が正確に横切ると不自然に見えます。関節の少し上か下で切ると意図が伝わりやすくなります。眼鏡、帽子、ベール、花束、広がる衣装も確認します。",
            "複数人の写真では中央人物だけでなく、全員の顔、手、足を四辺で確認してください。"
          ]
        },
        {
          "heading": "4. 頭上の余白と視線を調整する",
          "paragraphs": [
            "頭上が広すぎると人物が沈み、狭すぎると圧迫感が出ます。プロフィールはややタイトに、家族写真や編集的な写真は余裕を持たせます。",
            "人物が横を向く場合は視線方向に少し広い空間を残すと自然です。帽子や髪のボリュームも高さに含めます。"
          ]
        },
        {
          "heading": "5. 複数の人物を揃える",
          "paragraphs": [
            "基準写真を一枚完成させてロックし、他の写真は目の高さ、顔の大きさ、肩、頭上の余白を合わせます。撮影距離が違うため、数値上のズームを同じにする必要はありません。",
            "透明度を下げて重ねた後、100%に戻して各写真を単独で確認します。"
          ]
        },
        {
          "heading": "6. 実際の表示サイズで確認する",
          "paragraphs": [
            "大きな編集画面で余裕があっても、小さな丸型アイコンでは窮屈になることがあります。テスト画像をダウンロードし、実際のサイトやアプリのサイズで確認します。",
            "元画像を残し、用途と比率が分かる名前で別ファイルとして保存してください。"
          ]
        }
      ],
      "faq": [
        {
          "q": "頭頂部は必ず全部見せるべきですか？",
          "a": "必ずしも必要ではありません。意図的なクローズアップなら切れますが、偶然に見えない構図が必要です。"
        },
        {
          "q": "人物写真に適した比率は？",
          "a": "4:5と3:4は縦写真に柔軟で、1:1はプロフィールに便利です。用途から選びます。"
        },
        {
          "q": "複数の顔写真をどう揃えますか？",
          "a": "基準レイヤーを使い、目線、顔サイズ、肩、頭上の余白を写真ごとに合わせます。"
        }
      ]
    },
    {
      "slug": "crop-images-for-social-media",
      "title": "SNS用画像を重要な内容を失わずにトリミングする方法",
      "description": "フィード、正方形グリッド、ストーリー、リール表紙で顔・文字・ロゴが切れない安全領域を設計します。",
      "intro": "SNSでは同じ画像がフィード、プロフィール一覧、ストーリー、リール表紙、リンクプレビューで異なる形に表示されます。編集画面で見えていた顔や文字が、投稿後にボタンや説明欄で隠れることもあります。ここでは表示場所を先に整理し、安全領域を確保しながら一つの元画像から複数比率を作る方法を解説します。",
      "category": "SNS",
      "readTime": "13分",
      "illustration": "/guides/social-media-crop.svg",
      "takeaways": [
        "重要な掲載場所ごとに別ファイルを作ります。",
        "顔・文字・ロゴを画面端から離します。",
        "実際のスマートフォン表示を最終確認に使います。"
      ],
      "sections": [
        {
          "heading": "1. 掲載場所を分類する",
          "paragraphs": [
            "フィード、プロフィールグリッド、ストーリー、リール表紙、サムネイル、リンクプレビューを確認します。それぞれ比率と自動切り抜きが異なるため、一つの画像だけでは予期しない欠落が起こります。",
            "最重要の配置を先に作り、4:5、1:1、9:16などの補助版を元画像から書き出します。"
          ]
        },
        {
          "heading": "2. 比率と安全領域を分ける",
          "paragraphs": [
            "比率は外形、安全領域は重要情報を置く内部範囲です。縦画面では上部と下部のアカウント情報、ボタン、説明が画像に重なります。",
            "顔、価格、商品名、行動喚起は中央寄りに置き、装飾背景だけを端まで広げます。"
          ]
        },
        {
          "heading": "3. 文字とロゴを守る",
          "paragraphs": [
            "端に近い文字は自動クロップと小画面で失われやすいため、十分な余白を作ります。デスクトップで読めてもスマートフォンでは小さすぎる場合があります。",
            "文字入り画像はテスト書き出しを行い、改行やUIとの重なりを実機で確認します。"
          ]
        },
        {
          "heading": "4. 一つの元画像から複数比率を作る",
          "paragraphs": [
            "フィード用縦、グリッド用正方形、ストーリー用9:16をそれぞれ作ります。中央を機械的に切るのではなく、比率ごとに人物や商品を再配置します。",
            "集合写真が9:16に収まらない場合、人物を切るほど拡大せず背景を残す方が適切です。"
          ]
        },
        {
          "heading": "5. シリーズの規則を作る",
          "paragraphs": [
            "目線、商品の底辺、背景余白、ロゴ位置、出力サイズを規則化すると投稿全体が整います。基準レイヤーで新しい画像を比較します。",
            "実際のサイズ差や自然な体格まで同一に見せる必要はありません。"
          ]
        },
        {
          "heading": "6. 投稿後の画面で確認する",
          "paragraphs": [
            "プラットフォームはプレビューや圧縮を変更するため、下書きや限定公開でスマートフォン表示を確認します。フィードとプロフィール一覧の両方を見ます。",
            "元画像と高品質の書き出しを保存しておけば、仕様変更後も再圧縮せず作り直せます。"
          ]
        }
      ],
      "faq": [
        {
          "q": "一つのサイズをすべてのSNSで使えますか？",
          "a": "可能ですが、フィード、グリッド、ストーリー、サムネイルは形が違うため重要な配置は別に作る方が安全です。"
        },
        {
          "q": "文字はどこに置くべきですか？",
          "a": "端から離し、実際のスマートフォン画面でUIに重ならないか確認します。"
        },
        {
          "q": "集合写真を9:16で画面いっぱいにすべきですか？",
          "a": "全員が安全に入る場合だけ拡大し、画面を満たすことより人物を守ることを優先します。"
        }
      ]
    },
    {
      "slug": "crop-mixed-orientation-photos-for-carousel",
      "title": "横・縦写真を一つのカルーセル比率に揃える方法",
      "description": "横長、縦長、正方形の写真を中央だけで切らず、同じカルーセルに自然に整理します。",
      "intro": "カルーセルには撮影方向の異なる写真が混在します。準備せずに投稿すると最初の画像の比率が全体に適用され、後の写真が不自然に切れることがあります。このガイドでは共通比率を決め、各写真を独立して再構成し、シリーズ全体の流れを整える方法を説明します。",
      "category": "カルーセル",
      "readTime": "12分",
      "illustration": "/guides/mixed-carousel.svg",
      "takeaways": [
        "全スライドの共通比率を先に決めます。",
        "各写真を同じ枠の中で個別に再構成します。",
        "一枚だけでなく並び全体のリズムを確認します。"
      ],
      "sections": [
        {
          "heading": "1. 共通フレームを選ぶ",
          "paragraphs": [
            "正方形、縦、横のどれを使うか決めます。4:5はモバイル画面を大きく使い、1:1は再利用しやすく、建築や風景は横長が適する場合があります。",
            "最初の画像が表示形状を決めるサービスもあるため、投稿前に全画像を同じ寸法にします。"
          ]
        },
        {
          "heading": "2. 元画像を分類する",
          "paragraphs": [
            "広い風景、縦人物、近接ディテール、正方形に分けます。横写真は焦点を選び、縦写真は左右余白と拡大を調整します。",
            "中央配置が常に正しいわけではなく、意図的な偏りを中央に戻すと写真の力が失われます。"
          ]
        },
        {
          "heading": "3. 視覚的な流れを作る",
          "paragraphs": [
            "全景、中距離、ディテールの順に情報量を変えると自然な物語になります。寸法が同じでも被写体サイズは同一でなくて構いません。",
            "地平線の高さ、余白、背景の重心などの反復要素がシリーズを結びます。"
          ]
        },
        {
          "heading": "4. 横写真を縦枠に入れる",
          "paragraphs": [
            "何を削れるかを先に決め、主要人物、動きの方向、場所の文脈を守ります。重要な被写体が離れている場合は一つの縦クロップに向かないこともあります。",
            "空白を消すための過度な拡大より、意味のある背景を残す方が自然です。"
          ]
        },
        {
          "heading": "5. 縦・正方形写真を調整する",
          "paragraphs": [
            "縦写真は頭上と足元、正方形は上下追加で均衡が変わらないか確認します。各レイヤーは共通枠の後ろで独立して移動できます。",
            "同一人物や場所を比較する時だけ透明度を使い、物語型では完全一致より連続性を優先します。"
          ]
        },
        {
          "heading": "6. 書き出し前に順番を確認する",
          "paragraphs": [
            "レイヤーを順に表示し、被写体が急に跳ぶ、特定の一枚だけ窮屈、顔や文字が端に近いといった問題を確認します。",
            "同じ寸法で書き出し、順番が分かるファイル名にします。"
          ]
        }
      ],
      "faq": [
        {
          "q": "カルーセルに適した比率は？",
          "a": "4:5はモバイルで大きく、1:1は再利用しやすいです。内容と媒体から選びます。"
        },
        {
          "q": "すべての被写体を同じ大きさにすべきですか？",
          "a": "いいえ。余白と流れを揃えつつ、全景とディテールは異なる大きさを使えます。"
        },
        {
          "q": "横写真を縦カルーセルに使えますか？",
          "a": "重要な内容を壊さず再構成できる場合は可能です。"
        }
      ]
    },
    {
      "slug": "crop-transparent-png-images",
      "title": "透明PNGをきれいな縁のままトリミングする方法",
      "description": "ロゴ、切り抜き商品、ステッカーの透明背景、余白、半透明の縁を保って切り抜きます。",
      "intro": "透明PNGでは見えないピクセルもレイアウトの一部です。同じ解像度でも透明余白が多いとロゴや商品が小さく見え、境界を詰めすぎると影や半透明の縁が切れます。ここでは透明範囲の確認、統一余白、背景が勝手に塗られていないかの検証方法を解説します。",
      "category": "透明画像",
      "readTime": "11分",
      "illustration": "/guides/transparent-png.svg",
      "takeaways": [
        "透明余白を配置情報として扱います。",
        "明暗両方の背景で縁のハローを確認します。",
        "書き出したファイルを別アプリで検証します。"
      ],
      "sections": [
        {
          "heading": "1. 透明キャンバスを理解する",
          "paragraphs": [
            "PNGは見える物体の周囲に透明ピクセルを持ちます。ファイル寸法は物体ではなくキャンバス全体です。同じ1000×1000でも余白量で見かけの大きさが変わります。",
            "影、呼吸空間、整列のために余白が意図されているか確認します。"
          ]
        },
        {
          "heading": "2. 実際の境界を確認する",
          "paragraphs": [
            "市松模様や対比背景で透明範囲を見ます。柔らかい影、半透明の髪、ガラス、光彩、アンチエイリアスは固い輪郭より外にあります。",
            "境界に寄せすぎると微細なピクセルが切れ、硬い輪郭になります。"
          ]
        },
        {
          "heading": "3. 統一余白を決める",
          "paragraphs": [
            "ロゴや商品セットでは見える物体周囲の余白規則を作ります。非対称形は数学的中心より視覚中心で左右を調整する方が自然です。",
            "基準レイヤーを使い、各物体の見かけの占有率を比較します。"
          ]
        },
        {
          "heading": "4. 背景の置換を確認する",
          "paragraphs": [
            "透明部分が白や黒に置換されていないか確認します。白い編集背景では透明と白塗りを区別できない場合があります。",
            "ダウンロード後に暗い背景と明るい背景へ置き、四角い背景や色汚染を確認します。"
          ]
        },
        {
          "heading": "5. ハローを点検する",
          "paragraphs": [
            "切り抜きには以前の背景の明暗ピクセルが残る場合があります。クロップが作る問題ではありませんが、狭くすると目立ちます。使用背景で100%表示して確認します。",
            "元画像のハローはマスクやエッジ修正が必要です。"
          ]
        },
        {
          "heading": "6. 最終素材をテストする",
          "paragraphs": [
            "目的のアプリで幅、高さ、透明度、余白、他素材との整列を確認します。",
            "高解像度の元PNGを保存し、小さな素材の再書き出しを繰り返さないでください。"
          ]
        }
      ],
      "faq": [
        {
          "q": "トリミングで透明背景は消えますか？",
          "a": "PNG透明を維持する処理なら残せますが、対比背景で書き出し結果を確認してください。"
        },
        {
          "q": "透明余白はどれくらい必要ですか？",
          "a": "影と視覚的余裕を守り、関連素材に同じ規則を適用します。"
        },
        {
          "q": "白い縁が出る理由は？",
          "a": "以前の背景色が縁に残っている可能性があり、マスク修正が必要です。"
        }
      ]
    },
    {
      "slug": "crop-large-images-on-mobile",
      "title": "モバイルブラウザで大きな画像を安定してトリミングする方法",
      "description": "画像数、メモリ、出力寸法を調整し、停止・白画面・ダウンロード失敗を減らします。",
      "intro": "スマートフォンの写真は高解像度ですが、モバイルブラウザのメモリには限界があります。複数の大画像を展開し、キャンバスに描画し、大きな結果を出力するとブラウザが閉じることがあります。このガイドでは画像数、出力サイズ、タッチ操作、保存手順を現実的に調整する方法を説明します。",
      "category": "モバイル性能",
      "readTime": "12分",
      "illustration": "/guides/mobile-large-image.svg",
      "takeaways": [
        "必要な画像だけを読み込みます。",
        "カメラ最大値ではなく用途に合う出力寸法を選びます。",
        "完了した作業を保存してから次のセットを開きます。"
      ],
      "sections": [
        {
          "heading": "1. 大画像がメモリを使う理由",
          "paragraphs": [
            "数MBのJPEGでも展開後は何倍ものメモリを使います。数千万ピクセルの複数レイヤーと出力用コピーが同時に存在すると端末の限界を超えます。",
            "一枚は表示できても五枚で遅くなるのはこのためです。"
          ]
        },
        {
          "heading": "2. 作業枚数を減らす",
          "paragraphs": [
            "五枚が不要なら二、三枚だけ読み込みます。一組を完成して保存してから次へ進み、必要なら他のタブやアプリを閉じます。",
            "同じ元画像を試作用に何度も複製せず、一つずつ意図した版を作ります。"
          ]
        },
        {
          "heading": "3. 現実的な出力サイズを選ぶ",
          "paragraphs": [
            "SNS投稿はカメラの全解像度を必要としません。実際の表示要件に合う寸法なら時間、メモリ、容量を減らせます。",
            "巨大な出力値は新しい細部を作らず、失敗率を高めることがあります。"
          ]
        },
        {
          "heading": "4. タッチ操作を落ち着いて行う",
          "paragraphs": [
            "一指で移動し、二指でピンチします。急な連続操作は再描画を増やします。完成したレイヤーはロックします。",
            "ロックにより誤操作と重い再調整を防げます。"
          ]
        },
        {
          "heading": "5. 安全に書き出す",
          "paragraphs": [
            "まず一枚を出力して選択寸法で完了するか確認し、その後必要ならZIPを使います。完了前にアプリ切替や画面ロックを避けます。",
            "少数なら個別保存の方がモバイルで扱いやすい場合があります。"
          ]
        },
        {
          "heading": "6. 失敗から回復する",
          "paragraphs": [
            "白画面や終了が起きたら再度開き、画像数や出力寸法を減らします。元写真は一時編集データとは別なので損傷しません。",
            "大量の超高解像度作業はデスクトップの方が安定します。"
          ]
        }
      ],
      "faq": [
        {
          "q": "小さなJPEGが多くのメモリを使うのはなぜ？",
          "a": "保存容量と展開されたピクセルメモリは別で、描画前に画像を展開する必要があります。"
        },
        {
          "q": "先に元画像を縮小すべきですか？",
          "a": "元は保存し、読み込む枚数と出力寸法を調整する方が安全です。"
        },
        {
          "q": "スマートフォンでZIPが失敗する理由は？",
          "a": "メモリ不足やブラウザのZIP処理が原因の場合があり、個別保存を試せます。"
        }
      ]
    },
    {
      "slug": "create-consistent-progress-photos",
      "title": "誇張のない一貫した経過写真を作る方法",
      "description": "運動、肌、改装、修復、作業記録で構図・高さ・距離・光を揃えます。",
      "intro": "経過写真は画像の差が本当の変化を表す時に価値があります。後だけを大きく切る、低い角度にする、光や姿勢を変えると進歩が誇張されます。このガイドでは撮影条件を標準化し、安定した基準点で重ね合わせ、比較を誠実に提示する方法を説明します。",
      "category": "記録",
      "readTime": "14分",
      "illustration": "/guides/progress-photo.svg",
      "takeaways": [
        "トリミング前に撮影条件を標準化します。",
        "安定した基準点と一枚の基準写真を使います。",
        "変化を誇張する拡大や整列を避けます。"
      ],
      "sections": [
        {
          "heading": "1. 目的と倫理を決める",
          "paragraphs": [
            "運動、肌、修復、建築、清掃など何を記録するか明確にします。比較は理解を助けるもので、錯覚を作るものではありません。",
            "後だけ有利な姿勢や角度、近いクロップを使わず、条件差があれば示します。"
          ]
        },
        {
          "heading": "2. カメラ位置を標準化する",
          "paragraphs": [
            "位置、高さ、向き、画角を記録し、可能なら三脚や固定点を使います。室内は壁角や扉、商品は外形と底辺を基準にできます。",
            "クロップは小さな差を補正できますが、前後上下の移動による遠近差は完全に直せません。"
          ]
        },
        {
          "heading": "3. 被写体と環境を揃える",
          "paragraphs": [
            "姿勢、視線、背景、光、衣服が解釈に影響するなら同じにします。肌は顔角度と光、改装は同じ角と高さを使います。",
            "短いチェックリストを毎回使うと後処理が減ります。"
          ]
        },
        {
          "heading": "4. 安定した目印で合わせる",
          "paragraphs": [
            "基準と新写真を重ね、上の透明度を下げます。目、肩、壁角、扉、商品外形、床線を合わせ、先に大きさ、その後位置を調整します。",
            "本当に変化した部分まで無理に重ねず、安定した枠だけを合わせます。"
          ]
        },
        {
          "heading": "5. 一つのクロップ規則を使う",
          "paragraphs": [
            "長期使用できる比率、寸法、頭上、左右余白、水平線、底辺を決めます。各元画像の位置とズームは違っても最終規則は同じです。",
            "未加工の元画像と出力条件を保存します。"
          ]
        },
        {
          "heading": "6. 透明性を持って提示する",
          "paragraphs": [
            "日付、条件、重要な文脈を表示し、一方だけに有利なフィルターを使いません。光や撮影条件が違う場合は限界を説明します。",
            "誠実な記録は劇的でなくても、判断に役立ち信頼を作ります。"
          ]
        }
      ],
      "faq": [
        {
          "q": "クロップで経過が誇張されますか？",
          "a": "はい。大きさ、角度、枠が違うと変化が大きく見えるため、反復可能な規則と元画像が必要です。"
        },
        {
          "q": "最初に何を合わせますか？",
          "a": "目、壁角、商品外形など安定した基準点を合わせます。"
        },
        {
          "q": "異なるカメラ角度をソフトで直せますか？",
          "a": "一部だけ可能で、遠近差は撮影時に防ぐのが最善です。"
        }
      ]
    }
  ],
  "es": [
    {
      "slug": "image-crop-online",
      "title": "Recorte de imagen online: guía práctica de encuadre y calidad",
      "description": "Aprende a elegir proporción, posición y resolución al recortar una imagen online.",
      "intro": "Recortar no consiste solo en eliminar bordes. Primero hay que decidir el destino, conservar el sujeto y elegir un tamaño que la fuente pueda soportar.",
      "category": "Conceptos básicos",
      "readTime": "10 min",
      "illustration": "/guides/image-crop-online.svg",
      "takeaways": [
        "Define primero el destino y la salida.",
        "Usa una referencia y un proceso repetible.",
        "Diagnostica una causa cada vez."
      ],
      "sections": [
        {
          "heading": "Decide primero el destino",
          "paragraphs": [
            "El perfil, la ficha de producto, el vídeo vertical y la presentación requieren formas diferentes. Define el destino antes de mover la foto."
          ]
        },
        {
          "heading": "Separa proporción y resolución",
          "paragraphs": [
            "La proporción es la forma y la resolución es el número de píxeles. Un 4:5 puede tener muchos tamaños distintos."
          ]
        },
        {
          "heading": "Coloca el sujeto de forma intencional",
          "paragraphs": [
            "Deja espacio alrededor de rostros, manos, texto y bordes de producto. Usa ojos, horizonte o eje del objeto como referencias."
          ]
        },
        {
          "heading": "Amplía solo lo necesario",
          "paragraphs": [
            "Una ampliación excesiva reduce los píxeles útiles. Compara la zona visible de la fuente con la salida solicitada."
          ]
        },
        {
          "heading": "Revisa bordes y transparencia",
          "paragraphs": [
            "Comprueba los cuatro bordes, la orientación y las zonas transparentes. Revisa cada capa al 100% de opacidad."
          ]
        },
        {
          "heading": "Verifica el archivo final",
          "paragraphs": [
            "Abre el archivo descargado y confirma dimensiones, orientación, nitidez y formato. Conserva el original."
          ]
        }
      ],
      "faq": [
        {
          "q": "¿Puedo usarlo sin subir la foto?",
          "a": "Sí. El archivo se procesa localmente en el navegador."
        },
        {
          "q": "¿Qué tamaño debo elegir?",
          "a": "Prioriza la especificación del destino y evita ampliar mucho más que la fuente."
        },
        {
          "q": "¿Por qué se ve borroso?",
          "a": "La zona recortada puede contener pocos píxeles reales."
        },
        {
          "q": "¿Se modifica el original?",
          "a": "No. Se crea un archivo nuevo."
        }
      ]
    },
    {
      "slug": "crop-multiple-images-to-the-same-size",
      "title": "Cómo recortar varias imágenes al mismo tamaño",
      "description": "Ajusta cada foto por separado y exporta todas con la misma proporción y dimensiones.",
      "intro": "Aplicar las mismas coordenadas falla cuando cambian la distancia o la posición del sujeto. Un marco común con controles independientes ofrece resultados coherentes.",
      "category": "Varias imágenes",
      "readTime": "10 min",
      "illustration": "/guides/same-size.svg",
      "takeaways": [
        "Define primero el destino y la salida.",
        "Usa una referencia y un proceso repetible.",
        "Diagnostica una causa cada vez."
      ],
      "sections": [
        {
          "heading": "Mismo tamaño no significa mismas coordenadas",
          "paragraphs": [
            "El mismo ancho y alto final no implica cortar el mismo lugar de cada original."
          ]
        },
        {
          "heading": "Elige una imagen de referencia",
          "paragraphs": [
            "Crea la regla visual con una foto clara y bloquea la capa cuando esté bien."
          ]
        },
        {
          "heading": "Alinea las demás capas",
          "paragraphs": [
            "Baja la opacidad de cada foto y alinea ojos, esquinas, base u horizonte con la referencia."
          ]
        },
        {
          "heading": "Usa una lista de calidad",
          "paragraphs": [
            "Comprueba escala, márgenes, cortes, rotación y nitidez en cada capa."
          ]
        },
        {
          "heading": "Respeta la fuente más pequeña",
          "paragraphs": [
            "La imagen más pequeña o más ampliada limita la salida razonable del conjunto."
          ]
        },
        {
          "heading": "Exporta el conjunto",
          "paragraphs": [
            "Las dimensiones iguales evitan saltos en carruseles, deslizadores, catálogos y vídeo."
          ]
        }
      ],
      "faq": [
        {
          "q": "¿Puedo usarlo sin subir la foto?",
          "a": "Sí. El archivo se procesa localmente en el navegador."
        },
        {
          "q": "¿Qué tamaño debo elegir?",
          "a": "Prioriza la especificación del destino y evita ampliar mucho más que la fuente."
        },
        {
          "q": "¿Por qué se ve borroso?",
          "a": "La zona recortada puede contener pocos píxeles reales."
        },
        {
          "q": "¿Se modifica el original?",
          "a": "No. Se crea un archivo nuevo."
        }
      ]
    },
    {
      "slug": "align-before-and-after-photos",
      "title": "Cómo alinear fotos de antes y después",
      "description": "Usa transparencia y puntos estables para igualar escala y posición.",
      "intro": "Una comparación clara reduce diferencias accidentales de encuadre para que el usuario observe el cambio real.",
      "category": "Antes y después",
      "readTime": "10 min",
      "illustration": "/guides/before-after.svg",
      "takeaways": [
        "Define primero el destino y la salida.",
        "Usa una referencia y un proceso repetible.",
        "Diagnostica una causa cada vez."
      ],
      "sections": [
        {
          "heading": "Fija una referencia fiable",
          "paragraphs": [
            "Usa el original o la primera fecha como referencia y bloquea la capa."
          ]
        },
        {
          "heading": "Reduce la opacidad superior",
          "paragraphs": [
            "Con 40–60% de opacidad, los contornos dobles muestran el error."
          ]
        },
        {
          "heading": "Iguala escala antes que posición",
          "paragraphs": [
            "Ajusta primero la distancia entre ojos, ancho de producto o marco de puerta; después mueve la capa."
          ]
        },
        {
          "heading": "Usa puntos estables",
          "paragraphs": [
            "Usa rasgos estructurales y al menos dos puntos de referencia."
          ]
        },
        {
          "heading": "Mantén una comparación honesta",
          "paragraphs": [
            "No recortes una versión más cerca para exagerar el resultado."
          ]
        },
        {
          "heading": "Prueba la transición",
          "paragraphs": [
            "Vuelve a opacidad completa y alterna las capas: pulso significa escala; deslizamiento significa posición."
          ]
        }
      ],
      "faq": [
        {
          "q": "¿Puedo usarlo sin subir la foto?",
          "a": "Sí. El archivo se procesa localmente en el navegador."
        },
        {
          "q": "¿Qué tamaño debo elegir?",
          "a": "Prioriza la especificación del destino y evita ampliar mucho más que la fuente."
        },
        {
          "q": "¿Por qué se ve borroso?",
          "a": "La zona recortada puede contener pocos píxeles reales."
        },
        {
          "q": "¿Se modifica el original?",
          "a": "No. Se crea un archivo nuevo."
        }
      ]
    },
    {
      "slug": "aspect-ratio-vs-resolution",
      "title": "Relación de aspecto y resolución",
      "description": "Comprende la forma, los píxeles, la ampliación y el tamaño de salida.",
      "intro": "La proporción define la forma y la resolución define las dimensiones en píxeles. Separar ambos conceptos evita resultados innecesariamente borrosos.",
      "category": "Referencia técnica",
      "readTime": "10 min",
      "illustration": "/guides/ratio-resolution.svg",
      "takeaways": [
        "Define primero el destino y la salida.",
        "Usa una referencia y un proceso repetible.",
        "Diagnostica una causa cada vez."
      ],
      "sections": [
        {
          "heading": "La proporción describe la forma",
          "paragraphs": [
            "1:1, 4:5 o 9:16 expresan la relación entre ancho y alto, no la cantidad de detalle."
          ]
        },
        {
          "heading": "La resolución describe píxeles",
          "paragraphs": [
            "La resolución es el ancho y alto en píxeles y depende también del enfoque y la compresión."
          ]
        },
        {
          "heading": "Calcula dimensiones",
          "paragraphs": [
            "Para 4:5 con 1080 de ancho: 1080×5÷4=1350 de alto."
          ]
        },
        {
          "heading": "Comprueba el recorte efectivo",
          "paragraphs": [
            "Un original grande puede dejar pocos píxeles si el recorte es muy cerrado."
          ]
        },
        {
          "heading": "Elige una salida responsable",
          "paragraphs": [
            "Usa la especificación del destino o un tamaño próximo al uso real y compatible con la fuente menor."
          ]
        },
        {
          "heading": "Iguala forma y tamaño",
          "paragraphs": [
            "La misma proporción evita formas distintas y las mismas dimensiones evitan cambios de diseño."
          ]
        }
      ],
      "faq": [
        {
          "q": "¿Puedo usarlo sin subir la foto?",
          "a": "Sí. El archivo se procesa localmente en el navegador."
        },
        {
          "q": "¿Qué tamaño debo elegir?",
          "a": "Prioriza la especificación del destino y evita ampliar mucho más que la fuente."
        },
        {
          "q": "¿Por qué se ve borroso?",
          "a": "La zona recortada puede contener pocos píxeles reales."
        },
        {
          "q": "¿Se modifica el original?",
          "a": "No. Se crea un archivo nuevo."
        }
      ]
    },
    {
      "slug": "match-face-position-across-photos",
      "title": "Cómo igualar la posición del rostro",
      "description": "Alinea ojos, escala facial y márgenes en varias fotos.",
      "intro": "Los retratos parecen inestables cuando cambia la línea de los ojos o el tamaño del rostro. Unos pocos puntos fiables son más útiles que forzar todo el contorno.",
      "category": "Retratos",
      "readTime": "10 min",
      "illustration": "/guides/face-alignment.svg",
      "takeaways": [
        "Define primero el destino y la salida.",
        "Usa una referencia y un proceso repetible.",
        "Diagnostica una causa cada vez."
      ],
      "sections": [
        {
          "heading": "Empieza por la línea de los ojos",
          "paragraphs": [
            "La línea de los ojos es la referencia horizontal más estable."
          ]
        },
        {
          "heading": "Iguala la escala facial",
          "paragraphs": [
            "Compara distancia entre ojos, ancho facial o distancia hasta la barbilla."
          ]
        },
        {
          "heading": "Usa nariz y orejas como apoyo",
          "paragraphs": [
            "La nariz ayuda con el centro y las orejas muestran el giro de la cabeza."
          ]
        },
        {
          "heading": "Mantén márgenes naturales",
          "paragraphs": [
            "Deja espacio parecido sobre el cabello, bajo la barbilla y alrededor de los hombros."
          ]
        },
        {
          "heading": "Respeta expresión y postura",
          "paragraphs": [
            "Una sonrisa o inclinación cambia el contorno real; no fuerces una coincidencia falsa."
          ]
        },
        {
          "heading": "Revisa al tamaño final",
          "paragraphs": [
            "Alterna los resultados al tamaño en que se mostrarán."
          ]
        }
      ],
      "faq": [
        {
          "q": "¿Puedo usarlo sin subir la foto?",
          "a": "Sí. El archivo se procesa localmente en el navegador."
        },
        {
          "q": "¿Qué tamaño debo elegir?",
          "a": "Prioriza la especificación del destino y evita ampliar mucho más que la fuente."
        },
        {
          "q": "¿Por qué se ve borroso?",
          "a": "La zona recortada puede contener pocos píxeles reales."
        },
        {
          "q": "¿Se modifica el original?",
          "a": "No. Se crea un archivo nuevo."
        }
      ]
    },
    {
      "slug": "prepare-before-after-video",
      "title": "Cómo preparar fotos para un vídeo de antes y después",
      "description": "Crea fotogramas iguales para fundidos, reels y presentaciones.",
      "intro": "La mayoría de los saltos provienen de recortes, escalas o dimensiones distintas antes de entrar al editor de vídeo.",
      "category": "Vídeo",
      "readTime": "10 min",
      "illustration": "/guides/video-frames.svg",
      "takeaways": [
        "Define primero el destino y la salida.",
        "Usa una referencia y un proceso repetible.",
        "Diagnostica una causa cada vez."
      ],
      "sections": [
        {
          "heading": "Elige el lienzo final",
          "paragraphs": [
            "Define 9:16, 16:9 o 1:1 antes de alinear y deja margen para interfaz y subtítulos."
          ]
        },
        {
          "heading": "Usa un fotograma maestro",
          "paragraphs": [
            "Alinea todas las fechas con una referencia maestra para evitar deriva acumulada."
          ]
        },
        {
          "heading": "Iguala escala y centro",
          "paragraphs": [
            "Usa ojos y hombros, paredes y ventanas, o contorno y base del producto."
          ]
        },
        {
          "heading": "Exporta dimensiones idénticas",
          "paragraphs": [
            "Mismas dimensiones evitan ajustes automáticos ocultos del editor de vídeo."
          ]
        },
        {
          "heading": "Prueba un fundido corto",
          "paragraphs": [
            "Haz un fundido entre el primer y último fotograma antes de editar toda la secuencia."
          ]
        },
        {
          "heading": "Cuenta el cambio con precisión",
          "paragraphs": [
            "Incluye fechas y no exageres el cambio mediante el recorte."
          ]
        }
      ],
      "faq": [
        {
          "q": "¿Puedo usarlo sin subir la foto?",
          "a": "Sí. El archivo se procesa localmente en el navegador."
        },
        {
          "q": "¿Qué tamaño debo elegir?",
          "a": "Prioriza la especificación del destino y evita ampliar mucho más que la fuente."
        },
        {
          "q": "¿Por qué se ve borroso?",
          "a": "La zona recortada puede contener pocos píxeles reales."
        },
        {
          "q": "¿Se modifica el original?",
          "a": "No. Se crea un archivo nuevo."
        }
      ]
    },
    {
      "slug": "crop-photos-without-uploading",
      "title": "Cómo recortar fotos sin subirlas a un servidor",
      "description": "Distingue el procesamiento local de la comunicación web normal.",
      "intro": "Los archivos seleccionados se procesan en el navegador y no se envían al servidor de edición, aunque la página necesita comunicaciones web normales.",
      "category": "Privacidad",
      "readTime": "10 min",
      "illustration": "/guides/local-processing.svg",
      "takeaways": [
        "Define primero el destino y la salida.",
        "Usa una referencia y un proceso repetible.",
        "Diagnostica una causa cada vez."
      ],
      "sections": [
        {
          "heading": "Qué significa procesamiento local",
          "paragraphs": [
            "El navegador lee la imagen en memoria, aplica el recorte y crea un archivo nuevo sin enviarlo al servidor de edición."
          ]
        },
        {
          "heading": "La comunicación normal es distinta",
          "paragraphs": [
            "El sitio aún carga código y puede transmitir IP, navegador, URL y datos de diagnóstico."
          ]
        },
        {
          "heading": "Cómo comprobarlo",
          "paragraphs": [
            "Comprueba el panel Network o continúa editando tras desconectarte una vez cargada la página."
          ]
        },
        {
          "heading": "Buenas prácticas",
          "paragraphs": [
            "Usa un dispositivo de confianza, evita ordenadores públicos y cierra la pestaña al terminar."
          ]
        },
        {
          "heading": "Límites de memoria",
          "paragraphs": [
            "Varias fotos grandes pueden superar la memoria del móvil; reduce cantidad o dimensiones."
          ]
        },
        {
          "heading": "Cuándo usar otra solución",
          "paragraphs": [
            "Sigue las normas de tu organización para material médico, legal o contractual."
          ]
        }
      ],
      "faq": [
        {
          "q": "¿Puedo usarlo sin subir la foto?",
          "a": "Sí. El archivo se procesa localmente en el navegador."
        },
        {
          "q": "¿Qué tamaño debo elegir?",
          "a": "Prioriza la especificación del destino y evita ampliar mucho más que la fuente."
        },
        {
          "q": "¿Por qué se ve borroso?",
          "a": "La zona recortada puede contener pocos píxeles reales."
        },
        {
          "q": "¿Se modifica el original?",
          "a": "No. Se crea un archivo nuevo."
        }
      ]
    },
    {
      "slug": "image-crop-quality-troubleshooting",
      "title": "Solución de problemas de calidad de recorte",
      "description": "Diagnostica desenfoque, cortes, rotación, transparencia y memoria.",
      "intro": "Antes de repetir todo el trabajo, identifica si el problema es composición, píxeles, orientación, formato o memoria del dispositivo.",
      "category": "Solución de problemas",
      "readTime": "10 min",
      "illustration": "/guides/troubleshooting.svg",
      "takeaways": [
        "Define primero el destino y la salida.",
        "Usa una referencia y un proceso repetible.",
        "Diagnostica una causa cada vez."
      ],
      "sections": [
        {
          "heading": "La exportación se ve borrosa",
          "paragraphs": [
            "Un recorte estrecho exportado muy grande interpola detalle limitado. Reduce zoom o salida."
          ]
        },
        {
          "heading": "El sujeto queda cortado",
          "paragraphs": [
            "Abre la descarga real, revisa los cuatro bordes y añade margen de seguridad."
          ]
        },
        {
          "heading": "La foto aparece girada",
          "paragraphs": [
            "La orientación puede depender de metadatos; gira o vuelve a guardar la fuente."
          ]
        },
        {
          "heading": "La transparencia cambia",
          "paragraphs": [
            "PNG y WebP transparentes deben probarse sobre el fondo final."
          ]
        },
        {
          "heading": "El navegador se ralentiza",
          "paragraphs": [
            "Las imágenes de alta resolución consumen mucha memoria; cierra pestañas o usa copias más pequeñas."
          ]
        },
        {
          "heading": "Las capas no coinciden",
          "paragraphs": [
            "Perspectiva, lente y postura pueden impedir una coincidencia perfecta."
          ]
        },
        {
          "heading": "Diagnóstico rápido",
          "paragraphs": [
            "Relaciona el síntoma con una causa antes de cambiar todos los controles."
          ]
        }
      ],
      "faq": [
        {
          "q": "¿Puedo usarlo sin subir la foto?",
          "a": "Sí. El archivo se procesa localmente en el navegador."
        },
        {
          "q": "¿Qué tamaño debo elegir?",
          "a": "Prioriza la especificación del destino y evita ampliar mucho más que la fuente."
        },
        {
          "q": "¿Por qué se ve borroso?",
          "a": "La zona recortada puede contener pocos píxeles reales."
        },
        {
          "q": "¿Se modifica el original?",
          "a": "No. Se crea un archivo nuevo."
        }
      ]
    },
    {
      "slug": "consistent-product-photo-cropping",
      "title": "Cómo crear recortes consistentes de productos",
      "description": "Iguala escala visual, línea base, márgenes y dimensiones.",
      "intro": "El objetivo es aplicar reglas coherentes para que los productos se comparen con facilidad sin falsear su tamaño real.",
      "category": "Producto",
      "readTime": "10 min",
      "illustration": "/guides/product-grid.svg",
      "takeaways": [
        "Define primero el destino y la salida.",
        "Usa una referencia y un proceso repetible.",
        "Diagnostica una causa cada vez."
      ],
      "sections": [
        {
          "heading": "Define la regla del catálogo",
          "paragraphs": [
            "Define fondo, proporción, ocupación, margen superior, laterales y línea base."
          ]
        },
        {
          "heading": "Elige un producto representativo",
          "paragraphs": [
            "Usa un producto mediano y claro, no el objeto más extremo del catálogo."
          ]
        },
        {
          "heading": "Alinea base y centro visual",
          "paragraphs": [
            "Alinea el punto de apoyo y usa el centro óptico en formas asimétricas."
          ]
        },
        {
          "heading": "No falsees el tamaño",
          "paragraphs": [
            "No hagas que objetos de tamaños distintos parezcan idénticos cuando la escala importa."
          ]
        },
        {
          "heading": "Conserva espacio y sombras",
          "paragraphs": [
            "Mantén aire alrededor del producto y no cortes sombras por accidente."
          ]
        },
        {
          "heading": "Revisa la cuadrícula completa",
          "paragraphs": [
            "Prueba unas pocas imágenes en la cuadrícula real antes de procesar todo."
          ]
        }
      ],
      "faq": [
        {
          "q": "¿Puedo usarlo sin subir la foto?",
          "a": "Sí. El archivo se procesa localmente en el navegador."
        },
        {
          "q": "¿Qué tamaño debo elegir?",
          "a": "Prioriza la especificación del destino y evita ampliar mucho más que la fuente."
        },
        {
          "q": "¿Por qué se ve borroso?",
          "a": "La zona recortada puede contener pocos píxeles reales."
        },
        {
          "q": "¿Se modifica el original?",
          "a": "No. Se crea un archivo nuevo."
        }
      ]
    },
    {
      "slug": "crop-portrait-photos-without-cutting-subject",
      "title": "Cómo recortar retratos sin cortar partes importantes de la persona",
      "description": "Recorta retratos protegiendo cabello, manos, articulaciones, detalles de la ropa y espacio visual alrededor del sujeto.",
      "intro": "Recortar un retrato no consiste únicamente en colocar el rostro en el centro. Un borde mal elegido puede cortar cabello, dedos, codos, rodillas o accesorios de manera accidental. Esta guía presenta un método repetible para elegir límites seguros, controlar el espacio sobre la cabeza y adaptar un mismo retrato a formatos cuadrados, verticales y panorámicos sin debilitar la intención de la fotografía.",
      "category": "Composición de retrato",
      "readTime": "12 min",
      "illustration": "/guides/portrait-safe-crop.svg",
      "takeaways": [
        "Define primero el formato final.",
        "Evita cortar exactamente por articulaciones o detalles importantes.",
        "Revisa el archivo descargado en su tamaño real de uso."
      ],
      "sections": [
        {
          "heading": "1. Decide qué debe comunicar el retrato",
          "paragraphs": [
            "Un retrato profesional, una foto familiar, una imagen de moda y un retrato ambiental requieren cantidades distintas de cuerpo y fondo. Decide si lo principal es la expresión, la ropa, la postura, el lugar o la relación entre varias personas.",
            "En un primer plano importan los ojos y la expresión; en un cuerpo entero importan manos, pies y silueta; en un retrato ambiental, eliminar demasiado fondo puede borrar el contexto."
          ]
        },
        {
          "heading": "2. Elige la proporción antes de mover la imagen",
          "paragraphs": [
            "Selecciona 1:1, 4:5, 3:4, 9:16 o una proporción personalizada antes del ajuste fino. Una composición cómoda en 3:4 puede quedar apretada en un cuadrado.",
            "Si usarás la foto en varios lugares, crea exportaciones independientes desde el original en vez de estirar o reutilizar un solo recorte."
          ]
        },
        {
          "heading": "3. Protege límites anatómicos y accesorios",
          "paragraphs": [
            "Evita que el borde pase exactamente por muñecas, codos, rodillas, tobillos, dedos o la parte superior de la cabeza, salvo que sea una decisión estética clara. Revisa también gafas, sombreros, velos, ramos y prendas amplias.",
            "En fotografías de grupo, comprueba todas las caras y manos, no solo a la persona central."
          ]
        },
        {
          "heading": "4. Usa el espacio superior con intención",
          "paragraphs": [
            "Demasiado espacio sobre la cabeza hace que la persona parezca hundida; muy poco crea presión. Un perfil puede ser más cerrado y un retrato editorial más amplio.",
            "Si la persona mira hacia un lado, dejar espacio en esa dirección suele producir una composición más tranquila. Incluye el volumen del cabello o del sombrero en la evaluación."
          ]
        },
        {
          "heading": "5. Iguala varios retratos",
          "paragraphs": [
            "Para directorios o comparaciones, termina primero una imagen de referencia. Alinea altura de ojos, tamaño del rostro, hombros y espacio superior. No copies el mismo número de zoom porque las distancias originales pueden ser diferentes.",
            "Baja la opacidad para comparar y después vuelve al 100% para revisar cada imagen de forma independiente."
          ]
        },
        {
          "heading": "6. Revisa en el tamaño final",
          "paragraphs": [
            "Un recorte cómodo en un lienzo grande puede quedar demasiado cerrado como avatar. Descarga una prueba y visualízala en el sitio o la aplicación real, incluyendo máscaras circulares.",
            "Conserva los originales y guarda versiones separadas con nombres que indiquen su formato y destino."
          ]
        }
      ],
      "faq": [
        {
          "q": "¿Debe verse siempre toda la parte superior de la cabeza?",
          "a": "No necesariamente. Un primer plano puede cortar cabello de forma deliberada, pero el resultado no debe parecer accidental."
        },
        {
          "q": "¿Qué proporción funciona mejor para retratos?",
          "a": "4:5 y 3:4 son flexibles para verticales, mientras que 1:1 es útil para perfiles. El destino decide."
        },
        {
          "q": "¿Cómo igualo varias fotos de perfil?",
          "a": "Usa una referencia y ajusta altura de ojos, escala del rostro, hombros y espacio superior en cada foto."
        }
      ]
    },
    {
      "slug": "crop-images-for-social-media",
      "title": "Cómo recortar imágenes para redes sociales sin perder información importante",
      "description": "Prepara recortes para feed, cuadrícula, historias y portadas protegiendo caras, texto, logotipos y zonas seguras.",
      "intro": "Las plataformas muestran una misma imagen de forma distinta en el feed, la cuadrícula del perfil, las historias, las portadas y las vistas previas. Una cara o un texto visible en el editor puede quedar oculto por botones o descripciones. Esta guía explica cómo separar destinos, reservar zonas seguras y crear varias proporciones desde un archivo original.",
      "category": "Redes sociales",
      "readTime": "13 min",
      "illustration": "/guides/social-media-crop.svg",
      "takeaways": [
        "Crea un archivo específico para cada ubicación importante.",
        "Mantén caras, texto y logotipos lejos de los bordes de la interfaz.",
        "Usa la vista móvil real como comprobación final."
      ],
      "sections": [
        {
          "heading": "1. Enumera las ubicaciones",
          "paragraphs": [
            "Identifica feed, cuadrícula, historia, portada de reel, miniatura, vista previa o anuncio. Cada ubicación puede usar otra proporción y un recorte automático diferente.",
            "Prioriza la ubicación principal y prepara versiones 4:5, 1:1 o 9:16 desde el original."
          ]
        },
        {
          "heading": "2. Distingue proporción y zona segura",
          "paragraphs": [
            "La proporción define la forma exterior; la zona segura indica dónde debe permanecer la información esencial. En vertical, botones, nombre de cuenta y controles pueden cubrir la parte superior o inferior.",
            "Coloca rostros, precios, nombres y llamadas a la acción cerca del centro; el fondo decorativo puede acercarse al borde."
          ]
        },
        {
          "heading": "3. Protege texto y logotipos",
          "paragraphs": [
            "El texto pegado al borde es vulnerable al recorte automático y a las pantallas pequeñas. Deja margen amplio y no confíes en una separación mínima visible solo en escritorio.",
            "Si el texto ya está integrado, exporta una prueba y comprueba legibilidad, saltos de línea y superposición en un teléfono."
          ]
        },
        {
          "heading": "4. Crea varias proporciones desde una fuente",
          "paragraphs": [
            "Genera una versión vertical para feed, una cuadrada para cuadrícula y una 9:16 para historia. Recoloca el sujeto en cada formato en vez de cortar siempre el centro.",
            "Si una foto de grupo no cabe, conserva a las personas y acepta más fondo antes que ampliar hasta cortar cuerpos."
          ]
        },
        {
          "heading": "5. Mantén coherencia en una campaña",
          "paragraphs": [
            "Define altura de ojos, línea base del producto, margen, posición de logotipo y dimensiones. Usa una capa de referencia para comparar nuevas imágenes.",
            "La coherencia no debe falsear diferencias reales de tamaño ni obligar a recortes incómodos."
          ]
        },
        {
          "heading": "6. Comprueba después de subir",
          "paragraphs": [
            "Las plataformas cambian vistas previas y compresión. Publica una prueba privada si es posible y revisa feed y cuadrícula en móvil.",
            "Guarda el original y las exportaciones de calidad para crear nuevas versiones sin recomprimir lo publicado."
          ]
        }
      ],
      "faq": [
        {
          "q": "¿Un tamaño sirve para todas las redes?",
          "a": "Puede funcionar, pero feed, cuadrícula, historias y miniaturas suelen beneficiarse de recortes separados."
        },
        {
          "q": "¿Dónde coloco el texto?",
          "a": "Lejos de los bordes y dentro de una zona central comprobada en móvil."
        },
        {
          "q": "¿Debo llenar 9:16 con una foto de grupo?",
          "a": "Solo si todas las personas permanecen dentro del marco; preservar el contenido es más importante."
        }
      ]
    },
    {
      "slug": "crop-mixed-orientation-photos-for-carousel",
      "title": "Cómo recortar fotos horizontales y verticales para un mismo carrusel",
      "description": "Convierte imágenes horizontales, verticales y cuadradas en una secuencia coherente sin centrar todo automáticamente.",
      "intro": "Los carruseles suelen mezclar orientaciones. Si se suben sin preparar, la primera imagen puede definir el marco y obligar a recortes incómodos en las siguientes. Esta guía muestra cómo elegir una proporción común, conservar la parte más fuerte de cada composición y crear una secuencia coherente sin volver idénticas todas las fotografías.",
      "category": "Diseño de carrusel",
      "readTime": "12 min",
      "illustration": "/guides/mixed-carousel.svg",
      "takeaways": [
        "Elige una proporción común antes de editar.",
        "Recompón cada imagen de forma independiente.",
        "Evalúa el ritmo de toda la secuencia."
      ],
      "sections": [
        {
          "heading": "1. Elige el marco común",
          "paragraphs": [
            "Decide entre cuadrado, vertical u horizontal. 4:5 ocupa más pantalla móvil, 1:1 se reutiliza fácilmente y el formato horizontal puede favorecer arquitectura o paisaje.",
            "Algunas plataformas usan la primera imagen para definir el resto, por lo que todas deben exportarse con las mismas dimensiones."
          ]
        },
        {
          "heading": "2. Clasifica los originales",
          "paragraphs": [
            "Separa paisajes anchos, retratos verticales, detalles y cuadrados. Cada tipo requiere otra estrategia.",
            "Centrar no siempre es neutral: un sujeto desplazado de forma intencionada puede perder fuerza si se mueve al centro."
          ]
        },
        {
          "heading": "3. Construye ritmo visual",
          "paragraphs": [
            "Alterna una imagen general, una media y detalles. Las dimensiones iguales no obligan a que el sujeto tenga la misma escala.",
            "La altura del horizonte, el uso del margen y el equilibrio del fondo pueden unir la serie."
          ]
        },
        {
          "heading": "4. Recompón horizontales",
          "paragraphs": [
            "Decide qué puede desaparecer y protege sujeto principal, dirección del movimiento y contexto. Si dos elementos importantes están separados, un marco vertical quizá no sea apropiado.",
            "Es preferible conservar fondo significativo que ampliar en exceso solo para llenar todos los bordes."
          ]
        },
        {
          "heading": "5. Ajusta verticales y cuadrados",
          "paragraphs": [
            "En verticales, revisa cabeza y pies; en cuadrados, comprueba cómo cambia el equilibrio al añadir espacio arriba o abajo. Cada capa puede moverse dentro del marco común.",
            "Usa opacidad para coincidencias precisas, pero en un carrusel narrativo prioriza continuidad sobre superposición perfecta."
          ]
        },
        {
          "heading": "6. Revisa la secuencia",
          "paragraphs": [
            "Activa las capas en orden y detecta saltos bruscos, una imagen demasiado cerrada o texto cerca del borde.",
            "Exporta todo con las mismas dimensiones y nombres ordenados."
          ]
        }
      ],
      "faq": [
        {
          "q": "¿Qué proporción conviene para carruseles?",
          "a": "4:5 ofrece más área móvil y 1:1 es flexible. Elige según el contenido."
        },
        {
          "q": "¿Todos los sujetos deben tener el mismo tamaño?",
          "a": "No. Mantén coherencia de margen y ritmo, pero permite escalas distintas."
        },
        {
          "q": "¿Puedo usar paisajes en un carrusel vertical?",
          "a": "Sí, si el contenido importante puede recomponerse sin destruir la imagen."
        }
      ]
    },
    {
      "slug": "crop-transparent-png-images",
      "title": "Cómo recortar PNG transparentes sin perder bordes limpios",
      "description": "Recorta logotipos, productos aislados y stickers preservando transparencia, margen y calidad de borde.",
      "intro": "Los PNG transparentes son distintos de las fotografías normales: los píxeles invisibles forman parte del diseño. Dos archivos con la misma resolución pueden mostrar objetos de tamaños muy diferentes por sus márgenes transparentes. Esta guía explica cómo inspeccionar esos márgenes, mantener sombras y semitransparencias, evitar fondos sólidos involuntarios y verificar el archivo final.",
      "category": "Imágenes transparentes",
      "readTime": "11 min",
      "illustration": "/guides/transparent-png.svg",
      "takeaways": [
        "Considera el margen transparente como información de diseño.",
        "Comprueba halos sobre fondos claros y oscuros.",
        "Verifica la exportación en otra aplicación."
      ],
      "sections": [
        {
          "heading": "1. Comprende el lienzo transparente",
          "paragraphs": [
            "El tamaño del archivo describe todo el lienzo, no solo el objeto visible. El espacio transparente puede ser intencional para respiración, alineación o sombras.",
            "Antes de recortar, decide si ese espacio cumple una función."
          ]
        },
        {
          "heading": "2. Inspecciona el límite real",
          "paragraphs": [
            "Usa un fondo de cuadrícula o contraste. Sombras suaves, cabello, vidrio, brillo y antialiasing se extienden más allá del borde sólido.",
            "Un recorte demasiado cercano puede cortar esos píxeles y endurecer el contorno."
          ]
        },
        {
          "heading": "3. Define margen coherente",
          "paragraphs": [
            "En logotipos o catálogos, establece una regla de espacio visible. Las formas asimétricas pueden necesitar centro óptico en lugar de centro matemático.",
            "Compara el tamaño aparente con una capa de referencia."
          ]
        },
        {
          "heading": "4. Evita fondos inesperados",
          "paragraphs": [
            "Comprueba que la transparencia no se sustituya por blanco o negro. Sobre un editor blanco, un fondo sólido puede parecer transparente.",
            "Abre el archivo final sobre fondos claros y oscuros para detectar rectángulos y contaminación de color."
          ]
        },
        {
          "heading": "5. Revisa halos",
          "paragraphs": [
            "Los recortes aislados pueden conservar píxeles del fondo anterior. El recorte no los crea, pero puede hacerlos más visibles.",
            "Si el halo está en el original, necesita máscara o limpieza de borde."
          ]
        },
        {
          "heading": "6. Prueba el recurso final",
          "paragraphs": [
            "Verifica dimensiones, transparencia, margen y alineación en la aplicación de destino.",
            "Conserva el PNG original de alta resolución para evitar degradación por reexportaciones."
          ]
        }
      ],
      "faq": [
        {
          "q": "¿El recorte elimina la transparencia?",
          "a": "Puede conservarse en PNG, pero conviene comprobar el resultado sobre un fondo contrastante."
        },
        {
          "q": "¿Cuánto margen transparente dejo?",
          "a": "El suficiente para sombras y respiración, usando una regla común para activos relacionados."
        },
        {
          "q": "¿Por qué aparece un halo blanco?",
          "a": "Puede haber píxeles del fondo anterior; requiere limpieza de máscara, no solo recorte."
        }
      ]
    },
    {
      "slug": "crop-large-images-on-mobile",
      "title": "Cómo recortar imágenes grandes en un navegador móvil sin bloqueos",
      "description": "Controla memoria, número de imágenes y dimensiones de salida para reducir cierres, lienzos en blanco y descargas fallidas.",
      "intro": "Las cámaras móviles producen archivos enormes, pero el navegador dispone de memoria limitada. Cargar varias fotos, decodificarlas, dibujarlas y exportar resultados grandes puede superar esa memoria. Esta guía propone un flujo práctico para trabajar con imágenes grandes en móvil, reducir bloqueos y evitar gastar recursos en dimensiones que no aportan detalle visible.",
      "category": "Rendimiento móvil",
      "readTime": "12 min",
      "illustration": "/guides/mobile-large-image.svg",
      "takeaways": [
        "Carga únicamente las imágenes necesarias.",
        "Elige dimensiones según el uso, no según el máximo de la cámara.",
        "Guarda el trabajo terminado antes de abrir otro conjunto pesado."
      ],
      "sections": [
        {
          "heading": "1. Por qué consumen tanta memoria",
          "paragraphs": [
            "Un JPEG de pocos MB ocupa mucho más al decodificarse. Millones de píxeles, varias capas y copias temporales de exportación multiplican la demanda.",
            "Por eso una foto puede abrirse bien y cinco capas provocar lentitud."
          ]
        },
        {
          "heading": "2. Reduce el conjunto de trabajo",
          "paragraphs": [
            "Si no necesitas cinco capas, usa dos o tres. Termina y exporta una comparación antes de empezar otra. Cierra pestañas y aplicaciones si el dispositivo está bajo presión.",
            "Evita duplicar el mismo original solo para probar recortes."
          ]
        },
        {
          "heading": "3. Elige una salida realista",
          "paragraphs": [
            "Una publicación social no necesita la resolución completa de la cámara. Las dimensiones adecuadas reducen tiempo, memoria y peso.",
            "Un número enorme de salida no crea detalle y puede causar fallos."
          ]
        },
        {
          "heading": "4. Usa gestos deliberados",
          "paragraphs": [
            "Mueve con un dedo y amplía con dos. Movimientos repetidos y bruscos generan muchas actualizaciones. Bloquea las capas terminadas.",
            "Esto evita movimientos accidentales y repetir trabajo pesado."
          ]
        },
        {
          "heading": "5. Exporta con seguridad",
          "paragraphs": [
            "Prueba primero una imagen. Después usa ZIP si es necesario y espera a que termine antes de cambiar de aplicación o apagar la pantalla.",
            "En conjuntos pequeños, la descarga individual puede ser más sencilla."
          ]
        },
        {
          "heading": "6. Recupera una sesión fallida",
          "paragraphs": [
            "Si el lienzo queda blanco o el navegador se cierra, vuelve a abrir con menos imágenes o menor salida. Los originales no se dañan.",
            "Para trabajos masivos, un escritorio puede ser más estable."
          ]
        }
      ],
      "faq": [
        {
          "q": "¿Por qué un JPEG pequeño usa mucha memoria?",
          "a": "El tamaño comprimido y la memoria de píxeles decodificados son distintos."
        },
        {
          "q": "¿Debo reducir primero el original?",
          "a": "Conserva el original y ajusta el número de capas y la salida."
        },
        {
          "q": "¿Por qué falla un ZIP en móvil?",
          "a": "Puede faltar memoria o el navegador manejar ZIP de otra forma; prueba descargas individuales."
        }
      ]
    },
    {
      "slug": "create-consistent-progress-photos",
      "title": "Cómo crear fotos de progreso coherentes y honestas",
      "description": "Estandariza encuadre, altura, distancia, iluminación y recorte para fitness, piel, reformas, restauración y proyectos.",
      "intro": "Las fotos de progreso son útiles cuando la diferencia visual procede del sujeto y no de la cámara. Un recorte más cerrado, un ángulo bajo, otra iluminación o una postura distinta pueden exagerar el cambio. Esta guía explica cómo estandarizar la captura, alinear mediante referencias estables y presentar comparaciones informativas sin manipular la percepción.",
      "category": "Documentación",
      "readTime": "14 min",
      "illustration": "/guides/progress-photo.svg",
      "takeaways": [
        "Estandariza la captura antes de corregir con recorte.",
        "Usa puntos estables y una imagen de referencia.",
        "No ajustes la imagen para exagerar el cambio."
      ],
      "sections": [
        {
          "heading": "1. Define propósito y límite ético",
          "paragraphs": [
            "Aclara si documentas cuerpo, piel, restauración, construcción, limpieza u otro cambio. La comparación debe informar, no crear una ilusión.",
            "No uses un recorte, postura o ángulo favorable solo en el después. Si cambian las condiciones, indícalo."
          ]
        },
        {
          "heading": "2. Estandariza la cámara",
          "paragraphs": [
            "Marca ubicación, altura, orientación y distancia. Usa trípode o apoyo estable. En interiores usa esquinas y marcos; en productos, bordes y línea base.",
            "El recorte corrige pequeñas diferencias, pero no elimina completamente la perspectiva de mover la cámara."
          ]
        },
        {
          "heading": "3. Controla sujeto y entorno",
          "paragraphs": [
            "Mantén postura, dirección, fondo, luz y ropa cuando afecten la interpretación. Para piel, iguala ángulo facial y luz; para reformas, usa la misma esquina.",
            "Una lista breve de captura reduce correcciones posteriores."
          ]
        },
        {
          "heading": "4. Alinea referencias estables",
          "paragraphs": [
            "Superpone la referencia y la nueva imagen, baja opacidad y ajusta ojos, hombros, esquinas, puertas, bordes o suelo. Iguala escala antes de posición.",
            "No fuerces a coincidir la parte que realmente cambió; alinea el marco estable."
          ]
        },
        {
          "heading": "5. Aplica una regla de recorte",
          "paragraphs": [
            "Define proporción, dimensiones, margen superior, laterales, horizonte o línea base. Cada original puede necesitar otra posición, pero la regla final debe ser constante.",
            "Conserva originales y datos de exportación para verificar la serie."
          ]
        },
        {
          "heading": "6. Presenta con transparencia",
          "paragraphs": [
            "Incluye fechas, condiciones y contexto. No apliques filtros favorables a una sola etapa. Explica diferencias de iluminación o captura.",
            "Una serie honesta puede parecer menos dramática, pero ofrece más valor y confianza."
          ]
        }
      ],
      "faq": [
        {
          "q": "¿Un recorte puede engañar en fotos de progreso?",
          "a": "Sí. Escala, ángulo y encuadre distintos pueden exagerar cambios."
        },
        {
          "q": "¿Qué se alinea primero?",
          "a": "Puntos estables como ojos, esquinas, puertas o bordes de producto."
        },
        {
          "q": "¿El software corrige otro ángulo de cámara?",
          "a": "Solo parcialmente; la perspectiva debe controlarse durante la captura."
        }
      ]
    }
  ]
} as Record<Locale, Guide[]>;

export function getGuide(locale: Locale, slug: string) {
  return guidesByLocale[locale].find((guide) => guide.slug === slug);
}
