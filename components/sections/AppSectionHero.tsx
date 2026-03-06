'use client'

import { cn } from '@/lib/utils'
import bgImage from '@/assets/images/hero-bg.png'
import Image from 'next/image'

interface Props {
  className?: string;

}

export default function AppSectionHero({ className }: Props) {
  return (
    <section
      className={cn(className, "section-hero relative")}
    >
      <Image
        src={bgImage}
        alt="Background"
        placeholder="blur" // Создаст красивый эффект размытия при загрузке
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          zIndex: -1, // Уводим на задний план
        }}
      />

      <div className="container">

      </div>
    </section>
  )
}