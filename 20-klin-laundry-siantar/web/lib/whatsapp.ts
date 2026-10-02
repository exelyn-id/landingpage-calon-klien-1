export const whatsappNumber = "6285277780009";

export const defaultWhatsAppMessage = "Halo Mr Klin Laundry Siantar, saya lihat info dari Instagram @klinlaundry_siantar dan ingin tanya-tanya dulu.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
