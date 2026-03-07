"use client";

import { useState, useEffect, useCallback } from "react";
import type { Lang } from "@/lib/content";
import MotionProvider from "@/components/providers/MotionProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ContactSection from "@/components/sections/ContactSection";

type Theme = "dark" | "light";

export default function PageClient() {
  const [lang, setLang] = useState<Lang>("th");
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem("theme");
    return saved === "light" || saved === "dark" ? saved : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "th" ? "en" : "th"));
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <MotionProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent-green focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar lang={lang} onToggleLang={toggleLang} theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content" className="overflow-x-hidden">
        <HeroSection lang={lang} />
        <ServicesSection lang={lang} />
        <AboutSection lang={lang} />
        <ProcessSection lang={lang} />
        <WhyUsSection lang={lang} />
        <TechStackSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </MotionProvider>
  );
}
