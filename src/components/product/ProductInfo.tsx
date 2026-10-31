import { formatPrice } from '@/lib/format';
import type { Product } from '@/types';
import { getCategoryInfo } from '@/data/site';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const category = getCategoryInfo(product.category);
  const hasPrice = product.priceZar !== null;

  return (
    <div className="flex flex-col">
      {category && <p className="eyebrow mb-5">{category.label}</p>}
      <h1 className="text-5xl leading-[1.08] md:text-6xl">{product.name}</h1>
      <p className={`mt-6 text-xl ${hasPrice ? 'font-medium text-ink-900' : 'italic text-ink-500'}`}>
        {formatPrice(product.priceZar)}
      </p>

      <div className="mt-10 border-t border-ink-900/10 pt-10">
        {product.description ? (
          <p className="text-base leading-[1.5] text-ink-700">{product.description}</p>
        ) : (
          <p className="text-base leading-[1.5] text-ink-500 italic">
            Product details, fit notes and availability will be shared here once they have been confirmed.
          </p>
        )}
      </div>
    </div>
  );
}
