"use client";

import { content, type Lang } from "@/lib/content";

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const footer = content.footer[lang];

  return (
    <footer className="border-t border-border bg-bg-primary px-4 sm:px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-bold text-text-primary logo-gradient">
              RunawayTech
            </span>
            <p className="text-sm text-text-secondary">{footer.tagline}</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <a
              href="mailto:contact.runawaytech@gmail.com"
              className="text-sm text-text-secondary hover:text-accent-green transition-colors"
            >
              contact.runawaytech@gmail.com
            </a>
            <p className="text-xs text-text-secondary/60">
              &copy; {new Date().getFullYear()} {footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
