"use client";

import { content, Lang } from "@/lib/content";
import TerminalWindow from "@/components/ui/TerminalWindow";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ProcessSectionProps {
  lang: Lang;
}

export default function ProcessSection({ lang }: ProcessSectionProps) {
  const data = content.process[lang];

  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-text-secondary font-mono text-sm mb-2">
            {data.title}
          </p>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-text-primary mb-16">
            {data.heading}
          </h2>
        </ScrollReveal>

        {/* Desktop: Horizontal Pipeline */}
        <div className="hidden md:flex items-start gap-0">
          {data.steps.map((step, i) => (
            <div key={i} className="flex items-start flex-1">
              <ScrollReveal delay={i * 0.15} className="flex-1">
                <TerminalWindow title={`step-${step.num}`}>
                  <p className="text-accent-green font-mono text-2xl font-bold mb-2">
                    {step.num}
                  </p>
                  <p className="text-text-primary font-medium font-sans mb-1">
                    {step.title}
                  </p>
                  <p className="text-text-secondary font-sans text-sm">
                    {step.desc}
                  </p>
                </TerminalWindow>
              </ScrollReveal>
              {i < data.steps.length - 1 && (
                <div className="flex items-center px-2 pt-12 shrink-0">
                  <span className="text-text-secondary text-xl">&rarr;</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden space-y-0">
          {data.steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <ScrollReveal delay={i * 0.1} className="w-full">
                <TerminalWindow title={`step-${step.num}`}>
                  <p className="text-accent-green font-mono text-2xl font-bold mb-2">
                    {step.num}
                  </p>
                  <p className="text-text-primary font-medium font-sans mb-1">
                    {step.title}
                  </p>
                  <p className="text-text-secondary font-sans text-sm">
                    {step.desc}
                  </p>
                </TerminalWindow>
              </ScrollReveal>
              {i < data.steps.length - 1 && (
                <div className="h-8 w-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
