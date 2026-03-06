import { siteData } from '@/stores/useMainStore'
import { AppSectionHeader } from '@sections/AppSectionHeader'
import AppSectionHero from '@sections/AppSectionHero'
import { Fragment } from 'react'

export default function Home() {
  const { name, navbar, socials } = siteData
  return (
    <Fragment>
      <AppSectionHeader {...{ name, navbar, socials }} />
      <AppSectionHero />
    </Fragment>
  );
}