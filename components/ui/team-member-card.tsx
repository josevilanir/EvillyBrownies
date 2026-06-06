'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: any[]) { return twMerge(clsx(inputs)) }

interface TeamMemberCardProps {
  position?: 'left' | 'right'
  jobPosition?: string
  firstName?: string
  lastName?: string
  imageUrl?: string
  imageScale?: number
  imagePosition?: string
  description?: string
  className?: string
}

export default function TeamMemberCard({
  position = 'left',
  jobPosition = 'Backend Engineer',
  firstName = 'Jennie',
  lastName = 'Garcia',
  imageUrl = 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?fm=jpg&q=60',
  imageScale = 1,
  imagePosition = 'top',
  description = 'Jennie is a skilled developer with expertise in modern web technologies and a passion for creating seamless user experiences.',
  className,
}: TeamMemberCardProps) {
  const fullName = `${firstName} ${lastName}`
  const isPositionRight = position === 'right'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'relative', margin: '4rem 0' }}
      className={className}
    >
      {/* Job position label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p
          className='text-zinc-500'
          style={{
            marginBottom: '1rem',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            textAlign: isPositionRight ? 'right' : 'left',
            fontFamily: 'var(--font-sans)',
          }}
        >
          {jobPosition}
        </p>
      </motion.div>

      {/* Main row */}
      <div
        className="team-member-row"
        style={{
          display: 'flex',
          flexDirection: isPositionRight ? 'row-reverse' : 'row',
          alignItems: 'center',
        }}
      >
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="team-member-portrait"
          style={{
            position: 'relative',
            width: 360,
            height: 500,
            flexShrink: 0,
            overflow: 'hidden',
            borderRadius: '0.75rem',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              background: 'linear-gradient(to top, rgba(0,0,0,0.15), transparent)',
              pointerEvents: 'none',
            }}
          />
          <Image
            src={imageUrl}
            alt={fullName}
            fill
            sizes="360px"
            style={{
              objectFit: 'cover',
              objectPosition: imagePosition,
              transform: `scale(${imageScale})`,
              transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = `scale(${imageScale + 0.05})` }}
            onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = `scale(${imageScale})` }}
          />
        </motion.div>

        {/* Info block — pulled to overlap image edge */}
        <motion.div
          initial={{ opacity: 0, x: isPositionRight ? -40 : 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="team-member-info"
          style={{
            position: 'relative',
            left: isPositionRight ? 32 : -32,
            zIndex: 2,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            alignItems: isPositionRight ? 'flex-end' : 'flex-start',
          }}
        >
          {/* Name */}
          <p
            className="team-member-name"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--text-main)',
            }}
          >
            <span style={{ fontWeight: 300 }}>{firstName}</span>
            <br />
            <span style={{ fontWeight: 700 }}>{lastName}</span>
          </p>

          {/* Details row: circular CTA + bio */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: isPositionRight ? 'row-reverse' : 'row',
              gap: '1.5rem',
            }}
          >
            {/* Circular CTA */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className='group'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 72,
                height: 72,
                flexShrink: 0,
                borderRadius: '50%',
                border: '1px solid rgba(166, 138, 100, 0.45)',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease, background-color 0.3s ease',
              }}
              onHoverStart={e => {
                const el = (e.target as HTMLElement).closest('.group') as HTMLElement
                if (el) {
                  el.style.borderColor = 'var(--text-main)'
                  el.style.backgroundColor = 'var(--text-main)'
                }
              }}
              onHoverEnd={e => {
                const el = (e.target as HTMLElement).closest('.group') as HTMLElement
                if (el) {
                  el.style.borderColor = 'rgba(166, 138, 100, 0.45)'
                  el.style.backgroundColor = 'transparent'
                }
              }}
            >
              <ArrowRight
                size={20}
                className='text-zinc-600 transition-all duration-300 group-hover:-rotate-45 group-hover:text-white'
                style={{
                  transform: isPositionRight ? 'rotate(180deg)' : undefined,
                  color: 'var(--text-light)',
                }}
              />
            </motion.div>

            {/* Bio */}
            <div
              className="team-member-bio"
              style={{
                flex: 1,
                fontSize: '0.9rem',
                lineHeight: 2,
                color: 'var(--text-light)',
                fontFamily: 'var(--font-sans)',
                textAlign: isPositionRight ? 'right' : 'left',
              }}
            >
              {description?.split('\n\n').map((paragraph, idx, arr) => (
                <p key={idx} style={{ marginBottom: idx !== arr.length - 1 ? '1em' : 0 }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
