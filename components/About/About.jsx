'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});


export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: 'var(--background)',
        position: 'relative',
        overflow: 'hidden',
        padding: '5rem 0 4.5rem',
      }}
    >
      {/* ── Background blobs ── */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <svg
          style={{ position: 'absolute', top: '-100px', left: '-120px', opacity: 0.1, width: 420, height: 420 }}
          viewBox="0 0 400 400" fill="none"
        >
          <path d="M200 50 C290 25 375 85 382 168 C389 252 335 338 252 362 C169 386 72 345 35 263 C-2 181 22 94 85 65 C128 45 152 62 200 50 Z" fill="#5c3317" />
        </svg>
        <svg
          style={{ position: 'absolute', bottom: '-80px', right: '-100px', opacity: 0.09, width: 380, height: 380 }}
          viewBox="0 0 350 350" fill="none"
        >
          <path d="M185 38 C268 16 348 72 350 158 C352 244 290 326 208 348 C126 370 34 326 10 242 C-14 158 18 74 82 50 C126 32 148 50 185 38 Z" fill="#a67c52" />
        </svg>
        <svg
          style={{ position: 'absolute', top: '38%', right: '6%', opacity: 0.07, width: 220, height: 220 }}
          viewBox="0 0 200 200" fill="none"
        >
          <ellipse cx="100" cy="100" rx="82" ry="92" fill="#7a4a2a" transform="rotate(18 100 100)" />
        </svg>
      </div>

      {/* ── Floating doodles ── */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* cocoa grain — top left */}
        <svg style={{ position: 'absolute', top: '10%', left: '7%', opacity: 0.09, width: 44 }} viewBox="0 0 44 22" fill="#5c3317">
          <ellipse cx="22" cy="11" rx="20" ry="10" />
        </svg>
        {/* heart — top right */}
        <svg style={{ position: 'absolute', top: '7%', right: '10%', opacity: 0.09, width: 30 }} viewBox="0 0 24 24" fill="#a67c52">
          <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
        </svg>
        {/* choco drop — bottom left */}
        <svg style={{ position: 'absolute', bottom: '14%', left: '5%', opacity: 0.08, width: 22 }} viewBox="0 0 20 30" fill="#7a4a2a">
          <path d="M10 2 C16 10 18 16 18 20 C18 25.523 14.418 28 10 28 C5.582 28 2 25.523 2 20 C2 16 4 10 10 2 Z" />
        </svg>
        {/* small heart — bottom right */}
        <svg style={{ position: 'absolute', bottom: '18%', right: '7%', opacity: 0.08, width: 26 }} viewBox="0 0 24 24" fill="#c0a080">
          <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
        </svg>
        {/* tiny cocoa grain — mid right */}
        <svg style={{ position: 'absolute', top: '52%', right: '4%', opacity: 0.07, width: 32 }} viewBox="0 0 44 22" fill="#5c3317">
          <ellipse cx="22" cy="11" rx="20" ry="10" transform="rotate(-15 22 11)" />
        </svg>
      </div>

      {/* ── Main content ── */}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Photo */}
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          {/* Wrapper: image overflows above the circle */}
          <div style={{ position: 'relative', width: 240, height: 320, margin: '0 auto' }}>

            {/* Solid circle — fade in first */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 220,
                height: 220,
                borderRadius: '50%',
                backgroundColor: '#b07345',
                boxShadow: '0 12px 40px rgba(92, 51, 23, 0.28)',
              }}
            />

            {/* Image — slide up after circle */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.65, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                margin: '0 auto',
                width: 210,
                height: 310,
              }}
            >
              <Image
                src="/images/Tranparent_evilly.png"
                alt="Evilly Souza"
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom' }}
              />
            </motion.div>
          </div>
        </div>

        {/* Intro */}
        <motion.p
          {...fade(0.12)}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.25rem, 4vw, 1.55rem)',
            fontWeight: 700,
            color: '#5c3317',
            textAlign: 'center',
            marginBottom: '2rem',
            lineHeight: 1.45,
          }}
        >
          Olá! Eu sou a Evilly
        </motion.p>

        {/* Description card */}
        <motion.div
          {...fade(0.18)}
          style={{
            padding: '1.1rem 1.4rem',
            backgroundColor: 'rgba(255, 252, 245, 0.85)',
            borderRadius: '1rem',
            boxShadow: '0 2px 14px rgba(74, 63, 53, 0.07)',
            backdropFilter: 'blur(4px)',
            maxWidth: 520,
            margin: '0 auto 2rem',
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              lineHeight: 1.75,
              color: 'var(--foreground)',
              textAlign: 'center',
            }}
          >
            A paixão pelo chocolate artesanal começou no coração da sua cozinha. Cada brownie é uma obra de arte — a intensidade do cacau com a delicadeza do preparo manual. Chocolate de verdade, ingredientes frescos e aquele toque de carinho que você sente em cada mordida.
          </p>
        </motion.div>

        {/* Quote pill */}
        <motion.div
          {...fade(0.32)}
          style={{
            backgroundColor: '#b07345',
            borderRadius: '9999px',
            padding: '1.1rem 2.5rem',
            maxWidth: 500,
            margin: '0 auto 2rem',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
          }}
        >
          {/* Opening quote mark */}
          <svg aria-hidden style={{ flexShrink: 0, opacity: 0.4 }} width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
          </svg>
          <p
            style={{
              flex: 1,
              margin: 0,
              fontFamily: 'var(--font-serif)',
              fontSize: '0.9rem',
              fontStyle: 'italic',
              color: '#ffffff',
              lineHeight: 1.7,
              textAlign: 'center',
            }}
          >
            Não é apenas sobre chocolate. É sobre textura, intensidade e um toque de carinho.
          </p>
          {/* Closing quote mark (mirrored) */}
          <svg aria-hidden style={{ flexShrink: 0, opacity: 0.4, transform: 'rotate(180deg)' }} width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
