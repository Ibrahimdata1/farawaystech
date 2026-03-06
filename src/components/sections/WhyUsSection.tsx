"use client";

import { content, type Lang } from "@/lib/content";
import TerminalWindow from "@/components/ui/TerminalWindow";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServiceIcon from "@/components/ui/ServiceIcon";

interface WhyUsSectionProps {
  lang: Lang;
}

export default function WhyUsSection({ lang }: WhyUsSectionProps) {
  const t = content.whyUs[lang];

  return (
    <section id="why-us" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-accent-green font-mono text-sm mb-2">{t.title}</p>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-text-primary">
            {t.heading}
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <TerminalWindow title={`feature-${i + 1}`}>
                <ServiceIcon name={item.icon} className="mb-3" />
                <h3 className="text-lg font-sans font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary font-sans">
                  {item.desc}
                </p>
              </TerminalWindow>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
