export const whatsappNumber = "6287875984552";

export const defaultWhatsAppMessage = "Halo Humble Nest Yoga, saya lihat info dari Instagram @humblenestyoga dan ingin tanya-tanya dulu.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
