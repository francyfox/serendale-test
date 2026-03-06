import { faker } from '@faker-js/faker';

faker.seed(2002);

export interface Review {
  id: string;
  author: string;
  avatar: string;
  role: string;
  rating: number;
  text: string;
  date: string;
}

export const reviews: Review[] = Array.from({ length: 6 }, () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  return {
    id: faker.string.uuid(),
    author: `${firstName} ${lastName}`,
    avatar: `https://i.pravatar.cc/80?u=${faker.string.alphanumeric(8)}`,
    role: faker.person.jobTitle(),
    rating: faker.number.int({ min: 4, max: 5 }),
    text: faker.lorem.sentences({ min: 2, max: 4 }),
    date: faker.date.between({ from: '2024-01-01', to: '2025-12-31' }).toISOString().split('T')[0],
  };
});
