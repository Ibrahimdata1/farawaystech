"use client";

import { content, type Lang } from "@/lib/content";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServiceIcon from "@/components/ui/ServiceIcon";

interface ServicesSectionProps {
  lang: Lang;
}

export default function ServicesSection({ lang }: ServicesSectionProps) {
  const t = content.services[lang];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-accent-green font-medium text-sm mb-3 tracking-wide uppercase">
            {t.title}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t.heading}
          </h2>
          <div className="w-12 h-0.5 bg-accent-green/40 mb-14" />
        </ScrollReveal>

        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.slice(0, 3).map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <div className="group rounded-xl border border-border bg-bg-card p-6 hover:border-accent-green/20 hover:bg-bg-card-hover transition-all duration-300 card-elevated h-full">
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  <ServiceIcon name={item.icon} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Row 2: 2 cards centered */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {t.items.slice(3).map((item, index) => (
            <ScrollReveal key={index + 3} delay={(index + 3) * 0.08}>
              <div className="group rounded-xl border border-border bg-bg-card p-6 hover:border-accent-green/20 hover:bg-bg-card-hover transition-all duration-300 card-elevated h-full">
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  <ServiceIcon name={item.icon} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
