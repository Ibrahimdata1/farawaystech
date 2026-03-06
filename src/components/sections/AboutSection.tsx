"use client";

import { content, Lang } from "@/lib/content";
import TerminalWindow from "@/components/ui/TerminalWindow";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface AboutSectionProps {
  lang: Lang;
}

export default function AboutSection({ lang }: AboutSectionProps) {
  const data = content.about[lang];
  const json = data.jsonDisplay;

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-text-secondary font-mono text-sm mb-2">
            {data.title}
          </p>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-text-primary mb-12">
            {data.heading}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Description + Highlight Cards */}
          <ScrollReveal direction="left">
            <p className="text-text-secondary font-sans text-lg leading-relaxed mb-8">
              {data.description}
            </p>
            <div className="space-y-4">
              {data.highlights.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg border border-border bg-bg-card"
                >
                  <p className="text-accent-green font-mono text-sm mb-1">
                    {item.label}
                  </p>
                  <p className="text-text-primary font-sans">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: JSON Display */}
          <ScrollReveal direction="right" delay={0.2}>
            <TerminalWindow title="about.json">
              <pre className="font-mono text-sm leading-relaxed">
                <span className="text-text-secondary">{"{"}</span>
                {"\n"}
                {Object.entries(json).map(([key, value], i, arr) => (
                  <span key={key}>
                    {"  "}
                    <span className="text-accent-blue">&quot;{key}&quot;</span>
                    <span className="text-text-secondary">: </span>
                    <span className="text-accent-green">&quot;{value}&quot;</span>
                    {i < arr.length - 1 ? (
                      <span className="text-text-secondary">,</span>
                    ) : null}
                    {"\n"}
                  </span>
                ))}
                <span className="text-text-secondary">{"}"}</span>
              </pre>
            </TerminalWindow>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
