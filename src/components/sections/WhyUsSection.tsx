"use client";

import { content, type Lang } from "@/lib/content";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FeatureCard from "@/components/ui/FeatureCard";
import { ShieldCheck, Zap, BadgeDollarSign, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const whyUsIconMap: Record<string, LucideIcon> = {
  quality: ShieldCheck,
  speed: Zap,
  price: BadgeDollarSign,
  team: Users,
};

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

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-x divide-y divide-dashed divide-border border border-dashed border-border rounded-xl overflow-hidden">
            {t.items.map((item, i) => (
              <FeatureCard
                key={i}
                icon={whyUsIconMap[item.icon] ?? ShieldCheck}
                title={item.title}
                description={item.desc}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
