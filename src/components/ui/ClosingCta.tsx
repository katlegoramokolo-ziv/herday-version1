import { ButtonLink } from '@/components/ui/ButtonLink';
import { Reveal } from '@/components/ui/Reveal';

interface ClosingCtaProps {
  eyebrow: string;
  title: string;
  buttonLabel: string;
  to: string;
}

export function ClosingCta({ eyebrow, title, buttonLabel, to }: ClosingCtaProps) {
  return (
    <section className="bg-sand-100 py-28 md:py-36">
      <Reveal className="container-editorial flex flex-col items-center text-center">
        <p className="eyebrow mb-6">{eyebrow}</p>
        <h2 className="max-w-3xl text-4xl leading-[1.12] md:text-6xl">{title}</h2>
        <div className="mt-12">
          <ButtonLink to={to} showArrow>
            {buttonLabel}
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
