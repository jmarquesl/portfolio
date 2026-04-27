import { useEffect, useRef, useState } from 'react';

const BOOT_LINES = [
  'BIOS v2.4.1 — localhosts.es',
  'Checking memory... 512MB OK',
  'Initializing hardware interfaces...',
  'Loading kernel modules...',
  'Mounting filesystem... OK',
  'Starting network stack...',
  'portfolio.service          [  OK  ]',
  'i18n.service               [  OK  ]',
  'skills.db                  [  OK  ]',
  'contact.service            [  OK  ]',
  'System ready. Welcome, jmarquesl.',
];

const DELAYS = [80, 100, 150, 180, 200, 220, 160, 140, 140, 140, 300];

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    let cancelled = false;
    let idx = 0;

    const addLine = () => {
      if (cancelled) return;
      if (idx < BOOT_LINES.length) {
        const current = idx;
        setLines((prev) => [...prev, BOOT_LINES[current]]);
        setProgress(Math.round(((current + 1) / BOOT_LINES.length) * 100));
        idx++;
        setTimeout(addLine, DELAYS[current] ?? 150);
      } else {
        setTimeout(() => {
          if (cancelled) return;
          setFading(true);
          setTimeout(() => { if (!cancelled) onDoneRef.current(); }, 650);
        }, 500);
      }
    };

    const t = setTimeout(addLine, 120);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, []);

  return (
    <div className={`boot-screen${fading ? ' boot-screen--fade' : ''}`} aria-hidden="true">
      <div className="boot-screen-inner">
        <div className="boot-screen-logo">
          <span className="boot-logo-prompt">$</span> jmarquesl@localhosts.es
        </div>
        <div className="boot-screen-log">
          {lines.map((line, i) => (
            <div key={i} className={`boot-screen-line${i === lines.length - 1 ? ' boot-screen-line--last' : ''}`}>
              {line}
            </div>
          ))}
          {progress < 100 && <span className="boot-screen-cursor">▌</span>}
        </div>
        <div className="boot-progress-wrap">
          <div className="boot-progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <div className="boot-progress-label">{String(progress).padStart(3, ' ')}%</div>
      </div>
    </div>
  );
}
