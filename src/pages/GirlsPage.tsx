import { GirlsHero } from '@/components/girls/GirlsHero';
import { CommunitySection } from '@/components/girls/CommunitySection';
import { GirlsGallery, GirlsStory, GirlsStoryImage } from '@/components/girls/GirlsStory';
import { ClosingCta } from '@/components/ui/ClosingCta';

export function GirlsPage() {
  return (
    <>
      <GirlsHero />
      <GirlsStory />
      <GirlsStoryImage />
      <GirlsGallery />
      <CommunitySection />
      <ClosingCta
        eyebrow="Shop the collection"
        title="Dress for the shore, and for each other."
        buttonLabel="Shop HerDay"
        to="/shop"
      />
    </>
  );
}
