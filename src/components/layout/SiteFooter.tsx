import { Link } from 'react-router-dom';
import { Waves } from 'lucide-react';
import { categories, navLinks } from '@/data/site';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-900/10 bg-cream-100">
      <div className="container-editorial grid gap-16 py-20 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <Link to="/" className="inline-flex items-center gap-3" aria-label="HerDay home">
            <Waves aria-hidden="true" className="h-6 w-6 text-teal-500" />
            <span className="font-serif text-4xl font-medium">HerDay</span>
          </Link>
          <p className="mt-6 max-w-sm text-base text-ink-600">
            Effortless style and coastal confidence for moments that feel like yours.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3">
          <div>
            <h3 className="eyebrow mb-5 text-ink-600">Explore</h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link className="story-link" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-5 text-ink-600">Shop</h3>
            <ul className="space-y-3 text-sm">
              {categories.map((category) => (
                <li key={category.key}>
                  <Link className="story-link" to={`/shop?category=${category.key}`}>
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="eyebrow mb-5 text-ink-600">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link className="story-link" to="/contact">
                  Contact HerDay
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-editorial flex flex-col gap-4 border-t border-ink-900/10 py-8 text-xs text-ink-600 md:flex-row md:items-center md:justify-between">
        <p>&copy; {year} HerDay. All rights reserved.</p>
        <p>Design concept prototype. Photography is temporary stock imagery.</p>
      </div>
    </footer>
  );
}
