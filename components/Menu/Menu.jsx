'use client';
import { useState } from 'react';
import { m } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    title: 'Brownie no Pote',
    price: 'R$ 16,00',
    description: 'Cremoso, feito no pote, pronto para comer.',
    image: '/images/brownie-pote.png',
  },
  {
    title: 'Brownie Tradicional',
    price: 'R$ 8,00',
    description: 'Clássico, crocante por fora, macio por dentro.',
    image: '/images/brownie-tradicional.png',
  },
  {
    title: 'Mini Brownie',
    price: 'R$ 3,50',
    description: 'Pequeno, ideal para lembrancinhas, vários sabores.',
    image: '/images/mini-brownie.png',
  },
];

function MenuItem({ product, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <m.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      suppressHydrationWarning
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem',
        padding: '1.8rem 0',
        borderBottom: '0.5px solid rgba(166, 124, 82, 0.2)',
        cursor: 'default',
        transition: 'background 0.3s ease',
      }}
    >
      {/* Thumbnail — hidden static image; floating brownie lands here */}
      <m.div
        data-menu-thumbnail={index}
        suppressHydrationWarning
        style={{
          width: '52px',
          height: '52px',
          position: 'relative',
          flexShrink: 0,
          overflow: 'hidden',
          opacity: 0,
        }}
      >
        <m.div
          animate={{ scale: hovered ? 1 : 0.92 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          suppressHydrationWarning
          style={{ width: '100%', height: '100%', position: 'relative' }}
        >
          <Image
            src={product.image}
            fill
            sizes="52px"
            style={{ objectFit: 'cover', borderRadius: '8px' }}
            alt={product.title}
          />
        </m.div>
      </m.div>
 
      {/* Title + description */}
      <div style={{ flex: 1 }} suppressHydrationWarning>
        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.1rem',
          fontWeight: 700,
          color: 'var(--text-main)',
          letterSpacing: '0.01em',
          marginBottom: '0.3rem',
        }}>
          {product.title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.85rem',
          fontWeight: 300,
          color: 'var(--text-light)',
          lineHeight: 1.6,
          maxWidth: '480px',
        }}>
          {product.description}
        </p>
      </div>
 
      {/* Price */}
      <div 
        suppressHydrationWarning
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: '1.05rem',
          fontWeight: 400,
          color: 'var(--gold)',
          letterSpacing: '0.02em',
          flexShrink: 0,
        }}
      >
        {product.price}
      </div>
    </m.div>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="section" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">

        {/* Section header */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
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
            color: 'var(--gold)',
            marginBottom: '0.8rem',
          }}>
            Escolha o seu
          </p>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            color: 'var(--text-main)',
            letterSpacing: '-0.02em',
            lineHeight: 0.95,
          }}>
            Cardápio
            <span style={{
              display: 'block',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: '0.5em',
              color: 'var(--gold)',
              letterSpacing: '0.05em',
              marginTop: '0.4em',
            }}>artesanal</span>
          </h2>
        </m.div>

        {/* Top rule in gold */}
        <div style={{ borderTop: '1px solid var(--text-main)', paddingTop: '0' }} />

        {/* Product list */}
        <div>
          {products.map((product, index) => (
            <MenuItem key={index} product={product} index={index} />
          ))}
        </div>

        {/* CTA */}
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ marginTop: 'var(--spacing-md)' }}
        >
          <a href="https://wa.me/5584991698470?text=Ola%2C%20gostaria%20de%20fazer%20uma%20encomenda%20de%20brownies" className="btn-primary btn-whatsapp">
            Fazer pedido via WhatsApp
          </a>
        </m.div>
      </div>
    </section>
  );
}
