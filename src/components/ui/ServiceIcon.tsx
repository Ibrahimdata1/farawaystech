interface ServiceIconProps {
  name: string;
  className?: string;
}

function IconSvg({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent-green/20 to-accent-blue/10 ring-1 ring-accent-green/20">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent-green"
      >
        {children}
      </svg>
    </div>
  );
}

const icons: Record<string, React.ReactNode> = {
  portfolio: (
    <IconSvg>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
      <path d="M4.93 7h14.14" opacity="0.5" />
      <path d="M4.93 17h14.14" opacity="0.5" />
    </IconSvg>
  ),
  mobile: (
    <IconSvg>
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <path d="M10 18h4" strokeWidth="2" strokeLinecap="round" />
      <path d="M5 6h14" opacity="0.4" />
      <path d="M5 15h14" opacity="0.4" />
    </IconSvg>
  ),
  webapp: (
    <IconSvg>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M2 7h20" opacity="0.4" />
      <circle cx="5" cy="5" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="7.5" cy="5" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="10" cy="5" r="0.5" fill="currentColor" stroke="none" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 11l3 2.5L7 16" opacity="0.7" />
      <path d="M13 14h4" opacity="0.5" />
    </IconSvg>
  ),
  store: (
    <IconSvg>
      <path d="M3 9h18" />
      <path d="M3 9l1.5-5h15L21 9" />
      <path d="M3 9c0 1.5 1.5 3 3 3s3-1.5 3-3" opacity="0.5" />
      <path d="M9 9c0 1.5 1.5 3 3 3s3-1.5 3-3" opacity="0.5" />
      <path d="M15 9c0 1.5 1.5 3 3 3s3-1.5 3-3" opacity="0.5" />
      <path d="M4 12v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8" />
      <path d="M9 21v-6h6v6" opacity="0.6" />
    </IconSvg>
  ),
  backoffice: (
    <IconSvg>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" opacity="0.4" />
      <path d="M9 9v12" opacity="0.4" />
      <circle cx="6" cy="6" r="0.5" fill="currentColor" stroke="none" />
      <path d="M12 13h6" opacity="0.6" />
      <path d="M12 16.5h4" opacity="0.4" />
      <path d="M4.5 13h2" opacity="0.6" />
      <path d="M4.5 16h2" opacity="0.4" />
      <path d="M4.5 19h2" opacity="0.4" />
    </IconSvg>
  ),
  other: (
    <IconSvg>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <circle cx="12" cy="17" r="0.5" fill="currentColor" stroke="none" />
      <path d="M12 2v1" opacity="0.3" />
      <path d="M12 21v1" opacity="0.3" />
      <path d="M2 12h1" opacity="0.3" />
      <path d="M21 12h1" opacity="0.3" />
    </IconSvg>
  ),
  quality: (
    <IconSvg>
      <path d="M12 2L3 7v6c0 5.25 3.75 10.13 9 11.25C17.25 23.13 21 18.25 21 13V7l-9-5z" />
      <path d="M9 12l2 2 4-4" opacity="0.8" />
    </IconSvg>
  ),
  speed: (
    <IconSvg>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </IconSvg>
  ),
  price: (
    <IconSvg>
      <circle cx="12" cy="12" r="10" />
      <path d="M15 9.5c-.5-1-1.5-1.5-3-1.5s-3 .5-3 2 1.5 2 3 2.5 3 1 3 2.5-1.5 2-3 2-2.5-.5-3-1.5" />
      <path d="M12 5.5v1.5" opacity="0.5" />
      <path d="M12 17v1.5" opacity="0.5" />
    </IconSvg>
  ),
  team: (
    <IconSvg>
      <circle cx="9" cy="7" r="3" />
      <path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
      <circle cx="17" cy="8" r="2.5" opacity="0.5" />
      <path d="M17 11.5a3 3 0 0 1 3 3V21" opacity="0.5" />
    </IconSvg>
  ),
};

export default function ServiceIcon({ name, className }: ServiceIconProps) {
  return <div className={className}>{icons[name] ?? icons["other"]}</div>;
}
