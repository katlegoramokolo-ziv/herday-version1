import type { Product } from '@/types';

/**
 * Temporary demonstration products. Every entry is a placeholder (`isPlaceholder: true`):
 * names, prices and descriptions must be replaced with confirmed HerDay information.
 */
export const products: Product[] = [
  {
    slug: 'placeholder-one-piece-01',
    name: 'Placeholder One-Piece 01',
    category: 'swim',
    priceZar: null,
    images: ['productOnePieceOne', 'productOnePieceOneAlt'],
    isPlaceholder: true,
  },
  {
    slug: 'placeholder-one-piece-02',
    name: 'Placeholder One-Piece 02',
    category: 'swim',
    priceZar: null,
    images: ['productOnePieceTwo'],
    isPlaceholder: true,
  },
  {
    slug: 'placeholder-two-piece-03',
    name: 'Placeholder Two-Piece 03',
    category: 'swim',
    priceZar: null,
    images: ['productTwoPieceThree'],
    isPlaceholder: true,
  },
  {
    slug: 'placeholder-two-piece-04',
    name: 'Placeholder Two-Piece 04',
    category: 'swim',
    priceZar: null,
    images: ['productTwoPieceFour'],
    isPlaceholder: true,
  },
  {
    slug: 'placeholder-two-piece-05',
    name: 'Placeholder Two-Piece 05',
    category: 'swim',
    priceZar: null,
    images: ['productTwoPieceFive', 'productBlackPoolside'],
    isPlaceholder: true,
  },
  {
    slug: 'placeholder-one-piece-06',
    name: 'Placeholder One-Piece 06',
    category: 'swim',
    priceZar: null,
    images: ['productOnePieceSix'],
    isPlaceholder: true,
  },
];

export function findProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
