import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyH3({children, className}: {children: ReactNode, className?: string}) {
  return (
    <h2 className={cn('text-2xl font-bold text-black not-italic', className)}>{children}</h2>
  )
}
