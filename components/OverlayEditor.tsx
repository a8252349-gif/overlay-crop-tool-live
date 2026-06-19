"use client";

import JSZip from "jszip";
import { ChangeEvent, CSSProperties, DragEvent, KeyboardEvent as ReactKeyboardEvent, PointerEvent as ReactPointerEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";

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
type CanvasPoint = { x: number; y: number };
type DragState = { id: string; pointerId: number; startX: number; startY: number; layerX: number; layerY: number };
type PinchState = { id: string; startDistance: number; startMidpoint: CanvasPoint; layerX: number; layerY: number; scale: number };
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


type RelativeSliderProps = {
  value: number;
  min: number;
  max: number;
  step: number;
  label: string;
  onChange: (value: number) => void;
  mode?: "linear" | "zoom";
  dragSpan?: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function snap(value: number, min: number, step: number) {
  const decimals = Math.max(0, (String(step).split(".")[1] || "").length);
  const snapped = min + Math.round((value - min) / step) * step;
  return Number(snapped.toFixed(decimals));
}

function RelativeSlider({ value, min, max, step, label, onChange, mode = "linear", dragSpan }: RelativeSliderProps) {
  const dragRef = useRef<{ pointerId: number; startX: number; startValue: number; width: number } | null>(null);
  const safeValue = clamp(value, min, max);
  const ratio = mode === "zoom"
    ? (Math.log(safeValue) - Math.log(min)) / (Math.log(max) - Math.log(min))
    : (safeValue - min) / (max - min);

  const valueFromDelta = (startValue: number, deltaX: number, width: number) => {
    let next: number;
    if (mode === "zoom") {
      // Relative exponential zoom: a full-track drag changes the current scale by about 3×.
      next = startValue * Math.exp((deltaX / Math.max(width, 1)) * Math.log(3));
    } else {
      const span = dragSpan ?? (max - min) * 0.35;
      next = startValue + (deltaX / Math.max(width, 1)) * span;
    }
    return clamp(snap(next, min, step), min, max);
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.focus();
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startValue: safeValue,
      width: rect.width,
    };
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    event.preventDefault();
    onChange(valueFromDelta(drag.startValue, event.clientX - drag.startX, drag.width));
  };

  const finishPointer = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.pointerId !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    dragRef.current = null;
  };

  const onKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    const direction = event.key === "ArrowRight" || event.key === "ArrowUp" ? 1
      : event.key === "ArrowLeft" || event.key === "ArrowDown" ? -1
      : 0;
    if (!direction) return;
    event.preventDefault();
    const keyboardStep = event.shiftKey ? step * 10 : step;
    onChange(clamp(snap(safeValue + direction * keyboardStep, min, step), min, max));
  };

  return <div
    className="relativeSlider"
    role="slider"
    tabIndex={0}
    aria-label={label}
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={safeValue}
    style={{ "--slider-progress": `${clamp(ratio, 0, 1) * 100}%` } as CSSProperties}
    onPointerDown={onPointerDown}
    onPointerMove={onPointerMove}
    onPointerUp={finishPointer}
    onPointerCancel={finishPointer}
    onLostPointerCapture={() => { dragRef.current = null; }}
    onKeyDown={onKeyDown}
  >
    <span className="relativeSliderTrack"><span className="relativeSliderFill" /></span>
    <span className="relativeSliderThumb" />
  </div>;
}

export default function OverlayEditor({ labels }: { labels: Labels }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const dragRef = useRef<DragState | null>(null);
  const pinchRef = useRef<PinchState | null>(null);
  const activePointersRef = useRef<Map<number, CanvasPoint>>(new Map());
  const layersRef = useRef<Layer[]>([]);
  const [layers, setLayers] = useState<Layer[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [ratio, setRatio] = useState(4 / 5);
  const [outputWidth, setOutputWidth] = useState(1080);
  const [outputHeight, setOutputHeight] = useState(1350);
  const [dragOver, setDragOver] = useState(false);

  const selected = layers.find((l) => l.id === selectedId) ?? null;
  const viewSize = useMemo(() => getViewSize(ratio), [ratio]);

  useEffect(() => {
    layersRef.current = layers;
  }, [layers]);

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
  const update = (id: string, patch: Partial<Layer>) => setLayers((prev) => {
    const next = prev.map((l) => l.id === id ? { ...l, ...patch } : l);
    layersRef.current = next;
    return next;
  });

  const resetLayer = (layer: Layer) => {
    const cover = Math.min(MAX_SCALE, Math.max(MIN_SCALE, Math.max(viewSize.w / layer.image.naturalWidth, viewSize.h / layer.image.naturalHeight)));
    update(layer.id, { x: viewSize.w / 2, y: viewSize.h / 2, scale: cover, rotation: 0, opacity: 1 });
  };

  const pointerPosition = (event: ReactPointerEvent<HTMLCanvasElement>): CanvasPoint => {
    const rect = event.currentTarget.getBoundingClientRect();
    return { x: (event.clientX - rect.left) * (viewSize.w / rect.width), y: (event.clientY - rect.top) * (viewSize.h / rect.height) };
  };
  const pointerPair = () => Array.from(activePointersRef.current.entries()).slice(0, 2);
  const midpoint = (a: CanvasPoint, b: CanvasPoint): CanvasPoint => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
  const distance = (a: CanvasPoint, b: CanvasPoint) => Math.hypot(b.x - a.x, b.y - a.y);
  const currentLayer = (id: string) => layersRef.current.find((layer) => layer.id === id) ?? null;

  const startPinch = (layer: Layer) => {
    const pair = pointerPair();
    if (pair.length < 2) return;
    const first = pair[0][1];
    const second = pair[1][1];
    pinchRef.current = {
      id: layer.id,
      startDistance: Math.max(1, distance(first, second)),
      startMidpoint: midpoint(first, second),
      layerX: layer.x,
      layerY: layer.y,
      scale: layer.scale,
    };
    dragRef.current = null;
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    const layer = selectedId ? currentLayer(selectedId) : null;
    if (!layer || layer.locked) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    const point = pointerPosition(event);
    activePointersRef.current.set(event.pointerId, point);

    if (activePointersRef.current.size >= 2) {
      startPinch(layer);
      return;
    }

    pinchRef.current = null;
    dragRef.current = { id: layer.id, pointerId: event.pointerId, startX: point.x, startY: point.y, layerX: layer.x, layerY: layer.y };
  };
  const onPointerMove = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    if (!activePointersRef.current.has(event.pointerId)) return;
    event.preventDefault();
    const point = pointerPosition(event);
    activePointersRef.current.set(event.pointerId, point);

    if (activePointersRef.current.size >= 2 && pinchRef.current) {
      const pair = pointerPair();
      if (pair.length < 2) return;
      const first = pair[0][1];
      const second = pair[1][1];
      const pinch = pinchRef.current;
      const nextMidpoint = midpoint(first, second);
      const scaleRatio = distance(first, second) / pinch.startDistance;
      const nextScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, pinch.scale * scaleRatio));
      const appliedRatio = nextScale / pinch.scale;

      update(pinch.id, {
        scale: nextScale,
        x: nextMidpoint.x - (pinch.startMidpoint.x - pinch.layerX) * appliedRatio,
        y: nextMidpoint.y - (pinch.startMidpoint.y - pinch.layerY) * appliedRatio,
      });
      return;
    }

    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    update(drag.id, { x: drag.layerX + point.x - drag.startX, y: drag.layerY + point.y - drag.startY });
  };
  const onPointerUp = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    activePointersRef.current.delete(event.pointerId);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);

    if (activePointersRef.current.size === 1 && selectedId) {
      const remaining = Array.from(activePointersRef.current.entries())[0];
      const layer = currentLayer(selectedId);
      pinchRef.current = null;
      if (layer && !layer.locked) {
        dragRef.current = { id: layer.id, pointerId: remaining[0], startX: remaining[1].x, startY: remaining[1].y, layerX: layer.x, layerY: layer.y };
      }
      return;
    }

    if (activePointersRef.current.size === 0) {
      dragRef.current = null;
      pinchRef.current = null;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleCanvasWheel = (event: WheelEvent) => {
      // The canvas owns the wheel gesture: never let the page scroll while
      // the pointer is over the editing area. A non-passive native listener
      // is used because some mobile/desktop browsers ignore preventDefault
      // from passive wheel listeners.
      event.preventDefault();
      event.stopPropagation();

      if (!selectedId) return;

      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const anchor = {
        x: (event.clientX - rect.left) * (viewSize.w / rect.width),
        y: (event.clientY - rect.top) * (viewSize.h / rect.height),
      };

      // Trackpads report smaller, more frequent deltas than mouse wheels.
      // Exponential scaling keeps both devices smooth and predictable.
      const factor = Math.exp(-event.deltaY * 0.0015);

      setLayers((prev) => {
        const current = prev.find((layer) => layer.id === selectedId);
        if (!current || current.locked) return prev;

        const nextScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, current.scale * factor));
        const appliedRatio = nextScale / current.scale;
        const next = prev.map((layer) => layer.id === selectedId ? {
          ...layer,
          scale: nextScale,
          x: anchor.x - (anchor.x - layer.x) * appliedRatio,
          y: anchor.y - (anchor.y - layer.y) * appliedRatio,
        } : layer);
        layersRef.current = next;
        return next;
      });
    };

    canvas.addEventListener("wheel", handleCanvasWheel, { passive: false });
    return () => canvas.removeEventListener("wheel", handleCanvasWheel);
  }, [selectedId, viewSize]);

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
            <label>{labels.opacity}<RelativeSlider label={labels.opacity} min={0} max={1} step={0.01} dragSpan={0.5} value={layer.opacity} onChange={(value) => update(layer.id, { opacity: value })} /><output>{Math.round(layer.opacity * 100)}%</output></label>
            <div className="layerActions"><button className={layer.visible ? "on" : ""} onClick={() => update(layer.id, { visible: !layer.visible })}>{labels.visible}</button><button className={layer.locked ? "on" : ""} onClick={() => update(layer.id, { locked: !layer.locked })}>{labels.lock}</button></div>
          </article>;
        })}</div>
      </aside>

      <main className="workspace">
        <div className={`canvasStage ${dragOver ? "dragOver" : ""}`} onDragOver={(e) => { e.preventDefault(); setDragOver(true); }} onDragLeave={() => setDragOver(false)} onDrop={onDrop}>
          {!layers.length && <button className="dropPrompt" onClick={() => fileRef.current?.click()}><b>{labels.drop}</b><span>{labels.maxFive}</span></button>}
          <canvas ref={canvasRef} style={{ aspectRatio: String(ratio) }} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp} onLostPointerCapture={onPointerUp} />
        </div>
        <p className="workspaceTip">{layers.length ? labels.wheelTip : labels.selectLayer}</p>
      </main>

      <aside className="controlPanel">
        <h2>{selected?.name || labels.layers}</h2>
        {selected ? <>
          <label className="zoomControl">{labels.zoom}<RelativeSlider label={labels.zoom} min={MIN_SCALE} max={MAX_SCALE} step={0.01} mode="zoom" value={selected.scale} onChange={(value) => update(selected.id, { scale: value })} /><span className="zoomNumber"><input type="number" min={MIN_SCALE} max={MAX_SCALE} step="0.01" value={Number(selected.scale.toFixed(2))} aria-label={`${labels.zoom} value`} onChange={(e) => { const value = e.currentTarget.valueAsNumber; if (!Number.isNaN(value)) update(selected.id, { scale: Math.min(MAX_SCALE, Math.max(MIN_SCALE, value)) }); }} onBlur={(e) => { const value = e.currentTarget.valueAsNumber; update(selected.id, { scale: Number.isNaN(value) ? MIN_SCALE : Math.min(MAX_SCALE, Math.max(MIN_SCALE, value)) }); }} /><b>×</b></span></label>
          <label>{labels.rotation}<RelativeSlider label={labels.rotation} min={-180} max={180} step={0.1} dragSpan={90} value={selected.rotation} onChange={(value) => update(selected.id, { rotation: value })} /><output>{selected.rotation.toFixed(1)}°</output></label>
          <div className="controlButtons"><button onClick={() => update(selected.id, { x: viewSize.w / 2, y: viewSize.h / 2 })}>{labels.center}</button><button onClick={() => resetLayer(selected)}>{labels.reset}</button></div>
          <div className="nudgeGrid"><span /><button onClick={() => update(selected.id, { y: selected.y - 1 })}>↑</button><span /><button onClick={() => update(selected.id, { x: selected.x - 1 })}>←</button><button onClick={() => update(selected.id, { x: viewSize.w / 2, y: viewSize.h / 2 })}>•</button><button onClick={() => update(selected.id, { x: selected.x + 1 })}>→</button><span /><button onClick={() => update(selected.id, { y: selected.y + 1 })}>↓</button><span /></div>
        </> : <p className="emptySmall">{labels.selectLayer}</p>}
      </aside>
    </div>
  </div>;
}
