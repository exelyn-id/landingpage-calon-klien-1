export const whatsappNumber = "6287892767676";

export const defaultWhatsAppMessage = "Halo D.dough Dough and Coffee Bandung, saya lihat info dari Instagram @d.dough.id dan ingin tanya-tanya dulu.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
