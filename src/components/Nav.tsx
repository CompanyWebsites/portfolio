"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { n: "01", label: "Journey", href: "#journey" },
  { n: "02", label: "Expertise", href: "#expertise" },
  { n: "03", label: "Research", href: "#research" },
  { n: "04", label: "IP Vault", href: "#ip" },
  { n: "05", label: "Lab Network", href: "#collab" },
  { n: "06", label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/85 backdrop-blur-xl border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 h-[68px] flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full border border-brass/60 grid place-items-center font-mono2 text-[11px] text-brass group-hover:bg-brass group-hover:text-ink transition-colors">
              PT
            </div>
            <div className="leading-none">
              <p className="font-display font-semibold tracking-wide text-[15px]">
                PRASHANT THAPAK
              </p>
              <p className="font-mono2 text-[9px] tracking-[0.28em] text-smoke uppercase mt-1">
                Est. 1995 — Hoshangabad / Bhopal
              </p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.n}
                href={l.href}
                className="group flex items-baseline gap-1.5 font-mono2 text-[11px] tracking-[0.18em] uppercase text-smoke hover:text-cream transition-colors"
              >
                <span className="text-brass/70 text-[9px]">{l.n}</span>
                <span className="relative">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-brass transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-1.5 bg-cream text-ink font-mono2 text-[11px] tracking-[0.14em] uppercase px-4 py-2.5 rounded-full hover:bg-brass transition-colors"
            >
              Collaborate <ArrowUpRight size={14} />
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-full border border-line"
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink/97 backdrop-blur-2xl lg:hidden pt-[80px] px-6"
          >
            <div className="flex flex-col gap-1 mt-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.n}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.06 * i }}
                  className="flex items-baseline gap-4 py-4 border-b border-line"
                >
                  <span className="font-mono2 text-brass text-xs">{l.n}</span>
                  <span className="font-display text-4xl font-medium">{l.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
