export type Lang = "th" | "en";

export const content = {
  nav: {
    th: {
      services: "บริการ",
      about: "เกี่ยวกับเรา",
      process: "ขั้นตอน",
      whyUs: "ทำไมต้องเรา",
      techStack: "เทคโนโลยี",
      contact: "ติดต่อ",
    },
    en: {
      services: "Services",
      about: "About",
      process: "Process",
      whyUs: "Why Us",
      techStack: "Tech Stack",
      contact: "Contact",
    },
  },
  hero: {
    th: {
      greeting: "สวัสดี, ยินดีต้อนรับสู่ FarAways Tech",
      headline: "เราสร้างซอฟต์แวร์ที่ตอบโจทย์ธุรกิจคุณ",
      subtitle:
        "ทีมนักพัฒนามืออาชีพ พร้อมเปลี่ยนไอเดียของคุณให้กลายเป็นซอฟต์แวร์คุณภาพ ส่งงานเร็ว ราคาเข้าถึงได้",
      cta: "เริ่มโปรเจกต์ของคุณ",
      status: "พร้อมรับงาน",
    },
    en: {
      greeting: "Hello, welcome to FarAways Tech",
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
          icon: "💻",
          title: "พัฒนาซอฟต์แวร์",
          desc: "เว็บ แอป ระบบหลังบ้าน ครบวงจร ตั้งแต่เริ่มจนส่งมอบ",
        },
        {
          icon: "🔍",
          title: "ทดสอบคุณภาพ (QA)",
          desc: "ตรวจสอบทุกจุด มั่นใจก่อนปล่อยงาน ลดบั๊กให้น้อยที่สุด",
        },
        {
          icon: "🎨",
          title: "ออกแบบ UX/UI",
          desc: "ดีไซน์ที่ใช้งานง่าย สวยงาม เน้นประสบการณ์ผู้ใช้",
        },
        {
          icon: "📋",
          title: "วางกลยุทธ์ Product",
          desc: "วางแผน roadmap วิเคราะห์ตลาด ให้โปรดักต์เป็นรูปธรรม",
        },
        {
          icon: "🤖",
          title: "พัฒนา AI Agent",
          desc: "สร้าง AI ช่วยงาน ลดภาระทีม เพิ่มประสิทธิภาพองค์กร",
        },
        {
          icon: "💬",
          title: "Customer Agent",
          desc: "แชทบอท/AI ดูแลลูกค้าอัตโนมัติ ตอบเร็ว ตลอด 24 ชั่วโมง",
        },
      ],
    },
    en: {
      title: "// services",
      heading: "Our Services",
      items: [
        {
          icon: "💻",
          title: "Software Development",
          desc: "Web, mobile, backend systems - end to end, from start to delivery",
        },
        {
          icon: "🔍",
          title: "Quality Assurance",
          desc: "Thorough testing at every stage, minimizing bugs before launch",
        },
        {
          icon: "🎨",
          title: "UX/UI Design",
          desc: "Beautiful, user-friendly designs focused on great experiences",
        },
        {
          icon: "📋",
          title: "Product Strategy",
          desc: "Roadmap planning, market analysis, turning vision into reality",
        },
        {
          icon: "🤖",
          title: "AI Agent Development",
          desc: "Custom AI assistants to automate workflows and boost productivity",
        },
        {
          icon: "💬",
          title: "Customer Agent",
          desc: "AI-powered chatbots for 24/7 automated customer support",
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
        { label: "ผลงานจริง", value: "ส่งมอบโปรเจกต์ 50+ ชิ้น" },
        { label: "หลากหลาย", value: "ทำงานกับทั้ง Startup และองค์กรใหญ่" },
      ],
      jsonDisplay: {
        name: "FarAways Tech",
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
        { label: "Proven Track Record", value: "50+ projects delivered" },
        { label: "Versatile", value: "Startups to enterprise clients" },
      ],
      jsonDisplay: {
        name: "FarAways Tech",
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
          icon: "✅",
          title: "คุณภาพจัดเต็ม",
          desc: "Code review, testing ทุกโปรเจกต์ ไม่ปล่อยงานที่ไม่มั่นใจ",
        },
        {
          icon: "⚡",
          title: "ส่งงานเร็ว",
          desc: "ทำงานคล่อง ไม่มีขั้นตอนเยอะ ลดเวลารอคอย",
        },
        {
          icon: "💰",
          title: "ราคาเข้าถึงได้",
          desc: "ทีมไทย คุณภาพสากล ราคาสมเหตุสมผล",
        },
        {
          icon: "👨‍💻",
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
          icon: "✅",
          title: "Top Quality",
          desc: "Code review and testing on every project, no shortcuts",
        },
        {
          icon: "⚡",
          title: "Fast Delivery",
          desc: "Lean process, no bureaucracy, minimal wait time",
        },
        {
          icon: "💰",
          title: "Affordable",
          desc: "Thai team, global standards, reasonable pricing",
        },
        {
          icon: "👨‍💻",
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
      email: "hello@farawaystech.dev",
      emailLabel: "หรือส่งอีเมลหาเราได้ที่",
    },
    en: {
      title: "// contact",
      heading: "Start Your Project",
      subtitle:
        "Tell us about your project. Fill out a quick form and we'll get back to you shortly.",
      cta: "Fill Out Project Brief",
      email: "hello@farawaystech.dev",
      emailLabel: "Or email us at",
    },
  },
  footer: {
    th: {
      copyright: "FarAways Tech. All rights reserved.",
      tagline: "สร้างด้วยใจ โดยทีม FarAways Tech",
    },
    en: {
      copyright: "FarAways Tech. All rights reserved.",
      tagline: "Built with passion by FarAways Tech team",
    },
  },
} as const;
