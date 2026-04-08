"use client";

import { content, Lang } from "@/lib/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ProcessSectionProps {
  lang: Lang;
}

export default function ProcessSection({ lang }: ProcessSectionProps) {
  const data = content.process[lang];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-accent-green font-medium text-sm mb-3 tracking-wide uppercase">
            {data.title}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {data.heading}
          </h2>
          <div className="w-12 h-0.5 bg-accent-green/40 mb-16" />
        </ScrollReveal>

        {/* Desktop: Horizontal */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-0">
          {data.steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.12} className="relative">
              <div className="text-center px-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-accent-green/30 bg-accent-green/5 text-accent-green text-lg font-bold mb-5">
                  {step.num}
                </div>
                {i < data.steps.length - 1 && (
                  <div className="absolute top-7 left-[calc(50%+40px)] right-0 h-px bg-border hidden lg:block" />
                )}
                <p className="text-text-primary font-semibold mb-1.5 text-[15px]">
                  {step.title}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile/Tablet: Vertical */}
        <div className="lg:hidden space-y-0">
          {data.steps.map((step, i) => (
            <div key={i} className="flex">
              {/* Left: number + line */}
              <div className="flex flex-col items-center mr-5">
                <ScrollReveal delay={i * 0.1}>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-accent-green/30 bg-accent-green/5 text-accent-green text-sm font-bold">
                    {step.num}
                  </div>
                </ScrollReveal>
                {i < data.steps.length - 1 && (
                  <div className="flex-1 w-px bg-border my-2" />
                )}
              </div>
              {/* Right: content */}
              <ScrollReveal delay={i * 0.1} className="pb-8 pt-1.5">
                <p className="text-text-primary font-semibold mb-1">
                  {step.title}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.desc}
                </p>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
