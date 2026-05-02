'use client';

import { motion } from 'framer-motion';
import { ImageComparison } from '../ui/ImageComparison';

export default function Comparison() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -ml-48 -mb-48" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="w-full max-w-4xl text-center mb-16 mx-auto flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block w-full text-center"
          >
            A Excelência em Cada Mordida
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 w-full text-center"
          >
            Tem coisas que o mercado não consegue copiar.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70 text-lg font-sans max-w-xl mx-auto text-center text-balance"
          >
            Alguns produtos simplesmente não precisam se explicar.
          </motion.p>
        </div>

        <div className="w-full max-w-4xl relative group mx-auto flex flex-col items-center">
          {/* Labels outside the card - centered and better aligned */}
          <div className="flex justify-between w-full mb-6 px-4 text-[10px] uppercase tracking-[0.3em] font-bold text-primary/60">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Comum
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Evilly Brownie
            </motion.span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex justify-center"
          >
            <ImageComparison
              beforeImage="/images/brownie-ours.png"
              afterImage="/images/brownie-others.png"
              altBefore="Evilly Brownie"
              altAfter="Comum"
            />
          </motion.div>
        </div>

        <div className="mt-28 flex flex-nowrap justify-center gap-6 md:gap-24 text-center">
          <DetailItem title="Massa" desc="Ultra úmida e densa" />
          <DetailItem title="Chocolate" desc="70% Cacau Premium" />
          <DetailItem title="Casquinha" desc="Crocante e brilhante" />
        </div>
      </div>
    </section>
  );
}

function DetailItem({ title, desc }) {
  return (
    <div className="flex flex-col gap-1 md:gap-2">
      <span className="text-foreground font-serif font-bold text-sm md:text-xl">{title}</span>
      <span className="text-foreground/60 text-xs md:text-sm italic font-sans">{desc}</span>
    </div>
  );
}
