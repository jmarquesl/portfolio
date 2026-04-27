import React from 'react';

const ICONS: Record<string, React.ReactNode> = {
  'device-mobile': <path d="M5 2h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM7 12h2"/>,
  'plug': <g><path d="M6 2v4M10 2v4"/><path d="M4 6h8v3a4 4 0 0 1-8 0V6zM8 13v2"/></g>,
  'globe': <g><circle cx="8" cy="8" r="6"/><path d="M2 8h12M8 2c2 2 2 10 0 12M8 2c-2 2-2 10 0 12"/></g>,
  'flask': <path d="M6 2h4M7 2v4l-3 6a1 1 0 0 0 .9 1.5h6.2A1 1 0 0 0 12 12L9 6V2M5.5 9h5"/>,
  'list-checks': <g><path d="M2 4l1.5 1.5L6 3M2 9l1.5 1.5L6 8M2 14l1.5 1.5L6 13"/><path d="M9 4h5M9 9h5M9 14h5"/></g>,
  'puzzle': <path d="M6 2h2a1 1 0 0 1 1 1v1.5a1 1 0 0 0 1.5.86A1.5 1.5 0 0 1 13 6.5V8h.5a1.5 1.5 0 0 1 0 3H13v1.5a1.5 1.5 0 0 1-2.5 1.14A1 1 0 0 0 9 14.5V13H6.5a1.5 1.5 0 0 1-1.14-2.5A1 1 0 0 0 4.5 9H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.5a1 1 0 0 0 .86-1.5A1.5 1.5 0 0 1 6.5 2H6z"/>,
  'braces': <path d="M5 2H4a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1 1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1M11 2h1a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1 1 1 0 0 0-1 1v3a1 1 0 1-1 1h-1"/>,
  'coffee': <g><path d="M3 6h8v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6zM11 7h1.5a1.5 1.5 0 0 1 0 3H11"/><path d="M5 2v2M7 2v2M9 2v2"/></g>,
  'k': <g><text x="8" y="12" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="700" fill="currentColor" stroke="none">K</text></g>,
  'python': <g><path d="M8 2c-2 0-3 1-3 2v2h6V5"/><path d="M5 6H3a2 2 0 0 0-2 2v2h7v2"/><path d="M8 14c2 0 3-1 3-2v-2H5v1"/><circle cx="6.5" cy="3.5" r="0.5" fill="currentColor"/></g>,
  'database': <g><ellipse cx="8" cy="3.5" rx="5" ry="1.5"/><path d="M3 3.5v9c0 .8 2.2 1.5 5 1.5s5-.7 5-1.5v-9M3 8c0 .8 2.2 1.5 5 1.5s5-.7 5-1.5"/></g>,
  'atom': <g><circle cx="8" cy="8" r="1.2" fill="currentColor"/><ellipse cx="8" cy="8" rx="6" ry="2.5"/><ellipse cx="8" cy="8" rx="6" ry="2.5" transform="rotate(60 8 8)"/><ellipse cx="8" cy="8" rx="6" ry="2.5" transform="rotate(120 8 8)"/></g>,
  'cog': <g><circle cx="8" cy="8" r="2"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.5 1.5M11.5 11.5L13 13M3 13l1.5-1.5M11.5 4.5L13 3"/></g>,
  'github': <path d="M8 1.5a6.5 6.5 0 0 0-2.05 12.67c.32.06.44-.14.44-.31v-1.1c-1.8.4-2.18-.86-2.18-.86-.3-.75-.72-.95-.72-.95-.59-.4.04-.4.04-.4.65.05 1 .67 1 .67.58 1 1.52.7 1.9.54.06-.42.23-.7.41-.86-1.44-.16-2.95-.72-2.95-3.2 0-.7.25-1.28.66-1.74-.07-.16-.29-.82.06-1.7 0 0 .54-.18 1.78.66a6.1 6.1 0 0 1 3.24 0c1.24-.84 1.78-.66 1.78-.66.35.88.13 1.54.06 1.7.41.46.66 1.04.66 1.74 0 2.49-1.51 3.04-2.95 3.2.23.2.44.6.44 1.21v1.79c0 .17.12.38.44.31A6.5 6.5 0 0 0 8 1.5z"/>,
  'gitlab': <path d="M8 14L2 8l1.5-5L5 7h6l1.5-4L14 8z"/>,
  'tower': <g><path d="M4 14V5l4-3 4 3v9"/><path d="M4 14h8M7 9h2v5"/></g>,
  'refresh': <g><path d="M14 4v3h-3M2 12V9h3"/><path d="M13 7a5.5 5.5 0 0 0-10-2M3 9a5.5 5.5 0 0 0 10 2"/></g>,
  'bolt': <path d="M9 1L3 9h4l-1 6 6-8H8z"/>,
  'loop': <g><path d="M2 6a4 4 0 0 1 7-2.5L12 6M14 10a4 4 0 0 1-7 2.5L4 10"/><path d="M12 3v3h-3M4 13v-3h3"/></g>,
  'clipboard': <g><path d="M6 2h4v2H6zM5 3H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-1"/><path d="M5.5 8h5M5.5 11h3"/></g>,
  'git-branch': <g><circle cx="4" cy="3" r="1.5"/><circle cx="4" cy="13" r="1.5"/><circle cx="12" cy="6" r="1.5"/><path d="M4 4.5v7M4 11c0-3 8-2 8-4"/></g>,
  'git-flow': <g><circle cx="3" cy="8" r="1.2"/><circle cx="8" cy="3" r="1.2"/><circle cx="13" cy="8" r="1.2"/><circle cx="8" cy="13" r="1.2"/><path d="M3 8c0-3 5-5 10 0M3 8c0 3 5 5 10 0"/></g>,
  'tree': <g><path d="M8 2v12M3 6c2 0 5 1 5 4M13 6c-2 0-5 1-5 4"/><circle cx="8" cy="2" r="1"/><circle cx="3" cy="6" r="1"/><circle cx="13" cy="6" r="1"/></g>,
};

interface SkillIconProps {
  name: string;
}

export default function SkillIcon({ name }: SkillIconProps) {
  const content = ICONS[name];
  if (!content) return <span className="skill-icon-fallback">›</span>;
  return (
    <svg
      className="skill-icon-svg"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}
