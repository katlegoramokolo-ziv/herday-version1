import { products } from '@/data/products';
import type { CategoryInfo } from '@/types';
import { ProductCard } from '@/components/shop/ProductCard';
import { UpcomingCollection } from '@/components/shop/UpcomingCollection';

interface CollectionSectionProps {
  category: CategoryInfo;
}

export function CollectionSection({ category }: CollectionSectionProps) {
  const categoryProducts = products.filter((product) => product.category === category.key);

  return (
    <section aria-labelledby={`collection-${category.key}`} className="scroll-mt-28">
      <div className="mb-12 flex flex-col gap-3 border-b border-ink-900/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow mb-3">{category.phrase}</p>
          <h2 id={`collection-${category.key}`} className="text-4xl md:text-5xl">
            {category.label}
          </h2>
        </div>
        <p className="text-sm text-ink-500">
          {categoryProducts.length} {categoryProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-x-5 gap-y-14 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <UpcomingCollection category={category} />
      )}
    </section>
  );
}
