import { ButtonLink } from '@/components/ui/ButtonLink';
import { ResponsiveImage } from '@/components/ui/ResponsiveImage';
import type { CategoryInfo } from '@/types';

interface UpcomingCollectionProps {
  category: CategoryInfo;
}

export function UpcomingCollection({ category }: UpcomingCollectionProps) {
  return (
    <div className="grid items-center gap-12 bg-cream-100 md:grid-cols-12 md:gap-10">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand-200 md:col-span-5 md:aspect-[3/4]">
        <ResponsiveImage photo={category.photo} sizes="(min-width: 768px) 40vw, 100vw" />
      </div>
      <div className="px-6 pb-16 md:col-span-6 md:col-start-7 md:px-0 md:pb-0">
        <p className="eyebrow mb-6">Upcoming collection</p>
        <h3 className="text-4xl leading-[1.12] md:text-5xl">{category.label} is being prepared.</h3>
        <p className="mt-6 text-base text-ink-600">{category.description}</p>
        <p className="mt-4 text-sm italic text-ink-500">
          Pieces for this collection have not been confirmed yet, so none are shown here.
        </p>
        <div className="mt-10">
          <ButtonLink to="/shop?category=swim" variant="secondary" showArrow>
            Browse Swim
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
