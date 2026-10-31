import type { CategoryInfo } from '@/types';

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'About HerDay', to: '/about-her-day' },
  { label: 'HerDay Girls', to: '/herday-girls' },
  { label: 'Contact', to: '/contact' },
] as const;

export const categories: CategoryInfo[] = [
  {
    key: 'swim',
    label: 'Swim',
    phrase: 'Sculpted pieces for sun and surf',
    description: 'One-piece and two-piece silhouettes designed to move from the shoreline to the terrace.',
    photo: 'categorySwim',
  },
  {
    key: 'resort',
    label: 'Resort',
    phrase: 'Easy layers for warm evenings',
    description: 'Relaxed resort pieces for long lunches, sunset walks and coastal villa days.',
    photo: 'categoryResort',
  },
  {
    key: 'lifestyle',
    label: 'Lifestyle',
    phrase: 'Everyday coastal ease',
    description: 'Lightweight wardrobe staples for the hours between the beach and the city.',
    photo: 'categoryLifestyle',
  },
];

export const contactDetails = {
  email: '[Add HerDay email address]',
  phone: '[Add HerDay phone number]',
  address: '[Add studio or postal address]',
  hours: '[Add business hours]',
};

export function getCategoryInfo(key: string): CategoryInfo | undefined {
  return categories.find((category) => category.key === key);
}
