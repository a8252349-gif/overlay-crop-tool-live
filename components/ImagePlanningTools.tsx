"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";

const labels = {
  en: { ratio:"Aspect ratio calculator", ratioText:"Enter a ratio and one dimension to calculate the other.", rw:"Ratio width", rh:"Ratio height", width:"Width", height:"Height", calcHeight:"Calculated height", calcWidth:"Calculated width", quality:"Upscale risk checker", qualityText:"Compare the visible source crop with the planned output size.", sw:"Visible source width", sh:"Visible source height", ow:"Output width", oh:"Output height", result:"Result", noUpscale:"No enlargement is required.", mild:"Mild enlargement. Inspect at 100% before publishing.", high:"Strong enlargement. A softer result is likely.", factor:"Largest enlargement factor" },
  ko: { ratio:"가로세로 비율 계산기", ratioText:"비율과 가로 또는 세로를 입력하면 나머지 값을 계산합니다.", rw:"비율 가로", rh:"비율 세로", width:"가로", height:"세로", calcHeight:"계산된 세로", calcWidth:"계산된 가로", quality:"확대 위험 확인", qualityText:"실제로 보이는 원본 크롭 영역과 계획한 출력 크기를 비교합니다.", sw:"원본 크롭 가로", sh:"원본 크롭 세로", ow:"출력 가로", oh:"출력 세로", result:"결과", noUpscale:"확대가 필요하지 않습니다.", mild:"소폭 확대입니다. 게시 전 100% 크기로 확인하세요.", high:"큰 폭의 확대입니다. 결과가 부드러워질 가능성이 높습니다.", factor:"최대 확대 배율" },
  ja: { ratio:"アスペクト比計算", ratioText:"比率と片方の寸法から、もう一方を計算します。", rw:"比率の幅", rh:"比率の高さ", width:"幅", height:"高さ", calcHeight:"計算した高さ", calcWidth:"計算した幅", quality:"拡大リスク確認", qualityText:"見えている元画像の範囲と出力寸法を比較します。", sw:"元切り抜き幅", sh:"元切り抜き高さ", ow:"出力幅", oh:"出力高さ", result:"結果", noUpscale:"拡大は不要です。", mild:"軽い拡大です。公開前に100%で確認してください。", high:"大きな拡大です。柔らかく見える可能性があります。", factor:"最大拡大倍率" },
  es: { ratio:"Calculadora de proporción", ratioText:"Introduce la proporción y una dimensión para calcular la otra.", rw:"Ancho de proporción", rh:"Alto de proporción", width:"Ancho", height:"Alto", calcHeight:"Alto calculado", calcWidth:"Ancho calculado", quality:"Comprobador de ampliación", qualityText:"Compara el recorte visible de la fuente con el tamaño de salida.", sw:"Ancho visible de origen", sh:"Alto visible de origen", ow:"Ancho de salida", oh:"Alto de salida", result:"Resultado", noUpscale:"No se necesita ampliación.", mild:"Ampliación leve. Revisa al 100% antes de publicar.", high:"Ampliación fuerte. Es probable que se vea más suave.", factor:"Mayor factor de ampliación" },
} as const;

export function ImagePlanningTools({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const [rw,setRw]=useState(4), [rh,setRh]=useState(5), [width,setWidth]=useState(1080), [height,setHeight]=useState(1350);
  const [sw,setSw]=useState(1600), [sh,setSh]=useState(2000), [ow,setOw]=useState(1080), [oh,setOh]=useState(1350);
  const calculatedHeight = useMemo(()=> Math.max(1,Math.round(width*rh/rw)),[width,rh,rw]);
  const calculatedWidth = useMemo(()=> Math.max(1,Math.round(height*rw/rh)),[height,rh,rw]);
  const factor = Math.max(ow/Math.max(sw,1),oh/Math.max(sh,1));
  const verdict = factor<=1?t.noUpscale:factor<=1.35?t.mild:t.high;
  return <div className="toolGrid">
    <section className="planningTool"><h2>{t.ratio}</h2><p>{t.ratioText}</p><div className="inputGrid">
      <label>{t.rw}<input type="number" min="1" value={rw} onChange={e=>setRw(Math.max(1,Number(e.target.value)||1))}/></label>
      <label>{t.rh}<input type="number" min="1" value={rh} onChange={e=>setRh(Math.max(1,Number(e.target.value)||1))}/></label>
      <label>{t.width}<input type="number" min="1" value={width} onChange={e=>setWidth(Math.max(1,Number(e.target.value)||1))}/></label>
      <output><span>{t.calcHeight}</span><strong>{calculatedHeight}px</strong></output>
      <label>{t.height}<input type="number" min="1" value={height} onChange={e=>setHeight(Math.max(1,Number(e.target.value)||1))}/></label>
      <output><span>{t.calcWidth}</span><strong>{calculatedWidth}px</strong></output>
    </div></section>
    <section className="planningTool"><h2>{t.quality}</h2><p>{t.qualityText}</p><div className="inputGrid">
      <label>{t.sw}<input type="number" min="1" value={sw} onChange={e=>setSw(Math.max(1,Number(e.target.value)||1))}/></label>
      <label>{t.sh}<input type="number" min="1" value={sh} onChange={e=>setSh(Math.max(1,Number(e.target.value)||1))}/></label>
      <label>{t.ow}<input type="number" min="1" value={ow} onChange={e=>setOw(Math.max(1,Number(e.target.value)||1))}/></label>
      <label>{t.oh}<input type="number" min="1" value={oh} onChange={e=>setOh(Math.max(1,Number(e.target.value)||1))}/></label>
    </div><div className="qualityResult"><span>{t.result}</span><strong>{t.factor}: {factor.toFixed(2)}×</strong><p>{verdict}</p></div></section>
  </div>;
}
