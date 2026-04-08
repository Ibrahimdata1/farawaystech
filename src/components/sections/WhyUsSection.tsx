"use client";

import { content, type Lang } from "@/lib/content";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServiceIcon from "@/components/ui/ServiceIcon";

interface WhyUsSectionProps {
  lang: Lang;
}

export default function WhyUsSection({ lang }: WhyUsSectionProps) {
  const t = content.whyUs[lang];

  return (
    <section id="why-us" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-accent-green font-medium text-sm mb-3 tracking-wide uppercase">
            {t.title}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t.heading}
          </h2>
          <div className="w-12 h-0.5 bg-accent-green/40 mb-14" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group rounded-xl border border-border bg-bg-card p-6 hover:bg-bg-card-hover hover:border-accent-green/20 transition-all duration-300 card-elevated h-full">
                <ServiceIcon name={item.icon} className="mb-4" />
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary font-sans leading-relaxed">
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
