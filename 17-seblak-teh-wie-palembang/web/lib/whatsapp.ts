export const whatsappNumber = "6282190493545";

export const defaultWhatsAppMessage = "Halo Seblak Teh Wie 2 Palembang, saya lihat info dari Instagram @seblak_teh_wie2 dan ingin tanya-tanya dulu.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
