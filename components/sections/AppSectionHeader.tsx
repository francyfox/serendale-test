'use client'

import { cn } from '@/lib/utils'
import { breakpoints } from '@/utils/breakpoints'
import { AppNavbar } from '@components/navbar/AppNavbar'
import { AppSocials } from '@components/socials/AppSocials'
import Link from 'next/link'
import { useWindowSize } from "@uidotdev/usehooks"
import { Fragment } from 'react'
import dynamic from 'next/dynamic'

const AppBurgerButton = dynamic(
  () => import('@components/burger/AppBurgerButton').then(m => m.AppBurgerButton),
  { ssr: false }
)

interface Props {
  className?: string;
  name: string
  navbar: string[]
  socials: { svg: string; name: string; url: string }[]
}

export function AppSectionHeader({ name, navbar, socials, className }: Props) {
  const { width } = useWindowSize()

  return (
    <header className={cn(className, "section-header py-[48px]")}>
      <div className="container">
        <div className="flex justify-between items-center gap-5">
          <Link href="/" aria-label="Go home">
            <span className="transition-colors text-white hover:text-violet-400 text-2xl font-medium font-montserrat uppercase">
              { name }
            </span>
          </Link>

          { (width ?? 0) >= breakpoints.xxl
            ? <Fragment>
              <AppNavbar navbar={navbar} />
              <AppSocials socials={socials} />
            </Fragment>
            : <AppBurgerButton>
              <AppNavbar navbar={navbar} />
            </AppBurgerButton>
          }
        </div>
      </div>
    </header>
  )
}