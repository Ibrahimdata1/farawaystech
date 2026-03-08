# RunAway Tech - Landing Page

Website สำหรับ RunAway Tech Software House

**Live:** [runawaytech.vercel.app](https://runawaytech.vercel.app)

---

## Tech Stack

| Category    | Technology                                    |
| ----------- | --------------------------------------------- |
| Framework   | Next.js 16 (App Router, Turbopack)            |
| Language    | TypeScript                                    |
| Styling     | Tailwind CSS 4                                |
| Animation   | Framer Motion (LazyMotion)                    |
| Particles   | tsparticles                                   |
| Font        | Noto Sans Thai, Inter, JetBrains Mono (Google)|
| Deploy      | Vercel                                        |

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Production build
npm run start      # Production server
npm run lint       # ESLint
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Theme colors (dark + light), scrollbar, animations
│   ├── layout.tsx           # Root layout, metadata, fonts, theme flash prevention
│   └── page.tsx             # Home page (lang + theme state, all sections)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Top nav, mobile hamburger, scroll spy, lang + theme toggle
│   │   └── Footer.tsx       # Footer with email + copyright
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx      # Hero banner, typing animation, particles
│   │   ├── ServicesSection.tsx   # 5 service cards (3+2 centered grid)
│   │   ├── AboutSection.tsx     # About + JSON display
│   │   ├── ProcessSection.tsx   # 5-step process timeline
│   │   ├── WhyUsSection.tsx     # 4 reasons cards
│   │   ├── TechStackSection.tsx # Tech categories grid
│   │   └── ContactSection.tsx   # CTA -> smart-requirement form
│   │
│   ├── ui/
│   │   ├── Button.tsx           # Primary/secondary button (link or button)
│   │   ├── ServiceIcon.tsx      # SVG icons with gradient container
│   │   ├── ParticleBackground.tsx # Theme-aware tsparticles background
│   │   ├── ScrollReveal.tsx     # Fade-in on scroll (framer-motion)
│   │   ├── StatusBadge.tsx      # Animated status indicator
│   │   ├── TerminalWindow.tsx   # Card with accent bar header
│   │   └── TypingAnimation.tsx  # Typewriter text effect
│   │
│   └── providers/
│       └── MotionProvider.tsx   # LazyMotion provider (reduce bundle)
│
├── hooks/
│   ├── useReducedMotion.ts  # Respect prefers-reduced-motion
│   ├── useScrollSpy.ts     # Active section detection for nav
│   └── useTypingEffect.ts  # Typing animation logic
│
└── lib/
    ├── constants.ts         # NAV_ITEMS, SECTION_IDS
    └── content.ts           # All text content (TH/EN), single source of truth
```

## Architecture Notes

### Multi-language (TH/EN)

- ข้อความทั้งหมดอยู่ใน `src/lib/content.ts` key ด้วย `th` | `en`
- State `lang` อยู่ที่ `page.tsx` pass ลง props ทุก section
- Toggle ผ่านปุ่มบน Navbar

### Dark / Light Mode

- Default: **Dark mode**
- สลับได้ผ่านปุ่ม sun/moon บน Navbar
- จำค่าไว้ใน `localStorage`
- Flash prevention script ใน `<head>` ป้องกัน flash ตอนโหลดหน้า
- ใช้ `data-theme` attribute บน `<html>` + CSS variables override

**Dark mode colors:**

| Token              | Color   | Usage                  |
| ------------------ | ------- | ---------------------- |
| `bg-primary`       | #0d1117 | Page background        |
| `bg-card`          | #1c2128 | Card background        |
| `text-primary`     | #e6edf3 | Main text              |
| `text-secondary`   | #8b949e | Muted text             |
| `accent-green`     | #40c057 | Brand color, CTA       |
| `accent-blue`      | #58a6ff | Links, highlights      |
| `border`           | #30363d | Borders, dividers      |

**Light mode colors:**

| Token              | Color   | Usage                  |
| ------------------ | ------- | ---------------------- |
| `bg-primary`       | #f8f9fb | Page background        |
| `bg-card`          | #ffffff | Card background        |
| `text-primary`     | #0f172a | Main text              |
| `text-secondary`   | #475569 | Muted text             |
| `accent-green`     | #059669 | Brand color, CTA       |
| `accent-blue`      | #2563eb | Links, highlights      |
| `border`           | #e2e8f0 | Borders, dividers      |

### Services (5 items)

1. เว็บไซต์แนะนำตัว / โชว์ผลงาน
2. แอปมือถือ (iOS / Android)
3. ระบบออนไลน์ (จอง, นัดหมาย, บัญชี)
4. ร้านค้าออนไลน์
5. ระบบจัดการหลังบ้าน

### Contact Flow

ไม่มี backend/DB ในโปรเจคนี้ ปุ่ม CTA ลิงก์ไปที่:

**[https://smart-requirement.vercel.app](https://smart-requirement.vercel.app)**

### Responsive

- รองรับ 320px (iPhone SE) ถึง 1920px+
- Touch target ขั้นต่ำ 44px ตามมาตรฐาน Apple/Google
- `overflow-x: hidden` บน body + main ป้องกัน horizontal scroll
