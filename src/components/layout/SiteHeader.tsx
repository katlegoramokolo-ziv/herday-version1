import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, ShoppingBag, Waves, X } from 'lucide-react';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { navLinks } from '@/data/site';
import { MobileMenu } from '@/components/layout/MobileMenu';

export function SiteHeader() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const overHero = isHome && !scrolled && !menuOpen;
  const headerTone = overHero
    ? 'bg-transparent text-cream-50'
    : 'bg-cream-50/95 text-ink-900 shadow-[0_1px_0_rgba(26,34,33,0.08)] backdrop-blur-md';

  return (
    <Fragment>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-editorial ${headerTone}`}
      >
        <div className="container-editorial flex h-20 items-center justify-between gap-6 md:h-24">
          <Link to="/" className="group flex items-center gap-3" aria-label="HerDay home">
            <Waves
              aria-hidden="true"
              className="h-6 w-6 text-teal-500 transition-transform duration-700 ease-editorial group-hover:-rotate-6"
            />
            <span className="font-serif text-3xl font-medium tracking-wide">HerDay</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-medium tracking-wide after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-current after:transition-transform after:duration-500 after:ease-editorial ${
                    isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/shop"
              className="hidden min-h-[44px] items-center gap-2 bg-teal-500 px-6 text-sm font-medium text-ink-900 transition-colors duration-500 ease-editorial hover:bg-ink-900 hover:text-cream-50 md:inline-flex"
            >
              <ShoppingBag aria-hidden="true" className="h-4 w-4" />
              Shop
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
            >
              {menuOpen ? (
                <X aria-hidden="true" className="h-6 w-6" />
              ) : (
                <Menu aria-hidden="true" className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </Fragment>
  );
}
