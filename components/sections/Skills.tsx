"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/portfolio";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="px-8 md:px-16 lg:px-20 py-20">
      {/* Section header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p
          className="text-xs tracking-widest uppercase font-mono mb-3"
          style={{ color: "var(--color-text-muted)" }}
        >
          Tech Stack
        </p>
        <h2
          className="text-3xl md:text-4xl font-semibold tracking-tight"
          style={{ color: "var(--color-text-primary)" }}
        >
          What I work with
        </h2>
      </motion.div>

      {/* Skills grid */}
      <div className="flex flex-col gap-6">
        {Object.entries(skills).map(([category, items], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.07 }}
            className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6"
          >
            {/* Category label */}
            <div className="sm:w-32 shrink-0 pt-0.5">
              <span
                className="text-xs font-mono tracking-wider uppercase"
                style={{ color: "var(--color-text-muted)" }}
              >
                {category}
              </span>
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2">
              {items.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: 0.15 + categoryIndex * 0.07 + skillIndex * 0.04,
                  }}
                  className="px-3 py-1.5 rounded-lg border text-xs font-mono transition-all duration-150 cursor-default"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-surface)",
                    color: "var(--color-text-secondary)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-text-muted)";
                    (e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)";
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
