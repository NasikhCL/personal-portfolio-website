"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/portfolio";

function ExperienceCard({
  item,
  index,
}: {
  item: (typeof experience)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="relative pl-6 border-l"
      style={{ borderColor: "var(--color-border)" }}
    >
      {/* Timeline dot */}
      <div
        className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2"
        style={{
          borderColor: "var(--color-text-muted)",
          backgroundColor: "var(--color-bg)",
        }}
      />

      <div
        className="rounded-xl border p-6 transition-all duration-200"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--color-text-muted)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
        }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
          <div>
            <h3
              className="text-base font-semibold"
              style={{ color: "var(--color-text-primary)" }}
            >
              {item.role}
            </h3>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors duration-150"
              style={{ color: "var(--color-text-secondary)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)")
              }
            >
              {item.company} ↗
            </a>
          </div>
          <div className="text-right shrink-0">
            <p
              className="text-xs font-mono"
              style={{ color: "var(--color-text-muted)" }}
            >
              {item.period}
            </p>
            <p
              className="text-xs font-mono mt-0.5"
              style={{ color: "var(--color-text-muted)" }}
            >
              {item.location}
            </p>
          </div>
        </div>

        {/* Highlights */}
        <ul className="flex flex-col gap-2">
          {item.highlights.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
              <span
                className="mt-1.5 shrink-0 w-1 h-1 rounded-full"
                style={{ backgroundColor: "var(--color-text-muted)" }}
              />
              <span style={{ color: "var(--color-text-secondary)" }}>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="work" className="px-8 md:px-16 lg:px-20 py-20">
      {/* Section header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 16 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p
          className="text-xs tracking-widest uppercase font-mono mb-3"
          style={{ color: "var(--color-text-muted)" }}
        >
          Experience
        </p>
        <h2
          className="text-3xl md:text-4xl font-semibold tracking-tight"
          style={{ color: "var(--color-text-primary)" }}
        >
          Where I&apos;ve worked
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="flex flex-col gap-6">
        {experience.map((item, i) => (
          <ExperienceCard key={item.company} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
