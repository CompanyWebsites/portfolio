"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./Chrome";
import { research, ResearchItem } from "@/data/content";
import { Beaker, Leaf, Zap, Droplets, Cpu } from "lucide-react";

const cats = ["All", "Air & Carbon", "Energy", "Water", "Advanced Systems"] as const;

const catIcon: Record<string, typeof Leaf> = {
  "Air & Carbon": Leaf,
  Energy: Zap,
  Water: Droplets,
  "Advanced Systems": Cpu,
};

export default function Research() {
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const list: ResearchItem[] = active === "All" ? research : research.filter((r) => r.category === active);

  return (
    <section id="research" className="relative bg-ink py-20 md:py-32 overflow-hidden grain">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_10%,rgba(143,185,150,0.08),transparent_60%)]" />
      <div className="relative max-w-[1440px] mx-auto px-5 md:px-10">
        <SectionHeading
          index="§ 04"
          eyebrow="Research & innovation — 16 active vectors"
          title={
            <>
              A lab without walls, <span className="italic font-light text-brass-light">aimed at the grid bill.</span>
            </>
          }
          blurb="Environmental tech, energy systems, defence-adjacent platforms, water and advanced engineering — unified by one question: can it run on less, or on nothing from the grid?"
        />

        {/* filter bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`inline-flex items-center gap-2 font-mono2 text-[11px] tracking-[0.16em] uppercase rounded-full px-5 py-2.5 border transition-all ${
                active === c
                  ? "bg-cream text-ink border-cream"
                  : "border-cream/20 text-cream/65 hover:border-brass hover:text-cream"
              }`}
            >
              {c !== "All" && (() => { const I = catIcon[c]; return <I size={13} />; })()}
              {c}
              <span className={`text-[10px] ${active === c ? "text-ink/60" : "text-brass/70"}`}>
                {c === "All" ? research.length : research.filter((r) => r.category === c).length}
              </span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {list.map((r) => {
              const I = catIcon[r.category] ?? Beaker;
              return (
                <motion.article
                  layout
                  key={r.code}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35 }}
                  className="group relative rounded-2xl border border-cream/12 bg-coal p-6 hover:border-moss/60 hover:bg-coal-2 transition-colors overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-moss/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 font-mono2 text-[10px] tracking-[0.18em] uppercase text-moss border border-moss/30 rounded-full px-3 py-1">
                      <I size={12} /> {r.category}
                    </span>
                    <span className="font-mono2 text-[10px] text-smoke/60">{r.code}</span>
                  </div>
                  <h3 className="font-display text-[1.3rem] font-semibold leading-snug mt-4">{r.title}</h3>
                  <p className="mt-2 text-[13px] text-cream/55 leading-relaxed">{r.desc}</p>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <p className="mt-8 font-mono2 text-[11px] tracking-[0.18em] uppercase text-smoke">
          <Beaker size={13} className="inline -mt-0.5 mr-2 text-brass" />
          Defence-related technologies pursued under appropriate confidentiality.
        </p>
      </div>
    </section>
  );
}
