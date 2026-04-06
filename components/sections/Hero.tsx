"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

const roles = [
  "Frontend Developer",
  "React Engineer",
  "SaaS Builder",
  "Performance Enthusiast",
];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(current.slice(0, charIndex + 1));
          if (charIndex + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIndex((c) => c + 1);
          }
        } else {
          setDisplay(current.slice(0, charIndex - 1));
          if (charIndex - 1 === 0) {
            setDeleting(false);
            setWordIndex((w) => (w + 1) % words.length);
            setCharIndex(0);
          } else {
            setCharIndex((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return display;
}

export default function Hero() {
  const role = useTypewriter(roles);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-20 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-xs tracking-widest uppercase mb-6 font-mono"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {profile.location} · Available for work
        </motion.p>

        {/* Greeting */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight mb-6"
          style={{ color: "var(--color-text-primary)" }}
        >
          Hey, I&apos;m{" "}
          <span style={{ fontFamily: "var(--font-dancing-script)", fontWeight: 700 }}>
            {profile.displayName}
          </span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl md:text-2xl mb-8 h-9 font-light"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {role}
          <span
            className="inline-block w-0.5 h-6 ml-1 align-middle animate-pulse"
            style={{ backgroundColor: "var(--color-text-muted)" }}
          />
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-base leading-relaxed max-w-lg mb-10"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {profile.summary}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
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
            See My Work →
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="px-5 py-2.5 rounded-lg text-sm border transition-all duration-200"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-secondary)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-surface)";
              (e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)";
            }}
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-8 md:left-16 lg:left-20 flex items-center gap-2"
        style={{ color: "var(--color-text-muted)" }}
      >
        <div className="w-px h-12 bg-current opacity-30" />
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
      </motion.div>
    </section>
  );
}
