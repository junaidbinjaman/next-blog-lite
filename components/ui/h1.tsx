import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyH1({children, className}: {children: ReactNode, className?: string}) {
  return (
    <h1 className={cn('font-inter text-4xl not-italic font-bold', className)}>
      {children}
    </h1>
  )
}
