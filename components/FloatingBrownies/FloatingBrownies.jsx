'use client';
import { useEffect, useRef, useState } from 'react';
import { useMotionValue, useSpring, useScroll, motion } from 'framer-motion';
import Image from 'next/image';

const PRODUCTS = [
  { src: '/images/brownie-pote.png',        alt: 'Brownie no Pote' },
  { src: '/images/brownie-tradicional.png', alt: 'Brownie Tradicional' },
  { src: '/images/mini-brownie.png',        alt: 'Mini Brownie' },
];

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

// ── Single animated image ──────────────────────────────────────────────────────
function FloatingImage({ src, alt, initial, target, scrollY, scrollStart, scrollEnd, entryDelay }) {
  // Raw values — RAF writes to these
  const xRaw      = useMotionValue(initial.x);
  const yRaw      = useMotionValue(initial.y);
  const sizeRaw   = useMotionValue(initial.size);
  const rotateRaw = useMotionValue(initial.rotate);
  const opMv      = useMotionValue(0); // opacity stays raw for precise fade timing

  // Spring-smoothed — DOM reads these for organic Apple-like feel
  const SPRING   = { stiffness: 80, damping: 22, mass: 1 };
  const xMv      = useSpring(xRaw,      SPRING);
  const yMv      = useSpring(yRaw,      SPRING);
  const sizeMv   = useSpring(sizeRaw,   SPRING);
  const rotateMv = useSpring(rotateRaw, SPRING);

  const startTimeRef = useRef(null);
  const rafRef       = useRef(null);
  const aliveRef     = useRef(true);

  useEffect(() => {
    aliveRef.current = true;

    // Fade-in staggered by entryDelay
    const fadeTimer = setTimeout(() => {
      if (aliveRef.current) opMv.set(0.93);
    }, entryDelay);

    const tick = (timestamp) => {
      if (!aliveRef.current) return;

      const s        = scrollY.get();
      const span     = Math.max(1, scrollEnd - scrollStart);
      const progress = Math.max(0, Math.min(1, (s - scrollStart) / span));
      const eased    = easeInOutCubic(progress);

      // Bob weight: 1.0 at rest, smoothly fades to 0 by 12% scroll progress
      const bobWeight = Math.max(0, 1 - progress / 0.12);

      // Continuous clock — never reset so bob blends seamlessly into scroll
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const t = (timestamp - startTimeRef.current) / 1000 + initial.floatPhase;

      // Bob contribution scaled by weight
      const bobX      = Math.sin(t * initial.floatSpeed * 0.6) * 4            * bobWeight;
      const bobY      = Math.sin(t * initial.floatSpeed)       * initial.floatAmp * bobWeight;
      const bobRotate = Math.sin(t * 0.44) * 2.5                              * bobWeight;

      // Scroll flight target
      const targetX = target.docX;
      const targetY = target.docY - s;

      // Fly toward menu thumbnail
      xRaw.set(lerp(initial.x, targetX, eased) + bobX);
      yRaw.set(lerp(initial.y, targetY, eased) + bobY);
      sizeRaw.set(lerp(initial.size, target.size, eased));
      rotateRaw.set(lerp(initial.rotate, 0, eased) + bobRotate);

      // Opacity: hold near 1 while flying, fade out on final approach so real thumbnail takes over
      if (progress < 0.75) {
        opMv.set(lerp(0.93, 1.0, progress / 0.75));
      } else {
        opMv.set(lerp(1.0, 0, (progress - 0.75) / 0.25));
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      aliveRef.current = false;
      clearTimeout(fadeTimer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [scrollY, initial, target, scrollStart, scrollEnd, entryDelay]); // eslint-disable-line

  return (
    <motion.div
      style={{
        position:      'fixed',
        left:          xMv,
        top:           yMv,
        width:         sizeMv,
        height:        sizeMv,
        opacity:       opMv,
        rotate:        rotateMv,
        pointerEvents: 'none',
        zIndex:        6,
        willChange:    'transform, opacity',
        filter:        'drop-shadow(0 10px 22px rgba(26, 16, 10, 0.2)) drop-shadow(0 3px 7px rgba(26, 16, 10, 0.1))',
      }}
    >
      <Image
        src={src}
        width={150}
        height={150}
        alt={alt}
        style={{
          objectFit: 'contain',
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </motion.div>
  );
}

// ── Orchestrator ───────────────────────────────────────────────────────────────
export default function FloatingBrownies() {
  const [cfg, setCfg] = useState(null);
  const { scrollY }   = useScroll();

  useEffect(() => {
    let measureRafId = null;
    let resizeTimer  = null;
    let roRef        = null;

    const measure = () => {
      // Cancel any pending measurement RAF before scheduling a new one
      if (measureRafId) cancelAnimationFrame(measureRafId);

      // Double-RAF: first RAF fires after paint, second after layout is fully stable
      measureRafId = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (typeof window === 'undefined') return;

          const vw       = window.innerWidth;
          const vh       = window.innerHeight;
          const isMobile = vw < 768;

          const hero   = document.getElementById('hero');
          const thumbs = document.querySelectorAll('[data-menu-thumbnail]');
          if (!hero || thumbs.length < 3) return;

          const scrollNow     = window.scrollY;
          const scrollX       = window.scrollX;
          const heroRect      = hero.getBoundingClientRect();
          const heroDocBottom = heroRect.bottom + scrollNow;

          let initials;
          if (isMobile) {
            // Distribute all 3 brownies inside the hero section, right-aligned.
            // heroRect.bottom is the viewport-coordinate bottom of the hero at scroll=0 —
            // the only safe upper bound that tracks the actual hero height.
            const heroBottom  = heroRect.bottom;
            const contentTop  = 88; // clear fixed header (72px) + small gap
            const span        = Math.max(60, heroBottom - contentTop - 40);
            initials = [
              { x: vw * 0.64, y: contentTop + span * 0.08, size: 85, rotate: -12, floatPhase: 0,   floatSpeed: 0.58, floatAmp: 12 },
              { x: vw * 0.72, y: contentTop + span * 0.44, size: 75, rotate:   8, floatPhase: 2.1, floatSpeed: 0.78, floatAmp: 10 },
              { x: vw * 0.60, y: contentTop + span * 0.80, size: 65, rotate:  -5, floatPhase: 3.8, floatSpeed: 0.50, floatAmp: 11 },
            ];
          } else {
            // Desktop: large triangular spread across right half of viewport
            initials = [
              { x: vw * 0.54, y: vh * 0.12, size: 260, rotate:  -8, floatPhase: 0,   floatSpeed: 0.58, floatAmp: 18 },
              { x: vw * 0.73, y: vh * 0.43, size: 200, rotate:   6, floatPhase: 2.1, floatSpeed: 0.78, floatAmp: 13 },
              { x: vw * 0.52, y: vh * 0.65, size: 175, rotate:  -4, floatPhase: 3.8, floatSpeed: 0.50, floatAmp: 11 },
            ];
          }

          // Target positions — document-absolute coords of each thumbnail (works on any layout)
          const targets = Array.from(thumbs).map((el) => {
            const r = el.getBoundingClientRect();
            return {
              docX: r.left + scrollX,
              docY: r.top  + scrollNow,
              size: r.width,
            };
          });

          // Animation window: complete exactly when #menu section anchors below the header
          const menuEl      = document.getElementById('menu');
          const menuDocTop  = menuEl ? menuEl.getBoundingClientRect().top + scrollNow : targets[0].docY;
          const scrollStart = heroDocBottom * 0.35;
          const scrollEnd   = Math.max(menuDocTop - 72, scrollStart + 300);

          setCfg({ initials, targets, scrollStart, scrollEnd });

          // ResizeObserver on thumbnails — recalculate whenever their layout changes
          if (roRef) roRef.disconnect();
          roRef = new ResizeObserver(() => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(measure, 150);
          });
          thumbs.forEach(el => roRef.observe(el));
        });
      });
    };

    // Debounced resize handler
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(measure, 150);
    };

    measure();
    // Re-measure after images/fonts have settled
    const settleTimer = setTimeout(measure, 800);
    window.addEventListener('resize', handleResize);

    return () => {
      if (measureRafId) cancelAnimationFrame(measureRafId);
      if (roRef) roRef.disconnect();
      clearTimeout(settleTimer);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!cfg) return null;

  return (
    <>
      {PRODUCTS.map((p, i) => (
        <FloatingImage
          key={p.src}
          src={p.src}
          alt={p.alt}
          initial={cfg.initials[i]}
          target={cfg.targets[i]}
          scrollY={scrollY}
          scrollStart={cfg.scrollStart}
          scrollEnd={cfg.scrollEnd}
          entryDelay={350}
        />
      ))}
    </>
  );
}
