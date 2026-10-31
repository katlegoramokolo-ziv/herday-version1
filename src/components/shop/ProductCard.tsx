import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/types';
import { ResponsiveImage } from '@/components/ui/ResponsiveImage';
import { formatPrice } from '@/lib/format';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasPrice = product.priceZar !== null;

  return (
    <Link to={`/shop/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand-100">
        <ResponsiveImage
          photo={product.images[0]}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw"
          className="transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <h3 className="text-2xl leading-[1.2] transition-colors duration-300 group-hover:text-teal-700">
          {product.name}
        </h3>
        <p className={`text-sm ${hasPrice ? 'font-medium text-ink-800' : 'italic text-ink-500'}`}>
          {formatPrice(product.priceZar)}
        </p>
        <span className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-ink-900">
          View Details
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
