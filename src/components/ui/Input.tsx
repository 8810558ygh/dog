import { cn } from '@utils';
import { Search } from 'lucide-react';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: boolean;
}

export function Input({ className, icon = false, ...props }: InputProps) {
  return (
    <div className="relative">
      {icon && (
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      )}
      <input
        className={cn(
          'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900',
          'placeholder:text-gray-400',
          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
          'transition-all duration-200',
          icon && 'pl-10',
          className
        )}
        {...props}
      />
    </div>
  );
}
