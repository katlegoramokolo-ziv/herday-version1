import { HomeHero } from '@/components/home/HomeHero';
import { CategoryPanels } from '@/components/home/CategoryPanels';
import { BrandIntro } from '@/components/home/BrandIntro';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { GirlsFeature } from '@/components/home/GirlsFeature';
import { CampaignBanner } from '@/components/home/CampaignBanner';

export function HomePage() {
  return (
    <>
      <HomeHero />
      <CategoryPanels />
      <BrandIntro />
      <FeaturedProducts />
      <GirlsFeature />
      <CampaignBanner />
    </>
  );
}
