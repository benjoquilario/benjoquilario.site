import { cn } from "@/lib/utils"

type TypographyProps = {
  className?: string
  children: React.ReactNode
}

export function TypographyH2({ className, children }: TypographyProps) {
  return (
    <h2
      className={cn(
        "text-pretty bg-gradient-stop scroll-m-20 bg-gradient-to-br from-foreground via-foreground via-30% to-foreground/30 bg-clip-text font-heading text-2xl font-semibold tracking-tighter text-transparent md:text-3xl",
        className
      )}
    >
      {children}
    </h2>
  )
}

export function TypographyH3({ className, children }: TypographyProps) {
  return (
    <h3
      className={cn(
        "text-pretty bg-gradient-stop scroll-m-20 bg-gradient-to-br from-foreground via-foreground via-30% to-foreground/30 bg-clip-text font-heading text-2xl font-semibold tracking-tighter text-transparent",
        className
      )}
    >
      {children}
    </h3>
  )
}
