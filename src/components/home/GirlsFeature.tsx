import { ButtonLink } from '@/components/ui/ButtonLink';
import { ResponsiveImage } from '@/components/ui/ResponsiveImage';
import { Reveal } from '@/components/ui/Reveal';

export function GirlsFeature() {
  return (
    <section className="bg-sand-100">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden md:aspect-auto md:min-h-[640px]">
          <ResponsiveImage
            photo="girlsFeature"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

        <Reveal className="flex items-center px-6 py-20 md:px-16 lg:px-24">
          <div className="max-w-md">
            <p className="eyebrow mb-6">HerDay Girls</p>
            <h2 className="text-4xl leading-[1.12] md:text-5xl">Together, We Are HerDay.</h2>
            <p className="mt-8 text-base leading-[1.5] text-ink-700 md:text-lg">
              A celebration of women who dress with confidence, individuality and a shared sense of
              coastal ease.
            </p>
            <div className="mt-10">
              <ButtonLink to="/herday-girls" variant="secondary" showArrow>
                Discover HerDay Girls
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
