import { siteData } from '@/stores/useMainStore'
import { AppSectionBenefits } from '@sections/AppSectionBenefits'
import { AppSectionHeader } from '@sections/AppSectionHeader'
import AppSectionHero from '@sections/AppSectionHero'
import { Fragment } from 'react'

export default function Home() {
  const { name, navbar, socials, benefits } = siteData
  return (
    <Fragment>
      <AppSectionHeader {...{ name, navbar, socials }} />
      <AppSectionHero />
      <AppSectionBenefits data={benefits} />
    </Fragment>
  );
}