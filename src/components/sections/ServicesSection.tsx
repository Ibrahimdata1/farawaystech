"use client";

import { content, type Lang } from "@/lib/content";
import TerminalWindow from "@/components/ui/TerminalWindow";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServiceIcon from "@/components/ui/ServiceIcon";

interface ServicesSectionProps {
  lang: Lang;
}

export default function ServicesSection({ lang }: ServicesSectionProps) {
  const t = content.services[lang];

  return (
    <section id="services" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-text-secondary text-sm mb-2">
            {t.title}
          </p>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-text-primary mb-12">
            {t.heading}
          </h2>
        </ScrollReveal>

        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.slice(0, 3).map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <TerminalWindow title={item.title}>
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

        {/* Row 2: 2 cards centered */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {t.items.slice(3).map((item, index) => (
            <ScrollReveal key={index + 3} delay={(index + 3) * 0.08}>
              <TerminalWindow title={item.title}>
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
