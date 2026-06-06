'use client';
import { motion } from 'framer-motion';
import { Camera, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#2d2621',
      borderTop: '1px solid rgba(166, 124, 82, 0.15)',
    }}>
      <div className="footer-inner" style={{ color: '#ece5d8', padding: 'var(--spacing-xl) 0 var(--spacing-md)' }}>
        <div className="container">

          {/* CTA block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
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
              color: 'rgba(166, 124, 82, 0.7)',
              marginBottom: '1.2rem',
            }}>
              Pronto para experimentar?
            </p>

            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4vw, 3.8rem)',
              fontWeight: 900,
              color: 'var(--white)',
              marginBottom: '0.4rem',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}>
              Faça seu pedido
            </h2>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
              color: 'var(--gold)',
              marginBottom: 'var(--spacing-md)',
              lineHeight: 1,
            }}>
              agora mesmo
            </p>

            <a
              href="https://wa.me/5584991698470?text=Ola%2C%20gostaria%20de%20fazer%20uma%20encomenda%20de%20brownies"
              className="btn-whatsapp"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'var(--gold)',
                color: 'var(--white)',
                padding: '1rem 2.4rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-sans)',
                borderRadius: 'var(--radius)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#BFA07A'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--gold)'; }}
            >
              <MessageCircle size={16} />
              Pedir via WhatsApp
            </a>

            <p style={{
              marginTop: '1.5rem',
              color: 'rgba(166, 124, 82, 0.45)',
              fontSize: '0.6rem',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-sans)',
            }}>
              Atendemos por encomenda
            </p>
          </motion.div>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(166, 124, 82, 0.12)', margin: '0 0 var(--spacing-md)' }} />

          {/* Footer bottom bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}>
            {/* Brand */}
            <div>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.2rem',
                fontWeight: 400,
                color: 'var(--gold)',
                letterSpacing: '0.5px',
                marginBottom: '0.3rem',
              }}>
                Evilly Souza
              </h3>
              <p style={{
                fontFamily: 'var(--font-sans)',
                color: 'rgba(236, 229, 216, 0.35)',
                fontSize: '0.65rem',
                letterSpacing: '0.5px',
              }}>
                © 2024 Brownies Artesanais. Todos os direitos reservados.
              </p>
            </div>

            {/* Social */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <a
                href="https://instagram.com/evillyysouzaaa"
                style={{
                  width: '38px', height: '38px',
                  border: '1px solid rgba(166, 124, 82, 0.3)',
                  borderRadius: 'var(--radius)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(166, 124, 82, 0.5)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(166, 124, 82, 0.3)'; e.currentTarget.style.color = 'rgba(166, 124, 82, 0.5)'; }}
              >
                <Camera size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
