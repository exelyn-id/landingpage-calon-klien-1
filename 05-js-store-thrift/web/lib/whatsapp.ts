export const whatsappNumber = "6281398869711";

export const defaultWhatsAppMessage =
  "Halo JS STORE Preloved Thrift, saya lihat info dari Instagram @jsstore_2nd dan ingin tanya-tanya dulu.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
