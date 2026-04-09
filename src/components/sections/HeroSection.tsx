"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { content, type Lang } from "@/lib/content";
import JolyButton from "@/components/ui/JolyButton";

interface HeroSectionProps {
  lang: Lang;
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = content.hero[lang];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Single background image — no people, pure business atmosphere */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&h=1080&fit=crop"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-bg-primary/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 lg:py-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-green/20 bg-accent-green/5 text-accent-green text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
              </span>
              {t.greeting}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight"
          >
            {lang === "th" ? (
              <>
                เทคโนโลยีที่ช่วยให้
                <br />
                <span className="bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
                  ธุรกิจคุณ
                </span>
                เติบโตได้จริง
              </>
            ) : (
              <>
                Technology that
                <br />
                actually{" "}
                <span className="bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
                  grows
                </span>{" "}
                your business
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-6 text-lg text-text-secondary leading-relaxed max-w-lg"
          >
            {t.subtitle}
          </motion.p>

          {/* buttons removed */}
        </div>
      </div>
    </section>
  );
}
