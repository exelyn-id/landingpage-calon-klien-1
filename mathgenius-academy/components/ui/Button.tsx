import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  as?: React.ElementType;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", as, ...props }, ref) => {
    const Comp = as || "button";
    
    const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-yellow-500 text-navy-950 hover:bg-yellow-400 focus-visible:ring-yellow-500 shadow-sm",
      secondary: "bg-blue-600 text-white hover:bg-blue-500 focus-visible:ring-blue-600 shadow-sm",
      outline: "border-2 border-navy-900 bg-transparent text-navy-950 hover:bg-navy-950 hover:text-white focus-visible:ring-navy-900",
      ghost: "bg-transparent text-navy-950 hover:bg-blue-100 focus-visible:ring-blue-500",
    };
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <Comp
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
