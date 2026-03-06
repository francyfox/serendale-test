import { siteData } from '@/stores/useMainStore'
import { AppMotionSection } from '@components/motion/AppMotionSection'
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
  );
}
