export const whatsappNumber = "628118462569";

export const defaultWhatsAppMessage = "Halo Blade House Barbershop Jakarta, saya lihat info dari Instagram @bladehousebarber.jkt dan ingin tanya-tanya dulu.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
