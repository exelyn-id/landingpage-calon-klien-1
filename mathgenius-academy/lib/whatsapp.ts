export function getWhatsAppUrl(message?: string) {
  const phone = "6289523609475";
  const defaultMessage =
    "Halo MathGenius Academy, saya ingin berkonsultasi mengenai program bimbingan belajar.";
  const finalMessage = message ?? defaultMessage;
  return `https://wa.me/${phone}?text=${encodeURIComponent(finalMessage)}`;
}

export const WA_MESSAGES = {
  default: "Halo MathGenius Academy, saya ingin berkonsultasi mengenai program bimbingan belajar.",
  program: "Halo MathGenius Academy, saya ingin mengetahui program les SD-SMA dan pilihan kurikulumnya.",
  kurikulum: "Halo MathGenius Academy, saya ingin berkonsultasi mengenai les Kurikulum Nasional/Cambridge/IB.",
  tes: "Halo MathGenius Academy, saya ingin mengetahui program persiapan SNBT/SAT/GMAT/TPA/TKA.",
  olimpiade: "Halo MathGenius Academy, saya ingin berkonsultasi mengenai les persiapan Olimpiade.",
};
