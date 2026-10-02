export const whatsappNumber = "6285168888782";

export const defaultWhatsAppMessage = "Halo ers.floral Florist Bandung, saya lihat info dari Instagram @ers.floral dan ingin tanya-tanya dulu.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
