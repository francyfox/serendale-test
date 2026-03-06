import { siteData } from '@/stores/useMainStore'
import { AppSectionBenefits } from '@sections/AppSectionBenefits'
import { AppSectionFooter } from '@sections/AppSectionFooter'
import { AppSectionHeader } from '@sections/AppSectionHeader'
import AppSectionHero from '@sections/AppSectionHero'
import { AppSectionReviews } from '@sections/AppSectionReviews'
import { Fragment } from 'react'

export default function Home() {
  const { name, navbar, socials, benefits, reviews, footer } = siteData
  return (
    <Fragment>
      <AppSectionHeader {...{ name, navbar, socials }} />
      <AppSectionHero />
      <AppSectionBenefits data={ benefits } />
      <AppSectionReviews data={ reviews } />
      <AppSectionFooter data={ footer } />
    </Fragment>
  );
}