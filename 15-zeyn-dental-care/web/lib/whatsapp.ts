export const whatsappNumber = "6282258009113";

export const defaultWhatsAppMessage = "Halo Zeyn Dental Care, saya lihat info dari Instagram @zeyndentalcare dan ingin tanya-tanya dulu.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
