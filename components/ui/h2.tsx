import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyH2({children, className}: {children: ReactNode, className?: string}) {
  return (
    <h2 className={cn("text-2xl md:text-3xl font-bold text-black not-italic font-inter", className)}>{children}</h2>
  )
}
