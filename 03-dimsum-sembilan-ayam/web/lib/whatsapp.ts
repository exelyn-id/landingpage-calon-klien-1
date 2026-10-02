export const whatsappNumber = "628112228213";

export const defaultWhatsAppMessage =
  "Halo DIMSUM SEMBILAN AYAM, saya lihat info dari Instagram @dimsum9ayam dan ingin tanya-tanya dulu.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
