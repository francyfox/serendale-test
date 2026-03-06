import { faker } from '@faker-js/faker';
import {
  mdiBrain,
  mdiShieldCheck,
  mdiRocketLaunch,
  mdiChartLine,
  mdiLockOutline,
  mdiLightningBolt,
} from '@mdi/js';

faker.seed(1001);

export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const titles = [
  'AI-Powered Intelligence',
  'Enterprise-Grade Security',
  'Blazing Fast Performance',
  'Real-Time Analytics',
  'Privacy by Design',
  'Instant Deployment',
];

const icons = [
  mdiBrain,
  mdiShieldCheck,
  mdiRocketLaunch,
  mdiChartLine,
  mdiLockOutline,
  mdiLightningBolt,
];

export const benefits: Benefit[] = titles.map((title, i) => ({
  id: faker.string.uuid(),
  icon: icons[i],
  title,
  description: faker.lorem.sentence({ min: 3, max: 6 }),
}));