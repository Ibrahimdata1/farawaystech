export type Lang = "th" | "en";

export const content = {
  nav: {
    th: {
      services: "บริการ",
      portfolio: "ผลงาน",
      about: "เกี่ยวกับเรา",
      process: "ขั้นตอน",
      whyUs: "ทำไมต้องเรา",
      techStack: "SEO",
      contact: "ติดต่อ",
    },
    en: {
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      process: "Process",
      whyUs: "Why Us",
      techStack: "SEO",
      contact: "Contact",
    },
  },
  hero: {
    th: {
      greeting: "Tech Solution Partner สำหรับธุรกิจคุณ",
      headline: "เทคโนโลยีที่ช่วยให้ธุรกิจคุณเติบโตได้จริง",
      subtitle:
        "เราไม่ได้แค่เขียนโค้ด — เราวิเคราะห์ปัญหาธุรกิจ แล้วสร้าง solution ที่ลดต้นทุน เพิ่มลูกค้า และทำให้ระบบทำงานแทนคน",
      cta: "ปรึกษาฟรี",
      status: "พร้อมรับงาน",
    },
    en: {
      greeting: "Tech Solution Partner for Your Business",
      headline: "Technology that actually grows your business",
      subtitle:
        "We don't just write code — we analyze your business problems and build solutions that cut costs, bring customers, and automate operations.",
      cta: "Free Consultation",
      status: "Available for projects",
    },
  },
  services: {
    th: {
      title: "Solutions",
      heading: "Solution ที่ช่วยธุรกิจคุณ",
      items: [
        {
          icon: "portfolio",
          title: "เว็บไซต์ที่สร้างยอดขาย",
          desc: "ไม่ใช่แค่เว็บสวย แต่เป็นเว็บที่ดึงดูดลูกค้า สร้างความน่าเชื่อถือ และเปลี่ยนผู้เข้าชมเป็นลูกค้าจริง",
        },
        {
          icon: "mobile",
          title: "แอปที่ลดต้นทุนคน",
          desc: "ระบบจัดการร้าน สั่งอาหาร จองคิว ให้ลูกค้าทำเองผ่านมือถือ — ลดพนักงาน ลดข้อผิดพลาด",
        },
        {
          icon: "webapp",
          title: "ระบบอัตโนมัติแทนคน",
          desc: "ระบบจอง นัดหมาย ออกใบเสร็จ สรุปยอด — ทำงานอัตโนมัติ 24 ชม. ไม่ต้องจ้างคนเพิ่ม",
        },
        {
          icon: "store",
          title: "ร้านค้าออนไลน์ครบวงจร",
          desc: "เปิดขายของออนไลน์ รับชำระเงิน จัดส่ง จัดการสต็อก ครบในที่เดียว เริ่มขายได้ทันที",
        },
        {
          icon: "backoffice",
          title: "Dashboard วิเคราะห์ธุรกิจ",
          desc: "เห็นข้อมูลยอดขาย ลูกค้า สต็อก แบบ real-time ตัดสินใจได้เร็วขึ้นด้วยข้อมูลจริง",
        },
        {
          icon: "seo",
          title: "SEO ดันเว็บขึ้นหน้าแรก Google",
          desc: "เพิ่มลูกค้าจากการค้นหา Google แบบ organic ไม่ต้องจ่ายค่าโฆษณาตลอด — เริ่มต้น ฿5,000",
        },
      ],
    },
    en: {
      title: "Solutions",
      heading: "Solutions That Grow Your Business",
      items: [
        {
          icon: "portfolio",
          title: "Websites That Convert",
          desc: "Not just pretty sites — websites designed to attract customers, build trust, and convert visitors into paying clients",
        },
        {
          icon: "mobile",
          title: "Apps That Cut Costs",
          desc: "Ordering, booking, and management apps that let customers self-serve — reduce staff, reduce errors",
        },
        {
          icon: "webapp",
          title: "Automation Systems",
          desc: "Booking, invoicing, reporting — automated 24/7 so you don't need to hire more people",
        },
        {
          icon: "store",
          title: "Full E-Commerce Setup",
          desc: "Online store with payments, shipping, and inventory management — start selling immediately",
        },
        {
          icon: "backoffice",
          title: "Business Analytics Dashboard",
          desc: "See sales, customers, and inventory in real-time — make faster decisions with real data",
        },
        {
          icon: "seo",
          title: "SEO: Get to Page 1 of Google",
          desc: "Drive organic traffic from Google without endless ad spend — starting at ฿5,000",
        },
      ],
    },
  },
  portfolio: {
    th: {
      title: "Portfolio",
      heading: "ผลงานของเรา",
      subtitle:
        "โปรเจกต์จริงที่เราพัฒนาและส่งมอบให้ลูกค้า — พิสูจน์ว่าเราทำงานจริง ส่งมอบจริง",
      projects: [
        {
          projectLabel: "CASE STUDY",
          projectName: "QRForPay",
          projectDesc:
            "แอปจัดการร้านอาหารครบวงจร — POS, QR Payment, จัดการโต๊ะ, สต็อกสินค้า, ออเดอร์, สรุปยอดขาย ใช้งานได้ทั้ง iOS และ Android พัฒนาด้วย React Native + Supabase",
          status: "ใช้งานจริง",
          platform: "iOS / Android",
          type: "mobile" as const,
          screens: [
            "แดชบอร์ดยอดขาย",
            "รายการสั่งซื้อ",
            "จัดการโต๊ะ",
            "ตั้งค่าร้าน",
          ],
          features: [
            "สรุปยอดขายรายวัน / รายเดือน",
            "จัดการสินค้าพร้อมรูปภาพ",
            "ระบบจัดการโต๊ะ real-time",
            "รับชำระผ่าน QR PromptPay",
            "ประวัติออเดอร์ / กรองตามสถานะ",
            "จัดการพนักงาน / สิทธิ์การใช้งาน",
          ],
          techUsed: [
            "React Native",
            "TypeScript",
            "Supabase",
            "PromptPay QR",
            "Expo",
          ],
        },
        {
          projectLabel: "CASE STUDY",
          projectName: "WyckoffSignals",
          projectDesc:
            "แพลตฟอร์มสัญญาณเทรดที่สอดคล้องกับหลักชารีอะห์ ใช้ Wyckoff methodology วิเคราะห์ Crypto, หุ้นฮาลาล, ทอง และเงิน — พร้อม backtest ผลงานย้อนหลังตั้งแต่ปี 2018",
          status: "ใช้งานจริง",
          platform: "Web App",
          type: "web" as const,
          url: "https://wyckoffsignals.vercel.app",
          screens: [
            "หน้าแรก",
            "ราคาแพ็กเกจ",
          ],
          features: [
            "สัญญาณเทรด real-time ผ่าน Telegram",
            "Backtest ผลงานย้อนหลังตั้งแต่ 2018",
            "รองรับ Crypto, หุ้นฮาลาล, ทอง, เงิน",
            "Dashboard วิเคราะห์ผลงาน",
            "ระบบสมัครสมาชิกรายเดือน",
            "เปรียบเทียบผลงานกับกองทุนระดับโลก",
          ],
          techUsed: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
            "Telegram Bot",
            "Vercel",
          ],
        },
      ],
    },
    en: {
      title: "Portfolio",
      heading: "Our Work",
      subtitle:
        "Real projects we've built and delivered — proof that we ship quality software.",
      projects: [
        {
          projectLabel: "CASE STUDY",
          projectName: "QRForPay",
          projectDesc:
            "A complete restaurant management app — POS, QR Payment, table management, inventory, orders, and sales dashboard. Available on iOS and Android, built with React Native + Supabase.",
          status: "Live",
          platform: "iOS / Android",
          type: "mobile" as const,
          screens: [
            "Sales Dashboard",
            "Order Management",
            "Table Management",
            "Store Settings",
          ],
          features: [
            "Daily / monthly sales summary",
            "Product management with images",
            "Real-time table management",
            "QR PromptPay payment",
            "Order history with status filters",
            "Staff management & permissions",
          ],
          techUsed: [
            "React Native",
            "TypeScript",
            "Supabase",
            "PromptPay QR",
            "Expo",
          ],
        },
        {
          projectLabel: "CASE STUDY",
          projectName: "WyckoffSignals",
          projectDesc:
            "A Shariah-compliant trading signal platform powered by Wyckoff methodology. Covers Crypto, Halal Stocks, Gold & Silver — with backtested performance data since 2018.",
          status: "Live",
          platform: "Web App",
          type: "web" as const,
          url: "https://wyckoffsignals.vercel.app",
          screens: [
            "Landing Page",
            "Pricing",
          ],
          features: [
            "Real-time trading signals via Telegram",
            "Backtested performance since 2018",
            "Crypto, Halal Stocks, Gold & Silver",
            "Performance analytics dashboard",
            "Monthly subscription system",
            "Benchmark comparison with world-class funds",
          ],
          techUsed: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
            "Telegram Bot",
            "Vercel",
          ],
        },
      ],
    },
  },
  about: {
    th: {
      title: "About",
      heading: "เราช่วยธุรกิจเติบโตด้วยเทคโนโลยี",
      description:
        "เราไม่ใช่แค่ software house ธรรมดา — เราคือ Tech Partner ที่เข้าใจธุรกิจ วิเคราะห์ปัญหา แล้วสร้าง solution ที่ทำงานจริง ลดต้นทุน เพิ่มรายได้ ให้ระบบทำงานแทนคน",
      highlights: [
        { label: "ทีม Senior", value: "นักพัฒนาประสบการณ์ 5+ ปี จากองค์กรชั้นนำ" },
        { label: "เข้าใจธุรกิจ", value: "วิเคราะห์ปัญหาก่อนเขียนโค้ด ไม่ใช่แค่ทำตามสั่ง" },
        { label: "ผลลัพธ์วัดได้", value: "ลดต้นทุน เพิ่มลูกค้า เห็นผลจริงใน 30 วัน" },
      ],
      jsonDisplay: {
        name: "RunAway Tech",
        type: "Tech Solution Partner",
        team: "Senior Developers",
        mission: "ช่วยธุรกิจเติบโตด้วยเทคโนโลยี",
      },
    },
    en: {
      title: "About",
      heading: "We Help Businesses Grow with Technology",
      description:
        "We're not just another software house — we're your Tech Partner who understands business, analyzes problems, and builds solutions that actually work. Cut costs, increase revenue, let systems do the work.",
      highlights: [
        { label: "Senior Team", value: "5+ years experience from top organizations" },
        { label: "Business-First", value: "We analyze problems before writing code" },
        { label: "Measurable Results", value: "Cut costs, gain customers — results in 30 days" },
      ],
      jsonDisplay: {
        name: "RunAway Tech",
        type: "Tech Solution Partner",
        team: "Senior Developers",
        mission: "Help businesses grow with technology",
      },
    },
  },
  process: {
    th: {
      title: "Process",
      heading: "ขั้นตอนการทำงาน",
      steps: [
        {
          num: "01",
          title: "ปรึกษา",
          desc: "รับฟังความต้องการ วิเคราะห์โจทย์ ประเมินขอบเขตงาน",
        },
        {
          num: "02",
          title: "วางแผน",
          desc: "ออกแบบระบบ กำหนด timeline และงบประมาณชัดเจน",
        },
        {
          num: "03",
          title: "พัฒนา",
          desc: "เขียนโค้ด ส่งอัพเดทสม่ำเสมอ ให้คุณเห็นความคืบหน้า",
        },
        {
          num: "04",
          title: "ทดสอบ",
          desc: "QA ละเอียดทุกฟังก์ชัน มั่นใจก่อนส่งมอบ",
        },
        {
          num: "05",
          title: "ส่งมอบ",
          desc: "เปิดใช้งานจริง พร้อมดูแลหลังส่งมอบ",
        },
      ],
    },
    en: {
      title: "Process",
      heading: "Our Process",
      steps: [
        {
          num: "01",
          title: "Consult",
          desc: "Listen to your needs, analyze requirements, define scope",
        },
        {
          num: "02",
          title: "Plan",
          desc: "Design the system, set clear timeline and budget",
        },
        {
          num: "03",
          title: "Develop",
          desc: "Write code with regular updates so you see progress",
        },
        {
          num: "04",
          title: "Test",
          desc: "Thorough QA on every feature before delivery",
        },
        {
          num: "05",
          title: "Deliver",
          desc: "Launch to production with post-launch support",
        },
      ],
    },
  },
  whyUs: {
    th: {
      title: "Why Us",
      heading: "ทำไมต้องเลือกเรา",
      items: [
        {
          icon: "quality",
          title: "คุณภาพจัดเต็ม",
          desc: "Code review, testing ทุกโปรเจกต์ ไม่ปล่อยงานที่ไม่มั่นใจ",
        },
        {
          icon: "speed",
          title: "ส่งงานเร็ว",
          desc: "ทำงานคล่อง ไม่มีขั้นตอนเยอะ ลดเวลารอคอย",
        },
        {
          icon: "price",
          title: "ราคาเข้าถึงได้",
          desc: "ทีมไทย คุณภาพสากล ราคาสมเหตุสมผล",
        },
        {
          icon: "team",
          title: "ทีมมีประสบการณ์",
          desc: "นักพัฒนา senior ที่เคยส่งมอบงานจริงให้องค์กรชั้นนำ",
        },
      ],
    },
    en: {
      title: "Why Us",
      heading: "Why Choose Us",
      items: [
        {
          icon: "quality",
          title: "Top Quality",
          desc: "Code review and testing on every project, no shortcuts",
        },
        {
          icon: "speed",
          title: "Fast Delivery",
          desc: "Lean process, no bureaucracy, minimal wait time",
        },
        {
          icon: "price",
          title: "Affordable",
          desc: "Thai team, global standards, reasonable pricing",
        },
        {
          icon: "team",
          title: "Experienced Team",
          desc: "Senior developers with proven delivery for top organizations",
        },
      ],
    },
  },
  techStack: {
    th: {
      title: "Tech Stack",
      heading: "เทคโนโลยีที่เราใช้",
    },
    en: {
      title: "Tech Stack",
      heading: "Our Tech Stack",
    },
    categories: [
      {
        name: "Frontend",
        color: "text-accent-blue",
        techs: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS"],
      },
      {
        name: "Backend",
        color: "text-accent-green",
        techs: ["Node.js", "Python", "Go", "NestJS", "FastAPI"],
      },
      {
        name: "Mobile",
        color: "text-accent-orange",
        techs: ["React Native", "Flutter", "Swift", "Kotlin"],
      },
      {
        name: "Cloud",
        color: "text-accent-blue",
        techs: ["AWS", "GCP", "Azure", "Vercel", "Docker"],
      },
      {
        name: "Database",
        color: "text-accent-green",
        techs: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
      },
      {
        name: "AI",
        color: "text-accent-orange",
        techs: ["Claude", "Gemini", "Cursor", "Claude Code"],
      },
    ],
  },
  contact: {
    th: {
      title: "Contact",
      heading: "พร้อมให้เทคโนโลยีช่วยธุรกิจคุณ?",
      subtitle:
        "ปรึกษาฟรี บอกเราเกี่ยวกับปัญหาธุรกิจของคุณ แล้วเราจะเสนอ solution ที่เหมาะสมภายใน 24 ชม.",
      cta: "ปรึกษาฟรี — เริ่มเลย",
      email: "contact.runawaytech@gmail.com",
      emailLabel: "หรือส่งอีเมลหาเราได้ที่",
    },
    en: {
      title: "Contact",
      heading: "Ready to Grow with Technology?",
      subtitle:
        "Free consultation — tell us your business challenges and we'll propose the right solution within 24 hours.",
      cta: "Free Consultation — Start Now",
      email: "contact.runawaytech@gmail.com",
      emailLabel: "Or email us at",
    },
  },
  blog: {
    th: {
      title: "บล็อก",
      heading: "บทความ",
      subtitle: "เรื่องน่ารู้เกี่ยวกับเทคโนโลยีและการพัฒนาซอฟต์แวร์",
      readMore: "อ่านต่อ",
      backToHome: "กลับหน้าหลัก",
      backToBlog: "กลับหน้าบทความ",
      publishedOn: "เผยแพร่เมื่อ",
      minRead: "นาที",
    },
    en: {
      title: "Blog",
      heading: "Articles",
      subtitle: "Insights on technology and software development",
      readMore: "Read more",
      backToHome: "Back to Home",
      backToBlog: "Back to Blog",
      publishedOn: "Published on",
      minRead: "min read",
    },
  },
  footer: {
    th: {
      copyright: "RunAway Tech. All rights reserved.",
      tagline: "เทคโนโลยีที่ช่วยธุรกิจเติบโต — ไม่ใช่แค่เขียนโค้ด",
    },
    en: {
      copyright: "RunAway Tech. All rights reserved.",
      tagline: "Technology that grows your business — not just code.",
    },
  },
} as const;
