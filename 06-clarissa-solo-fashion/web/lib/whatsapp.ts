export const whatsappNumber = "6285719611812";

export const defaultWhatsAppMessage = "Halo CLARISSA Solo Fashion Wanita, saya lihat info dari Instagram @clarissasolo.id dan ingin tanya-tanya dulu.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
