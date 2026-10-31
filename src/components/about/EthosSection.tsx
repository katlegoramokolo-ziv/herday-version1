import { Reveal } from '@/components/ui/Reveal';

const principles = [
  {
    title: 'Confidence',
    line: 'Pieces that let you stand tall at the water’s edge and well beyond it.',
  },
  {
    title: 'Individuality',
    line: 'Room for personal expression rather than a single way to look coastal.',
  },
  {
    title: 'Effortless Style',
    line: 'Relaxed silhouettes that feel considered without looking constructed.',
  },
  {
    title: 'Expression',
    line: 'Colour, texture and movement as a quiet way of saying who you are.',
  },
  {
    title: 'Coastal Inspiration',
    line: 'Rocky shorelines, sea air and sun-washed terraces as our visual reference.',
  },
];

export function EthosSection() {
  return (
    <section className="bg-cream-50 py-24 md:py-32">
      <div className="container-editorial grid gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-5">
          <p className="eyebrow mb-6">Our ethos</p>
          <h2 className="text-4xl leading-[1.12] md:text-5xl">A visual philosophy for women who dress with ease.</h2>
        </Reveal>
        <Reveal delay={150} className="space-y-6 text-base leading-[1.5] text-ink-600 md:col-span-6 md:col-start-7 md:text-lg">
          <p>
            HerDay approaches coastal fashion as an editorial discipline: natural light, honest textures and
            silhouettes that feel as considered on the shoreline as they do on the terrace.
          </p>
          <p>
            The aim is not to dress for a single holiday look. It is to create pieces that move with you
            through the day and make room for your own sense of style.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function PrinciplesSection() {
  return (
    <section className="bg-cream-100 py-24 md:py-32">
      <div className="container-editorial">
        <Reveal className="mb-16 max-w-2xl">
          <p className="eyebrow mb-6">Guiding principles</p>
          <h2 className="text-4xl leading-[1.12] md:text-5xl">The themes behind the look.</h2>
          <p className="mt-6 text-sm italic text-ink-500">
            Creative themes that shape the HerDay visual direction. They are not formal company policies.
          </p>
        </Reveal>

        <ol className="divide-y divide-ink-900/10 border-y border-ink-900/10">
          {principles.map((principle, index) => (
            <li
              key={principle.title}
              className="group"
            >
              <Reveal delay={index * 80} className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline md:gap-10 md:py-10">
                <span className="font-serif text-lg text-teal-700 md:col-span-1">0{index + 1}</span>
                <h3 className="text-3xl transition-colors duration-500 group-hover:text-teal-700 md:col-span-4 md:text-4xl">
                  {principle.title}
                </h3>
                <p className="text-base text-ink-600 md:col-span-6 md:text-lg">{principle.line}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
