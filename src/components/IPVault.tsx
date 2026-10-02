"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Chrome";
import { patents } from "@/data/content";
import { FileBadge, Lock, ArrowUpRight } from "lucide-react";

export default function IPVault() {
  return (
    <section id="ip" className="relative bg-paper text-ink py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid-light" />
      {/* giant ghost word */}
      <div className="absolute top-8 left-0 right-0 text-center font-display font-black text-[18vw] leading-none text-ink/[0.04] select-none pointer-events-none tracking-tight">
        PATENTS
      </div>

      <div className="relative max-w-[1440px] mx-auto px-5 md:px-10">
        <SectionHeading
          light
          index="§ 05"
          eyebrow="Intellectual property — invention pipeline"
          title={
            <>
              The vault: <span className="italic text-rust">ten families,</span> zero grid worship.
            </>
          }
          blurb="Patent-related research engineered for commercialisation — each family targets operating cost, deployability and scale, not novelty for its own sake."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {patents.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group relative bg-ink text-cream rounded-2xl p-7 overflow-hidden hover:-translate-y-1.5 transition-transform duration-300 hover:shadow-[0_30px_60px_-20px_rgba(10,9,8,0.55)]"
            >
              <div className="absolute inset-0 blueprint-grid opacity-50" />
              {/* stamp */}
              <div className="absolute top-5 right-5 rotate-[8deg] border-2 border-rust/70 text-rust/80 font-mono2 text-[9px] tracking-[0.2em] uppercase rounded px-2.5 py-1">
                IP · {p.field}
              </div>
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-brass/15 border border-brass/30 grid place-items-center text-brass">
                    <FileBadge size={18} />
                  </span>
                  <span className="font-mono2 text-[11px] tracking-[0.22em] text-brass-light">{p.id}</span>
                </div>
                <h3 className="font-display text-[1.45rem] font-semibold leading-tight mt-5 pr-6">{p.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-cream/60">{p.desc}</p>
                <div className="mt-6 pt-5 border-t border-dashed border-cream/15 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 font-mono2 text-[10px] tracking-[0.18em] uppercase text-cream/45">
                    <Lock size={11} /> Details under NDA
                  </span>
                  <a href="#contact" className="inline-flex items-center gap-1 font-mono2 text-[10px] tracking-[0.18em] uppercase text-brass-light hover:text-cream transition-colors">
                    License talk <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}

          {/* closing tile */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border-2 border-dashed border-ink/20 p-7 flex flex-col justify-between min-h-[260px] bg-white/50"
          >
            <p className="font-mono2 text-[10px] tracking-[0.25em] uppercase text-ink/50">PT-011 → in drafting</p>
            <div>
              <p className="font-display text-3xl font-medium leading-tight">The next file is already on the bench.</p>
              <p className="mt-3 text-sm text-ink/60">New filings emerge from the 16 research vectors above. Partners and licensees get first sight.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
