export const whatsappNumber = "628139234983";

export const defaultWhatsAppMessage = "Halo Diael Beauty Studio, saya lihat info dari Instagram @diael.studio dan ingin tanya-tanya dulu.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
