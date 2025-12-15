import { cn } from "@/lib/utils";

export function TypographyP({children, className}: {children: string, className?: string}) {
  return (
    <p className={cn("leading-7 font-source-sans-pro text-base not-italic", className)}>{children}</p>
  )
}
