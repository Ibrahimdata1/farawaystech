export type Lang = "th" | "en";

export const content = {
  nav: {
    th: {
      services: "บริการ",
      portfolio: "ผลงาน",
      about: "เกี่ยวกับเรา",
      process: "ขั้นตอน",
      whyUs: "ทำไมต้องเรา",
      techStack: "เทคโนโลยี",
      contact: "ติดต่อ",
    },
    en: {
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      process: "Process",
      whyUs: "Why Us",
      techStack: "Tech Stack",
      contact: "Contact",
    },
  },
  hero: {
    th: {
      greeting: "สวัสดี, ยินดีต้อนรับสู่ RunAway Tech",
      headline: "เราสร้างซอฟต์แวร์ที่ตอบโจทย์ธุรกิจคุณ",
      subtitle:
        "ทีมนักพัฒนามืออาชีพ พร้อมเปลี่ยนไอเดียของคุณให้กลายเป็นซอฟต์แวร์คุณภาพ ส่งงานเร็ว ราคาเข้าถึงได้",
      cta: "เริ่มโปรเจกต์ของคุณ",
      status: "พร้อมรับงาน",
    },
    en: {
      greeting: "Hello, welcome to RunAway Tech",
      headline: "We build software that works for your business",
      subtitle:
        "A professional dev team ready to turn your ideas into quality software. Fast delivery, affordable pricing.",
      cta: "Start Your Project",
      status: "Available for projects",
    },
  },
  services: {
    th: {
      title: "// services",
      heading: "บริการของเรา",
      items: [
        {
          icon: "portfolio",
          title: "เว็บไซต์แนะนำตัว / โชว์ผลงาน",
          desc: "เว็บแสดงข้อมูลธุรกิจ พอร์ตโฟลิโอ ไม่ต้องมีระบบหลังบ้าน",
        },
        {
          icon: "mobile",
          title: "แอปมือถือ",
          desc: "แอปบน iOS / Android ออกแบบและพัฒนาครบจบในทีมเดียว",
        },
        {
          icon: "webapp",
          title: "ระบบออนไลน์ / โปรแกรมใช้งานผ่านเน็ต",
          desc: "ระบบจอง นัดหมาย บัญชี หรือระบบเฉพาะทางตามต้องการ",
        },
        {
          icon: "store",
          title: "ร้านค้าออนไลน์",
          desc: "ขายสินค้า รับชำระเงินในเว็บ พร้อมระบบจัดการออเดอร์",
        },
        {
          icon: "backoffice",
          title: "ระบบจัดการหลังบ้าน",
          desc: "ดูข้อมูล จัดการสต็อก พนักงาน รายงาน ครบในที่เดียว",
        },
      ],
    },
    en: {
      title: "// services",
      heading: "Our Services",
      items: [
        {
          icon: "portfolio",
          title: "Portfolio & Landing Pages",
          desc: "Showcase your business or portfolio with a clean, modern website",
        },
        {
          icon: "mobile",
          title: "Mobile Apps",
          desc: "iOS & Android apps, designed and built end-to-end by our team",
        },
        {
          icon: "webapp",
          title: "Web Applications",
          desc: "Booking systems, scheduling, accounting, or any custom web app",
        },
        {
          icon: "store",
          title: "Online Stores",
          desc: "E-commerce with payments, order management, and inventory",
        },
        {
          icon: "backoffice",
          title: "Back-Office Systems",
          desc: "Dashboards for data, stock, employees, and reports — all in one place",
        },
      ],
    },
  },
  portfolio: {
    th: {
      title: "// portfolio",
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
      title: "// portfolio",
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
      title: "// about",
      heading: "เกี่ยวกับเรา",
      description:
        "เราคือกลุ่มเพื่อนนักพัฒนามืออาชีพ ที่เชื่อว่าซอฟต์แวร์คุณภาพไม่จำเป็นต้องแพง เราทำงานด้วยมาตรฐานสูง ส่งมอบงานเร็ว ในราคาที่เข้าถึงได้",
      highlights: [
        { label: "ทีม Senior", value: "นักพัฒนาประสบการณ์ 5+ ปี" },
        { label: "มาตรฐาน Enterprise", value: "ทีมงานผ่านงานระดับองค์กรใหญ่มาโดยตรง" },
        { label: "คุ้มค่าทุกบาท", value: "คุณภาพระดับ Enterprise ในราคาที่เข้าถึงได้" },
      ],
      jsonDisplay: {
        name: "RunAway Tech",
        type: "Software House",
        team: "Senior Developers",
        mission: "Quality software, accessible pricing",
      },
    },
    en: {
      title: "// about",
      heading: "About Us",
      description:
        "We're a group of professional developer friends who believe quality software doesn't have to be expensive. High standards, fast delivery, accessible pricing.",
      highlights: [
        { label: "Senior Team", value: "Developers with 5+ years experience" },
        { label: "Enterprise-Grade", value: "Team with hands-on enterprise background" },
        { label: "Best Value", value: "Enterprise quality at a fraction of the cost" },
      ],
      jsonDisplay: {
        name: "RunAway Tech",
        type: "Software House",
        team: "Senior Developers",
        mission: "Quality software, accessible pricing",
      },
    },
  },
  process: {
    th: {
      title: "// process",
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
      title: "// process",
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
      title: "// why-us",
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
      title: "// why-us",
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
      title: "// tech-stack",
      heading: "เทคโนโลยีที่เราใช้",
    },
    en: {
      title: "// tech-stack",
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
        techs: ["OpenAI", "LangChain", "Claude", "RAG", "Fine-tuning"],
      },
    ],
  },
  contact: {
    th: {
      title: "// contact",
      heading: "เริ่มโปรเจกต์กับเรา",
      subtitle:
        "บอกเราเกี่ยวกับโปรเจกต์ของคุณ แค่กรอกฟอร์มสั้นๆ แล้วเราจะติดต่อกลับโดยเร็ว",
      cta: "กรอกแบบฟอร์มเริ่มโปรเจกต์",
      email: "hello@runawaytech.dev",
      emailLabel: "หรือส่งอีเมลหาเราได้ที่",
    },
    en: {
      title: "// contact",
      heading: "Start Your Project",
      subtitle:
        "Tell us about your project. Fill out a quick form and we'll get back to you shortly.",
      cta: "Fill Out Project Brief",
      email: "hello@runawaytech.dev",
      emailLabel: "Or email us at",
    },
  },
  footer: {
    th: {
      copyright: "RunAway Tech. All rights reserved.",
      tagline: "สร้างด้วยใจ โดยทีม RunAway Tech",
    },
    en: {
      copyright: "RunAway Tech. All rights reserved.",
      tagline: "Built with passion by RunAway Tech team",
    },
  },
} as const;
