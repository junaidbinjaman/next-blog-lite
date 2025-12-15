import { cn } from "@/lib/utils";

export function TypographySmallP({children, className}: {children: string, className?: string}) {
  return (
    <p className={cn("leading-7 font-source-sans-pro text-sm not-italic", className)}>{children}</p>
  )
}
