import { siteData } from '@/app/stores/useMainStore'
import AppSectionHero from '@sections/AppSectionHero'

export default function Home() {
  const { name, navbar, socials } = siteData
  return (
    <AppSectionHero {...{ name, navbar, socials }} />
  );
}