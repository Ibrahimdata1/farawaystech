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
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

function SunIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar({ lang, onToggleLang, theme, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy();
  const nav = content.nav[lang];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg-primary/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <a href="#" className="font-mono text-2xl font-bold">
          <span className="text-accent-green">FarAway</span>
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
                className={`text-base transition-colors ${
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
            onClick={onToggleTheme}
            className="rounded border border-border p-2 text-text-secondary transition-colors hover:text-text-primary hover:border-text-secondary"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={onToggleLang}
            className="rounded border border-border px-3 py-1 text-sm text-text-secondary transition-colors hover:text-text-primary"
            aria-label={lang === "en" ? "Switch to Thai" : "Switch to English"}
          >
            {lang === "en" ? "TH" : "EN"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-3 md:hidden">
          <button
            onClick={onToggleTheme}
            className="rounded border border-border p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-text-secondary transition-colors hover:text-text-primary"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={onToggleLang}
            className="rounded border border-border px-3 py-2 min-h-[44px] min-w-[44px] text-sm text-text-secondary transition-colors hover:text-text-primary"
            aria-label={lang === "en" ? "Switch to Thai" : "Switch to English"}
          >
            {lang === "en" ? "TH" : "EN"}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-text-secondary hover:text-text-primary min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
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
            <div className="flex flex-col gap-1 px-4 sm:px-6 py-2">
              {NAV_ITEMS.map((item) => {
                const label = nav[navKeyMap[item.id]];
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setMobileOpen(false);
                      setTimeout(() => {
                        const el = document.querySelector(item.href) as HTMLElement | null;
                        if (el) {
                          window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: "smooth" });
                        }
                      }, 250);
                    }}
                    className={`w-full text-left text-base transition-colors py-2 min-h-[44px] flex items-center touch-manipulation ${
                      isActive
                        ? "text-accent-green"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
