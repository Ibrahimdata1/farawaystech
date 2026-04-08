"use client";

import { motion } from "framer-motion";
import { content, type Lang } from "@/lib/content";
import StatusBadge from "@/components/ui/StatusBadge";
import Button from "@/components/ui/Button";
import { FloatingPaths } from "@/components/ui/BackgroundPaths";
import { SparklesCore } from "@/components/ui/SparklesCore";

interface HeroSectionProps {
  lang: Lang;
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = content.hero[lang];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 hero-glow overflow-hidden">
      {/* Animated background paths */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      {/* Sparkle particles */}
      <div className="absolute inset-0 pointer-events-none">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={40}
          speed={0.5}
          particleColor="#3b82f6"
          className="w-full h-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-green/20 bg-accent-green/5 text-accent-green text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-40" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
          </span>
          {t.greeting}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        className="relative z-10 mt-8 text-center max-w-4xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1] tracking-tight">
          {lang === "th" ? (
            <>
              เราสร้าง
              <span className="bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
                ซอฟต์แวร์
              </span>
              ที่ตอบโจทย์ธุรกิจคุณ
            </>
          ) : (
            <>
              We build{" "}
              <span className="bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
                software
              </span>{" "}
              that works for your business
            </>
          )}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className="relative z-10 mt-10 flex flex-col items-center gap-6"
      >
        <div className="flex items-center gap-4">
          <Button href="#contact">{t.cta}</Button>
          <Button href="#services" variant="secondary">
            {lang === "th" ? "ดูบริการ" : "Our Services"}
          </Button>
        </div>
        <StatusBadge text={t.status} />
      </motion.div>
    </section>
  );
}
