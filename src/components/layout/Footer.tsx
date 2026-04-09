"use client";

import Image from "next/image";
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
            <a href="#" className="flex items-center">
              <span className="relative w-48 h-8 overflow-hidden dark-logo">
                <Image
                  src="/logo.png"
                  alt="RunAwayTech"
                  fill
                  className="object-cover mix-blend-lighten"
                  style={{ objectPosition: "center 68%" }}
                />
              </span>
              <span className="relative w-48 h-8 overflow-hidden light-logo">
                <Image
                  src="/logo.png"
                  alt="RunAwayTech"
                  fill
                  className="object-cover light-logo-img"
                  style={{ objectPosition: "center 68%" }}
                />
              </span>
            </a>
            <p className="text-sm text-text-secondary">{footer.tagline}</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-4">
              <a
                href="mailto:contact.runawaytech@gmail.com"
                className="text-sm text-text-secondary hover:text-accent-green transition-colors"
              >
                contact.runawaytech@gmail.com
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61583902630150"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-[#1877F2] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            <p className="text-xs text-text-secondary/60">
              &copy; {new Date().getFullYear()} {footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
