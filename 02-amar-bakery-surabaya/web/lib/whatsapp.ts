export const whatsappNumber = "628812537786";

export const defaultWhatsAppMessage =
  "Halo AMAR BAKERY SURABAYA, saya lihat info dari Instagram @amarbakerycake dan ingin tanya-tanya dulu.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
