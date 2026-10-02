import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
}

export function SectionHeading({ title, subtitle, align = "center", className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4 mb-12", {
      "text-left": align === "left",
      "text-center items-center": align === "center",
      "text-right items-end": align === "right",
    }, className)} {...props}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted max-w-2xl font-medium">
          {subtitle}
        </p>
      )}
    </div>
  )
}
