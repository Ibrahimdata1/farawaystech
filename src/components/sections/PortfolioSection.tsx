"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { content, type Lang } from "@/lib/content";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";

interface PortfolioSectionProps {
  lang: Lang;
}

const projectScreenshots = {
  qrforpay: [
    { src: "/portfolio/qrforpay-dashboard.webp", key: "dashboard" },
    { src: "/portfolio/qrforpay-orders.webp", key: "orders" },
    { src: "/portfolio/qrforpay-tables.webp", key: "tables" },
    { src: "/portfolio/qrforpay-settings.webp", key: "settings" },
  ],
  wyckoffsignals: [
    { src: "/portfolio/wyckoff-landing.webp", key: "landing" },
    { src: "/portfolio/wyckoff-pricing.webp", key: "pricing" },
  ],
  runawaytech: [
    { src: "/portfolio/runaway-services.webp", key: "services" },
    { src: "/portfolio/runaway-contact.webp", key: "contact" },
  ],
} as const;

const SWIPE_THRESHOLD = 50;

function PhoneMockup({
  screenshots,
  screenLabels,
}: {
  screenshots: readonly { src: string; key: string }[];
  screenLabels: readonly string[];
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0);
  const constraintsRef = useRef(null);

  const goTo = (newIdx: number, dir: number) => {
    const wrapped =
      ((newIdx % screenshots.length) + screenshots.length) % screenshots.length;
    setDirection(dir);
    setActiveIdx(wrapped);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) goTo(activeIdx + 1, 1);
    else if (info.offset.x > SWIPE_THRESHOLD) goTo(activeIdx - 1, -1);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <div className="flex flex-col items-center md:w-1/3">
      <div
        ref={constraintsRef}
        className="relative w-[220px] h-[450px] sm:w-[260px] sm:h-[530px] overflow-hidden select-none cursor-grab active:cursor-grabbing"
      >
        {screenshots.map(
          (s, idx) =>
            idx !== activeIdx && (
              <Image
                key={`preload-${s.key}`}
                src={s.src}
                alt=""
                fill
                className="opacity-0 pointer-events-none"
                sizes="260px"
                aria-hidden
              />
            )
        )}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeIdx}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 touch-manipulation"
          >
            <Image
              src={screenshots[activeIdx].src}
              alt={screenLabels[activeIdx]}
              fill
              className="object-contain"
              sizes="260px"
              draggable={false}
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <div className="flex gap-1.5">
          {screenshots.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goTo(idx, idx > activeIdx ? 1 : -1)}
              className={`rounded-full transition-all duration-300 touch-manipulation ${
                idx === activeIdx
                  ? "w-6 h-2 bg-accent-green"
                  : "w-2 h-2 bg-border hover:bg-text-secondary"
              }`}
              aria-label={screenLabels[idx]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function BrowserMockup({
  screenshots,
  screenLabels,
  url,
}: {
  screenshots: readonly { src: string; key: string }[];
  screenLabels: readonly string[];
  url?: string;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (newIdx: number, dir: number) => {
    const wrapped =
      ((newIdx % screenshots.length) + screenshots.length) % screenshots.length;
    setDirection(dir);
    setActiveIdx(wrapped);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) goTo(activeIdx + 1, 1);
    else if (info.offset.x > SWIPE_THRESHOLD) goTo(activeIdx - 1, -1);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <div className="flex flex-col items-center md:w-2/5">
      {/* Browser frame */}
      <div className="w-full max-w-[480px] rounded-lg border border-border overflow-hidden bg-bg-primary shadow-lg">
        {/* Browser toolbar */}
        <div className="flex items-center gap-2 px-3 py-2 bg-bg-primary border-b border-border">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          {url && (
            <div className="flex-1 ml-2 px-3 py-1 rounded-md bg-bg-card text-xs text-text-secondary font-mono truncate">
              {url.replace("https://", "")}
            </div>
          )}
        </div>
        {/* Screenshot area */}
        <div className="relative w-full aspect-[16/9] overflow-hidden select-none cursor-grab active:cursor-grabbing">
          {screenshots.map(
            (s, idx) =>
              idx !== activeIdx && (
                <Image
                  key={`preload-${s.key}`}
                  src={s.src}
                  alt=""
                  fill
                  className="opacity-0 pointer-events-none"
                  sizes="480px"
                  aria-hidden
                />
              )
          )}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIdx}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={handleDragEnd}
              className="absolute inset-0 touch-manipulation"
            >
              <Image
                src={screenshots[activeIdx].src}
                alt={screenLabels[activeIdx]}
                fill
                className="object-cover"
                sizes="480px"
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {/* Dots */}
      <div className="flex items-center gap-3 mt-4">
        <div className="flex gap-1.5">
          {screenshots.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goTo(idx, idx > activeIdx ? 1 : -1)}
              className={`rounded-full transition-all duration-300 touch-manipulation ${
                idx === activeIdx
                  ? "w-6 h-2 bg-accent-green"
                  : "w-2 h-2 bg-border hover:bg-text-secondary"
              }`}
              aria-label={screenLabels[idx]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection({ lang }: PortfolioSectionProps) {
  const t = content.portfolio[lang];

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

        <div className="flex flex-col gap-8">
          {t.projects.map((project, projectIdx) => {
            const screenshotKey =
              project.projectName.toLowerCase() as keyof typeof projectScreenshots;
            const screenshots = projectScreenshots[screenshotKey];

            return (
              <ScrollReveal key={project.projectName} delay={0.1 * (projectIdx + 1)}>
                <div className="rounded-lg border border-border bg-bg-card overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-bg-primary/50">
                    <div className="w-1 h-4 rounded-full bg-accent-green/60" />
                    <span className="text-xs text-text-secondary font-sans tracking-wide uppercase">
                      {project.projectLabel}
                    </span>
                  </div>

                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Left: Mockup */}
                      {project.type === "mobile" ? (
                        <PhoneMockup
                          screenshots={screenshots}
                          screenLabels={project.screens}
                        />
                      ) : (
                        <BrowserMockup
                          screenshots={screenshots}
                          screenLabels={project.screens}
                          url={(project as { url?: string }).url}
                        />
                      )}

                      {/* Right: Project details */}
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent-green/10 text-accent-green border border-accent-green/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                            {project.status}
                          </span>
                          <span className="text-xs text-text-secondary font-mono">
                            {project.platform}
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-sans font-bold text-text-primary mb-2">
                          {project.projectName}
                        </h3>
                        <p className="text-text-secondary font-sans mb-6 leading-relaxed">
                          {project.projectDesc}
                        </p>

                        {/* Features list */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                          {project.features.map((feature, idx) => (
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
                          {project.techUsed.map((tech) => (
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
