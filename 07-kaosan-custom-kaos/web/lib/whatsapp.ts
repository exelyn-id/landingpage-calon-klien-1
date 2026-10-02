export const whatsappNumber = "6285184615282";

export const defaultWhatsAppMessage = "Halo Kaosan Brand dan Custom Kaos, saya lihat info dari Instagram @kaosan.co.id dan ingin tanya-tanya dulu.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
