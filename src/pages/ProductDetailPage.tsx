import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { findProductBySlug, products } from '@/data/products';
import { ProductCard } from '@/components/shop/ProductCard';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductInfo } from '@/components/product/ProductInfo';
import { NotFoundView } from '@/components/ui/NotFoundView';

const RELATED_COUNT = 3;

export function ProductDetailPage() {
  const { slug } = useParams();
  const product = slug ? findProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <NotFoundView
        title="This piece is not available"
        message="The product you are looking for may have moved or is not part of the current collection."
        backTo="/shop"
        backLabel="Back to Shop"
      />
    );
  }

  const related = products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, RELATED_COUNT);

  return (
    <>
      <div className="container-editorial pb-24 pt-36 md:pt-44">
        <Link
          to="/shop"
          className="group inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-ink-700 transition-colors duration-300 hover:text-ink-900"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:-translate-x-1" />
          Back to Shop
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ProductGallery key={product.slug} product={product} />
          </div>
          <div className="lg:sticky lg:top-32 lg:col-span-4 lg:col-start-9 lg:self-start">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-ink-900/10 bg-cream-100 py-24">
          <div className="container-editorial">
            <p className="eyebrow mb-4">More to explore</p>
            <h2 className="mb-14 text-4xl md:text-5xl">More swim pieces</h2>
            <div className="grid grid-cols-2 gap-x-5 gap-y-14 lg:grid-cols-3 md:gap-x-8">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
