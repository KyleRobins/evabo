import * as React from 'react';

import { cn } from '@/lib/utils';

const Badge = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1 text-sm font-medium text-brand-dark',
        className
      )}
      {...props}
    />
  )
);
Badge.displayName = 'Badge';

export { Badge };
