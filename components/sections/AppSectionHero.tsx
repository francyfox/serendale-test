'use client'

import { cn } from '@/lib/utils'
import bgImage from '@/assets/images/hero-bg.png'
import { AppButton } from '@components/button/AppButton'
import Image from 'next/image'
import styles from './section.module.css'

interface Props {
  className?: string;

}

export default function AppSectionHero({ className }: Props) {
  return (
    <main
      className={cn(className, styles['sectionHero'], "section-hero mt-5 xl:mt-[166px] relative min-h-[400px] md:min-h-[600px] xl:min-h-[826px] overflow-hidden")}
    >
      <Image
        src={bgImage}
        alt="Background"
        placeholder="blur"
        quality={90}
        sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1605px"
        priority
        style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: -1,
        }}
      />

      <div className="container">
        <div className="flex flex-col items-center">
          <h1 className={cn(
            styles['gradientText'],
            "text-2xl md:text-5xl xl:text-7xl font-medium font-montserrat tracking-wider text-center"
          )}>
            THE BEST WEBSITE EVER
          </h1>
          <h2 className="text-white text-xl md:text-3xl xl:text-7xl font-medium font-montserrat tracking-wider text-center">Scalable.</h2>

          <div className="w-full max-w-[723px] mt-[6px] text-center justify-start text-white text-md xl:text-xl font-normal font-montserrat leading-8 tracking-wide">Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security. Proof of Stake, its consensus algorithm enables unlimited speeds.</div>

          <div className="z-10 mt-[32px] flex justify-center flex-wrap gap-[12px]">
            <AppButton
              href="#getStarted"
              variant="primary"
            >
              Get started
            </AppButton>
            <AppButton
              href="#more"
              variant="secondary"
            >
              Read more
            </AppButton>
          </div>
        </div>
      </div>
    </main>
  )
}