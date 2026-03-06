import { create } from 'zustand'
import { mdiGithub, mdiDisc, mdiReddit, mdiTwitter } from '@mdi/js';
import { benefits, type Benefit } from '@/mock/benefits';
import { reviews, type Review } from '@/mock/reviews';
import { footerData, type FooterData } from '@/mock/footer';

interface Social {
  svg: string;
  name: string;
  url: string;
}

export interface MainState {
  name: string;
  navbar: string[];
  socials: Social[];
  benefits: Benefit[];
  reviews: Review[];
  footer: FooterData;
}

export const siteData: MainState = {
  name: "Site name",
  navbar: ["Smart Contracts", "Services", "Solutions", "Roadmap", "Whitepaper"],
  socials: [
    { svg: mdiGithub,  name: "GitHub",  url: "#" },
    { svg: mdiDisc,    name: "Discord", url: "#" },
    { svg: mdiReddit,  name: "Reddit",  url: "#" },
    { svg: mdiTwitter, name: "Twitter", url: "#" },
  ],
  benefits,
  reviews,
  footer: footerData,
}

// P.S. ну или передаем внутрь секций, тогда сохраняем SSG, но я все равно уже использую next-image (идиотизм пакет не умеет в prerender),
export const useMainStore = create<MainState>(() => siteData)
// zustand есть? есть!