export const whatsappNumber = "6285798282962";

export const defaultWhatsAppMessage = "Halo Hypergrafi Fotografer Freelance, saya lihat info dari Instagram @hypergrafi dan ingin tanya-tanya dulu.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
