import * as React from "react"
import { cn } from "@/lib/utils"

export function MathGrid({ className, opacity = 0.1 }: { className?: string, opacity?: number }) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="math-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity={opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#math-grid)" />
      </svg>
    </div>
  )
}
