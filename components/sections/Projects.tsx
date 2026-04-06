"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket } from "lucide-react";
import { projects } from "@/data/portfolio";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const CardWrapper = project.link
    ? ({ children }: { children: React.ReactNode }) => (
        <a
          href={project.link!}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-xl border p-6 transition-all duration-200 h-full"
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
          {children}
        </a>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <div
          className="rounded-xl border p-6 h-full"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          {children}
        </div>
      );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="h-full"
    >
      <CardWrapper>
        <div className="flex flex-col h-full gap-4">
          {/* Top row: icon + status */}
          <div className="flex items-start justify-between">
            <Rocket
              size={18}
              strokeWidth={1.5}
              style={{ color: "var(--color-text-muted)" }}
            />
            <span
              className="text-xs font-mono px-2 py-1 rounded-md border"
              style={{
                borderColor: "var(--color-border)",
                color: project.status === "live" ? "#4ade80" : "var(--color-text-muted)",
                backgroundColor: "transparent",
              }}
            >
              {project.status === "live" ? "● live" : `○ ${project.status}`}
            </span>
          </div>

          {/* Title */}
          <div className="flex items-center gap-2">
            <h3
              className="text-base font-semibold"
              style={{ color: "var(--color-text-primary)" }}
            >
              {project.title}
            </h3>
            {project.link && (
              <span
                className="text-sm transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: "var(--color-text-muted)" }}
              >
                ↗
              </span>
            )}
          </div>

          {/* Description */}
          <p
            className="text-sm leading-relaxed flex-1"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded-md border"
                style={{
                  borderColor: "var(--color-border-subtle)",
                  backgroundColor: "var(--color-bg)",
                  color: "var(--color-text-muted)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </CardWrapper>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="px-8 md:px-16 lg:px-20 py-20">
      {/* Section header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 16 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="flex items-center gap-2 mb-3">
          <Rocket size={12} strokeWidth={1.5} style={{ color: "var(--color-text-muted)" }} />
          <p
            className="text-xs tracking-widest uppercase font-mono"
            style={{ color: "var(--color-text-muted)" }}
          >
            Projects
          </p>
        </div>
        <h2
          className="text-3xl md:text-4xl font-semibold tracking-tight"
          style={{ color: "var(--color-text-primary)" }}
        >
          Things I&apos;ve shipped
        </h2>
      </motion.div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
