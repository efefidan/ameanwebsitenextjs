"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const SampleProjects = () => {
  const [logos, setLogos] = useState([]);

  // Slider ayarları
  const settings = {
    dots: true, // Alt noktalar görünsün
    infinite: true, // Sonsuz döngü
    speed: 500, // Kaydırma hızı
    slidesToShow: 5, // Masaüstünde gösterilecek logo sayısı
    slidesToScroll: 1, // Her kaydırmada geçilecek logo sayısı
    customPaging: () => (
      <div className="w-2 h-2 bg-gray-300 rounded-full hover:bg-[#140342] transition cursor-pointer"></div>
    ),
    dotsClass: "slick-dots custom-dots", // Özel nokta tasarımı için sınıf
    initialSlide: 0, // Sayfa ilk yüklendiğinde birinci nokta seçili olsun
    responsive: [
      {
        breakpoint: 768, // Mobil cihazlar için
        settings: {
          slidesToShow: 1, // Her seferinde sadece 1 öğe göster
        },
      },
    ],
  };

  // Strapi'den logoları çekme
  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/referances?populate=*");
        const data = await response.json();

        // Logoları ayıkla
        const fetchedLogos = data.data.map((referances: { image: { url: any } }) => {
          return `http://localhost:1337${referances.image.url}`; // Tam URL'yi oluştur
        });

        setLogos(fetchedLogos);
      } catch (error) {
        console.error("Projeleri çekerken bir hata oluştu:", error);
      }
    };

    fetchLogos();
  }, []);

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto text-center text-sm">
        {/* Başlık */}
        <h2 className="text-4xl font-bold text-[#140342]">Örnek Projelerimiz</h2>
        <p className="text-gray-600 mt-4">
          Dünyanın dört bir tarafında çeşitli çözümler sunduğumuz farklı sektörlerden firmalar
        </p>

        {/* Slider */}
        <div className="">
          {logos.length > 0 ? (
            <Slider {...settings}>
              {logos.map((logo, index) => (
                <div key={index} className="">
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="mx-auto object-contain w-[250px] h-[250px]" // Resimlerin boyutlarını ayarla
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <p className="text-gray-500">Yükleniyor...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SampleProjects;
