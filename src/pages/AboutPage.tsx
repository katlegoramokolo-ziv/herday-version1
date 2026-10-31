import { AboutHero } from '@/components/about/AboutHero';
import { EthosSection, PrinciplesSection } from '@/components/about/EthosSection';
import { MomentsGallery } from '@/components/about/MomentsGallery';
import { ClosingCta } from '@/components/ui/ClosingCta';

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <EthosSection />
      <PrinciplesSection />
      <MomentsGallery />
      <ClosingCta
        eyebrow="Shop the collection"
        title="Find the pieces that feel like you."
        buttonLabel="Explore the Shop"
        to="/shop"
      />
    </>
  );
}
