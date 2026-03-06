'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface Props {
  children: React.ReactNode[]
  className?: string
  stagger?: number
  itemClassName?: string
}

export function AppMotionList({ children, className, stagger = 0.1, itemClassName }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: { transition: { staggerChildren: stagger } },
        hidden: {},
      }}
    >
      {children.map((child, i) => (
        <motion.div
          key={i}
          className={itemClassName}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}