"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Chrome";
import { journey } from "@/data/content";
import { MapPin } from "lucide-react";

export default function Timeline() {
  return (
    <section id="journey" className="relative bg-ink py-20 md:py-32 overflow-hidden grain">
      <div className="absolute inset-0 blueprint-grid opacity-60" />
      <div className="relative max-w-[1440px] mx-auto px-5 md:px-10">
        <SectionHeading
          index="§ 02"
          eyebrow="Professional journey — 1995 → present"
          title={
            <>
              From the mill floor <span className="italic font-light text-brass-light">to the patent file.</span>
            </>
          }
          blurb="Four chapters. Each one banked operating knowledge the next one spends — maintenance discipline, plant leadership, commercial reality, then invention."
        />

        <div className="relative">
          {/* spine */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brass via-cream/20 to-transparent md:-translate-x-1/2" />

          <div className="flex flex-col gap-8 md:gap-0">
            {journey.map((j, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={j.index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.05 }}
                  className={`relative flex md:w-1/2 ${left ? "md:pr-14 md:self-start" : "md:pl-14 md:self-end"} pl-12 md:pl-0 ${left ? "" : "md:pl-14"} ${i > 0 ? "md:-mt-6 md:pt-14" : ""}`}
                >
                  {/* node */}
                  <span className="absolute left-[11px] md:left-auto top-2 md:top-[62px] md:right-[-9px] w-[18px] h-[18px] rounded-full border-2 border-brass bg-ink grid place-items-center"
                    style={left ? {} : { left: "-9px", right: "auto" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brass" />
                  </span>

                  <div className="flex-1 rounded-3xl border border-cream/12 bg-coal p-7 md:p-9 card-sheen hover:border-brass/50 transition-colors group">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono2 text-[11px] tracking-[0.24em] text-brass uppercase">{j.period}</span>
                      <span className="font-display italic text-5xl text-cream/10 group-hover:text-brass/30 transition-colors leading-none">{j.index}</span>
                    </div>
                    <h3 className="font-display text-2xl md:text-[2rem] font-semibold mt-3 leading-tight">{j.title}</h3>
                    <p className="mt-1.5 flex items-center gap-1.5 font-mono2 text-[11px] tracking-[0.12em] uppercase text-smoke">
                      <MapPin size={12} className="text-brass/70" /> {j.org}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-cream/65">{j.body}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {j.tags.map((t) => (
                        <span key={t} className="font-mono2 text-[10px] tracking-[0.14em] uppercase border border-cream/15 rounded-full px-3 py-1 text-cream/70">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
