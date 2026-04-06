"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { profile } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Close on scroll
  useEffect(() => {
    if (!open) return;
    const handleScroll = () => setOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 px-5 h-14 flex items-center justify-between border-b"
        style={{
          backgroundColor: "var(--color-sidebar)",
          borderColor: "var(--color-border)",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl"
          style={{
            fontFamily: "var(--font-dancing-script)",
            color: "var(--color-text-primary)",
          }}
        >
          {profile.displayName}
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="w-8 h-8 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
        >
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--color-text-secondary)",
              transform: open ? "translateY(5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--color-text-secondary)",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--color-text-secondary)",
              transform: open ? "translateY(-5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </header>

      {/* Backdrop blur overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-sm"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Dropdown menu */}
      <div
        className="fixed top-14 left-0 right-0 z-50 border-b px-5 py-5 flex flex-col gap-4 transition-all duration-200"
        style={{
          backgroundColor: "var(--color-sidebar)",
          borderColor: "var(--color-border)",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-8px)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-sm py-1"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {link.label}
          </a>
        ))}
        <div className="pt-2 border-t" style={{ borderColor: "var(--color-border)" }}>
          <ThemeToggle />
        </div>

        {/* Profile block */}
        <a
          href="#avatar-footer"
          onClick={() => setOpen(false)}
          className="pt-2 border-t flex items-end gap-3"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div
            className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border"
            style={{ borderColor: "var(--color-border)" }}
          >
            <Image
              src="/avatar.jpeg"
              alt={profile.name}
              width={40}
              height={40}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium truncate" style={{ color: "var(--color-text-primary)" }}>
              {profile.displayName}
            </p>
            <p className="text-xs truncate" style={{ color: "var(--color-text-secondary)" }}>
              {profile.title}
            </p>
          </div>
        </a>
      </div>
    </>
  );
}
