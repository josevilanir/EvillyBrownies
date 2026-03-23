'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Watermark */}
      <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', opacity: 0.05, transform: 'rotate(-15deg)', zIndex: 0 }}>
        <Image src="/images/cocoa-icon.png" width={400} height={400} alt="Cacau Watermark" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.2fr', gap: 'var(--spacing-lg)', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-premium)', transform: 'rotate(2deg)' }}
          >
            <Image 
              src="/images/evilly-souza.png" 
              width={500} 
              height={600} 
              className="img-responsive" 
              alt="Evilly Souza na Cozinha" 
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: 'var(--spacing-md)' }}>
              CONHEÇA A EVILLY SOUZA
            </h2>
            <div style={{ fontSize: '1.1rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                A paixão pelo chocolate artesanal começou no coração da minha cozinha. Cada brownie é uma obra de arte, 
                equilibrando a intensidade do cacau com a delicadeza do preparo manual.
              </p>
              <p>
                Nosso segredo está nos detalhes: chocolate de verdade, ingredientes frescos e aquele toque especial de 
                carinho que você sente em cada mordida.
              </p>
              <p>
                Seja para um café da tarde ou para presentear alguém especial, nossos brownies são feitos para 
                proporcionar momentos de pura felicidade.
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
