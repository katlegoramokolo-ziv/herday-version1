import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { navLinks } from '@/data/site';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      aria-hidden={!open}
      className={`fixed inset-0 z-40 bg-cream-50 transition-all duration-500 ease-editorial lg:hidden ${
        open ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <nav aria-label="Mobile" className="container-editorial flex h-full flex-col pt-32 pb-12">
        <ul className="flex flex-col divide-y divide-ink-900/10 border-y border-ink-900/10">
          {navLinks.map((link, index) => (
            <li
              key={link.to}
              className={`transition-all duration-500 ease-editorial ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: open ? `${index * 60 + 80}ms` : '0ms' }}
            >
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between py-5 font-serif text-3xl transition-colors duration-300 ${
                    isActive ? 'text-teal-700' : 'text-ink-900 hover:text-teal-700'
                  }`
                }
              >
                {link.label}
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-10">
          <p className="eyebrow mb-3">Coastal essentials</p>
          <p className="text-sm text-ink-600">Swim, resort and lifestyle pieces for effortless coastal living.</p>
        </div>
      </nav>
    </div>
  );
}
