export function getWhatsAppUrl(message?: string) {
  const phone = "6281215933943";
  const defaultMessage =
    "Halo GRAF, saya ingin mengetahui informasi mengenai bimbingan belajar online. Saya ingin berkonsultasi mengenai program yang sesuai.";

  const finalMessage = message ?? defaultMessage;

  return (
    `https://api.whatsapp.com/send/?phone=${phone}` +
    `&text=${encodeURIComponent(finalMessage)}` +
    `&type=phone_number&app_absent=0`
  );
}
