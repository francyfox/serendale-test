'use client'

import { cn } from '@/lib/utils'
import bgImage from '@/assets/images/hero-bg.png'
import { AppButton } from '@components/button/AppButton'
import Image from 'next/image'

interface Props {
  className?: string;

}

export default function AppSectionHero({ className }: Props) {
  return (
    <main
      className={cn(className, "section-hero mt-[166px] relative min-h-[826px] overflow-hidden")}
    >
      <Image
        src={bgImage}
        alt="Background"
        placeholder="blur"
        quality={100}
        width={1605}
        height={619}
        style={{
          position: 'absolute',
          top: '114px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: -1,
        }}
      />

      <div className="container">
        <div className="flex flex-col items-center">
          <h1 className="text-transparent text-7xl font-medium font-montserrat tracking-wider
          bg-[linear-gradient(90deg,_#FF3BFF_0%,_#ECBFBF_38%,_#5C24FF_76%,_#D94FD5_100%)]
               bg-clip-text text-center
          ">
            THE BEST WEBSITE EVER
          </h1>
          <h2 className="text-white text-7xl font-medium font-montserrat tracking-wider text-center">Scalable.</h2>

          <div className="w-full max-w-[723px] mt-[6px] text-center justify-start text-white text-xl font-normal font-montserrat leading-8 tracking-wide">Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security. Proof of Stake, its consensus algorithm enables unlimited speeds.</div>

          <div className="mt-[32px] flex flex-wrap gap-[12px]">
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