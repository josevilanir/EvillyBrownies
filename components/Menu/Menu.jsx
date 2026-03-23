'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    title: 'Brownie no pote',
    price: 'R$ 10,00',
    description: 'Cremoso, feito no pote, pronto para comer.',
    image: '/images/brownie-pote.png'
  },
  {
    title: 'Brownie tradicional',
    price: 'R$ 4,00',
    description: 'Clássico, crocante por fora, macio por dentro.',
    image: '/images/brownie-tradicional.png'
  },
  {
    title: 'Mini Brownie',
    price: 'R$ 2,00',
    description: 'Pequeno, ideal para lembrancinhas, vários sabores.',
    image: '/images/mini-brownie.png'
  }
];

export default function Menu() {
  return (
    <section id="menu" className="section" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(5px)' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', fontSize: '3rem', marginBottom: 'var(--spacing-lg)', color: 'var(--primary)' }}
        >
          NOSSO CARDÁPIO
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-md)' }}>
          {products.map((product, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              style={{
                backgroundColor: 'var(--background)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-premium)',
                padding: 'var(--spacing-sm)',
                border: '1px solid rgba(61, 38, 22, 0.1)'
              }}
            >
              <div style={{ position: 'relative', height: '240px', borderRadius: '8px', overflow: 'hidden', marginBottom: '1rem' }}>
                <Image 
                  src={product.image} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }} 
                  alt={product.title} 
                />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>{product.title}</h3>
              <p style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>{product.price}</p>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
