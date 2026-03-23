'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Camera as InstagramIcon } from 'lucide-react';

export default function Instagram() {
  // Simulating 4 social photos (could be different if we had more varied assets)
  const photos = [
    '/images/hero-brownie.png',
    '/images/brownie-pote.png',
    '/images/brownie-tradicional.png',
    '/images/mini-brownie.png'
  ];

  return (
    <section className="section" style={{ backgroundColor: 'rgba(61, 38, 22, 0.05)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ fontSize: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'var(--primary)' }}>
            <InstagramIcon size={32} /> Acompanhe no Instagram
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>@evillyysouzaaa</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: 'var(--spacing-md)' }}>
          {photos.map((photo, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              style={{ position: 'relative', height: '0', paddingBottom: '100%', borderRadius: '8px', overflow: 'hidden' }}
            >
              <Image src={photo} fill style={{ objectFit: 'cover' }} alt="Instagram post" />
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="https://instagram.com/evillyysouzaaa" className="btn-primary" style={{ backgroundColor: 'transparent', border: '2px solid var(--primary)', color: 'var(--primary)' }}>
            Siga-nos no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
