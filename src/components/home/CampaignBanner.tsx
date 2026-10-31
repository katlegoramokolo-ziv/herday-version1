import { ButtonLink } from '@/components/ui/ButtonLink';
import { ResponsiveImage } from '@/components/ui/ResponsiveImage';
import { Reveal } from '@/components/ui/Reveal';

export function CampaignBanner() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-ink-900 text-cream-50">
      <ResponsiveImage
        photo="campaign"
        sizes="100vw"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-ink-900/45" />
      <Reveal className="container-editorial relative z-10 py-24 text-center">
        <p className="eyebrow mb-6 text-cream-100">The Coastal Edit</p>
        <h2 className="mx-auto max-w-4xl font-serif text-5xl leading-[1.05] text-cream-50 md:text-7xl">
          Resort light, salt air and slow afternoons.
        </h2>
        <div className="mt-12 flex justify-center">
          <ButtonLink to="/shop" variant="light" showArrow>
            Explore the Shop
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
