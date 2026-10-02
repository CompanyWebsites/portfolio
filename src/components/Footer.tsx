"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp, Factory, FlaskConical, Wind, Droplets } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-brass text-ink overflow-hidden">
      <div className="absolute inset-0 blueprint-grid-light opacity-60" />
      {/* ghost */}
      <div className="absolute bottom-0 left-0 right-0 text-center font-display font-black text-[16vw] leading-[0.8] text-ink/[0.06] select-none pointer-events-none">
        THAPAK
      </div>

      <div className="relative max-w-[1440px] mx-auto px-5 md:px-10 pt-20 md:pt-28 pb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono2 text-[11px] tracking-[0.3em] uppercase text-ink/60"
        >
          § 07 — Looking ahead · Open for collaboration
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black tracking-tight leading-[0.92] text-[13vw] md:text-[8.5vw] mt-4"
        >
          BUILD WHAT&apos;S<br />
          <span className="italic font-light">NEXT.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl text-sm md:text-lg leading-relaxed text-ink/75"
        >
          Today the work sits at the intersection of engineering, industry and research — building
          a platform where industrial experience, scientific research, engineering innovation and
          intellectual property converge into technologies that scale against real-world challenges.
        </motion.p>

        {/* cards */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Factory, t: "Plant consultancy", d: "Audits · optimisation · planning" },
            { icon: Wind, t: "Clean-air systems", d: "No-electricity purification" },
            { icon: FlaskConical, t: "Joint R&D", d: "Universities · pilot partners" },
            { icon: Droplets, t: "Energy & water", d: "Thermal · carbon · effluent" },
          ].map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-ink text-cream p-6 flex flex-col gap-3"
            >
              <c.icon size={20} className="text-brass" />
              <p className="font-display text-xl font-semibold">{c.t}</p>
              <p className="font-mono2 text-[11px] tracking-[0.12em] uppercase text-cream/55">{c.d}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:contact@prashantthapak.in?subject=Collaboration%20—%20Prashant%20Thapak%20Portfolio"
            className="group inline-flex items-center gap-2 bg-ink text-cream font-mono2 text-xs tracking-[0.16em] uppercase px-8 py-4 rounded-full hover:bg-coal transition-colors"
          >
            Start a conversation
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-2 border-2 border-ink/30 font-mono2 text-xs tracking-[0.16em] uppercase px-8 py-4 rounded-full hover:border-ink hover:bg-ink hover:text-cream transition-colors"
          >
            <ArrowUp size={15} /> Back to top
          </a>
        </div>

        {/* bottom bar */}
        <div className="mt-16 pt-6 border-t-2 border-ink/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-ink text-brass grid place-items-center font-mono2 text-[11px]">PT</div>
            <div className="leading-tight">
              <p className="font-display font-semibold">Prashant Thapak</p>
              <p className="font-mono2 text-[10px] tracking-[0.2em] uppercase text-ink/60">Engineer · Industrialist · Researcher · Inventor</p>
            </div>
          </div>
          <p className="font-mono2 text-[10px] tracking-[0.2em] uppercase text-ink/55">
            Hoshangabad — Bhopal · Since 1995 · © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
