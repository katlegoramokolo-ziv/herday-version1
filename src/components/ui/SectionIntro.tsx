interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  align = 'left',
  className = '',
}: SectionIntroProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-4xl leading-[1.12] md:text-5xl lg:text-6xl">{title}</h2>
      {body && <p className="mt-6 text-base leading-[1.5] text-ink-600 md:text-lg">{body}</p>}
    </div>
  );
}
