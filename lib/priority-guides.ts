import type { Locale } from './i18n';

export type PriorityGuideSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type PriorityGuide = { slug: string; title: string; description: string; intro: string; sections: PriorityGuideSection[]; faq: { q: string; a: string }[] };

export const priorityGuideSlugs = [
  'crop-multiple-images-to-the-same-size',
  'align-before-and-after-photos',
  'before-and-after-photo-alignment-tool',
  'overlay-two-images-online-for-comparison',
  'crop-multiple-images-same-frame',
] as const;

export const priorityGuidesByLocale: Record<Locale, PriorityGuide[]> = {
  "en": [
    {
      "slug": "crop-multiple-images-to-the-same-size",
      "title": "How to Crop Multiple Images to the Same Size Online",
      "description": "Crop multiple images to the same size while adjusting every photo independently. Align, resize, and export matching files in your browser.",
      "intro": "Cropping several photos to identical dimensions is easy only when the originals already have the same framing. When resolution, orientation, and subject position differ, each image needs an individual adjustment inside one shared output frame.",
      "sections": [
        {
          "heading": "Why identical dimensions are not enough",
          "paragraphs": [
            "Two files can both be 1080 × 1350 pixels and still look inconsistent. The face may be larger in one image, the product may sit farther left, or one photo may include much more empty background.",
            "A reliable workflow must match both the final dimensions and the composition inside the frame."
          ],
          "bullets": [
            "Move every image independently.",
            "Use a separate zoom value for each layer.",
            "Compare layers with adjustable opacity.",
            "Export every result with one shared ratio and pixel size."
          ]
        },
        {
          "heading": "Upload source images with different sizes",
          "paragraphs": [
            "Open the Overlay Crop editor and upload up to five JPG, PNG, or WebP images. The source files may have different resolutions, orientations, and aspect ratios.",
            "Each photo becomes a separate layer, so changing one layer does not move or resize the others. The files are processed locally in the browser rather than uploaded to the editing server."
          ]
        },
        {
          "heading": "Choose one final aspect ratio and output size",
          "paragraphs": [
            "Select the ratio required by the destination. Common choices include 1:1 for square layouts, 4:5 for portrait social posts, 9:16 for vertical video, and 16:9 for wide content.",
            "Then enter the final width and height. For example, choosing 1080 × 1350 makes every exported image exactly 1080 pixels wide and 1350 pixels high."
          ]
        },
        {
          "heading": "Adjust every photo independently",
          "paragraphs": [
            "Select the first layer and place the subject where it should appear inside the crop frame. Adjust the zoom until the subject has the desired visual size.",
            "Repeat the process for every remaining layer. This compensates for differences in camera distance and original framing without forcing all photos to use identical source coordinates."
          ]
        },
        {
          "heading": "Use opacity to match the composition",
          "paragraphs": [
            "Reduce the opacity of the upper layer to about 40–60 percent. You can then see the reference image and the selected image at the same time.",
            "Align stable landmarks such as eyes, face outlines, product corners, horizon lines, or background edges. Restore opacity to 100 percent after the layers match."
          ]
        },
        {
          "heading": "Export a consistent image set",
          "paragraphs": [
            "Check every layer separately, then download individual files or export all results as a ZIP archive. Every output uses the same aspect ratio and dimensions while preserving the position and zoom chosen for that layer.",
            "A small original can still be exported at a large size, but heavy enlargement may reduce sharpness. Use source files at least as large as the intended output whenever possible."
          ]
        },
        {
          "heading": "Useful applications",
          "paragraphs": [
            "This workflow is useful whenever several images must look consistent as a set."
          ],
          "bullets": [
            "Before-and-after retouching comparisons",
            "Product catalog photos",
            "Profile and staff portraits",
            "Social media carousels",
            "Progress photos",
            "Photo restoration examples",
            "Thumbnails and presentation slides"
          ]
        }
      ],
      "faq": [
        {
          "q": "Can the original images have different resolutions?",
          "a": "Yes. Every layer can use a different source resolution and still be exported at the same final dimensions."
        },
        {
          "q": "Can I adjust each photo separately?",
          "a": "Yes. Position, zoom, rotation, opacity, visibility, and locking are controlled per layer."
        },
        {
          "q": "Are the photos uploaded to a server?",
          "a": "No. Image editing and export happen locally inside your browser."
        }
      ]
    },
    {
      "slug": "align-before-and-after-photos",
      "title": "How to Align Before and After Photos",
      "description": "Align before-and-after photos by matching scale, position, and stable visual landmarks with a transparent image overlay.",
      "intro": "A before-and-after comparison looks credible when the change is visible without a distracting jump in size or position. Overlay alignment helps you match the composition even when the photos were captured or edited differently.",
      "sections": [
        {
          "heading": "Choose a reliable reference image",
          "paragraphs": [
            "Use the original or before photo as the fixed reference. It should show the subject clearly and contain landmarks that are also visible in the after photo.",
            "For portraits, use the eyes, nose, chin, and shoulders. For products or interiors, use corners, edges, labels, windows, or other objects that did not change."
          ]
        },
        {
          "heading": "Place both photos on separate layers",
          "paragraphs": [
            "Upload the before image and the after image. Position the reference photo first, then lock it so it cannot be moved accidentally.",
            "Select the after photo as the active layer. You can now change its position and scale without affecting the reference."
          ]
        },
        {
          "heading": "Lower the opacity of the upper photo",
          "paragraphs": [
            "Set the after photo to roughly 40–60 percent opacity. Double outlines immediately show whether the subject is too large, too small, too high, or shifted to one side.",
            "Adjust the opacity depending on the brightness and contrast of the two images."
          ]
        },
        {
          "heading": "Match scale before position",
          "paragraphs": [
            "First change the zoom until the main subject is approximately the same size in both photos. For portraits, compare the distance between the eyes and the size of the face. For objects, compare the total width and height.",
            "After the scale matches, move the after image horizontally and vertically until the reference points overlap."
          ]
        },
        {
          "heading": "Make precise final adjustments",
          "paragraphs": [
            "Expressions, head angle, posture, and camera perspective may prevent every edge from matching perfectly. Prioritize the most important landmarks instead of forcing the entire outline to overlap.",
            "Use the slider, direct numerical input, mouse wheel, keyboard controls, or mobile pinch gestures for small corrections."
          ]
        },
        {
          "heading": "Apply one shared crop frame",
          "paragraphs": [
            "Choose a final ratio only after the layers are aligned. The same frame is then applied to both images, which prevents the comparison from jumping when displayed in a carousel, slider, or video.",
            "Check that the subject and all important details remain inside the frame in both photos."
          ]
        },
        {
          "heading": "Export and review the comparison",
          "paragraphs": [
            "Restore the after image to full opacity and switch between the two layers. If the subject appears to pulse, adjust the scale. If it slides, correct the position.",
            "Export both files at identical dimensions for retouching portfolios, restoration examples, progress tracking, renovation comparisons, or dissolve videos."
          ]
        }
      ],
      "faq": [
        {
          "q": "What opacity is best for alignment?",
          "a": "About 50 percent is a good starting point, but high-contrast images may be easier at 30–40 percent."
        },
        {
          "q": "Do the photos need to come from the same camera?",
          "a": "No. Different cameras can be used, although lens and perspective differences may prevent a perfect match."
        },
        {
          "q": "Can I align more than two photos?",
          "a": "Yes. Overlay Crop supports up to five layers for progress sequences and multiple editing versions."
        }
      ]
    },
    {
      "slug": "before-and-after-photo-alignment-tool",
      "title": "Before and After Photo Alignment Tool Online",
      "description": "Use an online before-and-after photo alignment tool to overlay, resize, position, and crop comparison images without sending them to an editing server.",
      "intro": "Overlay Crop is designed for users who need to align separate before-and-after files rather than immediately combine them into a collage. Each layer can be resized and positioned independently inside one shared crop frame.",
      "sections": [
        {
          "heading": "What a photo alignment tool does",
          "paragraphs": [
            "A photo alignment tool makes separate images consistent in subject size, position, rotation, crop ratio, and output dimensions.",
            "The goal is not necessarily to merge the photos. The aligned files can remain separate for use in sliders, animations, videos, and portfolios."
          ]
        },
        {
          "heading": "Why standard batch cropping can fail",
          "paragraphs": [
            "Automatic batch tools often apply the same source coordinates to every image. That works only when the originals were captured with nearly identical framing.",
            "If one portrait was taken closer or a product sits in a different position, identical coordinates produce inconsistent results. A shared output frame with independent layer controls is more flexible."
          ]
        },
        {
          "heading": "Core alignment controls",
          "paragraphs": [
            "Overlay Crop includes the controls required for precise comparison work."
          ],
          "bullets": [
            "Upload up to five images",
            "Move and zoom each layer independently",
            "Adjust opacity for transparent comparison",
            "Hide, show, lock, and rotate layers",
            "Choose standard or custom aspect ratios",
            "Enter exact output dimensions",
            "Download one image or all images as a ZIP"
          ]
        },
        {
          "heading": "A practical alignment workflow",
          "paragraphs": [
            "Position and lock the reference image. Select the comparison image, reduce its opacity, and adjust the zoom until the subject sizes match.",
            "Move the selected layer until stable visual landmarks overlap. Restore full opacity and switch between layers to verify the result."
          ]
        },
        {
          "heading": "How the shared frame works",
          "paragraphs": [
            "The crop frame determines the final shape and pixel size of every export. Each source image can still use a different position and zoom behind that frame.",
            "This approach gives consistent output dimensions without requiring the originals to share the same resolution or camera framing."
          ]
        },
        {
          "heading": "Desktop and mobile editing",
          "paragraphs": [
            "On desktop, drag the image to move it and use the wheel over the canvas to zoom around the pointer. Slider values can also be entered directly for precise changes.",
            "On mobile, use one finger to move the active layer and two fingers to pinch and zoom. The sliders use relative dragging, so touching an empty part of a track does not make the value jump."
          ]
        },
        {
          "heading": "Private browser-based processing",
          "paragraphs": [
            "Images are read and processed locally inside the browser. This is useful for portraits, client previews, internal drafts, and other files that should not be unnecessarily uploaded to a third-party editing server.",
            "The tool is suitable for retouching, photo restoration, fitness tracking, treatment documentation, renovations, cleaning services, landscaping, and product photography."
          ]
        }
      ],
      "faq": [
        {
          "q": "Is the alignment tool free to use?",
          "a": "The browser editor can be used without creating an account."
        },
        {
          "q": "Are uploaded images permanently stored?",
          "a": "No. The editing files are processed locally and are not stored on the Overlay Crop server."
        },
        {
          "q": "Can I export several aligned versions at once?",
          "a": "Yes. Up to five layers can be aligned and exported in one session."
        }
      ]
    },
    {
      "slug": "overlay-two-images-online-for-comparison",
      "title": "How to Overlay Two Images Online for Comparison",
      "description": "Overlay two images online, adjust transparency, compare differences, and align both photos accurately in your browser.",
      "intro": "Placing two images side by side is useful for presentation, but a transparent overlay is better for detecting small differences in position, scale, crop, and editing. Overlay Crop lets you compare the files as independent layers before exporting them separately.",
      "sections": [
        {
          "heading": "Overlay comparison versus side-by-side viewing",
          "paragraphs": [
            "Side-by-side images show an overall change. A semi-transparent overlay reveals exactly where edges, facial features, objects, and background lines differ.",
            "Use the overlay while preparing the files, then use the aligned exports in a side-by-side design, slider, or video."
          ]
        },
        {
          "heading": "Upload the reference and comparison images",
          "paragraphs": [
            "Add the reference image first and the comparison image second. The comparison layer appears above the reference and can be moved, resized, hidden, or made transparent independently.",
            "The two source files do not need to share the same resolution or aspect ratio."
          ]
        },
        {
          "heading": "Set a useful transparency level",
          "paragraphs": [
            "Reduce the opacity of the upper image to about 50 percent. If both images are very bright, use a lower value; if one image is dark, increase it until both remain visible.",
            "The correct transparency makes doubled edges and misaligned landmarks easy to identify."
          ]
        },
        {
          "heading": "Choose stable reference points",
          "paragraphs": [
            "For portraits, compare pupils, nose, mouth, jawline, and shoulders. For buildings, use corners, windows, doors, floor lines, and roof lines. For products, use outer edges, logos, buttons, and packaging corners.",
            "Adjust scale first, then position. This reduces repeated back-and-forth corrections."
          ]
        },
        {
          "heading": "Inspect editing and composition differences",
          "paragraphs": [
            "Once the images are aligned, the overlay can reveal retouching, background cleanup, removed objects, body or product shape changes, brightness adjustments, and crop differences.",
            "Hide and show the top layer to confirm whether a difference comes from the edit or from camera movement."
          ]
        },
        {
          "heading": "Crop both files consistently",
          "paragraphs": [
            "Choose a final ratio and output size after alignment. The same crop frame is applied to both images while each layer keeps its own transform.",
            "This is useful for 4:5 social posts, 9:16 vertical videos, website sliders, GIFs, and presentation slides."
          ]
        },
        {
          "heading": "Export separate comparison files privately",
          "paragraphs": [
            "Overlay Crop does not permanently flatten the two layers. Each image is exported separately at the same dimensions, ready for a slider, carousel, animation, or portfolio.",
            "The browser processes the selected images locally, which is useful for personal portraits, client material, and unpublished work."
          ]
        }
      ],
      "faq": [
        {
          "q": "Can the two images have different resolutions?",
          "a": "Yes. Each image can be positioned and resized independently before export."
        },
        {
          "q": "Does the tool permanently merge the images?",
          "a": "No. The overlay is used for comparison and alignment; the files are exported separately."
        },
        {
          "q": "Can I compare more than two images?",
          "a": "Yes. Up to five layers can be added in one editing session."
        }
      ]
    },
    {
      "slug": "crop-multiple-images-same-frame",
      "title": "How to Crop Multiple Images Using the Same Frame",
      "description": "Use one shared crop frame for multiple images while adjusting the position and zoom of every photo independently.",
      "intro": "A shared crop frame creates consistent output without requiring every original file to use the same crop coordinates. The final shape and dimensions remain identical while each image can be repositioned behind the frame.",
      "sections": [
        {
          "heading": "What “the same frame” means",
          "paragraphs": [
            "Using the same frame means that every exported image has the same aspect ratio, canvas shape, pixel width, and pixel height.",
            "The content inside the frame can still move. Five portraits can all be 1000 × 1000 pixels while each face is positioned separately to appear in the same place."
          ]
        },
        {
          "heading": "Shared frame versus identical source coordinates",
          "paragraphs": [
            "Identical crop coordinates remove the same region from every original file. This is appropriate only when all files were captured from the same camera position.",
            "A shared output frame works differently: each original can move and zoom behind the frame. It is more useful for mixed orientations, different resolutions, and subjects that are not centered."
          ]
        },
        {
          "heading": "Choose the output frame first",
          "paragraphs": [
            "Decide where the files will be used and select the matching ratio and dimensions.",
            "Examples include 1000 × 1000 for square portraits, 1080 × 1350 for vertical social posts, 1080 × 1920 for vertical video, and 1200 × 628 for wide web graphics."
          ]
        },
        {
          "heading": "Build a reference composition",
          "paragraphs": [
            "Position the first image until the amount of space above, below, and around the subject looks right. Lock this layer when the composition is complete.",
            "The first image now acts as a visual reference for the remaining photos."
          ]
        },
        {
          "heading": "Match the remaining layers",
          "paragraphs": [
            "Select the next image and lower its opacity. Move and zoom it until the main subject occupies the same visual position as the locked reference.",
            "Repeat this process for the remaining layers. Overlay Crop supports up to five images in one workspace."
          ]
        },
        {
          "heading": "Check every layer separately",
          "paragraphs": [
            "Restore full opacity and hide all but one layer. Confirm that no important feature is cut off, the subject has enough margin, and the image has not been enlarged beyond an acceptable quality level.",
            "A technically aligned photo can still look awkward on its own, so review both the overlay and the individual image."
          ]
        },
        {
          "heading": "Export the complete set",
          "paragraphs": [
            "Download one image at a time or export the full set as a ZIP. Every file uses the same output frame and dimensions.",
            "The method is useful for staff directories, product listings, restoration portfolios, social carousels, real-estate comparisons, progress tracking, and video transition frames."
          ]
        }
      ],
      "faq": [
        {
          "q": "Do the original images need the same aspect ratio?",
          "a": "No. Landscape, portrait, and square originals can all use the same final frame."
        },
        {
          "q": "Will every exported image have the same resolution?",
          "a": "Yes. The selected width and height are applied to every layer."
        },
        {
          "q": "Can I keep one image fixed while editing the others?",
          "a": "Yes. Lock the reference layer after its position and scale are set."
        }
      ]
    }
  ],
  "ko": [
    {
      "slug": "crop-multiple-images-to-the-same-size",
      "title": "여러 사진을 같은 크기로 자르는 방법",
      "description": "해상도와 구도가 다른 여러 사진을 개별 조정한 뒤 동일한 비율과 픽셀 크기로 저장하는 방법을 알아보세요.",
      "intro": "여러 사진을 같은 픽셀 크기로 저장하는 것만으로는 구도가 같아지지 않습니다. 원본 해상도와 방향, 피사체 위치가 다르다면 하나의 공통 크롭 프레임 안에서 각 사진을 따로 조정해야 합니다.",
      "sections": [
        {
          "heading": "같은 해상도만으로는 부족한 이유",
          "paragraphs": [
            "두 사진이 모두 1080 × 1350픽셀이어도 얼굴 크기나 피사체 위치가 다르면 한 세트처럼 보이지 않습니다. 한 사진은 인물이 크게 보이고 다른 사진은 여백이 많을 수 있습니다.",
            "따라서 최종 해상도뿐 아니라 프레임 안의 구성까지 함께 맞춰야 합니다."
          ],
          "bullets": [
            "각 사진을 독립적으로 이동하기",
            "레이어별로 확대 배율 조절하기",
            "투명도를 낮춰 겹쳐 보기",
            "하나의 비율과 출력 크기로 저장하기"
          ]
        },
        {
          "heading": "크기가 다른 원본 사진 업로드",
          "paragraphs": [
            "Overlay Crop 편집기에서 JPG, PNG, WebP 사진을 최대 5장까지 추가할 수 있습니다. 원본 해상도와 가로세로 방향, 비율이 서로 달라도 됩니다.",
            "각 사진은 별도의 레이어가 되므로 한 사진을 움직이거나 확대해도 다른 사진에는 영향을 주지 않습니다. 사진은 서버로 업로드되지 않고 브라우저 안에서 처리됩니다."
          ]
        },
        {
          "heading": "공통 비율과 출력 크기 선택",
          "paragraphs": [
            "사용할 곳에 맞춰 비율을 정합니다. 정사각형은 1:1, 인스타그램 세로 게시물은 4:5, 세로 영상은 9:16, 가로 콘텐츠는 16:9가 대표적입니다.",
            "그다음 가로와 세로 픽셀을 입력합니다. 예를 들어 1080 × 1350을 선택하면 모든 결과가 정확히 같은 크기로 저장됩니다."
          ]
        },
        {
          "heading": "사진마다 위치와 확대를 따로 조정",
          "paragraphs": [
            "첫 번째 레이어를 선택하고 공통 크롭 영역 안에서 피사체의 위치를 정합니다. 확대 배율을 조절해 피사체가 원하는 크기로 보이게 합니다.",
            "나머지 레이어도 같은 방식으로 각각 맞춥니다. 촬영 거리와 원본 구도가 달라도 사진마다 별도의 위치와 배율을 적용할 수 있습니다."
          ]
        },
        {
          "heading": "투명도로 구도 맞추기",
          "paragraphs": [
            "위쪽 사진의 투명도를 약 40~60%로 낮추면 기준 사진과 선택한 사진을 동시에 볼 수 있습니다.",
            "눈, 얼굴 윤곽, 제품 모서리, 수평선, 배경의 고정된 선처럼 변하지 않는 기준점을 겹쳐 맞춘 뒤 투명도를 다시 100%로 올립니다."
          ]
        },
        {
          "heading": "동일한 결과 세트로 저장",
          "paragraphs": [
            "각 레이어를 따로 확인한 뒤 개별 다운로드하거나 ZIP 파일로 한 번에 저장합니다. 모든 결과는 같은 비율과 해상도를 사용하면서 각 레이어에서 지정한 위치와 확대값을 유지합니다.",
            "작은 원본도 큰 크기로 저장할 수는 있지만 지나치게 확대하면 선명도가 떨어질 수 있습니다. 가능하면 최종 출력 크기 이상의 원본을 사용하세요."
          ]
        },
        {
          "heading": "활용하기 좋은 작업",
          "paragraphs": [
            "여러 사진을 하나의 세트처럼 보여야 하는 작업에 특히 유용합니다."
          ],
          "bullets": [
            "보정 전후 비교",
            "상품 카탈로그 사진",
            "직원·프로필 사진",
            "SNS 캐러셀",
            "변화 기록 사진",
            "옛 사진 복원 사례",
            "썸네일과 발표 자료"
          ]
        }
      ],
      "faq": [
        {
          "q": "원본 해상도가 서로 달라도 되나요?",
          "a": "네. 사진별 원본 해상도가 달라도 동일한 최종 크기로 저장할 수 있습니다."
        },
        {
          "q": "사진마다 따로 조정할 수 있나요?",
          "a": "네. 위치, 확대, 회전, 투명도, 표시 여부와 잠금 기능이 레이어별로 적용됩니다."
        },
        {
          "q": "사진이 서버로 업로드되나요?",
          "a": "아닙니다. 편집과 저장은 사용자의 브라우저 안에서 처리됩니다."
        }
      ]
    },
    {
      "slug": "align-before-and-after-photos",
      "title": "보정 전후 사진 위치를 맞추는 방법",
      "description": "사진을 투명하게 겹쳐 크기와 위치, 얼굴과 배경의 기준점을 맞추는 보정 전후 정렬 방법입니다.",
      "intro": "보정 전후 비교는 변화가 잘 보여야 하며 사진의 크기나 위치가 갑자기 바뀌어 보이면 안 됩니다. 투명 중첩 방식으로 원본과 수정본의 구도를 맞추면 촬영 조건이 달라도 비교 화면을 안정적으로 만들 수 있습니다.",
      "sections": [
        {
          "heading": "기준 사진 선택",
          "paragraphs": [
            "원본 또는 보정 전 사진을 고정된 기준으로 사용합니다. 두 사진에서 공통으로 확인할 수 있는 기준점이 잘 보여야 합니다.",
            "인물은 눈, 코, 턱, 어깨를 사용하고 제품이나 공간은 모서리, 라벨, 창문, 가구처럼 변하지 않은 부분을 기준으로 삼습니다."
          ]
        },
        {
          "heading": "두 사진을 별도 레이어로 배치",
          "paragraphs": [
            "보정 전 사진과 보정 후 사진을 업로드합니다. 먼저 기준 사진의 위치를 잡은 뒤 잠가서 실수로 움직이지 않게 합니다.",
            "보정 후 사진을 선택하면 기준 레이어는 그대로 둔 채 위치와 크기만 따로 조절할 수 있습니다."
          ]
        },
        {
          "heading": "위쪽 사진의 투명도 낮추기",
          "paragraphs": [
            "보정 후 사진의 투명도를 약 40~60%로 낮춥니다. 윤곽이 두 줄로 보이면 피사체가 크거나 작거나, 위아래 또는 좌우로 어긋난 상태를 바로 알 수 있습니다.",
            "두 사진의 밝기와 대비에 따라 가장 잘 보이는 투명도를 선택하세요."
          ]
        },
        {
          "heading": "위치보다 크기를 먼저 맞추기",
          "paragraphs": [
            "먼저 확대 배율을 조정해 주요 피사체가 두 사진에서 비슷한 크기로 보이게 합니다. 인물은 양쪽 눈 사이 거리와 얼굴 폭을, 제품은 전체 가로세로 크기를 비교합니다.",
            "크기가 맞은 뒤 보정 후 사진을 좌우와 위아래로 이동해 기준점이 겹치도록 합니다."
          ]
        },
        {
          "heading": "미세 조정",
          "paragraphs": [
            "표정, 고개 각도, 자세와 카메라 원근이 다르면 모든 윤곽을 완벽하게 겹칠 수는 없습니다. 전체 외곽선보다 가장 중요한 기준점을 우선하세요.",
            "슬라이더, 숫자 직접 입력, 마우스 휠, 키보드 또는 모바일 핀치 확대를 이용해 조금씩 조정할 수 있습니다."
          ]
        },
        {
          "heading": "공통 크롭 프레임 적용",
          "paragraphs": [
            "사진을 정렬한 뒤 최종 비율을 선택합니다. 두 사진에 하나의 공통 프레임이 적용되므로 캐러셀, 전후 슬라이더, 영상에서 화면이 튀는 현상을 줄일 수 있습니다.",
            "두 사진 모두에서 얼굴이나 중요한 부분이 잘리지 않는지 확인하세요."
          ]
        },
        {
          "heading": "저장 전 최종 확인",
          "paragraphs": [
            "투명도를 100%로 되돌리고 두 레이어를 번갈아 표시합니다. 피사체가 커졌다 작아지면 배율을, 옆으로 미끄러지면 위치를 다시 맞춥니다.",
            "보정 포트폴리오, 사진 복원, 변화 기록, 인테리어 전후, 크로스페이드 영상에 사용할 수 있도록 같은 해상도로 저장합니다."
          ]
        }
      ],
      "faq": [
        {
          "q": "정렬할 때 투명도는 어느 정도가 좋나요?",
          "a": "약 50%에서 시작하면 좋으며 대비가 강한 사진은 30~40%가 더 보기 편할 수 있습니다."
        },
        {
          "q": "같은 카메라로 찍은 사진만 가능한가요?",
          "a": "아닙니다. 다른 카메라 사진도 가능하지만 렌즈와 원근 차이 때문에 완벽하게 일치하지 않을 수 있습니다."
        },
        {
          "q": "사진을 3장 이상 정렬할 수도 있나요?",
          "a": "네. 최대 5개의 레이어를 사용해 여러 시점이나 보정 버전을 맞출 수 있습니다."
        }
      ]
    },
    {
      "slug": "before-and-after-photo-alignment-tool",
      "title": "온라인 보정 전후 사진 정렬 도구",
      "description": "보정 전후 사진을 투명하게 겹쳐 크기와 위치를 맞추고, 서버 업로드 없이 동일한 프레임으로 자를 수 있는 온라인 도구입니다.",
      "intro": "Overlay Crop은 사진을 바로 한 장의 콜라주로 합치는 도구가 아니라 보정 전후 파일을 정확히 정렬하기 위한 편집기입니다. 각 레이어를 독립적으로 확대하고 이동한 뒤 하나의 공통 크롭 프레임으로 저장할 수 있습니다.",
      "sections": [
        {
          "heading": "사진 정렬 도구가 하는 일",
          "paragraphs": [
            "사진 정렬 도구는 서로 다른 이미지의 피사체 크기, 위치, 회전, 크롭 비율과 최종 해상도를 일정하게 맞춥니다.",
            "사진을 반드시 합칠 필요는 없습니다. 정렬된 개별 파일을 전후 슬라이더, 애니메이션, 영상과 포트폴리오에 사용할 수 있습니다."
          ]
        },
        {
          "heading": "일반 일괄 크롭이 실패하는 이유",
          "paragraphs": [
            "자동 일괄 크롭은 모든 사진에서 같은 원본 좌표를 잘라내는 경우가 많습니다. 촬영 구도가 거의 같은 사진에만 잘 맞는 방식입니다.",
            "한 사진이 더 가까이 촬영됐거나 제품 위치가 다르면 결과 구도가 어긋납니다. 공통 출력 프레임과 개별 레이어 조정을 함께 사용하는 방식이 더 유연합니다."
          ]
        },
        {
          "heading": "주요 정렬 기능",
          "paragraphs": [
            "정확한 비교 작업에 필요한 기능을 한 화면에서 사용할 수 있습니다."
          ],
          "bullets": [
            "최대 5장 업로드",
            "레이어별 이동과 확대",
            "투명도 비교",
            "표시·숨김·잠금·회전",
            "기본 및 사용자 지정 비율",
            "정확한 출력 해상도 입력",
            "개별 또는 ZIP 일괄 다운로드"
          ]
        },
        {
          "heading": "실제 정렬 순서",
          "paragraphs": [
            "기준 사진의 위치를 정하고 잠급니다. 비교 사진을 선택해 투명도를 낮춘 뒤 피사체 크기가 같아질 때까지 배율을 조정합니다.",
            "고정된 기준점이 겹치도록 위치를 이동하고 투명도를 100%로 되돌린 뒤 두 레이어를 번갈아 확인합니다."
          ]
        },
        {
          "heading": "공통 프레임의 작동 방식",
          "paragraphs": [
            "크롭 프레임은 모든 결과의 비율과 픽셀 크기를 결정합니다. 하지만 프레임 뒤의 원본 사진은 레이어마다 서로 다른 위치와 확대값을 사용할 수 있습니다.",
            "따라서 원본 해상도와 촬영 구도가 달라도 결과 파일은 일정하게 만들 수 있습니다."
          ]
        },
        {
          "heading": "PC와 모바일 편집",
          "paragraphs": [
            "PC에서는 사진을 드래그해 이동하고 캔버스 위에서 휠을 사용해 커서 위치를 기준으로 확대할 수 있습니다. 숫자를 직접 입력해 정밀하게 조정할 수도 있습니다.",
            "모바일에서는 한 손가락으로 이동하고 두 손가락으로 핀치 확대합니다. 슬라이더 빈 영역을 눌러도 값이 튀지 않고 현재 값에서 상대적으로 조절됩니다."
          ]
        },
        {
          "heading": "브라우저 내부의 안전한 처리",
          "paragraphs": [
            "사진은 브라우저 안에서 읽고 처리됩니다. 개인 인물 사진, 고객 시안, 내부 디자인과 같이 불필요한 외부 업로드를 피하고 싶은 파일에 유용합니다.",
            "사진 보정, 복원, 운동 변화 기록, 시술 기록, 인테리어, 청소, 조경과 상품 사진 비교에 활용할 수 있습니다."
          ]
        }
      ],
      "faq": [
        {
          "q": "무료로 사용할 수 있나요?",
          "a": "브라우저 편집기는 계정 생성 없이 사용할 수 있습니다."
        },
        {
          "q": "업로드한 사진이 저장되나요?",
          "a": "아닙니다. 편집 사진은 브라우저 내부에서 처리되며 Overlay Crop 서버에 저장되지 않습니다."
        },
        {
          "q": "여러 보정 버전을 한 번에 저장할 수 있나요?",
          "a": "네. 최대 5개 레이어를 정렬하고 한 작업에서 저장할 수 있습니다."
        }
      ]
    },
    {
      "slug": "overlay-two-images-online-for-comparison",
      "title": "사진 두 장을 온라인에서 겹쳐 비교하는 방법",
      "description": "두 사진을 투명하게 겹쳐 차이를 비교하고 위치와 배율을 정확히 맞춘 뒤 브라우저에서 저장하세요.",
      "intro": "사진을 좌우로 놓으면 전체적인 변화는 볼 수 있지만 위치, 크기, 크롭과 보정의 작은 차이를 찾기에는 투명 중첩이 더 효과적입니다. Overlay Crop에서는 두 파일을 독립 레이어로 겹쳐 확인한 뒤 각각 따로 저장할 수 있습니다.",
      "sections": [
        {
          "heading": "좌우 비교와 중첩 비교의 차이",
          "paragraphs": [
            "좌우 비교는 결과를 보여주기에 좋습니다. 반투명 중첩은 얼굴, 사물 외곽선과 배경의 선이 정확히 어디에서 달라지는지 보여줍니다.",
            "파일을 준비할 때는 중첩을 사용하고, 정렬된 결과는 좌우 비교 이미지나 슬라이더, 영상에 활용하면 좋습니다."
          ]
        },
        {
          "heading": "기준 사진과 비교 사진 업로드",
          "paragraphs": [
            "기준 사진을 먼저 추가하고 비교 사진을 두 번째로 올립니다. 비교 레이어는 기준 레이어 위에 놓이며 별도로 이동, 확대, 숨김과 투명도 조절이 가능합니다.",
            "두 원본의 해상도와 비율은 서로 달라도 됩니다."
          ]
        },
        {
          "heading": "보기 좋은 투명도 설정",
          "paragraphs": [
            "위쪽 사진의 투명도를 약 50%로 낮춥니다. 두 사진이 모두 밝으면 더 낮추고, 한 사진이 어두우면 두 이미지가 함께 보일 때까지 올립니다.",
            "적절한 투명도에서는 겹쳐진 윤곽과 어긋난 기준점이 쉽게 보입니다."
          ]
        },
        {
          "heading": "안정적인 기준점 선택",
          "paragraphs": [
            "인물은 눈동자, 코, 입, 턱선, 어깨를 비교합니다. 건물은 모서리, 창문, 문, 바닥선과 지붕선을 사용하고 제품은 외곽선, 로고, 버튼, 포장 모서리를 기준으로 삼습니다.",
            "위치보다 배율을 먼저 맞추면 반복 수정이 줄어듭니다."
          ]
        },
        {
          "heading": "보정과 구도 차이 확인",
          "paragraphs": [
            "사진을 정렬한 뒤 겹쳐 보면 피부 보정, 배경 정리, 물체 삭제, 인물이나 제품 형태 변화, 밝기 조절과 크롭 차이를 확인할 수 있습니다.",
            "위 레이어를 숨겼다 표시하면서 차이가 실제 보정 때문인지 촬영 위치 변화 때문인지 구분하세요."
          ]
        },
        {
          "heading": "두 파일을 같은 구도로 자르기",
          "paragraphs": [
            "정렬을 마친 뒤 최종 비율과 해상도를 선택합니다. 두 레이어에 같은 크롭 프레임이 적용되지만 각 레이어의 위치와 배율은 그대로 유지됩니다.",
            "4:5 SNS 게시물, 9:16 세로 영상, 홈페이지 전후 슬라이더, GIF와 발표 자료에 사용할 수 있습니다."
          ]
        },
        {
          "heading": "개별 파일로 안전하게 저장",
          "paragraphs": [
            "두 레이어를 한 장으로 합쳐버리는 것이 아니라 각 사진을 같은 해상도의 별도 파일로 저장합니다. 전후 슬라이더, 캐러셀, 애니메이션과 포트폴리오에 바로 활용할 수 있습니다.",
            "선택한 사진은 브라우저 내부에서 처리되므로 개인 사진이나 고객 작업물처럼 외부 업로드가 부담스러운 경우에도 유용합니다."
          ]
        }
      ],
      "faq": [
        {
          "q": "두 사진의 해상도가 달라도 되나요?",
          "a": "네. 각각 독립적으로 위치와 크기를 조정한 뒤 같은 해상도로 저장할 수 있습니다."
        },
        {
          "q": "사진이 한 장으로 합쳐지나요?",
          "a": "아닙니다. 중첩은 비교와 정렬에만 사용되며 결과는 개별 파일로 저장됩니다."
        },
        {
          "q": "두 장보다 많은 사진도 비교할 수 있나요?",
          "a": "네. 한 작업에서 최대 5개의 레이어를 사용할 수 있습니다."
        }
      ]
    },
    {
      "slug": "crop-multiple-images-same-frame",
      "title": "여러 사진을 같은 프레임으로 자르는 방법",
      "description": "하나의 공통 크롭 프레임을 사용하면서 각 사진의 위치와 확대 배율은 개별적으로 조정하는 방법입니다.",
      "intro": "같은 프레임을 사용하면 모든 원본에 동일한 좌표를 적용하지 않고도 일정한 결과를 만들 수 있습니다. 최종 비율과 해상도는 같게 유지하면서 각 사진은 프레임 뒤에서 따로 움직일 수 있습니다.",
      "sections": [
        {
          "heading": "같은 프레임의 의미",
          "paragraphs": [
            "같은 프레임을 사용한다는 것은 모든 결과 사진의 가로세로 비율, 캔버스 모양, 가로 픽셀과 세로 픽셀이 같다는 뜻입니다.",
            "프레임 안의 사진 내용은 따로 움직일 수 있습니다. 5개의 인물 사진을 모두 1000 × 1000으로 저장하면서 얼굴 위치는 각각 조정할 수 있습니다."
          ]
        },
        {
          "heading": "공통 프레임과 동일 좌표 크롭의 차이",
          "paragraphs": [
            "동일 좌표 크롭은 모든 원본 사진에서 같은 위치를 잘라냅니다. 모든 사진이 같은 카메라 위치에서 촬영됐을 때만 잘 맞습니다.",
            "공통 출력 프레임 방식은 각 원본이 프레임 뒤에서 따로 이동하고 확대됩니다. 방향과 해상도가 다르거나 피사체가 중앙에 없는 사진에 더 적합합니다."
          ]
        },
        {
          "heading": "출력 프레임 먼저 선택",
          "paragraphs": [
            "사진을 사용할 곳을 정한 뒤 비율과 해상도를 선택합니다.",
            "정사각형 인물 사진은 1000 × 1000, SNS 세로 게시물은 1080 × 1350, 세로 영상은 1080 × 1920, 가로 웹 이미지는 1200 × 628 등을 사용할 수 있습니다."
          ]
        },
        {
          "heading": "기준 구도 만들기",
          "paragraphs": [
            "첫 번째 사진을 움직여 피사체 위아래와 주변 여백이 적절하게 보이도록 합니다. 구도가 완성되면 해당 레이어를 잠급니다.",
            "이 첫 번째 사진이 나머지 사진의 시각적 기준이 됩니다."
          ]
        },
        {
          "heading": "나머지 레이어 맞추기",
          "paragraphs": [
            "다음 사진을 선택하고 투명도를 낮춥니다. 잠긴 기준 사진과 주요 피사체의 위치가 같아질 때까지 이동하고 확대합니다.",
            "나머지 사진도 같은 과정을 반복합니다. 한 작업 화면에서 최대 5장의 사진을 사용할 수 있습니다."
          ]
        },
        {
          "heading": "각 사진을 따로 확인",
          "paragraphs": [
            "투명도를 100%로 돌리고 한 번에 한 레이어만 표시합니다. 중요한 부분이 잘리지 않는지, 여백이 충분한지, 지나친 확대 때문에 화질이 떨어지지 않았는지 확인합니다.",
            "겹쳤을 때는 잘 맞아도 개별 사진으로 보면 어색할 수 있으므로 두 방식으로 모두 확인해야 합니다."
          ]
        },
        {
          "heading": "전체 세트 저장",
          "paragraphs": [
            "한 장씩 다운로드하거나 전체를 ZIP으로 저장합니다. 모든 파일은 동일한 출력 프레임과 해상도를 사용합니다.",
            "직원 명부, 상품 목록, 사진 복원 포트폴리오, SNS 캐러셀, 부동산 전후 비교, 변화 기록과 영상 전환 프레임에 활용하기 좋습니다."
          ]
        }
      ],
      "faq": [
        {
          "q": "원본 사진 비율이 모두 같아야 하나요?",
          "a": "아닙니다. 가로, 세로, 정사각형 원본을 같은 최종 프레임으로 만들 수 있습니다."
        },
        {
          "q": "저장되는 사진의 해상도가 모두 같나요?",
          "a": "네. 선택한 가로와 세로 픽셀이 모든 레이어에 동일하게 적용됩니다."
        },
        {
          "q": "기준 사진을 고정할 수 있나요?",
          "a": "네. 위치와 배율을 정한 뒤 기준 레이어를 잠글 수 있습니다."
        }
      ]
    }
  ],
  "ja": [
    {
      "slug": "crop-multiple-images-to-the-same-size",
      "title": "複数の画像を同じサイズでトリミングする方法",
      "description": "解像度や構図が異なる複数の画像を個別に調整し、同じ比率とピクセルサイズで書き出す方法を解説します。",
      "intro": "複数の画像を同じピクセル寸法にするだけでは、構図まで揃うとは限りません。解像度、向き、被写体の位置が異なる場合は、共通の切り抜きフレーム内で各画像を個別に調整する必要があります。",
      "sections": [
        {
          "heading": "同じ寸法だけでは不十分な理由",
          "paragraphs": [
            "2枚とも1080 × 1350ピクセルでも、顔の大きさや被写体の位置が違えば統一感は出ません。一方は人物が大きく、もう一方は余白が多いことがあります。",
            "最終寸法だけでなく、フレーム内の構図も合わせることが重要です。"
          ],
          "bullets": [
            "画像ごとに独立して移動する",
            "レイヤーごとに拡大率を設定する",
            "透明度を調整して重ねて確認する",
            "共通の比率と出力サイズで保存する"
          ]
        },
        {
          "heading": "サイズの異なる元画像を追加",
          "paragraphs": [
            "Overlay CropではJPG、PNG、WebP画像を最大5枚まで追加できます。元画像の解像度、向き、縦横比が異なっていても問題ありません。",
            "各画像は独立したレイヤーになるため、1枚を動かしても他の画像は変わりません。処理はサーバーではなくブラウザ内で行われます。"
          ]
        },
        {
          "heading": "共通の比率と出力サイズを選ぶ",
          "paragraphs": [
            "用途に合わせて比率を選びます。正方形は1:1、縦長のSNS投稿は4:5、縦動画は9:16、横長コンテンツは16:9が一般的です。",
            "次に幅と高さを入力します。たとえば1080 × 1350を選ぶと、すべての書き出し画像が同じ寸法になります。"
          ]
        },
        {
          "heading": "画像ごとに位置と拡大率を調整",
          "paragraphs": [
            "最初のレイヤーを選び、切り抜き枠の中で被写体の位置を決めます。拡大率を調整して見た目の大きさを整えます。",
            "残りの画像も同じ手順で個別に合わせます。撮影距離や元の構図が違っていても、各レイヤーに別の位置と拡大率を設定できます。"
          ]
        },
        {
          "heading": "透明度で構図を合わせる",
          "paragraphs": [
            "上のレイヤーの透明度を40〜60%程度に下げると、基準画像と選択画像を同時に確認できます。",
            "目、顔の輪郭、商品の角、水平線、背景の固定線などを重ねて合わせ、終了後に透明度を100%へ戻します。"
          ]
        },
        {
          "heading": "統一された画像セットを書き出す",
          "paragraphs": [
            "各レイヤーを個別に確認した後、1枚ずつ保存するかZIPでまとめてダウンロードします。すべて同じ比率と寸法で、レイヤーごとの位置と拡大率が反映されます。",
            "小さな元画像を大きく書き出すと画質が低下する場合があります。可能であれば出力サイズ以上の元画像を使ってください。"
          ]
        },
        {
          "heading": "便利な用途",
          "paragraphs": [
            "複数の画像を統一されたセットとして見せたい作業に向いています。"
          ],
          "bullets": [
            "レタッチ前後の比較",
            "商品カタログ",
            "プロフィール写真",
            "SNSカルーセル",
            "経過記録",
            "古写真の修復例",
            "サムネイルや資料"
          ]
        }
      ],
      "faq": [
        {
          "q": "元画像の解像度が違っても使えますか？",
          "a": "はい。元の解像度が異なっていても、同じ最終寸法で書き出せます。"
        },
        {
          "q": "画像ごとに別々に調整できますか？",
          "a": "はい。位置、拡大、回転、透明度、表示、ロックをレイヤーごとに設定できます。"
        },
        {
          "q": "画像はサーバーに送信されますか？",
          "a": "いいえ。編集と書き出しはブラウザ内で行われます。"
        }
      ]
    },
    {
      "slug": "align-before-and-after-photos",
      "title": "ビフォー・アフター写真を整列する方法",
      "description": "透明な画像レイヤーを使い、ビフォー・アフター写真の大きさ、位置、顔や背景の基準点を合わせます。",
      "intro": "ビフォー・アフター比較では、変化そのものが見え、画像の大きさや位置が急に変わらないことが重要です。透明レイヤーで構図を合わせると、撮影条件が異なる画像でも安定した比較を作れます。",
      "sections": [
        {
          "heading": "基準画像を選ぶ",
          "paragraphs": [
            "元画像またはビフォー画像を固定基準にします。両方の画像で確認できるランドマークがはっきり見えるものを選びます。",
            "人物では目、鼻、顎、肩を使い、商品や室内では角、ラベル、窓、家具など変化していない部分を使います。"
          ]
        },
        {
          "heading": "2枚を別レイヤーに置く",
          "paragraphs": [
            "ビフォーとアフターをアップロードします。基準画像を先に配置し、誤って動かさないようロックします。",
            "アフター画像を選択すると、基準を固定したまま位置と大きさを個別に調整できます。"
          ]
        },
        {
          "heading": "上の画像を半透明にする",
          "paragraphs": [
            "アフター画像の透明度を40〜60%程度にします。輪郭が二重に見えるため、大きさや上下左右のずれをすぐ確認できます。",
            "2枚の明るさやコントラストに合わせて見やすい透明度に調整します。"
          ]
        },
        {
          "heading": "位置より先に大きさを合わせる",
          "paragraphs": [
            "まずズームを調整し、主要な被写体が同じ大きさに見えるようにします。人物では目の間隔や顔の幅、商品では全体の幅と高さを比較します。",
            "大きさを合わせた後で、アフター画像を上下左右に移動して基準点を重ねます。"
          ]
        },
        {
          "heading": "細かく調整する",
          "paragraphs": [
            "表情、顔の角度、姿勢、カメラの遠近が異なると、すべての輪郭を完全に一致させることはできません。重要な基準点を優先します。",
            "スライダー、数値入力、マウスホイール、キーボード、スマートフォンのピンチ操作で微調整できます。"
          ]
        },
        {
          "heading": "共通の切り抜き枠を適用",
          "paragraphs": [
            "整列後に最終比率を選びます。同じフレームを使うことで、カルーセル、比較スライダー、動画で画面が跳ねにくくなります。",
            "どちらの画像でも顔や重要な部分が切れていないか確認します。"
          ]
        },
        {
          "heading": "書き出し前に確認する",
          "paragraphs": [
            "透明度を100%に戻して2枚を切り替えます。被写体が拡大・縮小して見える場合は倍率を、横に滑る場合は位置を調整します。",
            "レタッチ作品、写真修復、経過記録、リフォーム比較、クロスフェード動画に使えるよう同じ寸法で保存します。"
          ]
        }
      ],
      "faq": [
        {
          "q": "整列に適した透明度はどのくらいですか？",
          "a": "約50%から始めるのがおすすめです。コントラストが強い画像は30〜40%が見やすい場合があります。"
        },
        {
          "q": "同じカメラで撮影した画像だけですか？",
          "a": "いいえ。別のカメラでも使えますが、レンズや遠近の差で完全には一致しない場合があります。"
        },
        {
          "q": "3枚以上も整列できますか？",
          "a": "はい。最大5レイヤーで複数時点や編集版を合わせられます。"
        }
      ]
    },
    {
      "slug": "before-and-after-photo-alignment-tool",
      "title": "オンラインのビフォー・アフター写真整列ツール",
      "description": "ビフォー・アフター写真を重ね、拡大、位置調整、共通フレームでの切り抜きをサーバー送信なしで行えます。",
      "intro": "Overlay Cropは、画像をすぐに1枚のコラージュへ結合するのではなく、別々のビフォー・アフターファイルを正確に整列するためのツールです。各レイヤーを独立して動かし、共通フレームで書き出せます。",
      "sections": [
        {
          "heading": "写真整列ツールの役割",
          "paragraphs": [
            "写真整列ツールは、被写体の大きさ、位置、回転、切り抜き比率、出力寸法を揃えます。",
            "画像を結合する必要はありません。整列した別々のファイルを比較スライダー、アニメーション、動画、ポートフォリオに使えます。"
          ]
        },
        {
          "heading": "一般的な一括切り抜きが合わない理由",
          "paragraphs": [
            "自動一括ツールは、すべての画像に同じ元座標を適用することがあります。これは撮影構図がほぼ同じ場合にだけ有効です。",
            "撮影距離や被写体位置が異なると結果が不揃いになります。共通出力フレームとレイヤーごとの調整を組み合わせる方が柔軟です。"
          ]
        },
        {
          "heading": "主な整列機能",
          "paragraphs": [
            "比較作業に必要な機能をまとめて利用できます。"
          ],
          "bullets": [
            "最大5枚の画像を追加",
            "レイヤーごとの移動と拡大",
            "透明度による比較",
            "表示・非表示・ロック・回転",
            "標準またはカスタム比率",
            "正確な出力寸法",
            "個別またはZIP保存"
          ]
        },
        {
          "heading": "実用的な整列手順",
          "paragraphs": [
            "基準画像を配置してロックします。比較画像の透明度を下げ、被写体の大きさが合うまで拡大率を調整します。",
            "固定されたランドマークが重なるよう移動し、透明度を戻してレイヤーを切り替えて確認します。"
          ]
        },
        {
          "heading": "共通フレームの仕組み",
          "paragraphs": [
            "切り抜きフレームは、すべての書き出し画像の形とピクセル寸法を決めます。フレームの背後では、各画像に別の位置と拡大率を設定できます。",
            "元画像の解像度や撮影構図が違っていても、統一された結果を作れます。"
          ]
        },
        {
          "heading": "PCとスマートフォンでの操作",
          "paragraphs": [
            "PCではドラッグで移動し、キャンバス上のホイールでポインター位置を中心に拡大できます。数値を直接入力して細かく調整することもできます。",
            "スマートフォンでは1本指で移動し、2本指でピンチ拡大します。スライダーの空白を触っても値が跳ばず、現在値から相対的に変化します。"
          ]
        },
        {
          "heading": "ブラウザ内でのプライベート処理",
          "paragraphs": [
            "画像はブラウザ内で読み込まれ処理されます。人物写真、顧客プレビュー、社内資料など、不要な外部アップロードを避けたいファイルに適しています。",
            "レタッチ、写真修復、フィットネス記録、施術記録、リフォーム、清掃、造園、商品写真などに利用できます。"
          ]
        }
      ],
      "faq": [
        {
          "q": "無料で使えますか？",
          "a": "ブラウザ編集ツールはアカウント作成なしで利用できます。"
        },
        {
          "q": "画像は保存されますか？",
          "a": "いいえ。編集画像はブラウザ内で処理され、Overlay Cropサーバーに保存されません。"
        },
        {
          "q": "複数の整列済み画像を一度に保存できますか？",
          "a": "はい。最大5レイヤーを1回の作業で整列して書き出せます。"
        }
      ]
    },
    {
      "slug": "overlay-two-images-online-for-comparison",
      "title": "2枚の画像をオンラインで重ねて比較する方法",
      "description": "2枚の画像を重ね、透明度を調整し、差を比較して位置と大きさをブラウザ内で正確に合わせます。",
      "intro": "左右に並べる方法は結果の提示に向いていますが、位置、拡大率、切り抜き、編集の小さな差を見つけるには透明な重ね合わせが適しています。Overlay Cropでは画像を独立レイヤーとして比較し、別々に書き出せます。",
      "sections": [
        {
          "heading": "重ね合わせと左右比較の違い",
          "paragraphs": [
            "左右比較は全体の変化を見せるのに便利です。半透明の重ね合わせは、顔、物体の輪郭、背景線がどこで違うかを正確に示します。",
            "準備段階では重ね合わせを使い、整列後の画像を左右レイアウト、スライダー、動画に利用します。"
          ]
        },
        {
          "heading": "基準画像と比較画像を追加",
          "paragraphs": [
            "基準画像を先に、比較画像を次に追加します。比較レイヤーは上に表示され、独立して移動、拡大、非表示、透明度調整ができます。",
            "2枚の元画像は解像度や縦横比が異なっていても構いません。"
          ]
        },
        {
          "heading": "見やすい透明度に設定",
          "paragraphs": [
            "上の画像を約50%にします。両方が明るい場合は低くし、一方が暗い場合は両方が見えるまで上げます。",
            "適切な透明度では、二重の輪郭やずれたランドマークが見つけやすくなります。"
          ]
        },
        {
          "heading": "安定した基準点を選ぶ",
          "paragraphs": [
            "人物では瞳、鼻、口、顎、肩を使います。建物では角、窓、ドア、床や屋根の線、商品では外周、ロゴ、ボタン、包装の角を使います。",
            "位置より先に拡大率を合わせると、修正の往復が少なくなります。"
          ]
        },
        {
          "heading": "編集と構図の違いを確認",
          "paragraphs": [
            "整列後の重ね合わせで、レタッチ、背景処理、削除物、形状変更、明るさ、切り抜きの差を確認できます。",
            "上のレイヤーを表示・非表示にして、編集差なのか撮影位置の変化なのかを見分けます。"
          ]
        },
        {
          "heading": "2枚を同じ構図で切り抜く",
          "paragraphs": [
            "整列後に最終比率と寸法を選びます。両方に同じフレームが適用されますが、各レイヤーの位置と拡大率は保持されます。",
            "4:5のSNS投稿、9:16動画、ウェブ比較スライダー、GIF、資料などに使えます。"
          ]
        },
        {
          "heading": "別ファイルとして安全に保存",
          "paragraphs": [
            "2枚を永久に1枚へ結合せず、同じ寸法の別ファイルとして書き出します。スライダー、カルーセル、アニメーション、作品紹介に利用できます。",
            "画像はブラウザ内で処理されるため、個人写真、顧客素材、未公開作品にも適しています。"
          ]
        }
      ],
      "faq": [
        {
          "q": "2枚の解像度が違っても使えますか？",
          "a": "はい。各画像を別々に配置・拡大し、同じ最終寸法で保存できます。"
        },
        {
          "q": "画像は1枚に結合されますか？",
          "a": "いいえ。重ね合わせは比較と整列に使い、画像は別々に書き出されます。"
        },
        {
          "q": "3枚以上も比較できますか？",
          "a": "はい。1回の編集で最大5レイヤーを追加できます。"
        }
      ]
    },
    {
      "slug": "crop-multiple-images-same-frame",
      "title": "複数の画像を同じフレームで切り抜く方法",
      "description": "1つの共通フレームを使いながら、各画像の位置と拡大率を個別に調整する方法を解説します。",
      "intro": "共通フレームを使えば、すべての元画像に同じ座標を適用しなくても統一された結果を作れます。最終比率と寸法は同じまま、各画像をフレームの背後で別々に動かせます。",
      "sections": [
        {
          "heading": "「同じフレーム」の意味",
          "paragraphs": [
            "同じフレームとは、すべての書き出し画像が同じ縦横比、キャンバス形状、幅、高さを持つことです。",
            "フレーム内の内容は個別に移動できます。5枚の人物写真をすべて1000 × 1000にしながら、顔の位置を別々に合わせられます。"
          ]
        },
        {
          "heading": "共通フレームと同一座標の違い",
          "paragraphs": [
            "同一座標の切り抜きは、すべての元画像から同じ場所を取り出します。同じカメラ位置で撮影した場合にだけ適しています。",
            "共通出力フレームでは、各画像がフレームの背後で別々に移動・拡大します。向き、解像度、被写体位置が異なる画像に適しています。"
          ]
        },
        {
          "heading": "出力フレームを先に選ぶ",
          "paragraphs": [
            "使用先を決め、対応する比率と寸法を選びます。",
            "正方形の人物写真は1000 × 1000、縦長SNS投稿は1080 × 1350、縦動画は1080 × 1920、横長ウェブ画像は1200 × 628などが利用できます。"
          ]
        },
        {
          "heading": "基準構図を作る",
          "paragraphs": [
            "最初の画像を配置し、被写体の上下や周囲の余白を整えます。構図が決まったらレイヤーをロックします。",
            "この最初の画像が残りの写真の視覚的な基準になります。"
          ]
        },
        {
          "heading": "残りのレイヤーを合わせる",
          "paragraphs": [
            "次の画像を選び、透明度を下げます。ロックした基準画像と主要被写体の位置が合うまで移動・拡大します。",
            "残りも同じ手順で合わせます。1つの作業画面で最大5枚を扱えます。"
          ]
        },
        {
          "heading": "各レイヤーを個別に確認",
          "paragraphs": [
            "透明度を100%に戻し、1枚ずつ表示します。重要部分が切れていないか、余白が十分か、拡大しすぎて画質が低下していないか確認します。",
            "重ねた状態では合っていても、単体で不自然に見えることがあるため両方を確認します。"
          ]
        },
        {
          "heading": "セット全体を書き出す",
          "paragraphs": [
            "1枚ずつ保存するか、全体をZIPでダウンロードします。すべて同じフレームと出力寸法になります。",
            "社員名簿、商品一覧、修復作品、SNSカルーセル、不動産比較、経過記録、動画の切り替えフレームに便利です。"
          ]
        }
      ],
      "faq": [
        {
          "q": "元画像の比率は同じ必要がありますか？",
          "a": "いいえ。横長、縦長、正方形の元画像を同じ最終フレームにできます。"
        },
        {
          "q": "書き出し解像度はすべて同じですか？",
          "a": "はい。選択した幅と高さがすべてのレイヤーに適用されます。"
        },
        {
          "q": "基準画像を固定できますか？",
          "a": "はい。位置と拡大率を設定後、基準レイヤーをロックできます。"
        }
      ]
    }
  ],
  "es": [
    {
      "slug": "crop-multiple-images-to-the-same-size",
      "title": "Cómo recortar varias imágenes al mismo tamaño",
      "description": "Ajusta cada foto por separado y exporta varias imágenes con la misma proporción y dimensiones directamente en el navegador.",
      "intro": "Guardar varias fotos con las mismas dimensiones no garantiza que tengan el mismo encuadre. Cuando cambian la resolución, la orientación o la posición del sujeto, cada imagen debe ajustarse de forma independiente dentro de un marco de salida común.",
      "sections": [
        {
          "heading": "Por qué no basta con usar las mismas dimensiones",
          "paragraphs": [
            "Dos archivos pueden medir 1080 × 1350 píxeles y aun así verse diferentes. El rostro puede ser más grande en uno, el producto puede estar desplazado o una foto puede contener mucho más fondo vacío.",
            "Un conjunto coherente necesita igualar tanto las dimensiones finales como la composición dentro del marco."
          ],
          "bullets": [
            "Mover cada imagen de forma independiente",
            "Usar un zoom distinto por capa",
            "Comparar capas con opacidad ajustable",
            "Exportar todas con una proporción y tamaño comunes"
          ]
        },
        {
          "heading": "Sube imágenes originales de distintos tamaños",
          "paragraphs": [
            "El editor Overlay Crop admite hasta cinco imágenes JPG, PNG o WebP. Las resoluciones, orientaciones y proporciones originales pueden ser diferentes.",
            "Cada foto se convierte en una capa independiente. Los archivos se procesan localmente en el navegador y no se suben al servidor de edición."
          ]
        },
        {
          "heading": "Elige una proporción y un tamaño final",
          "paragraphs": [
            "Selecciona la proporción según el destino: 1:1 para diseños cuadrados, 4:5 para publicaciones verticales, 9:16 para vídeo vertical y 16:9 para contenido horizontal.",
            "Después introduce el ancho y el alto. Si eliges 1080 × 1350, todos los archivos exportados tendrán exactamente esas dimensiones."
          ]
        },
        {
          "heading": "Ajusta cada foto de manera independiente",
          "paragraphs": [
            "Selecciona la primera capa y coloca el sujeto dentro del marco. Ajusta el zoom hasta obtener el tamaño visual deseado.",
            "Repite el proceso con las demás capas. Así puedes compensar diferencias de distancia de cámara y encuadre sin aplicar las mismas coordenadas a todas las fotos."
          ]
        },
        {
          "heading": "Usa la opacidad para igualar la composición",
          "paragraphs": [
            "Baja la opacidad de la capa superior a aproximadamente 40–60%. De este modo podrás ver la referencia y la foto seleccionada al mismo tiempo.",
            "Alinea puntos estables como ojos, contornos del rostro, esquinas de productos, horizontes o líneas del fondo. Después vuelve a colocar la opacidad al 100%."
          ]
        },
        {
          "heading": "Exporta un conjunto uniforme",
          "paragraphs": [
            "Revisa cada capa y descarga los archivos por separado o en un ZIP. Todos usan la misma proporción y dimensiones, pero conservan la posición y el zoom elegidos para cada foto.",
            "Una imagen pequeña puede exportarse a un tamaño mayor, aunque una ampliación excesiva puede reducir la nitidez. Utiliza originales suficientemente grandes siempre que sea posible."
          ]
        },
        {
          "heading": "Usos habituales",
          "paragraphs": [
            "Este flujo resulta útil cuando varias imágenes deben verse como una serie coherente."
          ],
          "bullets": [
            "Comparaciones de retoque",
            "Catálogos de productos",
            "Retratos de perfil o equipo",
            "Carruseles sociales",
            "Fotos de progreso",
            "Ejemplos de restauración",
            "Miniaturas y presentaciones"
          ]
        }
      ],
      "faq": [
        {
          "q": "¿Pueden tener resoluciones originales diferentes?",
          "a": "Sí. Cada capa puede usar una resolución distinta y exportarse con las mismas dimensiones finales."
        },
        {
          "q": "¿Puedo ajustar cada foto por separado?",
          "a": "Sí. La posición, el zoom, la rotación, la opacidad, la visibilidad y el bloqueo se controlan por capa."
        },
        {
          "q": "¿Las fotos se suben a un servidor?",
          "a": "No. La edición y la exportación se realizan localmente en el navegador."
        }
      ]
    },
    {
      "slug": "align-before-and-after-photos",
      "title": "Cómo alinear fotos de antes y después",
      "description": "Alinea fotos de antes y después igualando escala, posición y puntos visuales mediante una superposición transparente.",
      "intro": "Una comparación de antes y después resulta más creíble cuando el cambio se aprecia sin saltos de tamaño o posición. La superposición permite igualar el encuadre incluso cuando las fotos fueron tomadas o editadas de manera diferente.",
      "sections": [
        {
          "heading": "Elige una imagen de referencia fiable",
          "paragraphs": [
            "Usa la foto original o de antes como referencia fija. Debe mostrar con claridad puntos que también aparezcan en la imagen de después.",
            "En retratos utiliza ojos, nariz, barbilla y hombros. En productos o interiores usa esquinas, bordes, etiquetas, ventanas u objetos que no hayan cambiado."
          ]
        },
        {
          "heading": "Coloca las fotos en capas separadas",
          "paragraphs": [
            "Sube la imagen de antes y la de después. Coloca primero la referencia y bloquéala para evitar movimientos accidentales.",
            "Selecciona la foto de después. Ahora puedes cambiar su posición y escala sin modificar la referencia."
          ]
        },
        {
          "heading": "Reduce la opacidad de la capa superior",
          "paragraphs": [
            "Ajusta la foto de después a aproximadamente 40–60% de opacidad. Los contornos dobles muestran enseguida si el sujeto es demasiado grande, pequeño, alto o está desplazado.",
            "Adapta la opacidad al brillo y contraste de las dos imágenes."
          ]
        },
        {
          "heading": "Iguala la escala antes que la posición",
          "paragraphs": [
            "Primero ajusta el zoom hasta que el sujeto tenga un tamaño similar en ambas imágenes. En retratos compara la distancia entre los ojos y el ancho del rostro; en objetos compara el ancho y alto totales.",
            "Cuando la escala coincida, mueve la imagen de después horizontal y verticalmente hasta superponer los puntos de referencia."
          ]
        },
        {
          "heading": "Realiza ajustes precisos",
          "paragraphs": [
            "La expresión, el ángulo de la cabeza, la postura y la perspectiva pueden impedir que todos los bordes coincidan. Prioriza los puntos más importantes.",
            "Utiliza el deslizador, la entrada numérica, la rueda del ratón, el teclado o el gesto de pellizco para corregir pequeños desajustes."
          ]
        },
        {
          "heading": "Aplica un marco de recorte común",
          "paragraphs": [
            "Elige la proporción final después de alinear las capas. El mismo marco se aplica a las dos imágenes y evita saltos en carruseles, deslizadores y vídeos.",
            "Comprueba que el sujeto y los detalles importantes permanezcan dentro del área de recorte en ambas fotos."
          ]
        },
        {
          "heading": "Exporta y revisa la comparación",
          "paragraphs": [
            "Devuelve la foto de después al 100% de opacidad y alterna entre capas. Si el sujeto parece latir, corrige la escala; si se desliza, corrige la posición.",
            "Exporta ambas imágenes con dimensiones idénticas para portafolios de retoque, restauración, progreso, reformas o vídeos con fundido."
          ]
        }
      ],
      "faq": [
        {
          "q": "¿Qué opacidad es mejor para alinear?",
          "a": "Un 50% es un buen punto de partida. Las imágenes de alto contraste pueden verse mejor entre 30 y 40%."
        },
        {
          "q": "¿Deben proceder de la misma cámara?",
          "a": "No. Se pueden usar cámaras diferentes, aunque las diferencias de lente y perspectiva pueden impedir una coincidencia perfecta."
        },
        {
          "q": "¿Puedo alinear más de dos fotos?",
          "a": "Sí. Overlay Crop admite hasta cinco capas para secuencias y varias versiones de edición."
        }
      ]
    },
    {
      "slug": "before-and-after-photo-alignment-tool",
      "title": "Herramienta online para alinear fotos de antes y después",
      "description": "Superpone, cambia el tamaño, coloca y recorta fotos comparativas sin enviarlas a un servidor de edición.",
      "intro": "Overlay Crop está pensado para alinear archivos separados de antes y después, no solo para combinarlos inmediatamente en un collage. Cada capa puede cambiarse de tamaño y posición de forma independiente dentro de un marco de recorte común.",
      "sections": [
        {
          "heading": "Qué hace una herramienta de alineación",
          "paragraphs": [
            "Una herramienta de alineación iguala el tamaño del sujeto, la posición, la rotación, la proporción de recorte y las dimensiones finales de varias imágenes.",
            "Las fotos pueden mantenerse separadas y utilizarse en deslizadores, animaciones, vídeos y portafolios."
          ]
        },
        {
          "heading": "Por qué puede fallar el recorte por lotes",
          "paragraphs": [
            "Las herramientas automáticas suelen aplicar las mismas coordenadas originales a todos los archivos. Solo funciona bien cuando el encuadre de origen es casi idéntico.",
            "Si un retrato se tomó más cerca o un producto está en otra posición, el resultado será desigual. Un marco común con controles independientes es más flexible."
          ]
        },
        {
          "heading": "Controles principales",
          "paragraphs": [
            "Overlay Crop reúne las funciones necesarias para una comparación precisa."
          ],
          "bullets": [
            "Subir hasta cinco imágenes",
            "Mover y ampliar cada capa",
            "Ajustar la opacidad",
            "Mostrar, ocultar, bloquear y girar",
            "Elegir proporciones estándar o personalizadas",
            "Introducir dimensiones exactas",
            "Descargar una imagen o todas en ZIP"
          ]
        },
        {
          "heading": "Flujo de alineación práctico",
          "paragraphs": [
            "Coloca y bloquea la imagen de referencia. Selecciona la comparación, reduce su opacidad y ajusta el zoom hasta igualar el tamaño del sujeto.",
            "Mueve la capa hasta que coincidan los puntos estables. Devuelve la opacidad al 100% y alterna entre capas para comprobar el resultado."
          ]
        },
        {
          "heading": "Cómo funciona el marco compartido",
          "paragraphs": [
            "El marco determina la forma y el tamaño en píxeles de cada exportación. Cada imagen puede mantener una posición y un zoom diferentes detrás de ese marco.",
            "Así se obtienen resultados uniformes aunque los originales tengan resoluciones y encuadres distintos."
          ]
        },
        {
          "heading": "Edición en escritorio y móvil",
          "paragraphs": [
            "En escritorio, arrastra para mover y usa la rueda sobre el lienzo para ampliar alrededor del puntero. También puedes escribir valores exactos.",
            "En móvil, usa un dedo para mover y dos para ampliar. Los deslizadores funcionan de manera relativa y no saltan al tocar una zona vacía."
          ]
        },
        {
          "heading": "Procesamiento privado en el navegador",
          "paragraphs": [
            "Las imágenes se leen y procesan localmente. Resulta útil para retratos, trabajos de clientes, borradores internos y archivos que no deberían subirse innecesariamente a terceros.",
            "Puede utilizarse para retoque, restauración, seguimiento físico, documentación de tratamientos, reformas, limpieza, paisajismo y fotografía de productos."
          ]
        }
      ],
      "faq": [
        {
          "q": "¿Es gratuita la herramienta?",
          "a": "El editor del navegador puede utilizarse sin crear una cuenta."
        },
        {
          "q": "¿Se almacenan permanentemente las imágenes?",
          "a": "No. Los archivos se procesan localmente y no se guardan en el servidor de Overlay Crop."
        },
        {
          "q": "¿Puedo exportar varias versiones alineadas?",
          "a": "Sí. Puedes alinear y exportar hasta cinco capas en una sesión."
        }
      ]
    },
    {
      "slug": "overlay-two-images-online-for-comparison",
      "title": "Cómo superponer dos imágenes online para compararlas",
      "description": "Superpone dos imágenes, ajusta la transparencia, compara diferencias y alinea ambas fotos con precisión en el navegador.",
      "intro": "Colocar dos imágenes una al lado de la otra sirve para presentar el resultado, pero una superposición transparente permite detectar mejor pequeñas diferencias de posición, escala, recorte y edición. Overlay Crop mantiene los archivos como capas independientes.",
      "sections": [
        {
          "heading": "Superposición frente a vista lado a lado",
          "paragraphs": [
            "La vista lado a lado muestra el cambio general. Una superposición semitransparente revela exactamente dónde cambian los bordes, los rasgos, los objetos y las líneas del fondo.",
            "Utiliza la superposición para preparar los archivos y después emplea las exportaciones alineadas en un diseño, deslizador o vídeo."
          ]
        },
        {
          "heading": "Sube la referencia y la comparación",
          "paragraphs": [
            "Añade primero la imagen de referencia y después la comparación. La segunda capa aparece encima y puede moverse, ampliarse, ocultarse o hacerse transparente de forma independiente.",
            "Los archivos originales no tienen que compartir la misma resolución ni proporción."
          ]
        },
        {
          "heading": "Ajusta un nivel de transparencia útil",
          "paragraphs": [
            "Reduce la opacidad de la imagen superior a aproximadamente 50%. Si ambas son muy claras, usa menos; si una es oscura, aumenta el valor hasta ver las dos.",
            "Una transparencia adecuada permite detectar contornos dobles y puntos desalineados."
          ]
        },
        {
          "heading": "Elige puntos de referencia estables",
          "paragraphs": [
            "En retratos usa pupilas, nariz, boca, mandíbula y hombros. En edificios usa esquinas, ventanas, puertas, suelo y tejado. En productos usa bordes, logotipos, botones y esquinas del envase.",
            "Ajusta primero la escala y después la posición para reducir correcciones repetidas."
          ]
        },
        {
          "heading": "Examina diferencias de edición y composición",
          "paragraphs": [
            "Una vez alineadas, la superposición puede mostrar retoque, limpieza de fondo, objetos eliminados, cambios de forma, brillo y diferencias de recorte.",
            "Oculta y muestra la capa superior para comprobar si la diferencia procede de la edición o del movimiento de cámara."
          ]
        },
        {
          "heading": "Recorta los dos archivos de forma uniforme",
          "paragraphs": [
            "Elige la proporción y el tamaño final después de alinear. El mismo marco se aplica a ambas imágenes, pero cada capa conserva su propia posición y zoom.",
            "Es útil para publicaciones 4:5, vídeos 9:16, deslizadores web, GIF y presentaciones."
          ]
        },
        {
          "heading": "Exporta archivos separados de forma privada",
          "paragraphs": [
            "Overlay Crop no aplana permanentemente las capas. Cada imagen se exporta por separado con las mismas dimensiones, lista para un deslizador, carrusel, animación o portafolio.",
            "El navegador procesa las imágenes localmente, algo útil para retratos personales, material de clientes y trabajos no publicados."
          ]
        }
      ],
      "faq": [
        {
          "q": "¿Pueden tener resoluciones diferentes?",
          "a": "Sí. Cada imagen puede colocarse y redimensionarse de forma independiente."
        },
        {
          "q": "¿La herramienta fusiona las imágenes?",
          "a": "No. La superposición sirve para comparar y alinear; los archivos se exportan por separado."
        },
        {
          "q": "¿Puedo comparar más de dos imágenes?",
          "a": "Sí. Se pueden añadir hasta cinco capas en una sesión."
        }
      ]
    },
    {
      "slug": "crop-multiple-images-same-frame",
      "title": "Cómo recortar varias imágenes con el mismo marco",
      "description": "Utiliza un marco de recorte común mientras ajustas de forma independiente la posición y el zoom de cada foto.",
      "intro": "Un marco compartido crea resultados uniformes sin aplicar las mismas coordenadas a todos los originales. La forma y las dimensiones finales permanecen iguales mientras cada imagen puede moverse detrás del marco.",
      "sections": [
        {
          "heading": "Qué significa usar el mismo marco",
          "paragraphs": [
            "Usar el mismo marco significa que todas las imágenes exportadas tienen la misma proporción, forma de lienzo, ancho y alto en píxeles.",
            "El contenido puede moverse de forma independiente. Cinco retratos pueden medir 1000 × 1000 y tener cada rostro ajustado para aparecer en la misma posición."
          ]
        },
        {
          "heading": "Marco compartido frente a coordenadas idénticas",
          "paragraphs": [
            "Las coordenadas idénticas extraen la misma zona de todos los originales. Solo funciona bien cuando las fotos se tomaron desde la misma posición.",
            "Con un marco común, cada imagen se mueve y amplía detrás del marco. Es más útil para orientaciones, resoluciones y posiciones del sujeto diferentes."
          ]
        },
        {
          "heading": "Elige primero el marco de salida",
          "paragraphs": [
            "Decide dónde se utilizarán los archivos y selecciona la proporción y dimensiones adecuadas.",
            "Por ejemplo, 1000 × 1000 para retratos cuadrados, 1080 × 1350 para publicaciones verticales, 1080 × 1920 para vídeo vertical y 1200 × 628 para gráficos web horizontales."
          ]
        },
        {
          "heading": "Crea una composición de referencia",
          "paragraphs": [
            "Coloca la primera imagen hasta que el espacio alrededor del sujeto sea correcto. Bloquea la capa cuando la composición esté terminada.",
            "La primera imagen se convierte en la referencia visual para las demás."
          ]
        },
        {
          "heading": "Iguala las capas restantes",
          "paragraphs": [
            "Selecciona la siguiente imagen y reduce su opacidad. Muévela y amplíala hasta que el sujeto ocupe la misma posición visual que en la referencia bloqueada.",
            "Repite el proceso con el resto. Overlay Crop admite hasta cinco imágenes en un espacio de trabajo."
          ]
        },
        {
          "heading": "Revisa cada capa por separado",
          "paragraphs": [
            "Devuelve la opacidad al 100% y muestra una sola capa. Comprueba que no se corte nada importante, que haya margen suficiente y que la ampliación no reduzca demasiado la calidad.",
            "Una foto puede estar técnicamente alineada y aun así verse extraña por sí sola, por lo que conviene revisar ambas vistas."
          ]
        },
        {
          "heading": "Exporta el conjunto completo",
          "paragraphs": [
            "Descarga cada imagen o exporta todo en ZIP. Todos los archivos usan el mismo marco y dimensiones.",
            "Es útil para directorios de personal, listados de productos, restauración, carruseles, comparaciones inmobiliarias, seguimiento de progreso y fotogramas de transición."
          ]
        }
      ],
      "faq": [
        {
          "q": "¿Deben tener la misma proporción original?",
          "a": "No. Los originales horizontales, verticales y cuadrados pueden usar el mismo marco final."
        },
        {
          "q": "¿Tendrán todos la misma resolución?",
          "a": "Sí. El ancho y alto seleccionados se aplican a todas las capas."
        },
        {
          "q": "¿Puedo fijar una imagen mientras edito las demás?",
          "a": "Sí. Bloquea la capa de referencia después de configurar su posición y escala."
        }
      ]
    }
  ]
};
