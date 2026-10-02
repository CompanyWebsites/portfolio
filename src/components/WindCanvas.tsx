"use client";

import { useEffect, useRef } from "react";

/** Lightweight wind / particle field for the hero */
export default function WindCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; len: number; speed: number; o: number; drift: number };
    let parts: P[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const count = Math.floor((w * h) / 14000);
      parts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        len: 30 + Math.random() * 110,
        speed: 0.4 + Math.random() * 1.6,
        o: 0.05 + Math.random() * 0.22,
        drift: (Math.random() - 0.5) * 0.4,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    const tick = () => {
      t += 0.01;
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        const wave = Math.sin(p.y * 0.012 + t * 1.4) * 18;
        const x2 = p.x + p.len + wave * 0.3;
        const y2 = p.y + wave * 0.12 + p.drift * 10;
        const g = ctx.createLinearGradient(p.x, p.y, x2, y2);
        g.addColorStop(0, `rgba(201,154,63,0)`);
        g.addColorStop(0.5, `rgba(201,154,63,${p.o})`);
        g.addColorStop(1, `rgba(201,154,63,0)`);
        ctx.strokeStyle = g;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.quadraticCurveTo(p.x + p.len / 2, p.y + wave * 0.1, x2, y2);
        ctx.stroke();
        p.x += p.speed;
        p.y += p.drift * 0.4;
        if (p.x - p.len > w) {
          p.x = -p.len - 20;
          p.y = Math.random() * h;
        }
        if (p.y < -20) p.y = h + 10;
        if (p.y > h + 20) p.y = -10;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden />;
}
