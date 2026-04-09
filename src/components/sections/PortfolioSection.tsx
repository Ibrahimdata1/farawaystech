"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { content, type Lang } from "@/lib/content";
import ScrollReveal from "@/components/ui/ScrollReveal";
import JolyButton from "@/components/ui/JolyButton";
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
    { src: "/portfolio/wyckoff-landing-v2.webp", key: "landing" },
    { src: "/portfolio/wyckoff-pricing-v2.webp", key: "pricing" },
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
    <div className="flex flex-col items-center lg:w-1/3">
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
    <div className="flex flex-col items-center lg:w-2/5">
      <div className="w-full max-w-[480px] rounded-xl border border-border/50 overflow-hidden bg-bg-card/50 shadow-2xl shadow-accent-green/5">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-bg-card border-b border-border/50">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          </div>
          {url && (
            <div className="flex-1 ml-2 px-3 py-1 rounded-lg bg-bg-primary/80 text-xs text-text-secondary font-mono truncate">
              {url.replace("https://", "")}
            </div>
          )}
        </div>
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
          <div className="text-center mb-14">
            <p className="text-accent-green font-medium text-sm mb-3 tracking-wide uppercase">
              {t.title}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              {t.heading}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-12">
          {t.projects.map((project, projectIdx) => {
            const screenshotKey =
              project.projectName.toLowerCase() as keyof typeof projectScreenshots;
            const screenshots = projectScreenshots[screenshotKey];

            return (
              <ScrollReveal key={project.projectName} delay={0.1 * (projectIdx + 1)}>
                <div className="group relative rounded-2xl border border-border/40 bg-gradient-to-b from-bg-card/80 to-bg-primary/40 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-accent-green/20 hover:shadow-lg hover:shadow-accent-green/5">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-green/[0.02] via-transparent to-accent-blue/[0.02] pointer-events-none" />

                  {/* Header badge */}
                  <div className="relative flex items-center gap-3 px-6 py-4 border-b border-border/30">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                      <span className="text-xs text-text-secondary tracking-widest uppercase font-medium">
                        {project.projectLabel}
                      </span>
                    </div>
                  </div>

                  <div className="relative p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row gap-10 items-center">
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
                        <div className="flex items-center gap-3 mb-5">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-status-green/10 text-status-green border border-status-green/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-status-green animate-pulse" />
                            {project.status}
                          </span>
                          <span className="text-xs text-text-secondary/60 font-mono tracking-wider">
                            {project.platform}
                          </span>
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-3 tracking-tight">
                          {project.projectName}
                        </h3>
                        <p className="text-text-secondary mb-8 leading-relaxed text-[15px]">
                          {project.projectDesc}
                        </p>

                        {/* Features list */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                          {project.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2.5 text-sm"
                            >
                              <svg className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-text-secondary">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Tech used */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.techUsed.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 text-xs font-mono rounded-lg bg-bg-card border border-border/50 text-text-secondary hover:border-accent-green/30 hover:text-accent-green transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Visit link */}
                        {(project as { url?: string }).url && (
                          <JolyButton href={(project as { url?: string }).url}>
                            {lang === "th" ? "ดูเว็บจริง" : "Visit Site"}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </JolyButton>
                        )}
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
