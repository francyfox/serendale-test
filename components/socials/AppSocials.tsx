import { cn } from '@/lib/utils'
import Icon from '@mdi/react'
import Link from 'next/link'

interface Props {
  className?: string,
  socials: { svg: string; name: string; url: string }[]
}

export function AppSocials({ className, socials }: Props) {
  return (
    <ul className={cn(className, "flex flex-wrap gap-5")}>
      {
        socials.map(i => (
          <li key={i.name} className="flex">
            <Link
              href={i.url}
              aria-label={i.name}
              className="flex justify-center items-center"
            >
              <Icon
                path={i.svg}
                className="size-5 transition-colors text-white hover:text-violet-400"
              />
            </Link>
          </li>
        ))
      }
    </ul>
  )
}