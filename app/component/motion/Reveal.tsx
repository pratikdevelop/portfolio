'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const MOTION_TAGS = {
  div: motion.div,
  li: motion.li,
  ul: motion.ul,
  span: motion.span
} as const

export type MotionTag = keyof typeof MOTION_TAGS

const itemVariants = (y: number, duration = 0.55): Variants => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration, ease: EASE } }
})

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  duration?: number
  once?: boolean
  amount?: number
  as?: MotionTag
}

export function Reveal({ children, className, delay = 0, y = 32, duration = 0.65, once = true, amount = 0.2, as = 'div' }: RevealProps) {
  const reduce = usePrefersReducedMotion()

  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }

  const Tag = MOTION_TAGS[as] as typeof motion.div

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={itemVariants(y, duration)}
      transition={{ delay }}
    >
      {children}
    </Tag>
  )
}

type RevealGroupProps = {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
  once?: boolean
  amount?: number
  as?: MotionTag
}

export function RevealGroup({ children, className, stagger = 0.09, delay = 0.05, once = true, amount = 0.12, as = 'div' }: RevealGroupProps) {
  const reduce = usePrefersReducedMotion()

  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }

  const Tag = MOTION_TAGS[as] as typeof motion.div

  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } }
  }

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </Tag>
  )
}

type RevealItemProps = {
  children: ReactNode
  className?: string
  y?: number
  duration?: number
  as?: MotionTag
}

export function RevealItem({ children, className, y = 28, duration = 0.55, as = 'div' }: RevealItemProps) {
  const reduce = usePrefersReducedMotion()

  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }

  const Tag = MOTION_TAGS[as] as typeof motion.div

  return <Tag className={className} variants={itemVariants(y, duration)}>{children}</Tag>
}

type SectionTitleProps = {
  title: string
  eyebrow?: string
  align?: 'center' | 'left'
  className?: string
}

export function SectionTitle({ title, eyebrow, align = 'center', className = 'mb-14' }: SectionTitleProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <Reveal className={`flex flex-col gap-4 ${alignment} ${className}`} y={24} amount={0.6}>
      {eyebrow ? (
        <div className="flex items-center gap-3">
          {align === 'center' ? <span className="accent-rule" /> : null}
          <span className="eyebrow">{eyebrow}</span>
          {align === 'center' ? <span className="accent-rule rotate-180" /> : null}
        </div>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      <span className="accent-rule" />
    </Reveal>
  )
}

const BAR_CLASS =
  'h-1.5 rounded-full bg-gradient-to-r from-accent-500 via-accent-400 to-highlight-400 group-hover:from-accent-400 group-hover:to-highlight-300'

export function SkillBar({ level, delay = 0 }: { level: number; delay?: number }) {
  const reduce = usePrefersReducedMotion()

  if (reduce) {
    return <div className={BAR_CLASS} style={{ width: `${level}%` }} />
  }

  return (
    <motion.div
      className={BAR_CLASS}
      initial={{ width: 0 }}
      whileInView={{ width: `${level}%` }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 1.1, ease: EASE, delay }}
    />
  )
}
