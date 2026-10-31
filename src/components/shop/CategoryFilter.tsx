import type { ProductCategory } from '@/types';
import { categories } from '@/data/site';

export type CategoryFilterValue = ProductCategory | 'all';

interface CategoryFilterProps {
  active: CategoryFilterValue;
  onChange: (value: CategoryFilterValue) => void;
  counts: Record<CategoryFilterValue, number>;
}

const options: { key: CategoryFilterValue; label: string }[] = [
  { key: 'all', label: 'All' },
  ...categories.map((category) => ({ key: category.key, label: category.label })),
];

export function CategoryFilter({ active, onChange, counts }: CategoryFilterProps) {
  return (
    <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-x-8 gap-y-3">
      {options.map((option) => {
        const isActive = option.key === active;
        return (
          <button
            key={option.key}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option.key)}
            className={`group relative inline-flex min-h-[44px] items-center gap-2 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
              isActive ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
            }`}
          >
            {option.label}
            <span
              className={`text-xs ${isActive ? 'text-teal-700' : 'text-ink-500'}`}
              aria-hidden="true"
            >
              {counts[option.key]}
            </span>
            <span
              aria-hidden="true"
              className={`absolute inset-x-0 bottom-1 h-px origin-left bg-teal-600 transition-transform duration-500 ease-editorial ${
                isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
