import { useState } from 'react';
import type { Product } from '@/types';
import { photos } from '@/data/photos';
import { ResponsiveImage } from '@/components/ui/ResponsiveImage';

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeKey = product.images[activeIndex];

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand-100">
        <ResponsiveImage
          photo={activeKey}
          eager
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="animate-fade-in"
        />
      </div>

      {product.images.length > 1 && (
        <ul className="grid grid-cols-4 gap-3 md:gap-4" aria-label="Product images">
          {product.images.map((photo, index) => {
            const isActive = index === activeIndex;
            return (
              <li key={photo}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  aria-label={`Show image ${index + 1}: ${photos[photo].alt}`}
                  className={`relative block aspect-[4/5] w-full overflow-hidden bg-sand-100 transition-opacity duration-300 ${
                    isActive ? 'opacity-100 ring-1 ring-teal-600 ring-offset-2 ring-offset-cream-50' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <ResponsiveImage photo={photo} sizes="120px" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
