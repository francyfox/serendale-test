import { cn } from '@/lib/utils'
import type { FooterColumn } from '@mock/footer'
import Link from 'next/link'

interface Props {
  className?: string
  columns: FooterColumn[]
}

export function AppFooterColumns({ columns, className }: Props) {
  return (
    <div className={cn(className, "w-full max-w-[600px] flex justify-between gap-5")}>
      { columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className="flex flex-col gap-5"
        >
          <div className="text-xl font-medium font-montserrat text-white">
            { column.title }
          </div>

          <ul className="flex flex-col gap-2">
            { column.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link
                  href={link.href}
                  key={linkIndex}
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  { link.label }
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
