'use client';
import { m } from 'framer-motion';
import Image from 'next/image';
import { Camera as InstagramIcon, Heart } from 'lucide-react';

const photos = [
  '/images/brownieinsta2.jpg',
  '/images/brownieinsta3.jpg',
  '/images/brownieinsta1.jpg',
];

// Masonry layout: 2 small top, big bottom (full width)
const photoLayouts = [
  { gridColumn: '1', gridRow: '1', paddingBottom: '100%', height: 0 },
  { gridColumn: '2', gridRow: '1', paddingBottom: '100%', height: 0 },
  { gridColumn: '1 / span 2', gridRow: '2', paddingBottom: '75%', height: 0 },
];

export default function Instagram() {
  return (
    <section id="instagram" className="section" style={{
      backgroundColor: 'var(--background)',
      borderTop: '1px solid var(--border)',
    }}>
      <div className="container">

        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 'var(--spacing-lg)' }}
        >
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.6rem',
            fontWeight: 500,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '0.8rem',
          }}>
            Nos siga
          </p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', flexWrap: 'wrap' }}>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 900,
              color: 'var(--text-main)',
              letterSpacing: '-0.02em',
              lineHeight: 0.95,
            }}>
              Instagram
            </h2>
            <a
              href="https://instagram.com/evillybrownie"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 400,
                color: 'var(--text-light)',
                letterSpacing: '0.5px',
                borderBottom: '1px solid var(--border)',
                paddingBottom: '1px',
                transition: 'color 0.3s ease',
              }}
            >
              @evillybrownie
            </a>
          </div>
        </m.div>

        {/* Masonry grid */}
        <div className="instagram-masonry" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: '8px',
          marginBottom: 'var(--spacing-md)',
        }}>
          {photos.map((photo, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover="hover"
              animate="rest"
              style={{
                position: 'relative',
                overflow: 'hidden',
                gridColumn: photoLayouts[i].gridColumn,
                gridRow: photoLayouts[i].gridRow,
                paddingBottom: photoLayouts[i].paddingBottom,
                height: photoLayouts[i].height,
                minHeight: photoLayouts[i].minHeight,
                cursor: 'pointer',
                backgroundColor: 'var(--secondary)',
              }}
            >
              <m.div
                variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                style={{ position: 'absolute', inset: 0 }}
              >
                <Image
                  src={photo}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ 
                    objectFit: 'cover',
                    transform: photo === '/images/brownieinsta2.jpg' ? 'scale(1.2)' : 'none'
                  }}
                  alt={`Post ${i + 1} no Instagram`}
                />
              </m.div>

              {/* Hover overlay */}
              <m.div
                variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Heart size={28} color="white" fill="white" />
              </m.div>
            </m.div>
          ))}
        </div>

        {/* CTA */}
        <div>
          <a
            href="https://instagram.com/evillybrownie"
            className="btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#333'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--primary)'; }}
          >
            <InstagramIcon size={14} />
            Siga no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
