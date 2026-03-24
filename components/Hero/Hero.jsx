'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 'calc(var(--spacing-xl) + 72px)',
        overflow: 'hidden',
        backgroundColor: 'var(--background)',
      }}
    >
      {/* Oversized BROWNIE watermark — warm brown at 3% */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(8rem, 20vw, 22rem)',
        fontWeight: 900,
        color: 'rgba(90, 45, 15, 0.03)',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
        zIndex: 0,
        letterSpacing: '-0.02em',
        whiteSpace: 'nowrap',
      }}>
        BROWNIE
      </div>

      {/* Left info sidebar */}
      <div className="hero-sidebars" style={{
        position: 'absolute',
        left: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        fontSize: '0.5rem',
        letterSpacing: '3.5px',
        textTransform: 'uppercase',
        color: 'var(--text-light)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        userSelect: 'none',
        pointerEvents: 'none',
        zIndex: 1,
      }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.6rem', letterSpacing: '2px' }}>Origin</span>
        <span style={{ opacity: 0.25, fontFamily: 'var(--font-sans)' }}>—</span>
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, letterSpacing: '3px', fontSize: '0.5rem' }}>Handmade</span>
        <span style={{ opacity: 0.25, fontFamily: 'var(--font-sans)' }}>—</span>
        <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.6rem', letterSpacing: '2px' }}>Cacau 100%</span>
      </div>

      {/* Right info sidebar */}
      <div className="hero-sidebars" style={{
        position: 'absolute',
        right: '24px',
        top: '50%',
        transform: 'translateY(-50%) rotate(180deg)',
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        fontSize: '0.5rem',
        letterSpacing: '3.5px',
        textTransform: 'uppercase',
        color: 'var(--text-light)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        userSelect: 'none',
        pointerEvents: 'none',
        zIndex: 1,
      }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.6rem', letterSpacing: '2px' }}>Since 2021</span>
        <span style={{ opacity: 0.25, fontFamily: 'var(--font-sans)' }}>—</span>
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, letterSpacing: '3px', fontSize: '0.5rem' }}>São Paulo</span>
        <span style={{ opacity: 0.25, fontFamily: 'var(--font-sans)' }}>—</span>
        <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.6rem', letterSpacing: '2px' }}>By Order</span>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-lg)',
          alignItems: 'center',
        }}>

          {/* ── Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6rem',
                fontWeight: 500,
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '1.2rem',
              }}
            >
              Evilly Souza
            </motion.p>

            <h1 style={{ marginBottom: '1.8rem', lineHeight: 0.92 }}>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(3rem, 5.5vw, 5rem)',
                  fontWeight: 900,
                  color: 'var(--text-main)',
                  letterSpacing: '-0.02em',
                }}
              >
                Brownie
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: 'var(--gold)',
                  letterSpacing: '0.02em',
                  marginTop: '0.3rem',
                }}
              >
                artesanal
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                color: 'var(--text-light)',
                marginBottom: 'var(--spacing-md)',
                maxWidth: '340px',
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              Brownies artesanais feitos com chocolate de verdade. Cada mordida, um momento de felicidade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}
            >
              <a href="https://wa.me/55000000000" className="btn-primary btn-whatsapp">
                Fazer pedido
              </a>
              <a href="#menu" style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6rem',
                fontWeight: 500,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: 'var(--text-light)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                borderBottom: '1px solid rgba(166, 124, 82, 0.3)',
                paddingBottom: '2px',
                transition: 'color 0.3s ease',
              }}>
                Ver cardápio ↓
              </a>
            </motion.div>
          </motion.div>

          {/* ── Floating Brownie Image (cutout, no box) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '520px',
                filter: 'drop-shadow(0 32px 48px rgba(26, 16, 10, 0.22)) drop-shadow(0 8px 16px rgba(26, 16, 10, 0.12))',
              }}
            >
              <Image
                src="/images/hero-brownie.png"
                width={600}
                height={600}
                className="img-responsive"
                alt="Brownie artesanal"
                priority
                style={{ display: 'block' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom thin rule in gold */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '1px',
        backgroundColor: 'var(--border)',
      }} />
    </section>
  );
}
