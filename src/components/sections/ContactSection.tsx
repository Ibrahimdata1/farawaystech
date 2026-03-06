"use client";

import { content, type Lang } from "@/lib/content";
import TerminalWindow from "@/components/ui/TerminalWindow";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

interface ContactSectionProps {
  lang: Lang;
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const t = content.contact[lang];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <p className="text-accent-green font-mono text-sm mb-2">{t.title}</p>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-text-primary">
            {t.heading}
          </h2>
          <p className="mt-3 text-text-secondary font-sans">{t.subtitle}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12">
            <TerminalWindow title="contact-form">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm text-text-secondary font-mono mb-1">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-bg-primary border border-border rounded px-3 py-2 text-text-primary text-sm font-sans focus:border-accent-green focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-secondary font-mono mb-1">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    className="w-full bg-bg-primary border border-border rounded px-3 py-2 text-text-primary text-sm font-sans focus:border-accent-green focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-secondary font-mono mb-1">
                    {t.form.message}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-bg-primary border border-border rounded px-3 py-2 text-text-primary text-sm font-sans focus:border-accent-green focus:outline-none transition-colors resize-none"
                  />
                </div>
                <Button type="submit" variant="primary">
                  {t.form.send}
                </Button>
              </form>
            </TerminalWindow>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 text-center">
            <p className="text-text-secondary font-sans text-sm">
              <a
                href={`mailto:${t.email}`}
                className="text-accent-blue hover:underline"
              >
                {t.email}
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
