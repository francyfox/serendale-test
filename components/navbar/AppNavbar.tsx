import { cn } from '@/lib/utils'
import Link from 'next/link'

interface Props {
  className?: string
  navbar: string[]
}

export function AppNavbar({ className, navbar }: Props) {
  return (
    <nav className={cn(className, "relative top-[2px] flex flex-col 2xl:flex-row flex-wrap items-center gap-5 md:gap-[40px]")}>
      {
        navbar.map(i => (
          <Link
            href={`#${i.trim().replace(" ", "")}`} key={i}
            className="flex items-center transition-colors text-white hover:text-violet-400 text-lg font-normal font-clash"
          >
            { i }
          </Link>
        ))
      }
    </nav>
  )
}