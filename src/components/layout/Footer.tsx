"use client";

import { content, type Lang } from "@/lib/content";

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const footer = content.footer[lang];

  return (
    <footer className="border-t border-border bg-bg-primary px-4 sm:px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <p className="text-sm text-text-secondary">{footer.tagline}</p>
        <a
          href="mailto:hello@farawaytech.dev"
          className="text-sm text-accent-green transition-colors hover:text-accent-blue"
        >
          hello@farawaytech.dev
        </a>
        <p className="text-xs text-text-secondary">
          &copy; {new Date().getFullYear()} {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
