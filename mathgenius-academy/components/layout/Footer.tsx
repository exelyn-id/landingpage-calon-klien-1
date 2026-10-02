import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white pt-16 pb-24 lg:pb-16 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <h3 className="text-2xl font-bold mb-4 text-white">MathGenius Academy</h3>
          <p className="text-white/70 leading-relaxed mb-6 max-w-sm">
            Bimbingan belajar untuk SD–SMA, berbagai kurikulum, persiapan tes, Olimpiade, dan TKA.
          </p>
          <div className="flex gap-4">
            <a
              href="https://wa.me/6289523609475"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/bimbel.mathgenius/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="md:col-span-3">
          <h4 className="text-lg font-semibold mb-4 text-white/90">Program Kami</h4>
          <ul className="space-y-3">
            <li><Link href="#program" className="text-white/60 hover:text-white transition-colors">Les Akademik SD-SMA</Link></li>
            <li><Link href="#kurikulum" className="text-white/60 hover:text-white transition-colors">Kurikulum Internasional</Link></li>
            <li><Link href="#persiapan-tes" className="text-white/60 hover:text-white transition-colors">Persiapan Ujian / Tes</Link></li>
            <li><Link href="#olimpiade" className="text-white/60 hover:text-white transition-colors">Bimbingan Olimpiade</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-lg font-semibold mb-4 text-white/90">Kontak & Informasi</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-white/60">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +6289523609475</span>
            </li>
            <li className="flex items-center gap-2 text-white/60">
              <Instagram className="w-4 h-4" />
              <a href="https://www.instagram.com/bimbel.mathgenius/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                @bimbel.mathgenius
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1200px] mx-auto border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
        <p>© {currentYear} MathGenius Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}
