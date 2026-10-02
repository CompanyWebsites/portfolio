"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Chrome";
import { expertise } from "@/data/content";
import {
  Layers, Factory, GitBranch, Cog, Cpu, BadgeCheck,
  Atom, ChartNoAxesColumn, Zap, Gauge, FlaskConical, LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  layers: Layers, factory: Factory, git: GitBranch, cog: Cog, cpu: Cpu,
  badge: BadgeCheck, atom: Atom, chart: ChartNoAxesColumn, zap: Zap,
  gauge: Gauge, flask: FlaskConical,
};

export default function Expertise() {
  return (
    <section id="expertise" className="relative bg-coal border-y border-cream/10 py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <SectionHeading
          index="§ 03"
          eyebrow="Consultancy & technical expertise"
          title={
            <>
              Eleven disciplines, <span className="italic font-light text-brass-light">one operating logic.</span>
            </>
          }
          blurb="Engagements span manufacturing audits, plant development, process and energy optimisation, and technology build-outs — always measured in rupees per unit, not just efficiency points."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {expertise.map((e, i) => {
            const Icon = icons[e.icon] ?? Cog;
            const featured = i === 0;
            return (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.08 }}
                className={`group relative rounded-2xl border p-6 overflow-hidden transition-all hover:-translate-y-1 ${
                  featured
                    ? "sm:col-span-2 lg:col-span-2 bg-brass text-ink border-brass"
                    : "bg-white/[0.03] border-cream/12 hover:border-brass/60"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className={`w-11 h-11 rounded-xl grid place-items-center ${featured ? "bg-ink text-brass" : "bg-brass/12 text-brass border border-brass/25"}`}>
                    <Icon size={19} />
                  </span>
                  <span className={`font-mono2 text-[10px] tracking-[0.2em] ${featured ? "text-ink/60" : "text-smoke/70"}`}>
                    {String(i + 1).padStart(2, "0")} / 11
                  </span>
                </div>
                <h3 className={`font-display text-xl md:text-[1.35rem] font-semibold mt-5 leading-snug ${featured ? "text-ink" : ""}`}>
                  {e.title}
                </h3>
                <p className={`mt-2 text-[13px] leading-relaxed ${featured ? "text-ink/70" : "text-cream/55"}`}>{e.desc}</p>
                {featured && (
                  <p className="mt-4 font-mono2 text-[10px] tracking-[0.22em] uppercase text-ink/60">
                    Core depth — 1995 → present · Paper & pulp plants
                  </p>
                )}
              </motion.div>
            );
          })}

          {/* CTA tile */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="group rounded-2xl border border-dashed border-brass/50 p-6 flex flex-col justify-between min-h-[190px] hover:bg-brass/10 transition-colors"
          >
            <p className="font-mono2 text-[10px] tracking-[0.22em] uppercase text-brass">Need a plant diagnostic?</p>
            <div>
              <p className="font-display text-2xl font-medium">Bring the bottleneck. Keep the report.</p>
              <p className="mt-2 font-mono2 text-xs text-smoke group-hover:text-cream transition-colors">Request consultancy →</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
