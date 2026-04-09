"use client";

import { motion } from "framer-motion";
import type { Lang } from "@/lib/content";
import JolyButton from "@/components/ui/JolyButton";
import { SparklesCore } from "@/components/ui/SparklesCore";
import { Search, TrendingUp, BarChart3, Target } from "lucide-react";

interface SeoPromoSectionProps {
  lang: Lang;
}

const seoData = {
  th: {
    badge: "โปรโมชั่นพิเศษ",
    heading: "SEO ดันเว็บธุรกิจขึ้นหน้าแรก Google",
    subtitle: "ลูกค้าค้นหาแล้วเจอคุณ — ไม่ต้องจ่ายค่าโฆษณาตลอด",
    price: "฿5,000",
    priceLabel: "ครั้งเดียว เริ่มต้น",
    cta: "เริ่มทำ SEO เลย",
    features: [
      { icon: Search, text: "วิเคราะห์ Keyword ที่ลูกค้าค้นหาจริง" },
      { icon: TrendingUp, text: "ดันเว็บขึ้นหน้า 1 ของ Google" },
      { icon: BarChart3, text: "รายงานผล Traffic ทุกเดือน" },
      { icon: Target, text: "เพิ่มลูกค้าแบบ Organic ไม่ต้องจ่ายค่าแอด" },
    ],
  },
  en: {
    badge: "Special Offer",
    heading: "SEO: Get Your Business to Google Page 1",
    subtitle: "Customers find you through search — no endless ad spend",
    price: "฿5,000",
    priceLabel: "one-time starting",
    cta: "Start SEO Now",
    features: [
      { icon: Search, text: "Keyword analysis based on real searches" },
      { icon: TrendingUp, text: "Rank your website on Google page 1" },
      { icon: BarChart3, text: "Monthly traffic reports" },
      { icon: Target, text: "Organic customers without paying for ads" },
    ],
  },
};

export default function SeoPromoSection({ lang }: SeoPromoSectionProps) {
  const t = seoData[lang];

  return (
    <section id="seo" className="pt-24 pb-0 px-4 sm:px-6 relative overflow-visible">

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-accent-green/20 bg-bg-card overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              {/* Left: Content */}
              <div className="flex-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent-green/10 text-accent-green border border-accent-green/20 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                  {t.badge}
                </span>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-4 tracking-tight">
                  {t.heading}
                </h2>
                <p className="text-text-secondary mb-8 text-lg">
                  {t.subtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {t.features.map((feature, i) => {
                    const Icon = feature.icon;
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 text-accent-green" />
                        </div>
                        <span className="text-text-secondary text-sm">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>

                <JolyButton href="https://smart-requirement.vercel.app" size="lg">
                  {t.cta}
                </JolyButton>
              </div>

              {/* Right: Price */}
              <div className="lg:w-auto flex-shrink-0">
                <div className="rounded-2xl border border-border bg-bg-primary/50 p-8 text-center min-w-[220px]">
                  <p className="text-text-secondary text-sm mb-2">
                    {lang === "th" ? "เริ่มต้นเพียง" : "Starting at"}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent">
                      {t.price}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm mt-2">
                    {t.priceLabel}
                  </p>
                  <div className="mt-4 w-full h-px bg-border" />
                  <p className="text-text-secondary/60 text-xs mt-4">
                    {lang === "th" ? "ไม่มีค่าแอบแฝง • จ่ายครั้งเดียวจบ" : "No hidden fees • One-time payment"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
