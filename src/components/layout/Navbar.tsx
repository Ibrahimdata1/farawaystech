"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content, type Lang } from "@/lib/content";
import { NAV_ITEMS } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navKeyMap: Record<string, keyof typeof content.nav.en> = {
  services: "services",
  about: "about",
  process: "process",
  "why-us": "whyUs",
  "tech-stack": "techStack",
  contact: "contact",
};

interface NavbarProps {
  lang: Lang;
  onToggleLang: () => void;
}

export default function Navbar({ lang, onToggleLang }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy();
  const nav = content.nav[lang];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg-primary/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="font-mono text-xl font-bold">
          <span className="text-accent-green">FarAways</span>
          <span className="text-text-primary">Tech</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => {
            const label = nav[navKeyMap[item.id]];
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`text-sm transition-colors ${
                  isActive
                    ? "text-accent-green"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {label}
              </a>
            );
          })}
          <button
            onClick={onToggleLang}
            className="rounded border border-border px-3 py-1 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            {lang === "en" ? "TH" : "EN"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onToggleLang}
            className="rounded border border-border px-3 py-1 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            {lang === "en" ? "TH" : "EN"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-text-secondary hover:text-text-primary"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {NAV_ITEMS.map((item) => {
                const label = nav[navKeyMap[item.id]];
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm transition-colors ${
                      isActive
                        ? "text-accent-green"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
