"use client";

import { content, Lang } from "@/lib/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface AboutSectionProps {
  lang: Lang;
}

export default function AboutSection({ lang }: AboutSectionProps) {
  const data = content.about[lang];
  const json = data.jsonDisplay;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-accent-green font-medium text-sm mb-3 tracking-wide uppercase">
            {data.title}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {data.heading}
          </h2>
          <div className="w-12 h-0.5 bg-accent-green/40 mb-12" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: Description + Highlight Cards */}
          <ScrollReveal direction="left">
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              {data.description}
            </p>
            <div className="space-y-3">
              {data.highlights.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-border bg-bg-card card-elevated transition-all duration-200 hover:border-accent-green/20"
                >
                  <p className="text-accent-green font-medium text-sm mb-1">
                    {item.label}
                  </p>
                  <p className="text-text-primary">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Company Info Card */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="glass-card p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-green">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-text-primary font-semibold text-lg">
                  {lang === "th" ? "ข้อมูลบริษัท" : "Company Info"}
                </h3>
              </div>
              <div className="space-y-4">
                {Object.entries(json).map(([key, value]) => (
                  <div key={key} className="flex flex-col gap-1">
                    <span className="text-text-secondary text-xs uppercase tracking-wider font-medium">
                      {key}
                    </span>
                    <span className="text-text-primary font-medium">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
