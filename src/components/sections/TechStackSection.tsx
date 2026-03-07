"use client";

import { content, type Lang } from "@/lib/content";
import TerminalWindow from "@/components/ui/TerminalWindow";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface TechStackSectionProps {
  lang: Lang;
}

export default function TechStackSection({ lang }: TechStackSectionProps) {
  const t = content.techStack[lang];
  const categories = content.techStack.categories;

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-accent-green font-mono text-sm mb-2">{t.title}</p>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-text-primary">
            {t.heading}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12">
            <TerminalWindow title="tech-stack.sh">
              <div className="space-y-6">
                {categories.map((cat, i) => (
                  <div key={i}>
                    <p className="font-mono text-sm text-text-secondary mb-2">
                      <span className="text-accent-green">$</span> ls{" "}
                      <span className={cat.color}>{cat.name}</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cat.techs.map((tech) => (
                        <span
                          key={tech}
                          className="bg-bg-card-hover border border-border rounded-full px-3 py-1 text-sm text-text-primary font-sans"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TerminalWindow>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
