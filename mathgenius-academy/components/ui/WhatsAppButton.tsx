import * as React from "react";
import { cn } from "./Button";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl, WA_MESSAGES } from "@/lib/whatsapp";

interface WhatsAppButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  messageType?: keyof typeof WA_MESSAGES;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function WhatsAppButton({
  className,
  messageType = "default",
  variant = "primary",
  size = "md",
  children,
  ...props
}: WhatsAppButtonProps) {
  const message = WA_MESSAGES[messageType];
  const url = getWhatsAppUrl(message);

  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  
  const variants = {
    primary: "bg-[#25D366] text-white hover:bg-[#128C7E] focus-visible:ring-[#25D366] shadow-sm",
    secondary: "bg-yellow-500 text-navy-950 hover:bg-yellow-400 focus-visible:ring-yellow-500 shadow-sm",
    outline: "border-2 border-[#25D366] bg-transparent text-[#25D366] hover:bg-[#25D366] hover:text-white focus-visible:ring-[#25D366]",
    ghost: "bg-transparent text-[#25D366] hover:bg-[#E8F9EE] focus-visible:ring-[#25D366]",
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
      <MessageCircle className={cn(size === "sm" ? "w-4 h-4" : size === "md" ? "w-5 h-5" : "w-6 h-6")} />
      {children || "Konsultasi via WhatsApp"}
    </a>
  );
}
