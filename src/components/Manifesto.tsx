"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./Chrome";
import { ArrowUpRight } from "lucide-react";

const principles = [
  { k: "P-01", t: "Feasibility first", d: "Every idea must survive operating economics, not just peer review." },
  { k: "P-02", t: "Subtract energy", d: "The best kilowatt is the one the design never asks for." },
  { k: "P-03", t: "Scale or shelve", d: "Lab success means little until a plant can run it for a decade." },
];

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="manifesto" className="relative bg-paper text-ink overflow-hidden">
      <div className="absolute inset-0 blueprint-grid-light opacity-70" />
      <div ref={ref} className="relative max-w-[1440px] mx-auto px-5 md:px-10 py-20 md:py-32">
        <SectionHeading
          light
          index="§ 01"
          eyebrow="From industry to innovation"
          title={
            <>
              Thirty years inside the machine, <span className="italic text-rust">now redesigning it.</span>
            </>
          }
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* portrait / schematic card */}
          <motion.div style={{ y: yImg }} className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden bg-ink text-cream card-sheen">
              <div className="absolute inset-0 blueprint-grid opacity-60" />
              <div className="relative p-8 md:p-10">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-mono2 text-[10px] tracking-[0.3em] text-brass uppercase">Personnel file — PT/95</p>
                    <h3 className="font-display text-4xl md:text-5xl font-semibold mt-3 leading-none">
                      The Industrial<br />
                      <span className="italic font-light text-brass-light">Alchemist</span>
                    </h3>
                  </div>
                  <div className="w-14 h-14 rounded-full border border-brass/50 grid place-items-center font-display italic text-2xl text-brass shrink-0">
                    PT
                  </div>
                </div>

                {/* schematic figure */}
                <div className="mt-8 rounded-2xl border border-cream/15 bg-white/[0.03] p-6">
                  <svg viewBox="0 0 400 220" className="w-full h-auto">
                    <g stroke="#c99a3f" strokeWidth="1" fill="none" opacity="0.9">
                      <circle cx="200" cy="90" r="52" />
                      <circle cx="200" cy="90" r="38" strokeDasharray="4 6" />
                      <path d="M200 38 V20 M200 160 v18 M148 90 H120 M280 90 h28" />
                      <rect x="108" y="12" width="24" height="16" />
                      <rect x="268" y="12" width="24" height="16" />
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
                        <line
                          key={a}
                          x1={200 + Math.cos((a * Math.PI) / 180) * 38}
                          y1={90 + Math.sin((a * Math.PI) / 180) * 38}
                          x2={200 + Math.cos((a * Math.PI) / 180) * 52}
                          y2={90 + Math.sin((a * Math.PI) / 180) * 52}
                        />
                      ))}
                      <path d="M60 190 H340" strokeOpacity="0.5" />
                      <path d="M60 190 l10 -12 h20 l10 12 M150 190 l10 -12 h20 l10 12 M240 190 l10 -12 h20 l10 12" strokeOpacity="0.7" />
                    </g>
                    <g fontFamily="monospace" fontSize="10" fill="#c99a3f">
                      <text x="200" y="94" textAnchor="middle" fontSize="13">WIND → WORK</text>
                      <text x="60" y="210" opacity="0.7">FIG. 01 — NO-GRID DRIVE</text>
                      <text x="300" y="30" opacity="0.7">1995 →</text>
                    </g>
                  </svg>
                  <div className="mt-4 flex items-center justify-between font-mono2 text-[10px] tracking-[0.2em] uppercase text-cream/50">
                    <span>Mechanical Manager → GM → Founder → Inventor</span>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-cream/70">
                  Began 1995 on the floor of Mahakal Paper &amp; Pulp, rose to General Manager at
                  Rajeshwari, ran Thapak Petrol Pumps as an entrepreneur — then turned the whole
                  operating education toward research that pays its own energy bill.
                </p>
              </div>
            </div>
          </motion.div>

          {/* copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {[
              "Prashant Thapak is a Mechanical Engineer, industrial professional, researcher and inventor whose work moves deliberately from shop-floor reality to laboratory possibility — and back to plant scale.",
              "His approach combines practical industrial experience with engineering research, with one non-negotiable: technologies must translate from concepts and lab benches into practical industrial applications — at operating costs industry can actually bear.",
            ].map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className={`leading-relaxed ${i === 0 ? "font-display text-2xl md:text-[2rem] leading-snug font-medium" : "mt-6 text-ink/65 text-sm md:text-base"}`}
              >
                {p}
              </motion.p>
            ))}

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {principles.map((p, i) => (
                <motion.div
                  key={p.k}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="rounded-2xl border border-ink/12 bg-white/60 p-5 hover:border-rust/50 hover:shadow-[0_20px_50px_-20px_rgba(193,77,33,0.35)] transition-all"
                >
                  <p className="font-mono2 text-[10px] tracking-[0.25em] text-rust">{p.k}</p>
                  <h4 className="font-display text-xl font-semibold mt-2">{p.t}</h4>
                  <p className="text-[13px] text-ink/60 mt-2 leading-relaxed">{p.d}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              href="#research"
              className="mt-8 inline-flex w-fit items-center gap-2 font-mono2 text-xs tracking-[0.18em] uppercase border-b-2 border-ink/20 hover:border-rust pb-1 transition-colors"
            >
              See what the lab is chasing <ArrowUpRight size={15} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
