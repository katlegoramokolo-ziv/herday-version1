import { ResponsiveImage } from '@/components/ui/ResponsiveImage';

export function ShopHero() {
  return (
    <section className="relative flex min-h-[70svh] items-end overflow-hidden bg-ink-900 text-cream-50">
      <div className="absolute inset-0">
        <ResponsiveImage photo="shopHero" eager sizes="100vw" className="animate-fade-in" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/30 to-ink-900/20" />
      </div>
      <div className="container-editorial relative z-10 w-full pb-16 pt-40 md:pb-20">
        <p className="eyebrow mb-6 text-cream-100 animate-fade-up">The Shop</p>
        <h1
          className="max-w-3xl font-serif text-5xl leading-[1.05] text-cream-50 animate-fade-up md:text-7xl"
          style={{ animationDelay: '150ms' }}
        >
          Curated Fashion &amp; Swimwear
        </h1>
        <p
          className="mt-6 max-w-md text-base text-cream-100 animate-fade-up md:text-lg"
          style={{ animationDelay: '300ms' }}
        >
          Explore the HerDay collection.
        </p>
      </div>
    </section>
  );
}
