import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/shop/ProductCard';
import { Reveal } from '@/components/ui/Reveal';
import { SectionIntro } from '@/components/ui/SectionIntro';

const FEATURED_COUNT = 4;

export function FeaturedProducts() {
  const featured = products.slice(0, FEATURED_COUNT);

  return (
    <section className="bg-cream-50 py-24 md:py-32">
      <div className="container-editorial">
        <div className="mb-14 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionIntro eyebrow="Featured swim" title="Selected pieces" />
          <Link
            to="/shop"
            className="story-link inline-flex items-center gap-2 pb-2 text-sm font-medium text-ink-900"
          >
            Shop all swim
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-14 md:gap-x-8 lg:grid-cols-4">
          {featured.map((product, index) => (
            <Reveal key={product.slug} delay={index * 100}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
