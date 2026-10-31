import { ResponsiveImage } from '@/components/ui/ResponsiveImage';

export function GirlsHero() {
  return (
    <section className="bg-cream-100 md:min-h-[100svh]">
      <div className="grid md:min-h-[100svh] md:grid-cols-12">
        <div className="flex items-end px-6 pb-16 pt-40 md:col-span-5 md:px-12 md:pb-24 lg:px-16">
          <div>
            <p className="eyebrow mb-6 animate-fade-up">HerDay Girls</p>
            <h1
              className="font-serif text-6xl leading-[1] text-ink-900 animate-fade-up md:text-7xl lg:text-8xl"
              style={{ animationDelay: '150ms' }}
            >
              The HerDay Girls.
            </h1>
            <p
              className="mt-8 max-w-md text-base leading-[1.5] text-ink-700 animate-fade-up md:text-lg"
              style={{ animationDelay: '300ms' }}
            >
              Confidence, individuality and a shared sense of style, worn together and carried into every
              coastal day.
            </p>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden bg-ink-800 md:col-span-7 md:aspect-auto">
          <ResponsiveImage photo="girlsHero" eager sizes="(min-width: 768px) 58vw, 100vw" className="animate-fade-in" />
        </div>
      </div>
    </section>
  );
}
