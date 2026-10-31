import { Reveal } from '@/components/ui/Reveal';
import { ResponsiveImage } from '@/components/ui/ResponsiveImage';

export function GirlsStory() {
  return (
    <section className="bg-cream-50 py-24 md:py-32">
      <div className="container-editorial grid gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-7">
          <p className="eyebrow mb-6">Our story</p>
          <h2 className="font-serif text-4xl leading-[1.15] text-ink-900 md:text-6xl">
            Some pieces are worn alone. The HerDay Girls wear them together.
          </h2>
        </Reveal>
        <Reveal delay={150} className="space-y-6 text-base leading-[1.5] text-ink-600 md:col-span-4 md:col-start-9 md:pt-16 md:text-lg">
          <p>
            HerDay Girls is a celebration of women who choose their own way of dressing: bold or quiet,
            polished or relaxed, always at ease near the water.
          </p>
          <p>
            It is a visual story about shared style, about the confidence that grows when women dress
            with and for one another.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function GirlsGallery() {
  return (
    <section className="bg-sand-100 py-24 md:py-32">
      <div className="container-editorial">
        <Reveal className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-6">Gallery</p>
            <h2 className="text-4xl md:text-5xl">Shared sunlight, shared style.</h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-12">
            <figure className="relative aspect-[4/3] overflow-hidden bg-sand-200 md:aspect-[21/9]">
              <ResponsiveImage photo="girlsGalleryFriends" sizes="100vw" />
            </figure>
          </Reveal>
          <Reveal delay={100} className="md:col-span-5">
            <figure className="relative aspect-[4/5] overflow-hidden bg-sand-200">
              <ResponsiveImage photo="girlsGalleryRocks" sizes="(min-width: 768px) 40vw, 100vw" />
            </figure>
          </Reveal>
          <Reveal delay={200} className="md:col-span-6 md:col-start-7 md:mt-24">
            <figure className="relative aspect-[4/5] overflow-hidden bg-sand-200">
              <ResponsiveImage photo="girlsGalleryStylish" sizes="(min-width: 768px) 46vw, 100vw" />
            </figure>
          </Reveal>
          <Reveal delay={150} className="md:col-span-7">
            <figure className="relative aspect-[4/3] overflow-hidden bg-sand-200">
              <ResponsiveImage photo="girlsGalleryBeachDay" sizes="(min-width: 768px) 58vw, 100vw" />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function GirlsStoryImage() {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-sand-200">
      <ResponsiveImage photo="girlsStory" sizes="100vw" />
    </div>
  );
}
