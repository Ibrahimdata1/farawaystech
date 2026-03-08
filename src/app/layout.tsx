import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://farawaytech.vercel.app"),
  title: "FarAway Tech - รับทำเว็บไซต์ รับทำแอป Software House คุณภาพ",
  description:
    "รับทำเว็บไซต์ รับทำแอปมือถือ รับเขียนโปรแกรม ระบบหลังบ้าน POS AI Agent ครบวงจร ทีม Senior Developer ราคาเข้าถึงได้ ส่งงานไว มีผลงานจริง",
  keywords: [
    "รับทำเว็บไซต์",
    "รับทำเว็บ",
    "รับเขียนโปรแกรม",
    "รับทำแอป",
    "รับทำแอปมือถือ",
    "ทำเว็บราคาถูก",
    "software house",
    "software house ไทย",
    "พัฒนาซอฟต์แวร์",
    "web development",
    "รับทำเว็บไซต์ราคาถูก",
    "รับทำระบบ",
    "mobile app",
    "AI agent",
    "รับทำ POS",
    "รับทำระบบร้านอาหาร",
  ],
  authors: [{ name: "FarAway Tech" }],
  alternates: {
    canonical: "https://farawaytech.vercel.app",
  },
  openGraph: {
    title: "FarAway Tech - รับทำเว็บไซต์ รับทำแอป Software House",
    description:
      "รับทำเว็บไซต์ รับทำแอปมือถือ รับเขียนโปรแกรม ครบวงจร ทีม Senior Developer ราคาเข้าถึงได้ มีผลงานจริง",
    url: "https://farawaytech.vercel.app",
    siteName: "FarAway Tech",
    type: "website",
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "FarAway Tech - รับทำเว็บไซต์ รับทำแอป Software House",
    description:
      "รับทำเว็บไซต์ รับทำแอปมือถือ รับเขียนโปรแกรม ครบวงจร ทีม Senior Developer ราคาเข้าถึงได้ มีผลงานจริง",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" data-theme="dark" className="scroll-smooth" suppressHydrationWarning>
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
              name: "FarAway Tech",
              description:
                "รับทำเว็บไซต์ รับทำแอปมือถือ รับเขียนโปรแกรม ครบวงจร ทีม Senior Developer ราคาเข้าถึงได้",
              url: "https://farawaytech.vercel.app",
              serviceType: [
                "รับทำเว็บไซต์",
                "รับทำแอปมือถือ",
                "รับเขียนโปรแกรม",
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
