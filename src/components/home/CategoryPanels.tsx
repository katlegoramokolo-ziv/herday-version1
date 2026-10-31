import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/site';
import { ResponsiveImage } from '@/components/ui/ResponsiveImage';
import { Reveal } from '@/components/ui/Reveal';
import { SectionIntro } from '@/components/ui/SectionIntro';

export function CategoryPanels() {
  return (
    <section className="bg-cream-50 py-24 md:py-32">
      <div className="container-editorial">
        <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <SectionIntro eyebrow="Shop by mood" title="Three ways to wear the coast" />
          <Link
            to="/shop"
            className="story-link inline-flex items-center gap-2 pb-2 text-sm font-medium text-ink-900"
          >
            View the full collection
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {categories.map((category, index) => (
            <Reveal key={category.key} delay={index * 120} className={index === 1 ? 'md:mt-16' : ''}>
              <Link
                to={`/shop?category=${category.key}`}
                className="group relative block aspect-[4/5] overflow-hidden bg-ink-800 text-cream-50 md:aspect-[3/4]"
              >
                <ResponsiveImage
                  photo={category.photo}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="eyebrow mb-3 text-cream-100">0{index + 1}</p>
                  <h3 className="font-serif text-4xl text-cream-50 md:text-5xl">{category.label}</h3>
                  <p className="mt-3 text-sm text-cream-100">{category.phrase}</p>
                  <span className="mt-6 inline-flex items-center gap-2 border-b border-cream-50/60 pb-1 text-sm font-medium text-cream-50 transition-colors duration-300 group-hover:border-teal-200 group-hover:text-teal-200">
                    Explore {category.label}
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
