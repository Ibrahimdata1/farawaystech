"use client";

import Image from "next/image";
import { content, type Lang } from "@/lib/content";
import { motion } from "motion/react";
import type { Variants, HTMLMotionProps } from "motion/react";
import React from "react";
import JolyButton from "@/components/ui/JolyButton";
import { cn } from "@/lib/utils";

interface ServicesSectionProps {
  lang: Lang;
}

// Solution images — no people/living things
const solutionImages = [
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop", // website on laptop
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop", // mobile app screen
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", // analytics dashboard
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", // data charts
];

const SPRING_TRANSITION = {
  type: "spring" as const,
  stiffness: 100,
  damping: 16,
  mass: 0.75,
};

const filterVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { opacity: 1, filter: "blur(0px)" },
};

const ContainerStagger = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ transition, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2, delayChildren: 0.2, duration: 0.3, ...transition }}
      {...props}
    />
  )
);
ContainerStagger.displayName = "ContainerStagger";

const ContainerAnimated = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ transition, ...props }, ref) => (
    <motion.div
      ref={ref}
      variants={filterVariants}
      transition={{ ...SPRING_TRANSITION, duration: 0.3, ...transition }}
      {...props}
    />
  )
);
ContainerAnimated.displayName = "ContainerAnimated";

const areaClasses = [
  "col-start-2 col-end-3 row-start-1 row-end-3",
  "col-start-1 col-end-2 row-start-2 row-end-4",
  "col-start-1 col-end-2 row-start-4 row-end-6",
  "col-start-2 col-end-3 row-start-3 row-end-5",
];

export default function ServicesSection({ lang }: ServicesSectionProps) {
  const t = content.services[lang];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 section-alt">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:px-8">
        {/* Left: Text */}
        <ContainerStagger>
          <ContainerAnimated className="mb-2 block text-sm font-medium text-accent-green uppercase tracking-wide">
            {t.title}
          </ContainerAnimated>
          <ContainerAnimated className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-text-primary">
            {t.heading}
          </ContainerAnimated>
          <ContainerAnimated className="my-5 text-base text-text-secondary leading-relaxed md:text-lg">
            {lang === "th"
              ? "เราช่วยธุรกิจลดต้นทุน เพิ่มลูกค้า และทำให้ระบบทำงานแทนคน — ด้วย solution ที่ออกแบบมาเพื่อธุรกิจคุณโดยเฉพาะ"
              : "We help businesses cut costs, gain customers, and automate operations — with solutions built specifically for your business"}
          </ContainerAnimated>
          <ContainerAnimated className="space-y-3 mb-8">
            {t.items.slice(0, 4).map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-secondary text-sm">{item.title}</span>
              </div>
            ))}
            {t.items.slice(4).map((item, i) => (
              <div key={i + 4} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-secondary text-sm">{item.title}</span>
              </div>
            ))}
          </ContainerAnimated>
          <ContainerAnimated>
            <JolyButton href="#contact">
              {lang === "th" ? "ปรึกษาฟรี" : "Free Consultation"}
            </JolyButton>
          </ContainerAnimated>
        </ContainerStagger>

        {/* Right: Gallery Grid */}
        <div className="hidden lg:grid grid-cols-2 grid-rows-[50px_150px_50px_150px_50px] gap-4">
          {solutionImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className={cn("relative overflow-hidden rounded-xl shadow-xl", areaClasses[index])}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="300px"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile: Simple image */}
        <div className="lg:hidden relative h-64 rounded-2xl overflow-hidden">
          <Image
            src={solutionImages[0]}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
