'use client';

import { LazyMotion, domAnimation } from 'framer-motion';

/**
 * Carrega apenas o conjunto de features de animação realmente usado no site
 * (animações, variants, exit, gestos hover/tap e whileInView), em vez do
 * bundle completo do framer-motion. Os componentes usam `m.*` em vez de
 * `motion.*` para se beneficiarem desse code-splitting.
 */
export default function MotionProvider({ children }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
