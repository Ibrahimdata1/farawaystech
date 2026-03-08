"use client";

import { useState } from "react";
import Image from "next/image";
import { content, type Lang } from "@/lib/content";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioSectionProps {
  lang: Lang;
}

const screenshots = [
  { src: "/portfolio/qrforpay-dashboard.png", key: "dashboard" },
  { src: "/portfolio/qrforpay-products.png", key: "products" },
  { src: "/portfolio/qrforpay-orders.png", key: "orders" },
  { src: "/portfolio/qrforpay-tables.png", key: "tables" },
  { src: "/portfolio/qrforpay-settings.png", key: "settings" },
] as const;

export default function PortfolioSection({ lang }: PortfolioSectionProps) {
  const t = content.portfolio[lang];
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-text-secondary text-sm mb-2">
            {t.title}
          </p>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-text-primary mb-4">
            {t.heading}
          </h2>
          <p className="text-text-secondary font-sans max-w-2xl mb-12">
            {t.subtitle}
          </p>
        </ScrollReveal>

        {/* Project Card */}
        <ScrollReveal delay={0.1}>
          <div className="rounded-lg border border-border bg-bg-card overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-bg-primary/50">
              <div className="w-1 h-4 rounded-full bg-accent-green/60" />
              <span className="text-xs text-text-secondary font-sans tracking-wide uppercase">
                {t.projectLabel}
              </span>
            </div>

            <div className="p-4 sm:p-6 md:p-8">
              {/* Project Info */}
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left: Phone mockup */}
                <div className="flex flex-col items-center md:w-1/3">
                  <div className="relative w-[220px] h-[440px] sm:w-[260px] sm:h-[520px] rounded-[2rem] border-4 border-border bg-black overflow-hidden shadow-2xl">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIdx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full"
                      >
                        <Image
                          src={screenshots[activeIdx].src}
                          alt={t.screens[activeIdx]}
                          fill
                          className="object-cover"
                          sizes="260px"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Screen selector dots */}
                  <div className="flex gap-2 mt-4">
                    {screenshots.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveIdx(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all touch-manipulation ${
                          idx === activeIdx
                            ? "bg-accent-green scale-125"
                            : "bg-border hover:bg-text-secondary"
                        }`}
                        aria-label={t.screens[idx]}
                      />
                    ))}
                  </div>

                  {/* Screen label */}
                  <p className="text-xs text-text-secondary font-mono mt-2">
                    {t.screens[activeIdx]}
                  </p>
                </div>

                {/* Right: Project details */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent-green/10 text-accent-green border border-accent-green/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                      {t.status}
                    </span>
                    <span className="text-xs text-text-secondary font-mono">
                      {t.platform}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-sans font-bold text-text-primary mb-2">
                    {t.projectName}
                  </h3>
                  <p className="text-text-secondary font-sans mb-6 leading-relaxed">
                    {t.projectDesc}
                  </p>

                  {/* Features list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {t.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="text-accent-green mt-0.5 flex-shrink-0">
                          &#10003;
                        </span>
                        <span className="text-text-secondary font-sans">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech used */}
                  <div className="flex flex-wrap gap-2">
                    {t.techUsed.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-bg-primary border border-border text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
