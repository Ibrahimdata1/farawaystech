"use client";

import { content, type Lang } from "@/lib/content";
import { motion } from "framer-motion";
import { Mail, Clock, ArrowUpRight } from "lucide-react";
import JolyButton from "@/components/ui/JolyButton";
// background shared with SEO section

interface ContactSectionProps {
  lang: Lang;
}

const FORM_URL = "https://smart-requirement.vercel.app";

export default function ContactSection({ lang }: ContactSectionProps) {
  const t = content.contact[lang];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* no separate background — shared with SEO section wrapper */}

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg-card text-text-primary text-sm font-medium mb-6">
              <Mail className="w-4 h-4 text-accent-green" />
              {t.title}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              {t.heading}
            </h2>
            <p className="text-text-secondary mb-10 leading-relaxed">
              {t.subtitle}
            </p>

            {/* Contact cards */}
            <div className="space-y-3">
              {/* Email */}
              <a
                href={`mailto:${t.email}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-bg-card hover:border-accent-green/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-bg-card-hover border border-border flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-text-primary">{t.emailLabel}</p>
                  <p className="text-sm text-text-secondary truncate">{t.email}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-secondary group-hover:text-accent-green transition-colors" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61583902630150"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-bg-card hover:border-accent-green/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-bg-card-hover border border-border flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-text-secondary" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-text-primary">Facebook</p>
                  <p className="text-sm text-text-secondary">RunawayTech</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-secondary group-hover:text-accent-green transition-colors" />
              </a>

              {/* Response time */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-bg-card">
                <div className="w-10 h-10 rounded-full bg-bg-card-hover border border-border flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-text-secondary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-text-primary">
                    {lang === "th" ? "เวลาตอบกลับ" : "Response time"}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {lang === "th" ? "ภายใน 24 ชั่วโมง" : "Within 24 hours"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="rounded-2xl border border-accent-green/20 bg-gradient-to-br from-bg-card to-bg-primary/50 p-8 md:p-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent-green/10 border border-accent-green/15 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-7 h-7 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {lang === "th" ? "พร้อมเริ่มต้น?" : "Ready to start?"}
              </h3>
              <p className="text-text-secondary text-sm mb-8 max-w-xs mx-auto leading-relaxed">
                {lang === "th"
                  ? "กดปุ่มด้านล่าง บอกเราเกี่ยวกับธุรกิจของคุณ แล้วเราจะเสนอ solution ที่เหมาะสม"
                  : "Click below, tell us about your business, and we'll propose the right solution"}
              </p>
              <JolyButton href={FORM_URL} size="lg" className="w-full justify-center">
                {t.cta}
              </JolyButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
