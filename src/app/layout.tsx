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
  title: "FarAways Tech - Software House | พัฒนาซอฟต์แวร์คุณภาพ",
  description:
    "FarAways Tech - ทีมพัฒนาซอฟต์แวร์มืออาชีพ สร้างเว็บ แอป ระบบหลังบ้าน AI Agent ครบวงจร คุณภาพสูง ราคาเข้าถึงได้",
  keywords: [
    "software house",
    "พัฒนาซอฟต์แวร์",
    "web development",
    "mobile app",
    "AI agent",
    "Thailand",
  ],
  authors: [{ name: "FarAways Tech" }],
  openGraph: {
    title: "FarAways Tech - Software House",
    description: "เราสร้างซอฟต์แวร์ที่ตอบโจทย์ธุรกิจคุณ",
    url: "https://farawaystech.dev",
    siteName: "FarAways Tech",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${notoSansThai.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
