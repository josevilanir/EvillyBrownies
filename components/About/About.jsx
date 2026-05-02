'use client';
import { motion } from 'framer-motion';
import TeamMemberCard from '../ui/team-member-card';

export default function About() {
  return (
    /* The `dark` class forces all dark: Tailwind variants active within this section */
    <section
      id="about"
      className="section"
      style={{
        backgroundColor: 'var(--background)',
        borderTop: 'none',
      }}
    >
      <div className="container">

        {/* Editorial team member card — renders in dark context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <TeamMemberCard
            position="left"
            jobPosition="Artesã de Brownies · Natal RN"
            firstName="Evilly"
            lastName="Souza"
            imageUrl="/images/evilly-souza.png"
            imageScale={1.4}
            imagePosition="center 30%"
            description="Tudo começou dentro de uma cozinha, e com uma vontade que ninguém ensina na escola: a de conquistar o próprio espaço. Foi com brownie na mochila e aquele frio na barriga de quem está começando do zero, que nascemos. Sem loja, sem estrutura, só o produto, as mãos e a certeza de que aquilo era diferente. E as pessoas sentiram. Não demorou muito pra virar o assunto da escola: alguém sempre estava procurando, independente do dia ou da hora. Não era só um doce. Era uma receita que veio da família, passada de mãe pra filha, com aquele cuidado que não se aprende em curso, se herda. Desde 2023, o que era renda extra virou propósito. O que era paixão virou marca. E o que sempre foi tradição, agora chega até você — com a mesma entrega de sempre, porque brownie feito com amor tem gosto que a gente não esquece."
          />
        </motion.div>

        {/* CTA — gold on black */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{ paddingBottom: 'var(--spacing-md)' }}
        >
          <a
            href="https://wa.me/55000000000"
            className="btn-whatsapp"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'var(--gold)',
              color: '#FFFFFF',
              padding: '1rem 2.4rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-sans)',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#BFA07A'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--gold)'; }}
          >
            Fazer um pedido
          </a>
        </motion.div>
      </div>
    </section>
  );
}
