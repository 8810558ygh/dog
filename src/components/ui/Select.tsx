import { cn } from '@utils';
import type { SelectHTMLAttributes } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
}

export function Select({ className, options, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900',
        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
        'transition-all duration-200 cursor-pointer',
        className
      )}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
