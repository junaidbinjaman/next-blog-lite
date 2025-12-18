import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyH6({children, className}: {children: ReactNode, className?: string}) {
  return (
    <h2 className={cn("text-base font-medium text-black not-italic font-inter", className)}>{children}</h2>
  )
}
