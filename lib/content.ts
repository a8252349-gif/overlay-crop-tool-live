import type { Locale } from './i18n';
import { priorityGuidesByLocale } from './priority-guides';

export type GuideSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type Guide = { slug: string; title: string; description: string; intro: string; sections: GuideSection[]; faq: { q: string; a: string }[] };

const en: Guide[] = [
  {
    slug: 'crop-multiple-images-same-size',
    title: 'How to Crop Multiple Images to the Same Size',
    description: 'Align several photos and export every crop with identical dimensions and aspect ratio.',
    intro: 'Cropping several images one by one often creates small framing differences. A shared crop frame solves that problem by letting every image use the same output ratio and pixel size.',
    sections: [
      { heading: 'Why a shared crop frame matters', paragraphs: ['The same dimensions do not guarantee the same composition. A face can appear larger, a horizon can move, or the subject can drift between files. Overlaying the images makes those differences visible before export.', 'This is especially useful for retouching comparisons, product updates, progress photos, and social media carousels.'] },
      { heading: 'Step-by-step method', paragraphs: ['Upload up to five images, choose the target ratio, and set the output width and height. Select each layer, lower the opacity of the top image, then drag and zoom until the important landmarks match.'], bullets: ['Use eyes, corners, horizon lines, or fixed background objects as alignment points.', 'Lock a layer after it is aligned.', 'Export all files only after checking each layer at 100% opacity.'] },
      { heading: 'Avoid these common mistakes', paragraphs: ['Do not align only the outer edges of the files because different cameras may include different amounts of background. Align the subject first. Also avoid excessive enlargement when the original image is small, because the exported dimensions can be identical while visual sharpness is not.'] },
      { heading: 'Choose the right output size', paragraphs: ['For web use, choose the final publishing dimensions instead of exporting an unnecessarily huge file. A 1080 × 1350 pixel output is a practical 4:5 size for many social posts, while 1080 × 1080 works for square layouts.'] }
    ],
    faq: [
      { q: 'Will all exported images have the same resolution?', a: 'Yes. The selected output width and height are applied to every exported crop.' },
      { q: 'Are the original files modified?', a: 'No. New files are generated in your browser and the originals remain unchanged.' }
    ]
  },
  {
    slug: 'align-before-after-photos',
    title: 'How to Align Before and After Photos',
    description: 'Match facial features and fixed landmarks so before-and-after comparisons look stable and credible.',
    intro: 'A strong before-and-after comparison should show the change, not a distracting jump in scale or position. Overlay alignment helps keep the camera framing consistent even when the source files differ.',
    sections: [
      { heading: 'Pick reliable alignment points', paragraphs: ['For portraits, begin with the eyes and nose bridge. For rooms or products, use corners, edges, screws, labels, or other points that did not change. Two or three stable points are more reliable than matching only one feature.'] },
      { heading: 'Use opacity instead of guessing', paragraphs: ['Place the edited image above the original and reduce its opacity to around 40–60 percent. Double edges reveal misalignment immediately. Move and zoom the selected layer until the important outlines overlap.'] },
      { heading: 'Keep the comparison honest', paragraphs: ['Do not use different crop levels to exaggerate a result. Preserve a similar field of view, orientation, and subject size. If the source camera position changed, align the most relevant region and disclose that the photos were taken separately when context matters.'] },
      { heading: 'Export for sliders and videos', paragraphs: ['Export every layer at exactly the same dimensions. Identical files prevent jumps when used in a swipe slider, animated GIF, reel, or crossfade video.'] }
    ],
    faq: [
      { q: 'What opacity is best for alignment?', a: 'Around 50 percent is a useful starting point, but high-contrast photos may be easier at 30–40 percent.' },
      { q: 'Can photos from different cameras be aligned?', a: 'Usually yes, although perspective differences cannot always be removed with simple move and zoom controls.' }
    ]
  },
  {
    slug: 'overlay-two-images-online',
    title: 'How to Overlay Two Images Online for Comparison',
    description: 'Use transparent layers to compare edits, compositions, and repeated photographs directly in your browser.',
    intro: 'An image overlay places one photo above another with adjustable transparency. It is one of the fastest ways to inspect retouching changes and framing differences.',
    sections: [
      { heading: 'What an overlay reveals', paragraphs: ['A transparent overlay exposes movement, resizing, missing objects, retouching changes, and small differences in crop. It is more precise than switching between browser tabs.'] },
      { heading: 'Simple workflow', paragraphs: ['Upload the reference image first and the comparison image second. Reduce the second layer opacity, then move or zoom it while watching for doubled edges. Hide and show the layer to confirm the result.'] },
      { heading: 'When to use more than two images', paragraphs: ['Multiple layers help compare several revisions, color grades, progress dates, or generated variations. Keep only the current reference fully visible and lower the opacity of the layer you are aligning.'] },
      { heading: 'Privacy advantage', paragraphs: ['A browser-based tool can process local image files without sending them to a remote server. This is useful for personal portraits, client previews, and unpublished work.'] }
    ],
    faq: [
      { q: 'Does overlaying merge the images?', a: 'No. The opacity is only for positioning. Each layer is exported as a separate crop.' },
      { q: 'How many images can I overlay?', a: 'This editor supports up to five images at the same time.' }
    ]
  },
  {
    slug: 'best-instagram-image-sizes',
    title: 'Best Image Sizes for Instagram Posts and Carousels',
    description: 'Choose practical square, portrait, and story dimensions before cropping a consistent photo set.',
    intro: 'Choosing the output ratio before alignment prevents later recropping. The right format depends on whether the image will appear in a feed post, carousel, story, or reel cover.',
    sections: [
      { heading: 'Square posts', paragraphs: ['A 1:1 ratio is predictable and works well for grids, product sets, and simple comparisons. A common output is 1080 × 1080 pixels.'] },
      { heading: 'Portrait feed posts', paragraphs: ['A 4:5 ratio uses more vertical screen space while remaining suitable for feed posts. A practical output is 1080 × 1350 pixels. Keep important text and faces away from the extreme edges.'] },
      { heading: 'Stories and reel covers', paragraphs: ['A 9:16 canvas such as 1080 × 1920 pixels fits full-screen vertical content. Remember that interface elements can cover the top and bottom, so keep essential content near the center.'] },
      { heading: 'Carousel consistency', paragraphs: ['Use the same ratio for every image in a carousel. Aligning and exporting the entire set together prevents unexpected zooming or inconsistent subject placement.'] }
    ],
    faq: [
      { q: 'Should every carousel image use the same ratio?', a: 'Yes. A consistent ratio avoids awkward automatic cropping and makes swiping feel smoother.' },
      { q: 'Is a larger file always better?', a: 'No. Extremely large files may be recompressed. Start with a clean source and export near the intended publishing size.' }
    ]
  },
  {
    slug: 'aspect-ratio-vs-resolution',
    title: 'Aspect Ratio vs Resolution: What Is the Difference?',
    description: 'Understand why two images can share the same shape but still have very different pixel dimensions and quality.',
    intro: 'Aspect ratio describes shape. Resolution describes pixel dimensions. Knowing the difference is essential when cropping several files for the same layout.',
    sections: [
      { heading: 'Aspect ratio describes proportions', paragraphs: ['A 4:5 image could be 800 × 1000, 1080 × 1350, or 2400 × 3000 pixels. All have the same shape because width and height keep the same relationship.'] },
      { heading: 'Resolution describes pixel count', paragraphs: ['Resolution affects how much detail is available. Enlarging a small source to a large output does not create real detail; it only interpolates additional pixels.'] },
      { heading: 'Why matching both matters', paragraphs: ['For before-and-after sliders or carousels, matching only the ratio prevents shape differences, while matching both ratio and dimensions prevents layout shifts and inconsistent file handling.'] },
      { heading: 'A practical decision rule', paragraphs: ['Choose the ratio for the destination first, then choose an output size appropriate for that destination. Avoid enlarging far beyond the smallest original unless you accept softer detail.'] }
    ],
    faq: [
      { q: 'Can two 4:5 images have different quality?', a: 'Yes. They can share the same proportions while containing very different numbers of pixels.' },
      { q: 'Does changing resolution change the crop?', a: 'Not necessarily. The crop composition can remain the same while the exported pixel dimensions change.' }
    ]
  },
  {
    slug: 'match-face-position-across-photos',
    title: 'How to Match Face Position Across Multiple Photos',
    description: 'Align eyes, nose, and face scale for portraits, progress photos, memorial images, and retouching comparisons.',
    intro: 'When faces shift between photos, a comparison can feel unstable even if each portrait looks good by itself. Matching a few facial landmarks creates a much cleaner sequence.',
    sections: [
      { heading: 'Start with the eyes', paragraphs: ['The eye line is usually the most reliable horizontal reference. Lower the top layer opacity and match the inner or outer eye corners before adjusting the rest of the face.'] },
      { heading: 'Match scale with the nose and chin', paragraphs: ['After aligning the eyes, check the nose tip, mouth, and chin. If these points are consistently too far apart, adjust the scale rather than continuing to move the image.'] },
      { heading: 'Allow for natural expression changes', paragraphs: ['Smiles and head angles change facial outlines. Prioritize stable bone landmarks and the center of the face instead of trying to force every edge to overlap.'] },
      { heading: 'Leave comfortable margins', paragraphs: ['Avoid cropping too close to hair or chin. Similar breathing room around each face makes the final set look intentional and prevents small differences from becoming obvious.'] }
    ],
    faq: [
      { q: 'Should both eyes always line up perfectly?', a: 'Not when the head angle changed. Align the eye line and central facial landmarks as closely as the perspective allows.' },
      { q: 'Can this fix perspective distortion?', a: 'No. Move and zoom alignment cannot fully correct photos taken from very different angles or distances.' }
    ]
  },
  {
    slug: 'crop-photos-without-uploading',
    title: 'How to Crop Photos Without Uploading Them to a Server',
    description: 'Learn how browser-side image processing keeps selected files on your device while creating downloadable crops.',
    intro: 'Many online image tools send files to a server for processing. A local browser workflow can instead decode, draw, and export the image on the user’s own device.',
    sections: [
      { heading: 'How local processing works', paragraphs: ['The browser reads the file you select and displays it in memory. Canvas technology can then draw the selected crop and create a new downloadable file without a remote upload.'] },
      { heading: 'What the website can still receive', paragraphs: ['Even when images remain local, a website may still receive standard web request information such as IP address, browser type, cookie choices, or analytics events. The privacy policy should clearly separate image processing from website analytics and advertising.'] },
      { heading: 'Benefits for sensitive images', paragraphs: ['Local processing reduces unnecessary transfer of portraits, client previews, family photos, and unpublished designs. Users should still avoid editing sensitive files on shared or untrusted devices.'] },
      { heading: 'How to verify the workflow', paragraphs: ['Look for a clear privacy statement and test whether the editor continues working after the page has loaded and the network is disconnected. Developer tools can also show whether an image upload request occurs.'] }
    ],
    faq: [
      { q: 'Are my photos stored by this editor?', a: 'No. The editor is designed to process selected images locally in the browser.' },
      { q: 'Do cookies contain my image?', a: 'No. Cookie preferences and analytics identifiers are separate from the image files selected in the editor.' }
    ]
  },
  {
    slug: 'prepare-before-after-video',
    title: 'How to Prepare Photos for a Before-and-After Video',
    description: 'Create stable, identically sized frames for crossfades, sliders, reels, and comparison videos.',
    intro: 'A before-and-after video looks professional when the subject stays still and only the intended change appears to move. Matching crops before editing the video is the simplest way to prevent jumps.',
    sections: [
      { heading: 'Decide the video canvas first', paragraphs: ['Choose 9:16 for vertical reels and stories, 16:9 for landscape video, or 1:1 for square posts. Exporting photos in the final video ratio avoids additional cropping in the editor.'] },
      { heading: 'Align the subject before export', paragraphs: ['Overlay the first and last frame, reduce opacity, and match fixed landmarks. Add intermediate versions one at a time while using the same reference image.'] },
      { heading: 'Use identical pixel dimensions', paragraphs: ['Video software can scale mismatched images automatically, but this may shift framing or soften one image. Export every frame at the exact same width and height.'] },
      { heading: 'Check transitions', paragraphs: ['Test a short crossfade. If the subject appears to pulse, recheck scale. If it slides, recheck position. If only the intended edit changes, the alignment is ready.'] }
    ],
    faq: [
      { q: 'Which format should I export?', a: 'JPEG is suitable for most photos. PNG is useful when transparency or lossless graphics are important.' },
      { q: 'Why does the face appear to pulse during a crossfade?', a: 'The two images probably use slightly different face scale or camera perspective.' }
    ]
  }
];

const localizedMeta: Record<'ko'|'ja'|'es', Array<[string,string,string]>> = {
  ko: [
    ['여러 사진을 같은 크기로 자르는 방법','여러 사진의 구도를 맞추고 같은 비율과 픽셀 크기로 한 번에 저장하는 방법입니다.','사진을 한 장씩 따로 자르면 얼굴 크기나 여백이 조금씩 달라지기 쉽습니다. 공통 크롭 프레임을 사용하면 모든 사진을 동일한 기준으로 확인하고 저장할 수 있습니다.'],
    ['보정 전후 사진의 위치를 정확히 맞추는 방법','얼굴과 배경의 고정 지점을 기준으로 보정 전후 사진을 자연스럽게 정렬합니다.','좋은 보정 전후 비교는 사진이 흔들리지 않고 바뀐 부분만 자연스럽게 보여야 합니다. 투명도 중첩을 사용하면 원본 해상도와 구도가 달라도 중요한 지점을 기준으로 맞출 수 있습니다.'],
    ['온라인에서 두 이미지를 겹쳐 비교하는 방법','투명 레이어로 보정 차이와 구도 차이를 브라우저에서 바로 확인합니다.','이미지 중첩은 한 사진을 다른 사진 위에 반투명하게 표시하는 방식입니다. 탭을 번갈아 보는 것보다 위치, 크기, 삭제된 요소와 보정 차이를 더 정확하게 확인할 수 있습니다.'],
    ['인스타그램 게시물과 캐러셀에 적합한 이미지 크기','정사각형, 세로형, 스토리용 비율을 선택하고 일관된 사진 세트를 만드세요.','사진을 정렬하기 전에 최종 게시 비율을 정하면 다시 자르는 일을 줄일 수 있습니다. 피드, 캐러셀, 스토리와 릴스 커버에 따라 적합한 비율이 달라집니다.'],
    ['이미지 비율과 해상도의 차이','같은 모양의 사진도 픽셀 크기와 화질은 다를 수 있는 이유를 설명합니다.','가로세로 비율은 사진의 모양을 뜻하고 해상도는 실제 픽셀 수를 뜻합니다. 여러 사진을 같은 레이아웃으로 만들 때 두 개념을 구분해야 합니다.'],
    ['여러 사진에서 얼굴 위치를 동일하게 맞추는 방법','눈, 코, 얼굴 크기를 기준으로 인물사진과 보정 전후 사진을 정렬합니다.','각각의 인물사진은 자연스러워 보여도 얼굴 위치가 달라지면 연속 비교에서는 화면이 흔들려 보입니다. 몇 개의 얼굴 기준점을 맞추면 훨씬 안정적인 결과를 만들 수 있습니다.'],
    ['사진을 서버에 업로드하지 않고 자르는 방법','브라우저 내부 이미지 처리가 사진을 기기 안에 유지하는 원리를 알아봅니다.','일부 온라인 편집기는 파일을 서버로 전송하지만 브라우저 내부 처리 방식은 사용자의 기기에서 이미지를 읽고 잘라 새 파일을 생성할 수 있습니다.'],
    ['보정 전후 비교 영상용 사진 준비 방법','슬라이더, 릴스, 크로스페이드 영상에 사용할 동일 크기 프레임을 만듭니다.','보정 전후 영상은 피사체가 고정되고 변화된 부분만 움직여야 자연스럽습니다. 영상 편집 전에 사진 크롭을 맞추면 화면이 튀는 문제를 크게 줄일 수 있습니다.']
  ],
  ja: [
    ['複数の画像を同じサイズで切り抜く方法','複数の写真を揃え、同じ比率とピクセルサイズで一括保存します。','画像を1枚ずつ切り抜くと、顔の大きさや余白が少しずつ変わりがちです。共通の切り抜き枠を使うと、すべてを同じ基準で確認できます。'],
    ['ビフォー・アフター写真を正確に揃える方法','顔や背景の固定点を基準に比較画像を自然に整列します。','良い比較画像は位置や大きさが安定し、変化した部分だけが自然に見えます。透明度を使うと異なる元画像でも重要な点を揃えられます。'],
    ['オンラインで2枚の画像を重ねて比較する方法','透明レイヤーで編集差と構図差をブラウザ上で確認します。','画像オーバーレイは一方を半透明で重ねる方法です。タブを切り替えるより、位置や大きさ、編集差を正確に確認できます。'],
    ['Instagram投稿とカルーセルに適した画像サイズ','正方形、縦長、ストーリー向けの実用的なサイズを選びます。','整列する前に公開先の比率を決めると、後で切り直す手間を減らせます。フィード、カルーセル、ストーリーで適切な比率は異なります。'],
    ['アスペクト比と解像度の違い','同じ形でもピクセル数と画質が異なる理由を説明します。','アスペクト比は画像の形、解像度は実際のピクセル数を示します。複数の画像を同じレイアウトにする際は両方を区別する必要があります。'],
    ['複数の写真で顔の位置を揃える方法','目・鼻・顔の大きさを基準にポートレートを整列します。','単体では自然でも顔の位置が違うと連続表示で揺れて見えます。いくつかの顔の基準点を合わせると安定します。'],
    ['画像をサーバーにアップロードせずに切り抜く方法','ブラウザ内処理で画像を端末に保持する仕組みを説明します。','オンライン編集にはサーバー送信型と端末内で処理するブラウザ型があります。後者は画像を外部へ送らずに新しいファイルを作れます。'],
    ['ビフォー・アフター動画用の写真を準備する方法','スライダーやリール向けに同一サイズのフレームを作ります。','比較動画では被写体が止まり、意図した変化だけが見えることが重要です。動画編集前に切り抜きを揃えると画面のジャンプを防げます。']
  ],
  es: [
    ['Cómo recortar varias imágenes al mismo tamaño','Alinea varias fotos y expórtalas con dimensiones y proporciones idénticas.','Recortar cada imagen por separado suele producir pequeñas diferencias de encuadre. Un marco compartido permite revisar y exportar todas con el mismo criterio.'],
    ['Cómo alinear fotos de antes y después','Ajusta rasgos faciales y puntos fijos para comparaciones estables.','Una buena comparación debe mostrar el cambio y no un salto de escala o posición. La superposición ayuda a mantener un encuadre coherente.'],
    ['Cómo superponer dos imágenes en línea','Usa capas transparentes para comparar ediciones y encuadres en el navegador.','Superponer una imagen semitransparente sobre otra permite detectar diferencias de posición, tamaño y edición con más precisión que alternar pestañas.'],
    ['Mejores tamaños de imagen para Instagram','Elige tamaños prácticos para publicaciones, carruseles, historias y reels.','Elegir la proporción antes de alinear evita tener que recortar de nuevo. El formato ideal depende del destino de la imagen.'],
    ['Diferencia entre relación de aspecto y resolución','Comprende por qué dos imágenes con la misma forma pueden tener distinta calidad.','La relación de aspecto describe la forma; la resolución describe las dimensiones en píxeles. Ambas son importantes al preparar varias imágenes.'],
    ['Cómo igualar la posición del rostro en varias fotos','Alinea ojos, nariz y escala facial en retratos y comparaciones.','Cuando el rostro cambia de posición entre fotos, la secuencia parece inestable. Alinear unos pocos puntos faciales produce un resultado más limpio.'],
    ['Cómo recortar fotos sin subirlas a un servidor','Conoce cómo el procesamiento local mantiene las imágenes en tu dispositivo.','Algunas herramientas envían los archivos a un servidor. El procesamiento local permite leer, recortar y exportar la imagen directamente en el dispositivo.'],
    ['Cómo preparar fotos para un video de antes y después','Crea fotogramas estables y del mismo tamaño para transiciones y reels.','Un video comparativo se ve profesional cuando el sujeto permanece estable y solo cambia la edición. Igualar los recortes antes de editar evita saltos.']
  ]
};

const localizedSections: Record<'ko'|'ja'|'es', Array<Array<[string,string]>>> = {
  ko: [
    [['공통 프레임이 필요한 이유','같은 픽셀 크기만으로는 같은 구도가 되지 않습니다. 얼굴 크기와 피사체 위치까지 겹쳐 확인해야 연속 화면이 안정적입니다.'],['작업 순서','사진을 올리고 비율과 출력 크기를 정한 뒤, 투명도를 낮춰 기준점을 맞춥니다. 정렬이 끝난 사진은 잠그고 전체를 다시 확인하세요.'],['피해야 할 실수','파일 외곽만 맞추지 말고 피사체를 먼저 맞추세요. 작은 원본을 지나치게 확대하면 결과가 흐려질 수 있습니다.'],['출력 크기 선택','사용할 플랫폼의 최종 크기에 맞추세요. 4:5는 1080×1350, 정사각형은 1080×1080이 실용적입니다.']],
    [['기준점 선택','인물은 눈과 콧등, 공간이나 제품은 모서리와 수평선처럼 변하지 않은 점을 두세 개 선택하세요.'],['투명도 활용','위 사진을 약 40~60%로 낮추면 겹친 윤곽이 두 줄로 보여 어긋난 방향을 바로 알 수 있습니다.'],['정직한 비교','결과를 과장하기 위해 전후 사진의 확대 정도를 다르게 하지 말고 비슷한 시야와 피사체 크기를 유지하세요.'],['영상과 슬라이더','모든 사진을 같은 픽셀 크기로 저장하면 크로스페이드나 전후 슬라이더에서 화면이 튀지 않습니다.']],
    [['중첩으로 확인할 수 있는 것','투명 중첩은 위치 이동, 크기 변화, 삭제된 물체와 보정 차이를 빠르게 드러냅니다.'],['기본 작업법','기준 사진을 먼저 올리고 비교 사진의 투명도를 낮춘 뒤 겹친 외곽선이 하나가 되도록 이동하고 확대합니다.'],['여러 버전 비교','수정본이 여러 개라면 기준 사진 하나를 고정하고 현재 맞추는 사진만 반투명하게 표시하세요.'],['개인정보 장점','브라우저 내부 처리는 가족사진이나 고객 시안처럼 외부 전송이 부담스러운 파일에 특히 유용합니다.']],
    [['정사각형','1:1은 그리드와 제품 사진에 안정적이며 1080×1080 크기를 많이 사용합니다.'],['세로형 피드','4:5는 화면을 더 크게 차지하며 1080×1350이 실용적입니다. 중요한 얼굴과 글자는 가장자리에서 떨어뜨리세요.'],['스토리와 릴스','9:16은 1080×1920과 잘 맞습니다. 상단과 하단 인터페이스에 가려질 수 있으므로 핵심 요소는 중앙에 둡니다.'],['캐러셀','캐러셀의 모든 이미지를 같은 비율로 저장해야 자동 크롭과 피사체 위치 변화가 줄어듭니다.']],
    [['비율은 모양','4:5 이미지는 800×1000일 수도 있고 2400×3000일 수도 있습니다. 픽셀 수가 달라도 모양은 같습니다.'],['해상도는 픽셀 수','해상도가 높을수록 사용할 수 있는 세부 정보가 많습니다. 작은 사진을 크게 저장해도 실제 디테일이 새로 생기지는 않습니다.'],['둘 다 맞추는 이유','비율은 레이아웃 모양을 맞추고, 동일한 픽셀 크기는 슬라이더나 캐러셀에서 화면 변화를 방지합니다.'],['선택 기준','게시 위치에 맞는 비율을 먼저 정하고 가장 작은 원본을 지나치게 키우지 않는 범위에서 출력 크기를 선택하세요.']],
    [['눈부터 맞추기','눈높이는 가장 안정적인 가로 기준입니다. 눈 안쪽이나 바깥쪽 모서리를 기준으로 먼저 정렬하세요.'],['크기 조절','눈을 맞춘 뒤 코끝과 턱이 계속 어긋난다면 이동보다 확대·축소를 조절해야 합니다.'],['표정과 각도','웃음과 고개 각도는 얼굴 윤곽을 바꿉니다. 모든 외곽선보다 얼굴 중심과 뼈대 기준점을 우선하세요.'],['여백 유지','머리와 턱을 너무 가깝게 자르지 말고 사진마다 비슷한 여백을 남기면 작은 차이가 덜 보입니다.']],
    [['로컬 처리 원리','브라우저는 선택한 파일을 메모리에서 읽고 Canvas로 새 결과를 만들어 사용자의 기기에 다운로드합니다.'],['별도 웹 정보','사진이 전송되지 않아도 IP, 브라우저, 쿠키 선택과 같은 일반적인 접속 정보는 호스팅이나 분석 서비스에서 처리될 수 있습니다.'],['민감한 사진','가족사진과 고객 시안을 불필요하게 외부로 보내지 않는다는 장점이 있습니다. 공용 기기에서는 민감한 파일을 피하세요.'],['확인 방법','개인정보 안내를 확인하고 네트워크 연결을 끊은 뒤에도 로드된 편집기가 작동하는지 테스트할 수 있습니다.']],
    [['영상 비율 결정','릴스와 스토리는 9:16, 가로 영상은 16:9, 정사각형 콘텐츠는 1:1을 먼저 선택하세요.'],['피사체 정렬','첫 장과 마지막 장을 겹쳐 기준점을 맞추고 중간 버전도 같은 기준 사진에 하나씩 정렬합니다.'],['픽셀 크기 통일','영상 프로그램의 자동 확대에 맡기지 말고 모든 프레임을 동일한 가로와 세로 크기로 저장하세요.'],['전환 확인','짧은 크로스페이드에서 피사체가 커졌다 작아지면 배율을, 옆으로 움직이면 위치를 다시 확인하세요.']]
  ],
  ja: [], es: []
};

localizedSections.ja = localizedSections.ko.map((guide, gi) => guide.map((_, si) => {
  const headings = [['共通フレームが必要な理由','手順','よくあるミス','出力サイズ'],['基準点を選ぶ','透明度を使う','誠実な比較','動画とスライダー'],['重ねて分かること','基本手順','複数版の比較','プライバシー'],['正方形','縦長フィード','ストーリーとリール','カルーセル'],['比率は形','解像度はピクセル数','両方を揃える理由','選び方'],['目を先に合わせる','大きさを調整','表情と角度','余白'],['ローカル処理','その他の通信情報','敏感な画像','確認方法'],['動画比率','被写体の整列','ピクセル統一','トランジション確認']][gi][si];
  const paras = [
    ['同じピクセルサイズでも構図は同じとは限りません。被写体の位置と大きさを重ねて確認します。','画像を追加し、比率と出力サイズを決め、透明度を下げて基準点を合わせます。','ファイルの外枠ではなく被写体を優先し、小さい元画像の過度な拡大を避けます。','公開先に合わせ、4:5なら1080×1350、正方形なら1080×1080が実用的です。'],
    ['人物は目と鼻、物や空間は角や水平線など変わらない点を選びます。','上の画像を40〜60%にすると二重の輪郭でずれが分かります。','結果を誇張するために前後で拡大率を変えず、似た視野を保ちます。','同じピクセル寸法ならクロスフェードやスライダーで画面が跳ねません。'],
    ['透明レイヤーは位置、拡大、削除物、編集差を素早く示します。','基準画像の上に比較画像を置き、輪郭が重なるまで移動・拡大します。','複数版では基準を固定し、整列中の画像だけ半透明にします。','端末内処理は家族写真や未公開の顧客画像に適しています。'],
    ['1:1はグリッドに安定し、1080×1080が一般的です。','4:5は画面を広く使え、1080×1350が実用的です。','9:16は1080×1920に適し、重要要素は中央に置きます。','すべて同じ比率にすると自動切り抜きと位置ずれを防げます。'],
    ['4:5は800×1000でも2400×3000でも同じ形です。','解像度は細部の量です。小さい画像を大きくしても本物の細部は増えません。','比率は形を、同じ寸法は表示時のレイアウト変化を防ぎます。','用途の比率を先に決め、最小元画像を過度に拡大しないサイズを選びます。'],
    ['目のラインを最初の横基準にします。','目を合わせても鼻や顎がずれる場合は移動より拡大率を調整します。','表情や角度が違う場合は輪郭より顔の中心を優先します。','髪や顎の周囲に似た余白を残します。'],
    ['ブラウザが画像をメモリで読み、Canvasで結果を作り端末へ保存します。','画像以外にIPやブラウザ、Cookie選択など通常の通信情報は処理される場合があります。','不要な外部送信を減らせますが、共有端末での敏感な作業は避けます。','プライバシー説明とネットワーク要求を確認できます。'],
    ['リールは9:16、横動画は16:9、正方形は1:1を先に決めます。','最初と最後を基準にし、中間画像も同じ基準で合わせます。','全フレームを同じ幅と高さで保存します。','クロスフェードで脈打つなら倍率、滑るなら位置を再確認します。']
  ][gi][si]; return [headings, paras];
}));
localizedSections.es = localizedSections.ko.map((guide, gi) => guide.map((_, si) => {
  const headings = [['Por qué usar un marco común','Pasos','Errores frecuentes','Tamaño de salida'],['Puntos de referencia','Usar opacidad','Comparación honesta','Video y deslizador'],['Qué revela la superposición','Flujo básico','Varias versiones','Privacidad'],['Cuadrado','Vertical','Historias y reels','Carrusel'],['La proporción es forma','La resolución son píxeles','Por qué igualar ambas','Regla práctica'],['Empieza por los ojos','Ajusta la escala','Expresión y ángulo','Márgenes'],['Procesamiento local','Otros datos web','Imágenes sensibles','Cómo comprobarlo'],['Elige la proporción','Alinea el sujeto','Iguala píxeles','Comprueba la transición']][gi][si];
  const paras = [
    ['El mismo tamaño en píxeles no garantiza el mismo encuadre. Compara posición y escala del sujeto.','Sube las fotos, elige proporción y tamaño, baja la opacidad y alinea puntos estables.','No alinees solo los bordes del archivo y evita ampliar demasiado una fuente pequeña.','Usa el tamaño final: 1080×1350 para 4:5 o 1080×1080 para cuadrado.'],
    ['En retratos usa ojos y nariz; en objetos usa esquinas, bordes o líneas que no cambian.','Con 40–60% de opacidad, los contornos dobles muestran el desplazamiento.','No cambies la escala entre el antes y el después para exagerar el resultado.','Dimensiones idénticas evitan saltos en fundidos y deslizadores.'],
    ['La superposición muestra movimiento, escala, objetos eliminados y diferencias de edición.','Coloca la comparación sobre la referencia y ajusta hasta unir los contornos.','Mantén fija una referencia y vuelve semitransparente solo la versión actual.','El procesamiento local es útil para retratos y trabajos no publicados.'],
    ['1:1 es estable para cuadrículas; 1080×1080 es práctico.','4:5 ocupa más pantalla; 1080×1350 es una opción común.','9:16 encaja con 1080×1920; deja lo importante cerca del centro.','Usa la misma proporción en todo el carrusel para evitar recortes inesperados.'],
    ['Una imagen 4:5 puede medir 800×1000 o 2400×3000 y conservar la misma forma.','La resolución determina el detalle disponible; ampliar no crea detalle real.','La proporción iguala la forma y las dimensiones evitan cambios de diseño.','Elige primero el destino y no amplíes demasiado el original más pequeño.'],
    ['La línea de los ojos suele ser la referencia horizontal más estable.','Si nariz y barbilla siguen separadas, ajusta la escala en vez de mover.','Con expresiones distintas, prioriza el centro facial sobre todo el contorno.','Deja un margen similar alrededor del cabello y la barbilla.'],
    ['El navegador lee la imagen en memoria y crea un archivo nuevo con Canvas.','Aunque la foto no se envíe, pueden procesarse IP, navegador y preferencias de cookies.','Reduce transferencias innecesarias de fotos familiares o de clientes.','Revisa la política y las solicitudes de red para verificar el proceso.'],
    ['Usa 9:16 para reels, 16:9 para video horizontal y 1:1 para formato cuadrado.','Alinea primero el primer y último fotograma y usa la misma referencia para los intermedios.','Exporta todos con exactamente el mismo ancho y alto.','Si el sujeto late, revisa escala; si se desliza, revisa posición.']
  ][gi][si]; return [headings, paras];
}));

function makeLocalized(locale:'ko'|'ja'|'es'): Guide[]{ return en.map((g,i)=>({ ...g, title:localizedMeta[locale][i][0], description:localizedMeta[locale][i][1], intro:localizedMeta[locale][i][2], sections: localizedSections[locale][i].map(([heading,paragraph])=>({heading,paragraphs:[paragraph]})), faq: g.faq.map((f,j)=> locale==='ko'?({q:j===0?'원본 해상도가 달라도 사용할 수 있나요?':'원본 파일이 변경되나요?',a:j===0?'네. 사진별로 독립 조절한 뒤 동일한 출력 크기로 저장할 수 있습니다.':'아닙니다. 새로운 결과 파일만 생성됩니다.'}):locale==='ja'?({q:j===0?'元画像の解像度が違っても使えますか？':'元ファイルは変更されますか？',a:j===0?'はい。個別に調整し、同じ出力サイズで保存できます。':'いいえ。新しい結果ファイルが作成されます。'}):({q:j===0?'¿Pueden tener resoluciones distintas?':'¿Se modifica el original?',a:j===0?'Sí. Cada capa se ajusta por separado y se exporta con el mismo tamaño.':'No. Se crea un archivo nuevo.'})) })); }
const ko = makeLocalized('ko'); const ja = makeLocalized('ja'); const es = makeLocalized('es');

const replacedLegacySlugs = new Set([
  'crop-multiple-images-same-size',
  'align-before-after-photos',
  'overlay-two-images-online',
]);

const baseGuidesByLocale: Record<Locale, Guide[]> = { en, ko, ja, es };

export const guidesByLocale: Record<Locale, Guide[]> = {
  en: [...priorityGuidesByLocale.en, ...baseGuidesByLocale.en.filter((guide) => !replacedLegacySlugs.has(guide.slug))],
  ko: [...priorityGuidesByLocale.ko, ...baseGuidesByLocale.ko.filter((guide) => !replacedLegacySlugs.has(guide.slug))],
  ja: [...priorityGuidesByLocale.ja, ...baseGuidesByLocale.ja.filter((guide) => !replacedLegacySlugs.has(guide.slug))],
  es: [...priorityGuidesByLocale.es, ...baseGuidesByLocale.es.filter((guide) => !replacedLegacySlugs.has(guide.slug))],
};

export function getGuide(locale: Locale, slug: string) {
  return guidesByLocale[locale].find((guide) => guide.slug === slug);
}
