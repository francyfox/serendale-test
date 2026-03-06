import { faker } from '@faker-js/faker';

faker.seed(3003);

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterContacts {
  email: string;
  phone: string;
  address: string;
}

export interface FooterData {
  columns: FooterColumn[];
  contacts: FooterContacts;
  copyright: string;
}

const navColumns: FooterColumn[] = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Changelog', 'Roadmap'].map((label) => ({
      label,
      href: `#${label.toLowerCase()}`,
    })),
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press'].map((label) => ({
      label,
      href: `#${label.toLowerCase()}`,
    })),
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((label) => ({
      label,
      href: `#${label.toLowerCase().replace(/ /g, '-')}`,
    })),
  },
];

export const footerData: FooterData = {
  columns: navColumns,
  contacts: {
    email: faker.internet.email({ provider: 'serendale.ai' }),
    phone: faker.phone.number({ style: 'international' }),
    address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`,
  },
  copyright: `© ${new Date().getFullYear()} Serendale. All rights reserved.`,
};