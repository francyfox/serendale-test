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

export function AppSectionBenefits({ className, data }: Props) {
  return (
    <section className={cn(className, "section-benefits py-20")} >
      <AppMarker id="benefits" />

      <div className="container">
        <div className="flex flex-col">
          <div className="mb-10 text-white text-7xl font-medium font-montserrat tracking-wider text-center">
            Benefits
          </div>

          <div className="grid grid-cols-3 gap-5">
            {data.map((i) => (
              <Card key={i.id}>
                <CardHeader className="flex items-center">
                  <Icon
                    path={i.icon}
                    className="size-8"
                  />
                  { i.title }
                </CardHeader>
                <CardDescription>
                  <div className="px-5">
                    { i.description }
                  </div>
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}