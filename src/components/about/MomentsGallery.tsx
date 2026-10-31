import type { PhotoKey } from '@/data/photos';
import { Reveal } from '@/components/ui/Reveal';
import { ResponsiveImage } from '@/components/ui/ResponsiveImage';

interface Moment {
  photo: PhotoKey;
  mood: string;
  layout: string;
  sizes: string;
  ratio: string;
}

const moments: Moment[] = [
  {
    photo: 'momentWallBikini',
    mood: 'Beachside, unhurried',
    layout: 'md:col-span-7',
    sizes: '(min-width: 768px) 58vw, 100vw',
    ratio: 'aspect-[4/5]',
  },
  {
    photo: 'momentGoldenHour',
    mood: 'Golden hour terrace',
    layout: 'md:col-span-5 md:mt-32',
    sizes: '(min-width: 768px) 40vw, 100vw',
    ratio: 'aspect-[4/5]',
  },
  {
    photo: 'momentGrassMono',
    mood: 'Dune walk, monochrome',
    layout: 'md:col-span-4',
    sizes: '(min-width: 768px) 33vw, 100vw',
    ratio: 'aspect-[3/4]',
  },
  {
    photo: 'momentPoolWhite',
    mood: 'Resort pool, white linen',
    layout: 'md:col-span-4 md:mt-16',
    sizes: '(min-width: 768px) 33vw, 100vw',
    ratio: 'aspect-[3/4]',
  },
  {
    photo: 'momentPoolSide',
    mood: 'Poolside stillness',
    layout: 'md:col-span-4',
    sizes: '(min-width: 768px) 33vw, 100vw',
    ratio: 'aspect-[3/4]',
  },
];

export function MomentsGallery() {
  return (
    <section className="bg-cream-50 py-24 md:py-32">
      <div className="container-editorial">
        <Reveal className="mb-16 max-w-2xl">
          <p className="eyebrow mb-6">Moments &amp; silhouettes</p>
          <h2 className="text-4xl leading-[1.12] md:text-5xl">Scenes from the coastal edit.</h2>
        </Reveal>

        <div className="grid gap-x-6 gap-y-16 md:grid-cols-12 md:gap-x-8">
          {moments.map((moment, index) => (
            <Reveal key={moment.photo} delay={index * 80} className={moment.layout}>
              <figure>
                <div className={`relative overflow-hidden bg-sand-200 ${moment.ratio}`}>
                  <ResponsiveImage photo={moment.photo} sizes={moment.sizes} />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4 text-sm text-ink-600">
                  <span className="font-serif text-lg italic text-ink-800">{moment.mood}</span>
                  <span className="text-xs text-ink-500">{String(index + 1).padStart(2, '0')}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-16 text-xs text-ink-500">
          Temporary stock photography. Images will be replaced with approved HerDay campaign photography.
        </p>
      </div>
    </section>
  );
}
