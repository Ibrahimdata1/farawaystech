"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Lang } from "@/lib/content";

interface UseCasesSectionProps {
  lang: Lang;
}

interface UseCase {
  sector: string;
  result: string;
  image: string;
}

const useCasesData: Record<string, { title: string; heading: string; cases: UseCase[] }> = {
  th: {
    title: "Use Cases",
    heading: "เทคโนโลยีช่วยธุรกิจคุณได้อย่างไร?",
    cases: [
      {
        sector: "ร้านอาหาร",
        result: "ลดพนักงาน 1 คน ประหยัด ฿12,000/เดือน",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=entropy",
      },
      {
        sector: "คลินิก / สปา",
        result: "ระบบจองออนไลน์ ลดเวลาจัดการ 80%",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
      },
      {
        sector: "ร้านค้าออนไลน์",
        result: "สต็อก Real-time ขายหลายช่องทางพร้อมกัน",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      },
      {
        sector: "ธุรกิจบริการ",
        result: "ลูกค้าเจอใน Google + จองคิว 24 ชม.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop",
      },
    ],
  },
  en: {
    title: "Use Cases",
    heading: "How Technology Helps Your Business",
    cases: [
      {
        sector: "Restaurants",
        result: "Save ฿12,000/month by cutting 1 staff",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=entropy",
      },
      {
        sector: "Clinics & Spas",
        result: "Online booking, 80% less admin time",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
      },
      {
        sector: "E-Commerce",
        result: "Real-time inventory across all channels",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      },
      {
        sector: "Service Business",
        result: "Found on Google + 24/7 self-booking",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop",
      },
    ],
  },
};

export default function UseCasesSection({ lang }: UseCasesSectionProps) {
  const t = useCasesData[lang];

  return (
    <section id="use-cases" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent-green font-medium text-sm mb-3 tracking-wide uppercase">
            {t.title}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {t.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {t.cases.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-border/30 h-64 sm:h-72"
            >
              {/* Background image */}
              <Image
                src={useCase.image}
                alt={useCase.sector}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-accent-green text-xs font-semibold uppercase tracking-wider mb-2">
                  {useCase.sector}
                </span>
                <p className="text-white text-lg sm:text-xl font-bold leading-tight">
                  {useCase.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
