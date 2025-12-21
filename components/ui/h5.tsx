import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyH5({children, className}: {children: ReactNode, className?: string}) {
  return (
    <h5 className={cn('text-lg font-medium text-black not-italic font-inter', className)}>{children}</h5>
  )
}
