import { Children, ReactNode, useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: ReactNode;
}

function RevealItem({ children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px 160px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal-section${visible ? ' is-visible' : ''}`}>
      {children}
    </div>
  );
}

export default function Reveal({ children }: RevealProps) {
  return (
    <>
      {Children.map(children, (child) => (
        <RevealItem>{child}</RevealItem>
      ))}
    </>
  );
}
