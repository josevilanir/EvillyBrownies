'use client';
import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#menu', label: 'Cardápio', id: 'menu' },
  { href: '#about', label: 'Sobre', id: 'about' },
  { href: '#instagram', label: 'Instagram', id: 'instagram' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['hero', 'menu', 'about', 'instagram'];
    const observers = sectionIds.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <>
      <m.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 200,
          padding: '0 2rem',
          height: '72px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: scrolled ? 'rgba(245, 241, 230, 0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(166, 124, 82, 0.15)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Logo */}
        <a href="#hero" style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: '1.15rem',
          fontWeight: 400,
          color: 'var(--text-main)',
          letterSpacing: '0.5px',
          display: 'flex',
          flexDirection: 'column',
          lineHeight: 1,
        }}>
          Evilly Souza
          <span style={{ fontSize: '0.45rem', letterSpacing: '3.5px', color: 'var(--gold)', fontFamily: 'var(--font-sans)', fontStyle: 'normal', fontWeight: 500, marginTop: '4px', textTransform: 'uppercase' }}>
            Brownies Artesanais
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: activeSection === link.id ? 'var(--gold)' : 'var(--text-light)',
              paddingBottom: '4px',
              borderBottom: activeSection === link.id ? '1px solid var(--gold)' : '1px solid transparent',
              transition: 'all 0.3s ease',
            }}>
              {link.label}
            </a>
          ))}
          <a href="https://wa.me/5584991698470?text=Ola%2C%20gostaria%20de%20fazer%20uma%20encomenda%20de%20brownies" className="btn-primary" style={{ fontSize: '0.7rem', padding: '0.65rem 1.4rem' }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--primary)'; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--foreground)'; }}
          >
            Pedir agora
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(v => !v)}
          style={{ display: 'none', color: 'var(--text-main)', padding: '4px' }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </m.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '72px', left: 0, right: 0,
              zIndex: 199,
              backgroundColor: 'rgba(245, 241, 230, 0.98)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(166, 124, 82, 0.15)',
              padding: '1.5rem 2rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: 500,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: 'var(--text-main)',
              }}>
                {link.label}
              </a>
            ))}
            <a href="https://wa.me/5584991698470?text=Ola%2C%20gostaria%20de%20fazer%20uma%20encomenda%20de%20brownies" onClick={() => setMobileOpen(false)} className="btn-primary" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
              Pedir agora
            </a>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
