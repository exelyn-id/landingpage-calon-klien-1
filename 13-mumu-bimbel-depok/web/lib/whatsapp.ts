export const whatsappNumber = "6285773386952";

export const defaultWhatsAppMessage = "Halo Mumu Bimbel, saya lihat info dari Instagram @mumubimbel dan ingin tanya-tanya dulu.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
