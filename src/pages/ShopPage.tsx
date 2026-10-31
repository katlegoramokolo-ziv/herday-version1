import { useSearchParams } from 'react-router-dom';
import { categories, getCategoryInfo } from '@/data/site';
import { products } from '@/data/products';
import { CategoryFilter, type CategoryFilterValue } from '@/components/shop/CategoryFilter';
import { CollectionSection } from '@/components/shop/CollectionSection';
import { ShopHero } from '@/components/shop/ShopHero';

export function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get('category');
  const requestedCategory = requested ? getCategoryInfo(requested) : undefined;
  const active: CategoryFilterValue = requestedCategory?.key ?? 'all';

  const counts: Record<CategoryFilterValue, number> = {
    all: products.length,
    swim: products.filter((product) => product.category === 'swim').length,
    resort: products.filter((product) => product.category === 'resort').length,
    lifestyle: products.filter((product) => product.category === 'lifestyle').length,
  };

  const handleFilterChange = (value: CategoryFilterValue) => {
    setSearchParams(value === 'all' ? {} : { category: value });
  };

  const visibleCategories = active === 'all' ? categories : categories.filter((c) => c.key === active);

  return (
    <>
      <ShopHero />
      <div className="container-editorial py-20 md:py-28">
        <div className="mb-16 flex flex-col gap-8 border-b border-ink-900/10 pb-8 md:flex-row md:items-center md:justify-between">
          <CategoryFilter active={active} onChange={handleFilterChange} counts={counts} />
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {visibleCategories.map((category) => (
            <CollectionSection key={category.key} category={category} />
          ))}
        </div>
      </div>
    </>
  );
}
