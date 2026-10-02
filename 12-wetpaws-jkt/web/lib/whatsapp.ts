export const whatsappNumber = "6281113802040";

export const defaultWhatsAppMessage = "Halo WetPaws JKT, saya lihat info dari Instagram @wetpaws_jkt dan ingin tanya-tanya dulu.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
