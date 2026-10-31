import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface NotFoundViewProps {
  title: string;
  message: string;
  backTo: string;
  backLabel: string;
}

export function NotFoundView({ title, message, backTo, backLabel }: NotFoundViewProps) {
  return (
    <section className="container-editorial flex min-h-[70svh] flex-col items-start justify-center py-32">
      <p className="eyebrow mb-6">Page not found</p>
      <h1 className="max-w-2xl text-5xl md:text-6xl">{title}</h1>
      <p className="mt-6 max-w-xl text-base text-ink-600">{message}</p>
      <Link
        to={backTo}
        className="group mt-10 inline-flex min-h-[48px] items-center gap-3 border border-ink-900/30 px-7 text-sm font-medium text-ink-900 transition-all duration-500 ease-editorial hover:border-ink-900 hover:bg-ink-900 hover:text-cream-50"
      >
        <ArrowLeft aria-hidden="true" className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:-translate-x-1" />
        {backLabel}
      </Link>
    </section>
  );
}
