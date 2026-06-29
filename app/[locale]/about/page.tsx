import type { Metadata } from "next";
import {notFound} from "next/navigation";
import {Breadcrumbs} from "@/components/Breadcrumbs";
import {ContentPage} from "@/components/ContentPage";
import {isLocale,locales,type Locale} from "@/lib/i18n";
import {buildPageMetadata} from "@/lib/seo";
const text:Record<Locale,{title:string;intro:string;sections:{h:string;p:string[]}[]}>= {
 en:{title:"About Overlay Crop",intro:"Overlay Crop is an independent browser tool built around a specific, recurring image problem: different source photos need to become a consistent set without giving up individual control.",sections:[
  {h:"The problem we set out to solve",p:["General croppers work well for one photo. They are less useful when an original, a retouched version, and several revisions must share exactly the same frame. Small changes in scale and position create visible jumps in a slider, carousel, or video.","Overlay Crop therefore uses one common output frame while allowing every image to move and zoom independently."]},
  {h:"Design principles",p:["The tool is designed around direct manipulation, clear numeric controls, repeatable output dimensions, and local browser processing. Features are added when they reduce a real step in the workflow, not simply to increase the number of buttons.","The editor supports mouse, trackpad, keyboard, and touch gestures so the same task remains possible across devices."]},
  {h:"How content is created",p:["Guides are written specifically for this tool and are based on practical cropping, comparison, privacy, and output-quality questions. Similar keyword pages are consolidated rather than published as lightly reworded duplicates.","Technical claims are reviewed against the actual editor behavior. Time-sensitive platform dimensions are presented as examples and users are advised to verify current destination requirements."]},
  {h:"Privacy and limitations",p:["Selected image files are processed in the browser and are not uploaded to the Overlay Crop editing server. Normal website connection data, consent technologies, analytics, or advertising may still operate as described in the privacy policy.","The tool cannot recover missing source detail, correct every perspective difference, or replace professional color, print, security, or compliance workflows."]},
  {h:"Feedback and maintenance",p:["Bug reports, accessibility feedback, translation corrections, and examples of difficult source files help improve the service. The update date on each guide indicates the latest content review, not an automated publication date."]}
 ]},
 ko:{title:"Overlay Crop 소개",intro:"Overlay Crop은 서로 다른 원본 사진을 개별적으로 조절하면서 하나의 일관된 세트로 만들어야 하는 반복적인 이미지 작업 문제를 해결하기 위해 만든 독립적인 브라우저 도구입니다.",sections:[
  {h:"해결하고자 한 문제",p:["일반 크롭 도구는 한 장을 자를 때는 편하지만 원본, 보정본과 여러 수정본을 정확히 같은 프레임으로 만들어야 할 때는 불편합니다. 배율과 위치가 조금만 달라도 슬라이더, 캐러셀과 영상에서 화면이 튑니다.","Overlay Crop은 공통 출력 프레임을 유지하면서 각 사진을 따로 이동하고 확대할 수 있도록 설계했습니다."]},
  {h:"설계 원칙",p:["직접 조작, 정확한 숫자 입력, 반복 가능한 출력 크기와 브라우저 내부 처리를 중심으로 기능을 구성합니다. 버튼 수를 늘리기보다 실제 작업 단계를 줄이는 기능을 우선합니다.","마우스, 트랙패드, 키보드와 터치 제스처를 지원해 기기가 달라도 같은 작업을 수행할 수 있게 합니다."]},
  {h:"콘텐츠 작성 기준",p:["가이드는 실제 편집기 기능과 크롭, 비교, 개인정보, 화질 문제를 바탕으로 직접 작성합니다. 검색어만 바꾼 유사 문서를 여러 개 만드는 대신 겹치는 주제는 하나의 심층 가이드로 통합합니다.","기술 설명은 실제 도구 동작과 비교해 검토하고 플랫폼 규격처럼 변할 수 있는 내용은 예시로만 사용하며 최신 규격을 별도로 확인하도록 안내합니다."]},
  {h:"개인정보와 한계",p:["선택한 사진은 브라우저에서 처리되고 Overlay Crop 편집 서버에 업로드되지 않습니다. 다만 일반적인 사이트 접속 정보와 동의에 따른 분석·광고 기술은 개인정보처리방침에 따라 처리될 수 있습니다.","원본에 없는 디테일 복원, 모든 원근 차이 교정, 전문 인쇄·색상·보안·규정 준수 업무를 대신할 수는 없습니다."]},
  {h:"피드백과 유지관리",p:["오류 제보, 접근성 의견, 번역 수정과 어려운 원본 사례는 서비스 개선에 도움이 됩니다. 각 가이드의 업데이트 날짜는 자동 생성 날짜가 아니라 실제 내용 검토 시점을 뜻합니다."]}
 ]},
 ja:{title:"Overlay Cropについて",intro:"異なる元画像を個別に調整しながら、一貫したセットへまとめる課題に特化した独立ブラウザツールです。",sections:[
  {h:"解決する課題",p:["一般的な切り抜きは一枚には便利ですが、元画像とレタッチ版、複数の修正版を同じフレームにする作業では小さな位置差が目立ちます。","共通出力フレームの中で各画像を個別に移動・拡大できる方式を採用しました。"]},
  {h:"設計原則",p:["直接操作、数値調整、再現可能な寸法、ブラウザ内処理を重視します。機能数ではなく実際の手順を減らすことを優先します。","マウス、トラックパッド、キーボード、タッチを考慮しています。"]},
  {h:"コンテンツ方針",p:["ガイドは実際のツール動作と切り抜き、比較、プライバシー、品質の疑問をもとに作成します。似た検索語だけの薄いページは統合します。","変わり得るプラットフォーム仕様は例として示し、公開時の最新要件を確認するよう案内します。"]},
  {h:"プライバシーと限界",p:["選択画像はブラウザ内で処理され、編集サーバーへ送信されません。通常の接続情報や同意に基づく技術はポリシーに従います。","欠けた細部の復元、すべての遠近補正、専門的な印刷・セキュリティ要件の代替はできません。"]},
  {h:"改善",p:["不具合、アクセシビリティ、翻訳修正、難しい画像の事例を受け付けています。更新日は実際に内容を確認した日です。"]}
 ]},
 es:{title:"Acerca de Overlay Crop",intro:"Una herramienta independiente creada para convertir fuentes diferentes en un conjunto coherente sin perder el control individual de cada imagen.",sections:[
  {h:"El problema",p:["Los recortadores generales funcionan bien con una imagen, pero las diferencias pequeñas se notan cuando original, retoque y revisiones deben compartir el mismo marco.","Overlay Crop mantiene un marco común y permite mover y ampliar cada capa por separado."]},
  {h:"Principios de diseño",p:["Priorizamos manipulación directa, controles numéricos, dimensiones repetibles y procesamiento local. Una función se añade cuando reduce un paso real.","El editor contempla ratón, trackpad, teclado y gestos táctiles."]},
  {h:"Cómo se crea el contenido",p:["Las guías se escriben para el comportamiento real de la herramienta y para dudas prácticas sobre recorte, comparación, privacidad y calidad. Los temas repetidos se consolidan en vez de publicar páginas casi iguales.","Las especificaciones que pueden cambiar se presentan como ejemplos y se recomienda verificar el destino actual."]},
  {h:"Privacidad y límites",p:["Las imágenes seleccionadas se procesan en el navegador y no se suben al servidor de edición. La conexión normal y las tecnologías con consentimiento se describen en la política.","La herramienta no recupera detalle inexistente ni sustituye flujos profesionales de color, impresión, seguridad o cumplimiento."]},
  {h:"Mantenimiento",p:["Los informes de errores, accesibilidad, traducción y casos difíciles ayudan a mejorar el servicio. La fecha de cada guía indica una revisión real del contenido."]}
 ]}
};
export function generateStaticParams(){return locales.map(locale=>({locale}))}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const{locale}=await params;if(!isLocale(locale))return{};const t=text[locale];return buildPageMetadata({locale,key:"about",title:t.title,description:t.intro,path:"about"})}
export default async function Page({params}:{params:Promise<{locale:string}>}){const{locale}=await params;if(!isLocale(locale))notFound();const t=text[locale];return <ContentPage locale={locale}><Breadcrumbs locale={locale} items={[{name:t.title}]}/><article className="legalPage"><p className="eyebrow">ABOUT</p><h1>{t.title}</h1><p className="lead">{t.intro}</p>{t.sections.map(s=><section key={s.h}><h2>{s.h}</h2>{s.p.map(p=><p key={p}>{p}</p>)}</section>)}</article></ContentPage>}
