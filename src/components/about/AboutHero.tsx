import { ResponsiveImage } from '@/components/ui/ResponsiveImage';

export function AboutHero() {
  return (
    <section className="relative flex min-h-[85svh] items-end overflow-hidden bg-ink-900 text-cream-50">
      <div className="absolute inset-0">
        <ResponsiveImage photo="aboutHero" eager sizes="100vw" className="animate-fade-in" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/20 to-ink-900/25" />
      </div>
      <div className="container-editorial relative z-10 w-full pb-16 pt-40 md:pb-24">
        <p className="eyebrow mb-6 text-cream-100 animate-fade-up">About HerDay</p>
        <h1
          className="font-serif text-6xl leading-[1.02] text-cream-50 animate-fade-up md:text-8xl"
          style={{ animationDelay: '150ms' }}
        >
          Discover HerDay.
        </h1>
      </div>
    </section>
  );
}
