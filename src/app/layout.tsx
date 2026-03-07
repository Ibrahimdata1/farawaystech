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
  title: "FarAway Tech - Software House | พัฒนาซอฟต์แวร์คุณภาพ",
  description:
    "FarAway Tech - ทีมพัฒนาซอฟต์แวร์มืออาชีพ สร้างเว็บ แอป ระบบหลังบ้าน AI Agent ครบวงจร คุณภาพสูง ราคาเข้าถึงได้",
  keywords: [
    "software house",
    "พัฒนาซอฟต์แวร์",
    "web development",
    "mobile app",
    "AI agent",
    "Thailand",
  ],
  authors: [{ name: "FarAway Tech" }],
  openGraph: {
    title: "FarAway Tech - Software House",
    description: "เราสร้างซอฟต์แวร์ที่ตอบโจทย์ธุรกิจคุณ",
    url: "https://farawaytech.dev",
    siteName: "FarAway Tech",
    type: "website",
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
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${notoSansThai.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
