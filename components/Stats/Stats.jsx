'use client';
import { useRef, useEffect, useState } from 'react';
import { m, useInView } from 'framer-motion';

function CountUp({ to, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }
    let current = 0;
    const duration = 1600;
    const increment = to / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 500, suffix: '+', label: 'Brownies entregues' },
  { value: 100, suffix: '%', label: 'Ingredientes artesanais' },
  { value: 3, suffix: '', label: 'Anos criando momentos' },
];

export default function Stats() {
  return (
    <section style={{
      backgroundColor: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      position: 'relative',
      padding: '5rem 0',
    }}>
      <div className="container">
        <div className="stats-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
        }}>
          {stats.map((stat, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              style={{
                padding: '1.5rem 2rem',
                borderRight: i < stats.length - 1 ? '1px solid rgba(166, 124, 82, 0.2)' : 'none',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(3rem, 5vw, 5rem)',
                fontWeight: 900,
                color: 'var(--text-main)',
                lineHeight: 1,
                letterSpacing: '-0.04em',
                marginBottom: '0.6rem',
              }}>
                <CountUp to={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6rem',
                fontWeight: 500,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'var(--text-light)',
              }}>
                {stat.label}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
