"use client";

import JSZip from "jszip";
import { ChangeEvent, DragEvent, PointerEvent as ReactPointerEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";

type Labels = {
  upload: string; drop: string; maxFive: string; layers: string; opacity: string; zoom: string; rotation: string;
  visible: string; lock: string; remove: string; reset: string; center: string; ratio: string; output: string;
  width: string; height: string; exportOne: string; exportAll: string; noImages: string; selectLayer: string; wheelTip: string;
};

type Layer = {
  id: string;
  name: string;
  image: HTMLImageElement;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  opacity: number;
  visible: boolean;
  locked: boolean;
};

type Ratio = { label: string; value: number };
const RATIOS: Ratio[] = [
  { label: "1:1", value: 1 }, { label: "4:5", value: 4 / 5 }, { label: "3:4", value: 3 / 4 },
  { label: "2:3", value: 2 / 3 }, { label: "9:16", value: 9 / 16 }, { label: "16:9", value: 16 / 9 },
];
const VIEW_LONG = 820;
const MIN_SCALE = 0.01;
const MAX_SCALE = 50;
function getViewSize(ratio: number) { return ratio >= 1 ? { w: VIEW_LONG, h: Math.round(VIEW_LONG / ratio) } : { w: Math.round(VIEW_LONG * ratio), h: VIEW_LONG }; }

function uid() { return `${Date.now()}-${Math.random().toString(36).slice(2)}`; }
function safeName(name: string) { return name.replace(/\.[^.]+$/, "").replace(/[^a-zA-Z0-9가-힣ぁ-んァ-ン一-龯_-]+/g, "-") || "image"; }

export default function OverlayEditor({ labels }: { labels: Labels }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const dragRef = useRef<{ id: string; startX: number; startY: number; layerX: number; layerY: number } | null>(null);
  const [layers, setLayers] = useState<Layer[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [ratio, setRatio] = useState(4 / 5);
  const [outputWidth, setOutputWidth] = useState(1080);
  const [outputHeight, setOutputHeight] = useState(1350);
  const [dragOver, setDragOver] = useState(false);

  const selected = layers.find((l) => l.id === selectedId) ?? null;
  const viewSize = useMemo(() => getViewSize(ratio), [ratio]);

  const drawTo = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number, only?: Layer) => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#f0f1f3";
    ctx.fillRect(0, 0, w, h);
    const sx = w / viewSize.w;
    const sy = h / viewSize.h;
    const list = only ? [only] : layers;
    for (const layer of list) {
      if (!layer.visible) continue;
      ctx.save();
      ctx.globalAlpha = only ? 1 : layer.opacity;
      ctx.translate(layer.x * sx, layer.y * sy);
      ctx.rotate((layer.rotation * Math.PI) / 180);
      ctx.scale(layer.scale * sx, layer.scale * sy);
      ctx.drawImage(layer.image, -layer.image.naturalWidth / 2, -layer.image.naturalHeight / 2);
      ctx.restore();
    }
    if (!only) {
      ctx.save();
      ctx.strokeStyle = "rgba(255,255,255,.9)";
      ctx.lineWidth = Math.max(1, 2 * Math.min(sx, sy));
      ctx.strokeRect(1, 1, w - 2, h - 2);
      ctx.restore();
    }
  }, [layers, viewSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = viewSize.w;
    canvas.height = viewSize.h;
    const ctx = canvas.getContext("2d");
    if (ctx) drawTo(ctx, viewSize.w, viewSize.h);
  }, [drawTo, viewSize]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (!selectedId || ["INPUT", "TEXTAREA", "SELECT"].includes((event.target as HTMLElement)?.tagName)) return;
      const step = event.shiftKey ? 10 : 1;
      const delta = event.key === "ArrowLeft" ? [-step, 0] : event.key === "ArrowRight" ? [step, 0] : event.key === "ArrowUp" ? [0, -step] : event.key === "ArrowDown" ? [0, step] : null;
      if (!delta) return;
      event.preventDefault();
      setLayers((prev) => prev.map((l) => l.id === selectedId && !l.locked ? { ...l, x: l.x + delta[0], y: l.y + delta[1] } : l));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedId]);

  const addFiles = async (files: File[]) => {
    const available = Math.max(0, 5 - layers.length);
    const accepted = files.filter((f) => f.type.startsWith("image/")).slice(0, available);
    const loaded = await Promise.all(accepted.map((file) => new Promise<Layer>((resolve, reject) => {
      const image = new Image();
      const url = URL.createObjectURL(file);
      image.onload = () => {
        const cover = Math.min(MAX_SCALE, Math.max(MIN_SCALE, Math.max(viewSize.w / image.naturalWidth, viewSize.h / image.naturalHeight)));
        resolve({ id: uid(), name: file.name, image, x: viewSize.w / 2, y: viewSize.h / 2, scale: cover, rotation: 0, opacity: 1, visible: true, locked: false });
      };
      image.onerror = reject;
      image.src = url;
    })));
    if (!loaded.length) return;
    setLayers((prev) => [...prev, ...loaded]);
    setSelectedId(loaded[loaded.length - 1].id);
  };

  const onFiles = (e: ChangeEvent<HTMLInputElement>) => { if (e.target.files) void addFiles(Array.from(e.target.files)); e.target.value = ""; };
  const onDrop = (e: DragEvent<HTMLDivElement>) => { e.preventDefault(); setDragOver(false); void addFiles(Array.from(e.dataTransfer.files)); };
  const update = (id: string, patch: Partial<Layer>) => setLayers((prev) => prev.map((l) => l.id === id ? { ...l, ...patch } : l));

  const resetLayer = (layer: Layer) => {
    const cover = Math.min(MAX_SCALE, Math.max(MIN_SCALE, Math.max(viewSize.w / layer.image.naturalWidth, viewSize.h / layer.image.naturalHeight)));
    update(layer.id, { x: viewSize.w / 2, y: viewSize.h / 2, scale: cover, rotation: 0, opacity: 1 });
  };

  const pointerPosition = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    return { x: (event.clientX - rect.left) * (viewSize.w / rect.width), y: (event.clientY - rect.top) * (viewSize.h / rect.height) };
  };
  const onPointerDown = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    if (!selected || selected.locked) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    const p = pointerPosition(event);
    dragRef.current = { id: selected.id, startX: p.x, startY: p.y, layerX: selected.x, layerY: selected.y };
  };
  const onPointerMove = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    if (!dragRef.current) return;
    const p = pointerPosition(event); const d = dragRef.current;
    update(d.id, { x: d.layerX + p.x - d.startX, y: d.layerY + p.y - d.startY });
  };
  const onPointerUp = () => { dragRef.current = null; };
  const onWheel = (event: React.WheelEvent<HTMLCanvasElement>) => {
    if (!selected || selected.locked) return;
    event.preventDefault();
    const factor = event.deltaY < 0 ? 1.04 : 0.96;
    update(selected.id, { scale: Math.min(MAX_SCALE, Math.max(MIN_SCALE, selected.scale * factor)) });
  };

  const changeRatio = (newRatio: number) => {
    const oldSize = viewSize;
    const nextSize = getViewSize(newRatio);
    const scaleFactor = Math.min(nextSize.w / oldSize.w, nextSize.h / oldSize.h);
    setLayers((prev) => prev.map((layer) => ({
      ...layer,
      x: (layer.x / oldSize.w) * nextSize.w,
      y: (layer.y / oldSize.h) * nextSize.h,
      scale: Math.min(MAX_SCALE, Math.max(MIN_SCALE, layer.scale * scaleFactor)),
    })));
    setRatio(newRatio);
    const w = outputWidth;
    setOutputHeight(Math.max(1, Math.round(w / newRatio)));
  };
  const changeWidth = (w: number) => { const value = Math.max(1, Math.min(8000, w || 1)); setOutputWidth(value); setOutputHeight(Math.round(value / ratio)); };
  const changeHeight = (h: number) => { const value = Math.max(1, Math.min(8000, h || 1)); setOutputHeight(value); setOutputWidth(Math.round(value * ratio)); };

  const renderLayerBlob = async (layer: Layer) => {
    const canvas = document.createElement("canvas"); canvas.width = outputWidth; canvas.height = outputHeight;
    const ctx = canvas.getContext("2d"); if (!ctx) throw new Error("Canvas unavailable");
    drawTo(ctx, outputWidth, outputHeight, layer);
    return await new Promise<Blob>((resolve, reject) => canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("Export failed")), "image/jpeg", 0.95));
  };
  const downloadBlob = (blob: Blob, filename: string) => { const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = filename; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); };
  const exportSelected = async () => { if (!selected) return; downloadBlob(await renderLayerBlob(selected), `${safeName(selected.name)}-${outputWidth}x${outputHeight}.jpg`); };
  const exportAll = async () => {
    if (!layers.length) return;
    const zip = new JSZip();
    for (let i = 0; i < layers.length; i++) zip.file(`${String(i + 1).padStart(2, "0")}-${safeName(layers[i].name)}-${outputWidth}x${outputHeight}.jpg`, await renderLayerBlob(layers[i]));
    downloadBlob(await zip.generateAsync({ type: "blob" }), `overlay-crop-${outputWidth}x${outputHeight}.zip`);
  };

  return <div className="editorShell">
    <section className="editorTopbar">
      <button className="button primary" onClick={() => fileRef.current?.click()} disabled={layers.length >= 5}>{labels.upload}</button>
      <input ref={fileRef} hidden type="file" multiple accept="image/jpeg,image/png,image/webp" onChange={onFiles} />
      <label>{labels.ratio}<select value={ratio} onChange={(e) => changeRatio(Number(e.target.value))}>{RATIOS.map((r) => <option key={r.label} value={r.value}>{r.label}</option>)}</select></label>
      <div className="dimensions"><span>{labels.output}</span><label>{labels.width}<input type="number" value={outputWidth} min="1" max="8000" onChange={(e) => changeWidth(Number(e.target.value))} /></label><b>×</b><label>{labels.height}<input type="number" value={outputHeight} min="1" max="8000" onChange={(e) => changeHeight(Number(e.target.value))} /></label></div>
      <button className="button" onClick={() => void exportSelected()} disabled={!selected}>{labels.exportOne}</button>
      <button className="button dark" onClick={() => void exportAll()} disabled={!layers.length}>{labels.exportAll}</button>
    </section>

    <div className="editorGrid">
      <aside className="layerPanel">
        <div className="panelHeading"><h2>{labels.layers}</h2><span>{layers.length}/5</span></div>
        {!layers.length && <p className="emptySmall">{labels.noImages}</p>}
        <div className="layerList">{[...layers].reverse().map((layer, reverseIndex) => {
          const originalIndex = layers.length - 1 - reverseIndex;
          return <article key={layer.id} className={`layerCard ${selectedId === layer.id ? "active" : ""}`} onClick={() => setSelectedId(layer.id)}>
            <div className="layerTitle"><span className="layerNumber">{originalIndex + 1}</span><strong title={layer.name}>{layer.name}</strong><button title={labels.remove} onClick={(e) => { e.stopPropagation(); setLayers((prev) => prev.filter((l) => l.id !== layer.id)); if (selectedId === layer.id) setSelectedId(null); }}>×</button></div>
            <label>{labels.opacity}<input type="range" min="0" max="1" step="0.01" value={layer.opacity} onChange={(e) => update(layer.id, { opacity: Number(e.target.value) })} /><output>{Math.round(layer.opacity * 100)}%</output></label>
            <div className="layerActions"><button className={layer.visible ? "on" : ""} onClick={() => update(layer.id, { visible: !layer.visible })}>{labels.visible}</button><button className={layer.locked ? "on" : ""} onClick={() => update(layer.id, { locked: !layer.locked })}>{labels.lock}</button></div>
          </article>;
        })}</div>
      </aside>

      <main className="workspace">
        <div className={`canvasStage ${dragOver ? "dragOver" : ""}`} onDragOver={(e) => { e.preventDefault(); setDragOver(true); }} onDragLeave={() => setDragOver(false)} onDrop={onDrop}>
          {!layers.length && <button className="dropPrompt" onClick={() => fileRef.current?.click()}><b>{labels.drop}</b><span>{labels.maxFive}</span></button>}
          <canvas ref={canvasRef} style={{ aspectRatio: String(ratio) }} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp} onWheel={onWheel} />
        </div>
        <p className="workspaceTip">{layers.length ? labels.wheelTip : labels.selectLayer}</p>
      </main>

      <aside className="controlPanel">
        <h2>{selected?.name || labels.layers}</h2>
        {selected ? <>
          <label className="zoomControl">{labels.zoom}<input type="range" min={MIN_SCALE} max={MAX_SCALE} step="0.01" value={Math.min(MAX_SCALE, Math.max(MIN_SCALE, selected.scale))} onChange={(e) => update(selected.id, { scale: Math.min(MAX_SCALE, Math.max(MIN_SCALE, Number(e.target.value))) })} /><span className="zoomNumber"><input type="number" min={MIN_SCALE} max={MAX_SCALE} step="0.01" value={Number(selected.scale.toFixed(2))} aria-label={`${labels.zoom} value`} onChange={(e) => { const value = e.currentTarget.valueAsNumber; if (!Number.isNaN(value)) update(selected.id, { scale: Math.min(MAX_SCALE, Math.max(MIN_SCALE, value)) }); }} onBlur={(e) => { const value = e.currentTarget.valueAsNumber; update(selected.id, { scale: Number.isNaN(value) ? MIN_SCALE : Math.min(MAX_SCALE, Math.max(MIN_SCALE, value)) }); }} /><b>×</b></span></label>
          <label>{labels.rotation}<input type="range" min="-180" max="180" step="0.1" value={selected.rotation} onChange={(e) => update(selected.id, { rotation: Number(e.target.value) })} /><output>{selected.rotation.toFixed(1)}°</output></label>
          <div className="controlButtons"><button onClick={() => update(selected.id, { x: viewSize.w / 2, y: viewSize.h / 2 })}>{labels.center}</button><button onClick={() => resetLayer(selected)}>{labels.reset}</button></div>
          <div className="nudgeGrid"><span /><button onClick={() => update(selected.id, { y: selected.y - 1 })}>↑</button><span /><button onClick={() => update(selected.id, { x: selected.x - 1 })}>←</button><button onClick={() => update(selected.id, { x: viewSize.w / 2, y: viewSize.h / 2 })}>•</button><button onClick={() => update(selected.id, { x: selected.x + 1 })}>→</button><span /><button onClick={() => update(selected.id, { y: selected.y + 1 })}>↓</button><span /></div>
        </> : <p className="emptySmall">{labels.selectLayer}</p>}
      </aside>
    </div>
  </div>;
}
