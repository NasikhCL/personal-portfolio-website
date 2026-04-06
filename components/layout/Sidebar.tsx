"use client";

import { Home, Briefcase, Rocket, Layers, Mail, Coffee } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home", Icon: Home },
  { label: "Work", href: "#work", Icon: Briefcase },
  { label: "Projects", href: "#projects", Icon: Rocket },
  { label: "Skills", href: "#skills", Icon: Layers },
  { label: "Contact", href: "#contact", Icon: Mail },
];

export default function Sidebar() {
  return (
    <aside
      className="fixed right-0 top-0 h-screen w-[260px] flex flex-col border-l"
      style={{
        backgroundColor: "var(--color-sidebar)",
        borderColor: "var(--color-border)",
      }}
    >
      {/* Logo */}
      <div className="px-7 pt-8 pb-6">
        <a
          href="#home"
          className="text-3xl"
          style={{
            fontFamily: "var(--font-dancing-script)",
            color: "var(--color-text-primary)",
          }}
        >
          {profile.displayName}
        </a>
      </div>

      {/* Divider */}
      <div className="mx-7 border-t" style={{ borderColor: "var(--color-border)" }} />

      {/* Navigation */}
      <nav className="px-5 pt-5 flex flex-col gap-0.5 flex-1">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150"
            style={{ color: "var(--color-text-secondary)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-surface)";
              (e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)";
            }}
          >
            <link.Icon size={15} strokeWidth={1.5} className="opacity-60 shrink-0" />
            <span>{link.label}</span>
          </a>
        ))}
      </nav>

      {/* Bottom block */}
      <div className="px-7 pb-7 flex flex-col gap-5">
        {/* Divider */}
        <div className="border-t" style={{ borderColor: "var(--color-border)" }} />

        {/* Profile — hover anywhere to see photo tooltip */}
        <div className="relative group/avatar flex items-center gap-3 cursor-default">
          {/* Tooltip preview — pops up above on hover */}
          <div
            className="absolute bottom-12 left-0 w-44 rounded-xl overflow-hidden border opacity-0 scale-95 pointer-events-none group-hover/avatar:opacity-100 group-hover/avatar:scale-100 transition-all duration-200 z-50"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            }}
          >
            <Image
              src="/avatar.jpeg"
              alt={profile.name}
              width={176}
              height={220}
              className="w-full object-cover object-top"
            />
          </div>

          {/* Small avatar circle */}
          <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border" style={{ borderColor: "var(--color-border)" }}>
            <Image
              src="/avatar.jpeg"
              alt={profile.name}
              width={36}
              height={36}
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
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-2">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-8 h-8 rounded-md border flex items-center justify-center text-xs transition-all duration-150"
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
            in
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-8 h-8 rounded-md border flex items-center justify-center text-xs transition-all duration-150"
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
            gh
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="w-8 h-8 rounded-md border flex items-center justify-center text-xs transition-all duration-150"
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
            @
          </a>
          <a
            href={profile.buymeacoffee}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buy Me a Coffee"
            className="w-8 h-8 rounded-md border flex items-center justify-center transition-all duration-150"
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
            <Coffee size={13} strokeWidth={1.5} />
          </a>
        </div>

        {/* Theme toggle */}
        <ThemeToggle />
      </div>
    </aside>
  );
}
