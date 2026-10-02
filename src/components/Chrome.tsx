"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  index,
  eyebrow,
  title,
  blurb,
  light = false,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  blurb?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-4 mb-5"
      >
        <span className="font-mono2 text-xs text-brass tracking-[0.2em]">{index}</span>
        <span className={`h-px flex-1 ${light ? "bg-ink/15" : "bg-cream/15"}`} />
        <span className={`font-mono2 text-[10px] md:text-xs tracking-[0.28em] uppercase ${light ? "text-ink/60" : "text-smoke"}`}>
          {eyebrow}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight ${light ? "text-ink" : "text-cream"}`}
      >
        {title}
      </motion.h2>
      {blurb && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className={`mt-5 max-w-2xl text-sm md:text-base leading-relaxed ${light ? "text-ink/65" : "text-cream/60"}`}
        >
          {blurb}
        </motion.p>
      )}
    </div>
  );
}

export function Marquee({ items, dark = false }: { items: string[]; dark?: boolean }) {
  const row = [...items, ...items, ...items];
  return (
    <div className={`relative overflow-hidden border-y py-4 md:py-5 ${dark ? "border-ink/15 bg-brass" : "border-cream/12 bg-coal"}`}>
      <div className="flex w-max animate-marquee gap-0 mask-fade-x">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {row.map((t, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className={`font-display italic text-lg md:text-2xl px-6 whitespace-nowrap ${dark ? "text-ink" : "text-cream/90"}`}>
                  {t}
                </span>
                <span className={`text-sm ${dark ? "text-ink/60" : "text-brass"}`}>✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
