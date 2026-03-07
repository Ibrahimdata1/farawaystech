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

export default function Home() {
  const [lang, setLang] = useState<Lang>("th");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleLang = () => {
    setLang((prev) => (prev === "th" ? "en" : "th"));
  };

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <MotionProvider>
      <Navbar lang={lang} onToggleLang={toggleLang} theme={theme} onToggleTheme={toggleTheme} />
      <main className="overflow-x-hidden">
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
