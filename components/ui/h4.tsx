import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyH4({children, className}: {children: ReactNode, className?: string}) {
  return (
    <h4 className={cn('text-[20px] font-medium text-black not-italic font-inter', className)}>{children}</h4>
  )
}
