import type { Metadata } from "next";
import {notFound} from "next/navigation";
import {Breadcrumbs} from "@/components/Breadcrumbs";
import {ContentPage} from "@/components/ContentPage";
import {JsonLd} from "@/components/JsonLd";
import {isLocale,locales,type Locale} from "@/lib/i18n";
import {buildPageMetadata} from "@/lib/seo";
const data:Record<Locale,{title:string;intro:string;items:[string,string][]}>={
 en:{title:"Frequently Asked Questions",intro:"Detailed answers about image privacy, supported workflows, output quality, mobile use, and the limits of browser-based cropping.",items:[
  ["Are selected images uploaded to Overlay Crop?","No. The selected image files are decoded and edited locally in the browser. They are not sent to the Overlay Crop editing server."],
  ["Does the website make any network requests?","Yes. The page code, hosting, security, consent, and—when enabled—analytics or advertising can use normal network requests. This is separate from uploading the selected image file."],
  ["How many images can I use at once?","Up to five layers. On phones with limited memory, fewer high-resolution images may work more reliably."],
  ["Can the sources have different dimensions?","Yes. Every layer has independent position, zoom, rotation, and opacity, while the exports use one shared output size."],
  ["Why does my export look blurry?","A tight crop may contain too few source pixels for the chosen output. Reduce zoom or output size, or use a higher-resolution source."],
  ["Does a larger output number improve quality?","No. Enlarging can create more output pixels, but it cannot recreate genuine detail that is missing from the source."],
  ["Can I use the editor on a phone?","Yes. One finger moves an image and a two-finger pinch changes zoom. Large camera files may exceed mobile browser memory."],
  ["Why does the canvas stop the page from scrolling?","When the pointer is over the editing canvas, wheel and touch gestures are reserved for moving and zooming the image. Move outside the canvas to scroll the page."],
  ["Why do the layers not align perfectly?","Camera position, lens perspective, pose, flexible objects, and lighting can differ. Align the area that matters most instead of forcing every edge to match."],
  ["Does opacity merge the images?","No. Opacity is an alignment aid. Each layer is exported as a separate image."],
  ["Can I keep a transparent background?","PNG and WebP can preserve transparency when the source and export support it. Test the result on the intended background."],
  ["What ratio should I choose?","Use the specification of the destination. The editor includes common ratios, but platform requirements can change, so verify them before publishing."],
  ["Can I recover a session after closing the tab?","No. Keep source files and export completed work before closing or refreshing the page."],
  ["Can Overlay Crop replace Photoshop or professional software?","It is designed for alignment and consistent cropping. It does not replace advanced retouching, color management, perspective correction, print preparation, or regulated workflows."],
  ["How are guides reviewed?","Guide content is checked against the current editor behavior and consolidated when topics overlap. The displayed update date reflects a content review."],
  ["How can I report a problem?","Use the contact page and include your browser, device, file format, approximate image dimensions, and the step where the issue occurred. Do not email confidential source images unless you are comfortable doing so."]
 ]},
 ko:{title:"자주 묻는 질문",intro:"사진 개인정보, 지원 작업, 출력 화질, 모바일 사용과 브라우저 기반 크롭의 한계를 자세히 안내합니다.",items:[
  ["선택한 사진이 서버로 업로드되나요?","아닙니다. 사진 파일은 브라우저에서 해석하고 편집하며 Overlay Crop 편집 서버로 전송하지 않습니다."],
  ["사이트의 네트워크 통신도 전혀 없나요?","아닙니다. 페이지 코드, 호스팅, 보안, 동의 기능과 활성화된 분석·광고는 일반적인 통신을 사용할 수 있습니다. 사진 업로드와는 별개입니다."],
  ["사진은 몇 장까지 가능한가요?","최대 5개 레이어입니다. 모바일 메모리가 부족하면 고해상도 사진 수를 줄이는 것이 좋습니다."],
  ["원본 크기가 서로 달라도 되나요?","네. 사진마다 위치, 확대, 회전과 투명도를 따로 조절하고 결과는 같은 크기로 저장합니다."],
  ["결과가 흐린 이유는 무엇인가요?","아주 좁게 자른 원본 영역을 큰 크기로 출력했을 가능성이 큽니다. 확대나 출력 크기를 줄이거나 더 큰 원본을 사용하세요."],
  ["출력 숫자를 크게 하면 화질이 좋아지나요?","아닙니다. 파일의 픽셀 수는 늘릴 수 있지만 원본에 없던 실제 디테일은 복원되지 않습니다."],
  ["휴대폰에서도 사용할 수 있나요?","네. 한 손가락으로 이동하고 두 손가락으로 확대합니다. 초고해상도 사진 여러 장은 모바일 메모리를 초과할 수 있습니다."],
  ["캔버스 위에서 페이지 스크롤이 멈추는 이유는?","캔버스 위의 휠과 터치 제스처는 사진 이동과 확대에 사용됩니다. 페이지를 내리려면 캔버스 바깥에서 스크롤하세요."],
  ["왜 모든 외곽선이 완전히 맞지 않나요?","카메라 위치, 렌즈 원근, 자세와 물체 형태가 달라졌을 수 있습니다. 실제 비교할 핵심 영역을 우선하세요."],
  ["투명도를 낮추면 사진이 합쳐지나요?","아닙니다. 투명도는 정렬 확인용이며 각 사진은 별도 파일로 저장됩니다."],
  ["투명 배경을 유지할 수 있나요?","원본과 형식이 지원하면 PNG·WebP의 투명도를 유지할 수 있습니다. 실제 배경 위에서 확인하세요."],
  ["어떤 비율을 선택해야 하나요?","게시할 곳의 요구 규격을 우선하세요. 플랫폼 규격은 바뀔 수 있으므로 게시 전에 최신 기준을 확인하세요."],
  ["탭을 닫은 뒤 작업을 복구할 수 있나요?","현재는 불가능합니다. 원본을 보관하고 페이지를 닫기 전에 결과를 다운로드하세요."],
  ["포토샵을 대신할 수 있나요?","정렬과 동일 크기 크롭에 특화된 도구입니다. 고급 보정, 색상 관리, 원근 교정, 인쇄와 규정 업무를 대신하지 않습니다."],
  ["가이드 내용은 어떻게 관리하나요?","실제 편집기 동작과 비교해 검토하고 주제가 겹치는 글은 얇게 늘리지 않고 하나의 심층 가이드로 통합합니다."],
  ["오류는 어떻게 제보하나요?","문의 페이지에서 브라우저, 기기, 파일 형식, 대략적인 크기와 문제가 발생한 단계를 알려주세요. 민감한 원본은 본인이 원하지 않으면 보내지 마세요."]
 ]},
 ja:{title:"よくある質問",intro:"画像のプライバシー、出力品質、モバイル操作、ブラウザ処理の限界について説明します。",items:[
  ["画像はサーバーへ送信されますか？","いいえ。選択画像はブラウザ内で処理され、編集サーバーへ送信されません。"],
  ["通信は一切ありませんか？","ページ、ホスティング、セキュリティ、同意、任意の解析・広告には通常の通信があります。画像アップロードとは別です。"],
  ["最大枚数は？","5レイヤーです。スマホでは高解像度の枚数を減らすと安定します。"],
  ["元画像の寸法が違っても使えますか？","はい。位置、拡大、回転、透明度を個別に調整し、同じ出力寸法で保存します。"],
  ["なぜぼやけますか？","小さい切り抜き範囲を大きく書き出した可能性があります。倍率や出力を下げてください。"],
  ["大きな出力値で品質は上がりますか？","いいえ。元画像にない本物の細部は増えません。"],
  ["スマホで使えますか？","はい。1本指で移動、2本指で拡大します。大きな画像はメモリ上限に達する場合があります。"],
  ["キャンバス上でスクロールしないのはなぜ？","ホイールとタッチを画像操作に使うためです。ページスクロールはキャンバス外で行います。"],
  ["完全に重ならない理由は？","遠近、レンズ、姿勢、柔らかい物体の形が違う可能性があります。重要部分を優先します。"],
  ["透明度で画像は結合されますか？","いいえ。整列用で、各レイヤーは別々に保存されます。"],
  ["透明背景は保てますか？","対応するPNG・WebPでは可能です。最終背景で確認してください。"],
  ["どの比率を選びますか？","掲載先の要件を優先し、公開前に最新仕様を確認してください。"],
  ["タブを閉じた後に復元できますか？","いいえ。終了前に書き出してください。"],
  ["専門ソフトの代わりですか？","整列と切り抜きに特化しており、高度なレタッチや印刷管理は代替しません。"],
  ["ガイドはどう管理されますか？","実際の動作と照合し、重複テーマは薄い別ページにせず統合します。"],
  ["不具合の報告方法は？","ブラウザ、端末、形式、寸法、発生手順を連絡してください。機密画像は不要です。"]
 ]},
 es:{title:"Preguntas frecuentes",intro:"Respuestas detalladas sobre privacidad, calidad, móvil y límites del recorte en el navegador.",items:[
  ["¿Se suben las imágenes?","No. Los archivos seleccionados se procesan localmente y no se envían al servidor de edición."],
  ["¿No existe ninguna comunicación de red?","La página, el alojamiento, la seguridad, el consentimiento y servicios opcionales usan comunicaciones normales. Es distinto de subir la foto."],
  ["¿Cuántas imágenes puedo usar?","Hasta cinco capas. En móvil conviene reducir la cantidad de archivos de alta resolución."],
  ["¿Pueden tener tamaños distintos?","Sí. Cada capa tiene controles independientes y todas se exportan con el mismo tamaño."],
  ["¿Por qué se ve borroso?","El recorte visible puede contener pocos píxeles para la salida elegida. Reduce zoom o tamaño."],
  ["¿Una salida más grande mejora la calidad?","No. No recupera detalle inexistente."],
  ["¿Funciona en móvil?","Sí. Un dedo mueve y dos amplían. Archivos muy grandes pueden superar la memoria."],
  ["¿Por qué no se desplaza la página sobre el lienzo?","Los gestos se reservan para mover y ampliar la imagen. Desplázate fuera del lienzo."],
  ["¿Por qué no coinciden todos los bordes?","Pueden cambiar perspectiva, lente, postura o forma. Prioriza el área importante."],
  ["¿La opacidad fusiona las fotos?","No. Solo ayuda a alinear; cada capa se exporta por separado."],
  ["¿Se conserva la transparencia?","PNG y WebP pueden conservarla. Prueba el archivo sobre el fondo final."],
  ["¿Qué proporción debo usar?","Usa el requisito del destino y verifica la especificación actual antes de publicar."],
  ["¿Puedo recuperar la sesión?","No. Exporta antes de cerrar o actualizar."],
  ["¿Sustituye a software profesional?","No. Está especializado en alineación y recorte consistente."],
  ["¿Cómo se revisan las guías?","Se contrastan con el editor y los temas repetidos se consolidan."],
  ["¿Cómo informo de un problema?","Indica navegador, dispositivo, formato, dimensiones y paso del error sin enviar archivos confidenciales."]
 ]}
};
export function generateStaticParams(){return locales.map(locale=>({locale}))}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const{locale}=await params;if(!isLocale(locale))return{};const t=data[locale];return buildPageMetadata({locale,key:"faq",title:t.title,description:t.intro,path:"faq"})}
export default async function Page({params}:{params:Promise<{locale:string}>}){const{locale}=await params;if(!isLocale(locale))notFound();const t=data[locale];const jsonLd={"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.items.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))};return <ContentPage locale={locale}><JsonLd data={jsonLd}/><Breadcrumbs locale={locale} items={[{name:t.title}]}/><header className="pageHero"><p className="eyebrow">FAQ</p><h1>{t.title}</h1><p>{t.intro}</p></header><div className="faqList">{t.items.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></ContentPage>}
