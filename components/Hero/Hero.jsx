'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: 'var(--spacing-lg)', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '3.5rem', display: 'block', color: 'var(--accent)', lineHeight: 1 }}>Evilly Souza</span>
              <span className="serif" style={{ fontSize: '4.5rem', display: 'block', letterSpacing: '4px', marginTop: '-0.5rem' }}>BROWNIE</span>
            </h1>
            
            <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: 'var(--spacing-md)', maxWidth: '400px' }}>
              Brownies artesanais feitos com carinho e chocolate de verdade.
            </p>
            
            <a href="https://wa.me/55000000000" className="btn-primary">
              Faça seu pedido agora (WhatsApp)
            </a>
            
            <div style={{ marginTop: 'var(--spacing-md)', opacity: 0.6 }}>
              <Image src="/images/cocoa-icon.png" width={80} height={80} alt="Cacau" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "backOut" }}
            style={{ position: 'relative' }}
          >
            {/* Visual elements floting around could be added here */}
            <div style={{ transform: 'rotate(-2deg)', boxShadow: 'var(--shadow-premium)', borderRadius: '8px', overflow: 'hidden' }}>
              <Image 
                src="/images/hero-brownie.png" 
                width={600} 
                height={600} 
                className="img-responsive" 
                alt="Brownie suculento" 
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative patterns could be absolute positioned items */}
    </section>
  );
}
