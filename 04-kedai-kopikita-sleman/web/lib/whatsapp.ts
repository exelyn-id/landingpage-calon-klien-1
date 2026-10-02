export const whatsappNumber = "6287834198643";

export const defaultWhatsAppMessage =
  "Halo Kedai KopiKita, saya lihat info dari Instagram @k.kopikita dan ingin tanya-tanya dulu.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
