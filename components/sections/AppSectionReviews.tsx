'use client'

import { cn } from '@/lib/utils'
import { AppMarker } from '@components/tag/AppTag'
import { Card, CardContent, CardDescription, CardTitle } from '@components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Review } from '@mock/reviews'
import { format } from 'date-fns'
import Image from 'next/image'

interface Props {
  data: Review[]
  className?: string
}

export function AppSectionReviews({ data, className }: Props) {
  return (
    <section className={cn(className, "section-reviews py-20" )}>
      <AppMarker id="reviews" />

      <div className="container">
        <div className="mb-15 text-white text-7xl font-medium font-montserrat tracking-wider text-right">
          Reviews
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {
              data.map((i: Review, index) => (
                <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardTitle>
                      <div className="px-3 flex flex-col items-center gap-3">
                        <Image
                          src={i.avatar}
                          alt="avatar"
                          width={80}
                          height={80}
                          quality={100}
                          className="rounded-full"
                        />
                        { i.author }
                      </div>
                    </CardTitle>
                    <CardDescription>
                      <div className="text-center">{ format(i.date, 'dd MMM yyyy') }</div>
                    </CardDescription>
                    <CardContent className="text-center">
                      { i.text }
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))
            }
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}