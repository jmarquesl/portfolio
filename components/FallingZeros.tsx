import { useCallback, useEffect, useRef, useState } from 'react';

interface Zero {
  id: number;
  x: number;
  speed: number;
  size: number;
  opacity: number;
  delay: number;
}

interface Burst {
  id: number;
  x: number;
  y: number;
}

const BURST_CHARS = ['0', '1', '0', '1', '0', '1', '0'];
const BURST_ANGLES = [0, 51, 103, 154, 205, 257, 308];
const MAX_ZEROS = 18;
let nextId = 1;

function getContentBounds(vw: number): { left: number; right: number } {
  const maxW = 1180;
  const hPad = vw <= 900 ? 24 : 48;
  const colW = Math.min(maxW, vw);
  const marginH = (vw - colW) / 2;
  return {
    left: marginH + hPad,
    right: marginH + colW - hPad,
  };
}

function makeZero(): Zero {
  return {
    id: nextId++,
    x: 5 + Math.random() * 90,
    speed: 12 + Math.random() * 8,
    size: 14 + Math.random() * 14,
    opacity: 0.3 + Math.random() * 0.35,
    delay: -(Math.random() * 8),
  };
}

export default function FallingZeros({ onActivate }: { onActivate: () => void }) {
  const [zeros, setZeros] = useState<Zero[]>(() =>
    Array.from({ length: 10 }, makeZero)
  );
  const [bursts, setBursts] = useState<Burst[]>([]);
  const [deleted, setDeleted] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1280
  );
  const spawnRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    spawnRef.current = setInterval(() => {
      setZeros((prev) => {
        if (prev.length >= MAX_ZEROS) return prev;
        return [...prev, makeZero()];
      });
    }, 1100);
    return () => {
      if (spawnRef.current) clearInterval(spawnRef.current);
    };
  }, []);

  const handleClick = useCallback((id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const burstId = nextId++;
    const x = e.clientX;
    const y = e.clientY;
    setZeros((prev) => prev.filter((z) => z.id !== id));
    setBursts((prev) => [...prev, { id: burstId, x, y }]);
    setDeleted((d) => {
      const next = d + 1;
      if (next === 23) onActivate();
      return next;
    });
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== burstId));
    }, 600);
  }, []);

  return (
    <>
      {(() => {
        const bounds = getContentBounds(windowWidth);
        return zeros.map((z) => {
          const pixelX = (z.x / 100) * windowWidth;
          const inContent = pixelX >= bounds.left && pixelX <= bounds.right;
          return (
            <button
              key={z.id}
              className="falling-zero"
              onClick={inContent ? undefined : (e) => handleClick(z.id, e)}
              aria-hidden="true"
              tabIndex={-1}
              style={{
                left: `${z.x}%`,
                fontSize: `${z.size}px`,
                animationDuration: `${z.speed}s`,
                animationDelay: `${z.delay}s`,
                opacity: inContent ? z.opacity * 0.3 : z.opacity,
                filter: inContent ? 'blur(1.5px)' : undefined,
                pointerEvents: inContent ? 'none' : 'auto',
              }}
            >
              0
            </button>
          );
        });
      })()}
      {bursts.map((b) => (
        <div
          key={b.id}
          className="zero-burst"
          style={{ left: b.x, top: b.y }}
          aria-hidden="true"
        >
          {BURST_CHARS.map((ch, i) => {
            const angle = BURST_ANGLES[i] * (Math.PI / 180);
            const dist = 28 + Math.random() * 20;
            const dx = Math.round(Math.cos(angle) * dist);
            const dy = Math.round(Math.sin(angle) * dist);
            return (
              <span
                key={i}
                className="zero-burst-particle"
                style={
                  {
                    '--dx': `${dx}px`,
                    '--dy': `${dy}px`,
                    animationDelay: `${i * 18}ms`,
                  } as React.CSSProperties
                }
              >
                {ch}
              </span>
            );
          })}
        </div>
      ))}
      <div className={`zeros-counter${deleted >= 5 ? ' is-visible' : ''}`}>
        {'>'} /dev/null ×{deleted}
      </div>
    </>
  );
}
