import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyH3({children, className}: {children: ReactNode, className?: string}) {
  return (
    <h3 className={cn('text-2xl font-bold text-black not-italic font-inter', className)}>{children}</h3>
  )
}
