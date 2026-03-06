'use client'

import { cn } from '@/lib/utils'
import { Card, CardDescription, CardHeader } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from "@/components/ui/carousel"
import { AppMarker } from '@components/tag/AppTag'
import Icon from '@mdi/react'
import { Benefit } from '@mock/benefits'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import Lottie from 'lottie-react'
import chatbotAnimation from '@/assets/lottie/Chatbot.json'

interface Props {
  className?: string;
  data: Benefit[]
}

function toStaircase<T>(items: T[]): T[][] {
  const rows: T[][] = []
  let rowSize = 1
  let index = 0
  while (index < items.length) {
    rows.push(items.slice(index, index + rowSize))
    index += rowSize
    rowSize++
  }
  return rows
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

function BenefitCard({ item }: { item: Benefit }) {
  return (
    <Card className="h-full">
      <CardHeader className="flex items-center">
        <Icon path={item.icon} className="size-8" />
        {item.title}
      </CardHeader>
      <CardDescription>
        <div className="px-5">{item.description}</div>
      </CardDescription>
    </Card>
  )
}

export function AppSectionBenefits({ className, data }: Props) {
  const rows = toStaircase(data)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  let cardIndex = 0

  return (
    <section className={cn(className, "section-benefits py-10 md:py-20 relative overflow-hidden")}>
      <AppMarker id="benefits" />

      <Lottie
        animationData={chatbotAnimation}
        loop
        className="block absolute right-[10%] top-1/3 -translate-y-1/2 w-[500px] opacity-20 pointer-events-none"
      />

      <div className="container relative z-10">
        <div ref={ref} className="flex flex-col">
          <motion.div
            className="mb-15 text-white text-3xl md:text-7xl font-medium font-montserrat tracking-wider text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Benefits
          </motion.div>

          {/* Mobile/Tablet — carousel */}
          <Carousel className="2xl:hidden" opts={{ align: 'start' }}>
            <CarouselContent>
              {data.map((i) => (
                <CarouselItem key={i.id} className="basis-full md:basis-1/2">
                  <BenefitCard item={i} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots />
          </Carousel>

          {/* Desktop — staircase */}
          <div className="hidden 2xl:flex flex-col gap-5">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-row gap-5">
                {row.map((i) => {
                  const index = cardIndex++
                  return (
                    <motion.div
                      key={i.id}
                      variants={cardVariants}
                      initial="hidden"
                      animate={isInView ? 'visible' : 'hidden'}
                      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.12 }}
                      className="w-[432px] shrink-0"
                    >
                      <BenefitCard item={i} />
                    </motion.div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}