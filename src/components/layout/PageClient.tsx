"use client";

import { useState, useEffect, useCallback } from "react";
import type { Lang } from "@/lib/content";
import MotionProvider from "@/components/providers/MotionProvider";
import BoxLoader from "@/components/ui/BoxLoader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ContactSection from "@/components/sections/ContactSection";
import SeoPromoSection from "@/components/sections/SeoPromoSection";
import { SparklesCore } from "@/components/ui/SparklesCore";
import UseCasesSection from "@/components/sections/UseCasesSection";
import QuoteBanner from "@/components/ui/QuoteBanner";

type Theme = "dark" | "light";

export default function PageClient() {
  const [loading] = useState(false);
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

  // BoxLoader removed for faster page load

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "th" ? "en" : "th"));
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg-primary">
        <BoxLoader />
      </div>
    );
  }

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
        <QuoteBanner text="Build Smart. Ship Fast." />
        <UseCasesSection lang={lang} />
        <PortfolioSection lang={lang} />
        <QuoteBanner text={lang === "th" ? "ซอฟต์แวร์ดี ไม่ต้องแพง แค่ต้องเจอทีมที่ใช่" : "Great software doesn't have to be expensive — just find the right team"} />
        <AboutSection lang={lang} />
        <ProcessSection lang={lang} />
        <QuoteBanner text={lang === "th" ? "คุณภาพระดับองค์กร ราคาที่ SME เอื้อมถึง" : "Enterprise quality, SME pricing"} />
        <WhyUsSection lang={lang} />
        <div className="relative overflow-hidden">
          {/* Shared sparkles across TechStack + SEO + Contact */}
          <div className="absolute inset-0 pointer-events-none">
            <SparklesCore
              id="bottom-sparkles"
              background="transparent"
              minSize={0.4}
              maxSize={1.4}
              particleDensity={50}
              speed={1}
              particleColor="#60a5fa"
              className="w-full h-full"
            />
          </div>
          <div className="absolute inset-0 bg-bg-primary/50 pointer-events-none" />
          <div className="relative z-10">
            <TechStackSection lang={lang} />
            <QuoteBanner text={lang === "th" ? "ไอเดียคุณ ซอฟต์แวร์เรา" : "Your idea, our software"} />
            <SeoPromoSection lang={lang} />
            <ContactSection lang={lang} />
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </MotionProvider>
  );
}
