import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_Thai, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://runawaytech.co"),
  title: "RunAway Tech - แก้ปัญหาธุรกิจด้วยเทคโนโลยี | รับทำเว็บ แอป SEO",
  description:
    "แก้ปัญหาธุรกิจด้วยเทคโนโลยี — รับทำเว็บไซต์ รับทำแอป SEO ระบบ POS ระบบจองออนไลน์ Dashboard วิเคราะห์ธุรกิจ ครบวงจร ทีม Senior Developer ราคาเข้าถึงได้",
  keywords: [
    "แก้ปัญหาธุรกิจ",
    "แก้ปัญหาธุรกิจด้วยเทคโนโลยี",
    "tech solution แก้ปัญหาธุรกิจ",
    "รับทำเว็บไซต์",
    "รับทำเว็บ",
    "รับทำ SEO",
    "รับเขียนโปรแกรม",
    "รับทำแอป",
    "รับทำแอปมือถือ",
    "software house",
    "software house ไทย",
    "tech solution ธุรกิจ",
    "ระบบ POS",
    "ระบบจองออนไลน์",
    "ระบบจัดการร้าน",
    "รับทำระบบ",
    "พัฒนาซอฟต์แวร์",
    "web development",
    "รับทำ POS",
    "รับทำระบบร้านอาหาร",
  ],
  authors: [{ name: "RunAway Tech" }],
  alternates: {
    canonical: "https://runawaytech.co",
  },
  openGraph: {
    title: "RunAway Tech - แก้ปัญหาธุรกิจด้วยเทคโนโลยี | Tech Solution Partner",
    description:
      "แก้ปัญหาธุรกิจด้วยเทคโนโลยี รับทำเว็บไซต์ แอป SEO ระบบ POS ระบบจอง Dashboard ครบวงจร ทีม Senior Developer ราคาเข้าถึงได้",
    url: "https://runawaytech.co",
    siteName: "RunAway Tech",
    type: "website",
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "RunAway Tech - แก้ปัญหาธุรกิจด้วยเทคโนโลยี",
    description:
      "แก้ปัญหาธุรกิจด้วยเทคโนโลยี รับทำเว็บไซต์ แอป SEO ระบบ POS Dashboard ครบวงจร ราคาเข้าถึงได้",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" data-theme="dark" className={cn("scroll-smooth", "font-sans", geist.variable)} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme');
                  if (t === 'light' || t === 'dark') {
                    document.documentElement.setAttribute('data-theme', t);
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "RunAway Tech",
              description:
                "แก้ปัญหาธุรกิจด้วยเทคโนโลยี — รับทำเว็บไซต์ แอป SEO ระบบ POS ระบบจอง Dashboard ครบวงจร ทีม Senior Developer ราคาเข้าถึงได้",
              url: "https://runawaytech.co",
              serviceType: [
                "แก้ปัญหาธุรกิจด้วยเทคโนโลยี",
                "รับทำเว็บไซต์",
                "รับทำแอปมือถือ",
                "รับทำ SEO",
                "ระบบ POS",
                "ระบบจองออนไลน์",
                "Software Development",
                "Mobile App Development",
                "Web Development",
              ],
              areaServed: { "@type": "Country", name: "Thailand" },
              knowsLanguage: ["th", "en"],
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${notoSansThai.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
