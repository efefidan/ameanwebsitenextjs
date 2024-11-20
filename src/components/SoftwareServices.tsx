"use client";

import React from "react";

const SoftwareServices = () => {
  return (
    <div className="bg-[#EEF2F6] py-12">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center gap-8 px-4">
        {/* Görsel Alanı */}
        <div className="w-full lg:w-2/3 flex justify-center">
          <img
            src="/hizmet.png" // Fotoğrafın yolu (public klasöründen sağlanacak)
            alt="Websitesi ve Telefon Uygulaması Görseli"
            className=" max-w-full"
          />
        </div>

        {/* Yazı Alanı */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold text-[#140342] leading-tight mb-4">
            Websitesi & Telefon <br />
            Uygulaması <span className="text-[#6440FB]">Yazılım Hizmetleri</span>
          </h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            Girişim projeleriniz için MVP hazırlamak, hali hazırda çalışan
            yazılımınızı optimize ederek geliştirmek veya şirketiniz için bir
            websitesi veya uygulama geliştirmek için bize ulaşın.
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            En uygun bütçe ve zamanda size hizmet verebilecek güvenilir yazılım
            firmalarından fizibilite raporu ve teklif alalım.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoftwareServices;
