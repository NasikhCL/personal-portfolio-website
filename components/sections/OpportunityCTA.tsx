"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/data/portfolio";

export default function OpportunityCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="px-8 md:px-16 lg:px-20 py-4">
      <motion.a
        ref={ref}
        href={`mailto:${profile.email}`}
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="group flex items-center justify-between rounded-xl border px-6 py-4 transition-all duration-200"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: "transparent",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-surface)";
          (e.currentTarget as HTMLElement).style.borderColor = "var(--color-text-muted)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
          (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
        }}
      >
        <div className="flex items-center gap-3">
          <span
            className="text-xs w-2 h-2 rounded-full bg-current animate-pulse flex-shrink-0"
            style={{ color: "#4ade80" }}
          />
          <span
            className="text-sm font-mono tracking-wide"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Open to new opportunities
          </span>
          <span style={{ color: "var(--color-text-muted)" }}>·</span>
          <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
            {profile.email}
          </span>
        </div>
        <span
          className="text-sm transition-transform duration-200 group-hover:translate-x-1"
          style={{ color: "var(--color-text-muted)" }}
        >
          →
        </span>
      </motion.a>
    </section>
  );
}
