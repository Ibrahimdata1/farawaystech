"use client";

import { content, type Lang } from "@/lib/content";
import TerminalWindow from "@/components/ui/TerminalWindow";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

interface ContactSectionProps {
  lang: Lang;
}

const FORM_URL = "https://smart-requirement.vercel.app";

export default function ContactSection({ lang }: ContactSectionProps) {
  const t = content.contact[lang];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-accent-green font-mono text-sm mb-2">{t.title}</p>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-text-primary">
            {t.heading}
          </h2>
          <p className="mt-3 text-text-secondary font-sans">{t.subtitle}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10">
            <TerminalWindow title="start-project">
              <div className="flex flex-col items-center gap-6 py-6">
                <p className="font-mono text-xs sm:text-sm text-text-secondary break-all">
                  <span className="text-accent-green">$</span> open smart-requirement-form
                </p>
                <Button
                  href={FORM_URL}
                  variant="primary"
                  className="text-base px-8 py-4"
                >
                  {t.cta}
                </Button>
              </div>
            </TerminalWindow>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-8">
            <p className="text-text-secondary font-sans text-sm">
              {t.emailLabel}{" "}
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
