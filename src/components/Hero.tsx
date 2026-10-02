"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Wind, Factory, FlaskConical, Lightbulb } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import WindCanvas from "./WindCanvas";
import { roles, stats } from "@/data/content";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const start = performance.now();
          const dur = 1600;
          const step = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(eased * value));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} id="top" className="relative min-h-screen flex flex-col overflow-hidden grain">
      {/* backdrop layers */}
      <div className="absolute inset-0 blueprint-grid" />
      <WindCanvas className="absolute inset-0 w-full h-full opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_38%,rgba(201,154,63,0.13),transparent_65%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink" />

      {/* rotating schematic ring */}
      <div className="absolute right-[-180px] top-[12%] hidden md:block opacity-[0.16] pointer-events-none">
        <svg width="560" height="560" viewBox="0 0 560 560" className="animate-[spin_60s_linear_infinite]">
          <circle cx="280" cy="280" r="260" fill="none" stroke="#c99a3f" strokeWidth="1" strokeDasharray="4 10" />
          <circle cx="280" cy="280" r="200" fill="none" stroke="#c99a3f" strokeWidth="1" />
          <circle cx="280" cy="280" r="140" fill="none" stroke="#c99a3f" strokeWidth="1" strokeDasharray="2 8" />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * Math.PI) / 6;
            return (
              <g key={i}>
                <line x1={280 + Math.cos(a) * 200} y1={280 + Math.sin(a) * 200} x2={280 + Math.cos(a) * 260} y2={280 + Math.sin(a) * 260} stroke="#c99a3f" strokeWidth="1" />
                <circle cx={280 + Math.cos(a) * 230} cy={280 + Math.sin(a) * 230} r="4" fill="#c99a3f" />
              </g>
            );
          })}
          <text x="280" y="288" textAnchor="middle" fill="#c99a3f" fontSize="22" fontFamily="monospace" letterSpacing="6">PT·95</text>
        </svg>
      </div>

      {/* side rail */}
      <div className="absolute left-5 md:left-8 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-4 z-10">
        <span className="vertical-text font-mono2 text-[10px] tracking-[0.4em] text-smoke/70 uppercase">
          Mechanical · Thermal · Environmental
        </span>
        <span className="w-px h-24 bg-gradient-to-b from-transparent via-brass/60 to-transparent" />
      </div>

      <motion.div style={{ y: yTitle, opacity }} className="relative z-10 flex-1 flex flex-col justify-center max-w-[1440px] mx-auto w-full px-5 md:px-10 pt-[110px] pb-10">
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <span className="inline-flex items-center gap-2 border border-brass/40 rounded-full px-4 py-1.5 font-mono2 text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-brass-light">
            <span className="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" />
            Portfolio — Engineer × Inventor
          </span>
          <span className="font-mono2 text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-smoke">
            Doc. No. PT / 1995 — 2026
          </span>
        </motion.div>

        {/* giant title */}
        <h1 className="font-display leading-[0.88] tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[15.5vw] md:text-[10.5vw] lg:text-[9vw] font-black text-cream"
          >
            PRASHANT
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[15.5vw] md:text-[10.5vw] lg:text-[9vw] font-black text-stroke-brass"
          >
            THAPAK
          </motion.span>
        </h1>

        {/* role ticker */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2"
        >
          {roles.map((r, i) => (
            <span key={r} className="flex items-center gap-3">
              <span className={`font-display italic text-xl md:text-3xl ${i === 3 ? "text-brass-light" : "text-cream/90"}`}>
                {r}
              </span>
              {i < roles.length - 1 && <span className="text-brass text-lg">·</span>}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.88 }}
          className="mt-6 max-w-2xl text-sm md:text-lg leading-relaxed text-cream/70"
        >
          Mechanical engineer with <span className="text-cream">three decades</span> spanning paper &amp; pulp
          plants, industrial management and — since 2017 — independent research &amp;{" "}
          <span className="text-brass-light">invention without grid dependency</span>: air, carbon,
          wind, solar thermal, water.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#ip"
            className="group inline-flex items-center gap-2 bg-brass text-ink font-mono2 text-xs tracking-[0.14em] uppercase px-7 py-4 rounded-full hover:bg-cream transition-colors"
          >
            <Lightbulb size={15} />
            Enter the IP Vault
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#journey"
            className="inline-flex items-center gap-2 border border-cream/25 font-mono2 text-xs tracking-[0.14em] uppercase px-7 py-4 rounded-full hover:border-brass hover:text-brass-light transition-colors"
          >
            <Factory size={15} /> From industry to innovation
          </a>
        </motion.div>

        {/* icon strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="mt-10 flex flex-wrap gap-2.5"
        >
          {[
            { icon: Wind, label: "No-electricity air systems" },
            { icon: Factory, label: "Paper · Plant · Process" },
            { icon: FlaskConical, label: "16 research vectors" },
          ].map((c) => (
            <span key={c.label} className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-full px-4 py-2 font-mono2 text-[10px] tracking-[0.16em] uppercase text-cream/75">
              <c.icon size={13} className="text-brass" /> {c.label}
            </span>
          ))}
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.25 }}
          className="mt-12 grid grid-cols-2 lg:grid-cols-4 border-t border-cream/12"
        >
          {stats.map((s, i) => (
            <div key={s.label} className={`py-6 pr-6 ${i !== 0 ? "lg:border-l lg:border-cream/12 lg:pl-6" : ""} ${i >= 2 ? "border-t border-cream/12 lg:border-t-0" : ""}`}>
              <p className="font-display text-4xl md:text-5xl font-semibold text-cream">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 font-mono2 text-[10px] tracking-[0.18em] uppercase text-smoke leading-relaxed">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#manifesto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-2 text-smoke hover:text-brass transition-colors"
      >
        <span className="font-mono2 text-[10px] tracking-[0.3em] uppercase">Scroll — the mill run</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
