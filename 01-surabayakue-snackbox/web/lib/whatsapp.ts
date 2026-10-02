export const whatsappNumber = "6285931319252";

export const defaultWhatsAppMessage =
  "Halo SurabayaKue - Kue Tradisional Bakery, saya lihat info dari Instagram @surabayakue dan ingin tanya-tanya dulu.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
