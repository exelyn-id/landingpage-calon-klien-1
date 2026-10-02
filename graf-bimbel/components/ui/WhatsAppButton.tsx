"use client"

import * as React from "react"
import { Button, ButtonProps } from "@/components/ui/Button"
import { getWhatsAppUrl } from "@/lib/whatsapp"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface WhatsAppButtonProps extends Omit<ButtonProps, "onClick"> {
  label?: string
  message?: string
  showIcon?: boolean
}

export const WhatsAppButton = React.forwardRef<HTMLButtonElement, WhatsAppButtonProps>(
  ({ label = "Konsultasi via WhatsApp", message, showIcon = true, className, ...props }, ref) => {
    const handleWhatsAppClick = () => {
      const url = getWhatsAppUrl(message)
      window.open(url, "_blank", "noopener,noreferrer")
    }

    return (
      <Button
        ref={ref}
        onClick={handleWhatsAppClick}
        className={cn("font-bold text-black bg-primary hover:bg-primary-dark transition-colors", className)}
        {...props}
      >
        {showIcon && <MessageCircle className="w-5 h-5 mr-2" />}
        {label}
      </Button>
    )
  }
)
WhatsAppButton.displayName = "WhatsAppButton"
