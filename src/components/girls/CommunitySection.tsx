import { Reveal } from '@/components/ui/Reveal';

export function CommunitySection() {
  return (
    <section className="bg-cream-50 py-24 md:py-32">
      <div className="container-editorial grid gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-5">
          <p className="eyebrow mb-6">Community participation</p>
          <h2 className="text-4xl leading-[1.12] md:text-5xl">A place for the HerDay Girls to gather.</h2>
          <p className="mt-6 text-base leading-[1.5] text-ink-600 md:text-lg">
            This section is reserved for the official HerDay Girls participation framework. Details will be
            shared here once they are confirmed.
          </p>
        </Reveal>
        <Reveal delay={150} className="md:col-span-6 md:col-start-7">
          <div className="flex min-h-[320px] flex-col justify-center border border-dashed border-ink-900/25 bg-cream-100 p-10 md:p-14">
            <p className="eyebrow mb-4 text-ink-600">Placeholder</p>
            <p className="font-serif text-3xl leading-[1.2] text-ink-800">
              [Participation details to be confirmed]
            </p>
            <p className="mt-6 text-sm text-ink-500">
              Membership, programmes and events are not yet available and are not described on this page.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
