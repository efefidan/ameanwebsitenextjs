"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#140342] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Üst Bölüm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo ve Açıklama */}
          <div>
            <h2 className="text-2xl font-bold">AMEAN</h2>
            <p className="text-sm mt-4 leading-relaxed">
              En iyi hizmeti vermekten gurur duyuyoruz. Siz de bizimle çalışmak
              istiyorsanız iletişime geçebilirsiniz.
            </p>
          </div>

          {/* Linkler */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Linkler</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-[#6440FB] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-[#6440FB] transition-colors"
                >
                  Kurslar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-[#6440FB] transition-colors"
                >
                  Etkinlikler
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-[#6440FB] transition-colors"
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Destek */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Destek</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-[#6440FB] transition-colors"
                >
                  Profil
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-[#6440FB] transition-colors"
                >
                  İletişim
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-[#6440FB] transition-colors"
                >
                  Yardım Merkezi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-[#6440FB] transition-colors"
                >
                  Gizlilik Sözleşmesi
                </a>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişime Geç</h3>
            <p className="text-sm mb-4 leading-relaxed">
              Herhangi bir sorunuz varsa iletişime geçebilirsiniz!
            </p>
            <p className="text-sm flex items-center mb-2">
              📞 +90 544 104 95 10
            </p>
            <p className="text-sm">
              📍 Gençlik Mahallesi, Tevfik Işık Caddesi, No:13B, 07100
              Muratpaşa/Antalya
            </p>
          </div>
        </div>

        {/* Alt Bölüm */}
        <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>© 2024 AMEAN. Tüm Hakları Saklıdır.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a
              href="#"
              className="hover:text-[#6440FB] transition-colors"
            >
              Yardım
            </a>
            <a
              href="#"
              className="hover:text-[#6440FB] transition-colors"
            >
              Hüküm & Koşullar
            </a>
            <a
              href="#"
              className="hover:text-[#6440FB] transition-colors"
            >
              Gizlilik Sözleşmesi
            </a>
            <div className="bg-[#F4F0FF] text-[#6440FB] px-3 py-1 rounded-full flex items-center">
              <span className="mr-2">🇹🇷</span>
              <span>TR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
