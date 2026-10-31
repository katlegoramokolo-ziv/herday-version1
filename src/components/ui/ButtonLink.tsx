import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'light';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-teal-500 text-ink-900 hover:bg-ink-900 hover:text-cream-50',
  secondary:
    'border border-ink-900/30 text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-cream-50',
  light:
    'border border-cream-50/70 text-cream-50 hover:border-cream-50 hover:bg-cream-50 hover:text-ink-900',
};

interface ButtonLinkProps {
  to: string;
  variant?: ButtonVariant;
  children: ReactNode;
  showArrow?: boolean;
  className?: string;
}

export function ButtonLink({
  to,
  variant = 'primary',
  children,
  showArrow = false,
  className = '',
}: ButtonLinkProps) {
  return (
    <Link
      to={to}
      className={`group inline-flex min-h-[48px] items-center justify-center gap-3 px-7 py-3 text-sm font-medium tracking-wide transition-all duration-500 ease-editorial ${variantClasses[variant]} ${className}`}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
