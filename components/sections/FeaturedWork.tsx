"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { featured } from "@/data/portfolio";

export default function FeaturedWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-8 md:px-16 lg:px-20 py-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <a
          href={featured.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border p-7 transition-all duration-300"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-surface-hover)";
            (e.currentTarget as HTMLElement).style.borderColor = "var(--color-text-muted)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-surface)";
            (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
          }}
        >
          {/* Label */}
          <div className="flex items-center gap-2 mb-5">
            <span
              className="text-xs tracking-widest uppercase font-mono"
              style={{ color: "var(--color-text-muted)" }}
            >
              ✏ {featured.label}
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-2xl md:text-3xl font-semibold leading-snug mb-3 tracking-tight"
            style={{ color: "var(--color-text-primary)" }}
          >
            {featured.title}
          </h2>

          <p
            className="text-sm mb-1 font-mono"
            style={{ color: "var(--color-text-muted)" }}
          >
            @ {featured.company}
          </p>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mt-4 mb-6 max-w-xl"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {featured.description}
          </p>

          {/* CTA */}
          <span
            className="inline-flex items-center gap-1.5 text-sm transition-all duration-200"
            style={{ color: "var(--color-text-secondary)" }}
          >
            View project
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </span>
        </a>
      </motion.div>
    </section>
  );
}
