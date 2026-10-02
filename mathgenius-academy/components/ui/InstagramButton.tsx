import * as React from "react";
import { cn } from "./Button";
import { Instagram } from "lucide-react";

interface InstagramButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function InstagramButton({
  className,
  variant = "outline",
  size = "md",
  children,
  ...props
}: InstagramButtonProps) {
  const url = "https://www.instagram.com/bimbel.mathgenius/";

  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#833AB4] text-white hover:opacity-90 focus-visible:ring-[#F56040] shadow-sm",
    secondary: "bg-blue-600 text-white hover:bg-blue-500 focus-visible:ring-blue-600 shadow-sm",
    outline: "border-2 border-navy-900 bg-transparent text-navy-950 hover:bg-navy-950 hover:text-white focus-visible:ring-navy-900",
    ghost: "bg-transparent text-navy-950 hover:bg-blue-100 focus-visible:ring-blue-500",
  };
  
  const sizes = {
    sm: "h-9 px-4 text-sm gap-2",
    md: "h-11 px-6 text-base gap-2",
    lg: "h-14 px-8 text-lg gap-3",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <Instagram className={cn(size === "sm" ? "w-4 h-4" : size === "md" ? "w-5 h-5" : "w-6 h-6")} />
      {children || "Lihat Instagram"}
    </a>
  );
}
