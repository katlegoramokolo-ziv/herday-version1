import { ButtonLink } from '@/components/ui/ButtonLink';
import { ResponsiveImage } from '@/components/ui/ResponsiveImage';

export function HomeHero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink-900 text-cream-50">
      <div className="absolute inset-0">
        <ResponsiveImage
          photo="heroCoast"
          eager
          sizes="100vw"
          className="scale-105 animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/25 to-ink-900/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/60 via-transparent to-transparent" />
      </div>

      <div className="container-editorial relative z-10 w-full pb-16 pt-40 md:pb-24 lg:pb-28">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6 text-cream-100 animate-fade-up" style={{ animationDelay: '150ms' }}>
            Swim &middot; Resort &middot; Lifestyle
          </p>
          <h1
            className="font-serif text-[3.25rem] leading-[1.02] text-cream-50 animate-fade-up sm:text-7xl lg:text-[7.5rem]"
            style={{ animationDelay: '250ms' }}
          >
            Effortless Style.
            <span className="block italic text-teal-200">Coastal Confidence.</span>
          </h1>
          <p
            className="mt-8 max-w-md text-base leading-[1.5] text-cream-100 animate-fade-up md:text-lg"
            style={{ animationDelay: '400ms' }}
          >
            Discover swimwear and resort-inspired styles created for moments that feel like yours.
          </p>
          <div
            className="mt-10 flex flex-col gap-4 animate-fade-up sm:flex-row"
            style={{ animationDelay: '550ms' }}
          >
            <ButtonLink to="/shop" showArrow>
              Explore the Shop
            </ButtonLink>
            <ButtonLink to="/about-her-day" variant="light">
              Discover Our Story
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
