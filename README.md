# FarAwaysTech - Landing Page

Website สำหรับ FarAways Tech Software House

**Live:** [farawaystech.dev](https://farawaystech.dev)

---

## Tech Stack

| Category    | Technology                          |
| ----------- | ----------------------------------- |
| Framework   | Next.js 16 (App Router, Turbopack) |
| Language    | TypeScript                          |
| Styling     | Tailwind CSS 4                      |
| Animation   | Framer Motion                       |
| Particles   | tsparticles                         |
| Font        | Inter, JetBrains Mono (Google Fonts)|

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev        # http://localhost:3000

# Build for production
npm run build

# Start production server
npm run start

# Lint
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Theme colors, custom scrollbar, animations
│   ├── layout.tsx           # Root layout, metadata, fonts
│   └── page.tsx             # Home page (lang state + all sections)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Top nav, mobile hamburger, scroll spy, lang toggle
│   │   └── Footer.tsx       # Footer with email + copyright
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx      # Hero banner, typing animation, particles
│   │   ├── ServicesSection.tsx   # 6 service cards
│   │   ├── AboutSection.tsx     # About + JSON display
│   │   ├── ProcessSection.tsx   # 5-step process timeline
│   │   ├── WhyUsSection.tsx     # 4 reasons cards
│   │   ├── TechStackSection.tsx # Tech categories grid
│   │   └── ContactSection.tsx   # CTA -> smart-requirement form
│   │
│   ├── ui/
│   │   ├── Button.tsx           # Primary/secondary button (link or button)
│   │   ├── ParticleBackground.tsx # tsparticles background
│   │   ├── ScrollReveal.tsx     # Fade-in on scroll (framer-motion)
│   │   ├── StatusBadge.tsx      # Animated status indicator
│   │   ├── TerminalWindow.tsx   # macOS-style terminal card
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

- ภาษาถูกเก็บใน `src/lib/content.ts` เป็น object เดียว key ด้วย `th` | `en`
- State `lang` อยู่ที่ `page.tsx` แล้ว pass ลง props ทุก section
- Toggle ผ่านปุ่มบน Navbar

### Theming

สี theme ทั้งหมดอยู่ใน `globals.css` ภายใต้ `@theme` directive ของ Tailwind 4:

| Token              | Color   | Usage                  |
| ------------------ | ------- | ---------------------- |
| `bg-primary`       | #0d1117 | Page background        |
| `bg-card`          | #1c2128 | Card background        |
| `bg-card-hover`    | #252d38 | Card hover             |
| `text-primary`     | #e6edf3 | Main text              |
| `text-secondary`   | #8b949e | Muted text             |
| `accent-green`     | #40c057 | Brand color, CTA       |
| `accent-blue`      | #58a6ff | Links, highlights      |
| `accent-orange`    | #f0b429 | Accent                 |
| `border`           | #30363d | Borders, dividers      |

### Contact Flow

ฟอร์มติดต่อไม่ได้อยู่ในเว็บนี้ ปุ่ม CTA ใน Contact Section จะลิงก์ไปที่:

**[https://smart-requirement.vercel.app](https://smart-requirement.vercel.app)**

เป็นแอปแยกสำหรับเก็บ requirement ของลูกค้า

### Animation

- ใช้ `framer-motion` ผ่าน `LazyMotion` provider เพื่อลด bundle size
- ทุก section มี fade-in on scroll ผ่าน `ScrollReveal` component
- Respect `prefers-reduced-motion` ผ่าน `useReducedMotion` hook
