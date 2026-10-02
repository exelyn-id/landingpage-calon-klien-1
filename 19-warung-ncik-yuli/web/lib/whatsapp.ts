export const whatsappNumber = "628122333005";

export const defaultWhatsAppMessage = "Halo Warung Ncik Yuli Bandung, saya lihat info dari Instagram @warungnyancikyuli dan ingin tanya-tanya dulu.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
