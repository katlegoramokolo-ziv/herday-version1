import { ButtonLink } from '@/components/ui/ButtonLink';
import { ResponsiveImage } from '@/components/ui/ResponsiveImage';
import { Reveal } from '@/components/ui/Reveal';

export function BrandIntro() {
  return (
    <section className="bg-cream-100 py-24 md:py-32">
      <div className="container-editorial grid items-center gap-16 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand-200">
            <ResponsiveImage
              photo="brandIntro"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </Reveal>

        <Reveal delay={150} className="md:col-span-5 md:col-start-8">
          <p className="eyebrow mb-6">The HerDay feeling</p>
          <h2 className="text-4xl leading-[1.12] md:text-5xl lg:text-6xl">
            Made for the Moments That Matter.
          </h2>
          <p className="mt-8 text-base leading-[1.5] text-ink-600 md:text-lg">
            HerDay is built around the rhythm of coastal days: unhurried, confident and easy to move
            through. Each piece is presented to be worn freely, from the first swim of the morning
            to the golden hour that follows.
          </p>
          <div className="mt-10">
            <ButtonLink to="/about-her-day" variant="secondary" showArrow>
              About HerDay
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
