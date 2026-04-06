"use client";

import { useState } from "react";
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

  return (
    <header
      className="sticky top-0 z-50 px-5 h-14 flex items-center justify-between border-b"
      style={{
        backgroundColor: "var(--color-sidebar)",
        borderColor: "var(--color-border)",
      }}
    >
      {/* Logo */}
      <span
        className="text-2xl"
        style={{
          fontFamily: "var(--font-dancing-script)",
          color: "var(--color-text-primary)",
        }}
      >
        {profile.displayName}
      </span>

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

      {/* Dropdown menu */}
      {open && (
        <div
          className="absolute top-14 left-0 right-0 border-b px-5 py-5 flex flex-col gap-4"
          style={{
            backgroundColor: "var(--color-sidebar)",
            borderColor: "var(--color-border)",
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
        </div>
      )}
    </header>
  );
}
