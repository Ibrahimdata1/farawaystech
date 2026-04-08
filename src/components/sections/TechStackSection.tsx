"use client";

import { content, type Lang } from "@/lib/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface TechStackSectionProps {
  lang: Lang;
}

export default function TechStackSection({ lang }: TechStackSectionProps) {
  const t = content.techStack[lang];
  const categories = content.techStack.categories;

  return (
    <section id="tech-stack" className="py-24 px-4 sm:px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-accent-green font-medium text-sm mb-3 tracking-wide uppercase">
            {t.title}
          </p>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-text-primary mb-4">
            {t.heading}
          </h2>
          <div className="w-12 h-0.5 bg-accent-green/40 mb-14" />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="rounded-xl border border-border bg-bg-card p-5 card-elevated h-full">
                <p className={`font-medium text-sm mb-3 ${cat.color}`}>
                  {cat.name}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech) => (
                    <span
                      key={tech}
                      className="bg-bg-card-hover border border-border/50 rounded-md px-2.5 py-1 text-xs text-text-secondary font-sans"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
