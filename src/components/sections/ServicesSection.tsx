"use client";

import { content, type Lang } from "@/lib/content";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FeatureCard from "@/components/ui/FeatureCard";
import { Globe, Smartphone, Monitor, ShoppingCart, LayoutGrid } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const serviceIconMap: Record<string, LucideIcon> = {
  portfolio: Globe,
  mobile: Smartphone,
  webapp: Monitor,
  store: ShoppingCart,
  backoffice: LayoutGrid,
};

interface ServicesSectionProps {
  lang: Lang;
}

export default function ServicesSection({ lang }: ServicesSectionProps) {
  const t = content.services[lang];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 section-alt">
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

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-x divide-y divide-dashed divide-border border border-dashed border-border rounded-xl overflow-hidden">
            {t.items.map((item, index) => (
              <FeatureCard
                key={index}
                icon={serviceIconMap[item.icon] ?? Globe}
                title={item.title}
                description={item.desc}
              />
            ))}
            {/* Empty cell to complete the 3x2 grid */}
            <div className="hidden md:block p-6 relative overflow-hidden">
              <div className="flex h-full items-center justify-center">
                <p className="text-text-secondary/40 text-sm italic">
                  {lang === "th" ? "เพิ่มเติมเร็วๆ นี้..." : "More coming soon..."}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
