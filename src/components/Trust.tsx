"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./Chrome";
import { collaborations } from "@/data/content";
import { GraduationCap, ArrowUpRight, Quote } from "lucide-react";

export function Collaborations() {
  return (
    <section id="collab" className="relative bg-coal border-y border-cream/10 py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <SectionHeading
          index="§ 06"
          eyebrow="Research collaborations — Bhopal academic corridor"
          title={
            <>
              Shop-floor questions, <span className="italic font-light text-brass-light">lab-grade answers.</span>
            </>
          }
          blurb="Independent innovation validated with leading technical institutions — combining industrial experience with academic rigour."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {collaborations.map((c, i) => (
            <motion.div
              key={c.abbr}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl bg-ink border border-cream/12 p-8 overflow-hidden hover:border-brass/60 transition-colors"
            >
              <div className="absolute -top-10 -right-10 font-display font-black text-[9rem] leading-none text-cream/[0.05] select-none">
                {c.abbr}
              </div>
              <span className="relative inline-flex items-center gap-2 font-mono2 text-[10px] tracking-[0.22em] uppercase text-brass border border-brass/30 rounded-full px-3.5 py-1.5">
                <GraduationCap size={13} /> Academic partner
              </span>
              <h3 className="relative font-display text-3xl md:text-4xl font-semibold mt-5">{c.name}</h3>
              <p className="relative mt-1 font-mono2 text-[11px] tracking-[0.08em] text-smoke uppercase">{c.full}</p>
              <p className="relative mt-4 text-sm text-cream/60 leading-relaxed">{c.role}</p>
              <div className="relative mt-6 pt-5 border-t border-cream/10 flex items-center justify-between">
                <span className="font-mono2 text-[10px] tracking-[0.2em] uppercase text-cream/40">Bhopal · MP · IN</span>
                <ArrowUpRight size={16} className="text-brass group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["4%", "-8%"]);

  return (
    <section ref={ref} className="relative bg-ink py-24 md:py-36 overflow-hidden grain">
      <motion.div style={{ x: x1 }} className="whitespace-nowrap font-display font-black text-[11vw] leading-none text-stroke opacity-40 select-none pointer-events-none">
        RETHINK THE SYSTEM — RETHINK THE SYSTEM —
      </motion.div>
      <div className="relative max-w-4xl mx-auto px-5 md:px-10 text-center mt-4">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-grid place-items-center w-14 h-14 rounded-full border border-brass/40 text-brass mb-8"
        >
          <Quote size={22} />
        </motion.span>
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl md:text-5xl lg:text-[3.4rem] font-medium leading-[1.15]"
        >
          “Innovation becomes meaningful when engineering ideas can be{" "}
          <span className="italic text-brass-light">transformed into practical solutions.</span>”
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 font-mono2 text-[11px] tracking-[0.3em] uppercase text-smoke"
        >
          — Engineering philosophy · Prashant Thapak
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-sm md:text-base text-cream/55 leading-relaxed max-w-2xl mx-auto"
        >
          Rethink conventional systems wherever energy consumption, operating cost, environmental
          impact and resource efficiency matter — then prove feasibility, economics, scalability
          and testability before claiming victory.
        </motion.p>
      </div>
    </section>
  );
}
