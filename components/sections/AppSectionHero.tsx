import Link from 'next/link'
import Icon from '@mdi/react';
import { useWindowSize } from "@uidotdev/usehooks";

interface Props {
  name: string
  navbar: string[]
  socials: { svg: string; name: string; url: string }[]
}

export default function AppSectionHero({ name, navbar, socials }: Props) {
  const { width } = useWindowSize();

  return (
    <header className="section-header py-[48px]">
      <div className="container">
        <div className="flex justify-between gap-5">
          <Link href="/" aria-label="Go home">
            <span className="transition-colors text-white hover:text-violet-400 text-2xl font-medium font-montserrat uppercase">
              { name }
            </span>
          </Link>

          <nav className="flex flex-wrap items-center gap-[40px]">
            {
              navbar.map(i => (
                <Link
                  href={`#${i}`} key={i}
                  className="transition-colors text-white hover:text-violet-400 text-lg font-normal font-clash"
                >
                  { i }
                </Link>
              ))
            }
          </nav>

          <ul className="flex flex-wrap gap-5">
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
        </div>
      </div>
    </header>
  )
}