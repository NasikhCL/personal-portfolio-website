"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Coffee } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="px-8 md:px-16 lg:px-20 py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-2xl border p-10 md:p-14"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
      >
        <p
          className="text-xs tracking-widest uppercase font-mono mb-5"
          style={{ color: "var(--color-text-muted)" }}
        >
          Let&apos;s connect
        </p>

        <h2
          className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          Let&apos;s build something
          <br />
          <span style={{ color: "var(--color-text-secondary)" }}>great together.</span>
        </h2>

        <p
          className="text-sm leading-relaxed max-w-md mb-10"
          style={{ color: "var(--color-text-secondary)" }}
        >
          I&apos;m open to Developer roles, freelance projects, and interesting collaborations.
          Drop me a message — I usually reply within a day.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="px-5 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200"
            style={{
              backgroundColor: "var(--color-text-primary)",
              color: "var(--color-bg)",
              borderColor: "var(--color-text-primary)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.85";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
            }}
          >
            {profile.email} →
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg text-sm border transition-all duration-200"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-secondary)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-surface-hover)";
              (e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-text-muted)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
            }}
          >
            LinkedIn ↗
          </a>

          <a
            href={profile.buymeacoffee}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm border transition-all duration-200"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-secondary)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-surface-hover)";
              (e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-text-muted)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
            }}
          >
            <Coffee size={14} strokeWidth={1.5} />
            Buy me a coffee
          </a>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 pt-8 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
        style={{ borderColor: "var(--color-border)" }}
      >
        <span
          className="text-xs font-mono"
          style={{ color: "var(--color-text-muted)" }}
        >
          Designed & Developed by{" "}
          <span style={{ color: "var(--color-text-secondary)" }}>Nasikh Mahamood CL</span>
        </span>
        <span
          className="text-xs font-mono"
          style={{ color: "var(--color-text-muted)" }}
        >
          Built with Next.js · Tailwind CSS · Framer Motion
        </span>
      </motion.div>
    </section>
  );
}
