export const whatsappNumber = "6282118301357";

export const defaultWhatsAppMessage = "Halo Cielo Nail Studio, saya lihat info dari Instagram @cielonailstudio.id dan ingin tanya-tanya dulu.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
