"use client";

import { useState } from "react";
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

export default function Home() {
  const [lang, setLang] = useState<Lang>("th");

  const toggleLang = () => {
    setLang((prev) => (prev === "th" ? "en" : "th"));
  };

  return (
    <MotionProvider>
      <Navbar lang={lang} onToggleLang={toggleLang} />
      <main>
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
