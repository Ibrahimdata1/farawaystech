"use client";

import { content, type Lang } from "@/lib/content";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

interface ContactSectionProps {
  lang: Lang;
}

const FORM_URL = "https://smart-requirement.vercel.app";

export default function ContactSection({ lang }: ContactSectionProps) {
  const t = content.contact[lang];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-accent-green font-medium text-sm mb-3 tracking-wide uppercase">
            {t.title}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            {t.heading}
          </h2>
          <p className="text-text-secondary font-sans text-lg">{t.subtitle}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 rounded-xl border border-border bg-bg-card p-8 md:p-10 card-elevated">
            <p className="text-text-secondary font-sans mb-6">
              {lang === "th"
                ? "กรอกข้อมูลสั้นๆ เพื่อให้เราเข้าใจโปรเจกต์ของคุณ"
                : "Fill out a brief form so we can understand your project"}
            </p>
            <Button
              href={FORM_URL}
              variant="primary"
              className="text-base px-10 py-4"
            >
              {t.cta}
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-8">
            <p className="text-text-secondary font-sans text-sm">
              {t.emailLabel}{" "}
              <a
                href={`mailto:${t.email}`}
                className="text-accent-green hover:underline underline-offset-2"
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
