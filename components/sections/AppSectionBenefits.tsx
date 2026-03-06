import { cn } from '@/lib/utils'
import {
  Card,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { AppMarker } from '@components/tag/AppTag'
import Icon from '@mdi/react'
import { Benefit } from '@mock/benefits'

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

export function AppSectionBenefits({ className, data }: Props) {
  const rows = toStaircase(data)

  return (
    <section className={cn(className, "section-benefits py-20")} >
      <AppMarker id="benefits" />

      <div className="container">
        <div className="flex flex-col">
          <div className="mb-15 text-white text-7xl font-medium font-montserrat tracking-wider text-left">
            Benefits
          </div>

          <div className="flex flex-col gap-5">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-col 2xl:flex-row gap-5">
                {row.map((i) => (
                  <Card key={i.id} className="w-full 2xl:w-[432px] shrink-0">
                    <CardHeader className="flex items-center">
                      <Icon path={i.icon} className="size-8" />
                      {i.title}
                    </CardHeader>
                    <CardDescription>
                      <div className="px-5">{i.description}</div>
                    </CardDescription>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}