import { siteData } from '@/stores/useMainStore'
import { AppSectionHeader } from '@sections/AppSectionHeader'
import { AppSectionBenefits } from '@sections/AppSectionBenefits'
import AppSectionHero from '@sections/AppSectionHero'
import { AppMotionSection } from '@components/motion/AppMotionSection'
import { Fragment } from 'react'

import dynamic from 'next/dynamic'
const AppSectionReviews = dynamic(() => import('@sections/AppSectionReviews').then(m => m.AppSectionReviews))
const AppSectionFooter = dynamic(() => import('@sections/AppSectionFooter').then(m => m.AppSectionFooter))

export default function Home() {
  const { name, navbar, socials, benefits, reviews, footer } = siteData

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1),
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author, jobTitle: r.role },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
      datePublished: r.date,
    })),
  }

  return (
    <Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AppSectionHeader {...{ name, navbar, socials }} />
      <AppMotionSection variant="fadeDown" duration={0.8}>
        <AppSectionHero />
      </AppMotionSection>
      <AppMotionSection variant="fadeLeft" delay={0.1}>
        <AppSectionBenefits data={benefits} />
      </AppMotionSection>
      <AppMotionSection variant="fadeRight" delay={0.1}>
        <AppSectionReviews data={reviews} />
      </AppMotionSection>
      <AppMotionSection variant="scaleUp" delay={0.1}>
        <AppSectionFooter data={footer} />
      </AppMotionSection>
    </Fragment>
  )
}