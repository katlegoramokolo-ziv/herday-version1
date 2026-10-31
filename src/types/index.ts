import type { PhotoKey } from '@/data/photos';

export type ProductCategory = 'swim' | 'resort' | 'lifestyle';

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  /** Confirmed ZAR price. `null` renders as "Price TBC" until a real price is supplied. */
  priceZar: number | null;
  images: PhotoKey[];
  /** Only add verified copy here. Empty renders a neutral "details to be confirmed" note. */
  description?: string;
  isPlaceholder: boolean;
}

export interface CategoryInfo {
  key: ProductCategory;
  label: string;
  phrase: string;
  description: string;
  photo: PhotoKey;
}
