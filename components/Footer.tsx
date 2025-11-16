import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Youtube, Linkedin, MessageSquare } from 'lucide-react';
import { SiLine } from 'react-icons/si';
import Image from 'next/image';
import ExoTeamLogo from './brand/ExoTeamLogo';
import { ScatteredHexagons } from './brand/HexagonPattern';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Hexagon Pattern Background - More visible */}
      <ScatteredHexagons className="opacity-20" color="#FFFFFF" />

      <div className="container mx-auto px-6 max-w-7xl py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand with Logo */}
          <div className="space-y-4">
            <div className="mb-4">
              <div className="relative w-48 h-24">
                <Image
                  src="/images/logo-small.png"
                  alt="Expert Course"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Bimbel TERBAIK khusus mahasiswa yang berlokasi utama di Telkom University Bandung.
              Bergabunglah dengan Expert Squad dan raih IPK impianmu! #expertcourse #bimbelnyamahasiswa
            </p>
            <div className="space-y-2">
              <div className="text-green-400 text-sm font-semibold">🎓 Khusus Mahasiswa Tel-U</div>
              <div className="text-blue-400 text-sm font-semibold">👥 500+ Expert Squad</div>
              <div className="text-yellow-400 text-sm font-semibold">⭐ Rating 4.9/5</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Layanan</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#paket" className="text-gray-400 hover:text-primary-400 transition-colors">
                  📚 Paket Belajar
                </a>
              </li>
              <li>
                <a href="/#mata-kuliah" className="text-gray-400 hover:text-primary-400 transition-colors">
                  📖 Mata Kuliah
                </a>
              </li>
              <li>
                <a href="/#testimoni" className="text-gray-400 hover:text-primary-400 transition-colors">
                  💬 Testimoni Expert Squad
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-primary-400 transition-colors">
                  📰 Expert News & Blog
                </a>
              </li>
              <li>
                <a href="/kontak" className="text-gray-400 hover:text-primary-400 transition-colors">
                  📞 Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Kontak Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary-400" />
                <div>
                  <div className="font-medium">team@expertcourse.net</div>
                  <div className="text-xs text-gray-500">Email resmi</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-400" />
                <div>
                  <div className="font-medium">+6283236118636</div>
                  <div className="text-xs text-gray-500">WhatsApp (Fast Response)</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-400" />
                <div>
                  <div className="font-medium">Jl. Ganesha, Permata Buah Batu Blok D No.82</div>
                  <div className="text-xs text-gray-500">Lengkong, Bojongsoang, Bandung 40287</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MessageSquare className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-500" />
                <div>
                  <div className="font-medium">@expertcourse</div>
                  <div className="text-xs text-gray-500">Line Official Account</div>
                </div>
              </li>
            </ul>
            
            <div className="bg-gray-800 rounded-lg p-4 mt-6">
              <div className="text-sm font-semibold text-white mb-2">⏰ Jam Layanan Customer:</div>
              <div className="text-xs text-gray-400">Senin - Jumat: 08.00 - 22.00 WIB</div>
              <div className="text-xs text-gray-400">Sabtu - Minggu: 09.00 - 18.00 WIB</div>
              <div className="text-xs text-green-400 mt-1">⚡ Rata-rata balasan dalam 5 menit</div>
            </div>
          </div>

          {/* Social Media & Apps */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Ikuti Kami</h4>
            <div className="grid grid-cols-4 gap-3">
              <a
                href="https://facebook.com/expertcourse.id"
                className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:text-white" />
              </a>
              <a
                href="https://instagram.com/expertcourse.id"
                className="p-3 bg-gray-800 hover:bg-pink-600 rounded-lg transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:text-white" />
              </a>
              <a
                href="https://line.me/R/ti/p/@expertcourse"
                className="p-3 bg-gray-800 hover:bg-green-500 rounded-lg transition-colors group"
                aria-label="Line"
              >
                <SiLine className="w-5 h-5 group-hover:text-white" />
              </a>
              <a
                href="https://youtube.com/c/expertcourseid"
                className="p-3 bg-gray-800 hover:bg-red-600 rounded-lg transition-colors group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 group-hover:text-white" />
              </a>
            </div>
            
            <div className="mt-6">
              <div className="text-sm font-semibold text-white mb-3">📱 Download Aplikasi:</div>
              <div className="space-y-2">
                <a href="#" className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 rounded-lg p-3 transition-colors">
                  <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium">Google Play</div>
                    <div className="text-xs text-gray-400">Rating 4.8/5 ⭐</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 rounded-lg p-3 transition-colors">
                  <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">🍎</span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium">App Store</div>
                    <div className="text-xs text-gray-400">10k+ Downloads</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              📋 Syarat & Ketentuan
            </a>
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              🔒 Kebijakan Privasi
            </a>
            <a href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
              ℹ️ Tentang Kami
            </a>
            <a href="/success-stories" className="text-gray-400 hover:text-white text-sm transition-colors">
              🎓 Success Stories
            </a>
          </div>
          
          <div className="text-center space-y-4">
            {/* EXO Team Logo */}
            <div className="flex justify-center mb-4">
              <ExoTeamLogo size={60} />
            </div>

            <div className="text-gray-400 text-sm">
              <span className="font-semibold">Expert Course</span> - Bimbel TERBAIK Mahasiswa Telkom University
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Expert Course. All Rights Reserved.
            </p>
            <p className="text-gray-500 text-xs italic">
              "Raih IPK Impianmu Bersama Expert Squad" ❤️
            </p>
            <div className="text-xs text-gray-600 mt-2">
              Expert Course adalah bimbingan belajar khusus mahasiswa Telkom University yang membantu
              meningkatkan prestasi akademik. Hasil dapat bervariasi tergantung komitmen belajar masing-masing.
            </div>
            <div className="text-xs text-gray-500 mt-3">
              Made with passion by EXO Team | #expertcourse #bimbelnyamahasiswa
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
