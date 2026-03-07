"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { content, type Lang } from "@/lib/content";
import TerminalWindow from "@/components/ui/TerminalWindow";
import StatusBadge from "@/components/ui/StatusBadge";
import TypingAnimation from "@/components/ui/TypingAnimation";
import Button from "@/components/ui/Button";

const ParticleBackground = dynamic(
  () => import("@/components/ui/ParticleBackground"),
  { ssr: false }
);

interface HeroSectionProps {
  lang: Lang;
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = content.hero[lang];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <ParticleBackground />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-lg"
      >
        <TerminalWindow title="greeting.sh">
          <TypingAnimation
            text={t.greeting}
            className="text-accent-green font-mono text-sm"
          />
        </TerminalWindow>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="mt-8 text-center max-w-2xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-text-primary leading-tight">
          {t.headline}
        </h1>
        <p className="mt-4 text-lg text-text-secondary font-sans">
          {t.subtitle}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        className="mt-8 flex flex-col items-center gap-5"
      >
        <StatusBadge text={t.status} />
        <Button href="#contact">{t.cta}</Button>
      </motion.div>
    </section>
  );
}
