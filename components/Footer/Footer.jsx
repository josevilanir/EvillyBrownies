'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="section" style={{ backgroundColor: 'var(--primary)', color: 'var(--white)', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', color: 'var(--accent)', marginBottom: 'var(--spacing-md)' }}
          >
            PRONTO PARA EXPERIMENTAR O MELHOR BROWNIE?
          </motion.h2>
          
          <a href="https://wa.me/55000000000" className="btn-primary" style={{ fontSize: '1.3rem', padding: '1.5rem 3.5rem' }}>
            CLIQUE AQUI PARA FAZER SEU PEDIDO NO WHATSAPP
          </a>
          
          <p style={{ marginTop: 'var(--spacing-md)', opacity: 0.8, fontSize: '0.9rem', letterSpacing: '1px' }}>
            ATENDEMOS POR ENCOMENDA. ENTREGAS EM TODA A CIDADE.
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.1)', margin: 'var(--spacing-md) 0' }} />
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>Evilly Souza</h3>
            <p style={{ opacity: 0.6, fontSize: '0.8rem' }}>© 2024 Brownies Artesanais. Todos os direitos reservados.</p>
          </div>
          
          <div style={{ position: 'relative' }}>
            <Image src="/images/cocoa-icon.png" width={100} height={100} alt="Cacau Logo" style={{ filter: 'brightness(0) invert(1)', opacity: 0.2 }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
