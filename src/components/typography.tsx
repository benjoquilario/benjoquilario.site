import { cn } from '@/lib/utils';

type TypographyProps = {
  className?: string;
  children: React.ReactNode;
};

export function TypographyH2({ className, children }: TypographyProps) {
  return (
    <h2
      className={cn(
        'font-heading scroll-m-20 text-3xl font-semibold tracking-tight',
        className
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ className, children }: TypographyProps) {
  return (
    <h3
      className={cn(
        'font-heading scroll-m-20 text-2xl font-semibold tracking-tight',
        className
      )}
    >
      {children}
    </h3>
  );
}
