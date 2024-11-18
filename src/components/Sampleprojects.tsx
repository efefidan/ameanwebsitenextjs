"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const SampleProjects = () => {
  // Slider ayarları
  const settings = {
    dots: true, // Alt noktalar görünsün
    infinite: true, // Sonsuz döngü
    speed: 500, // Kaydırma d
    slidesToShow: 5, // Aynı anda gösterilecek logo sayısı
    slidesToScroll: 1, // Her kaydırmada geçilecek logo sayısı
    customPaging: () => (
      <div className="w-2 h-2 bg-gray-300 rounded-full hover:bg-[#140342] transition cursor-pointer"></div>
    ),
    dotsClass: "slick-dots custom-dots", // Özel nokta tasarımı için sınıf
    initialSlide: 0, // Sayfa ilk yüklendiğinde birinci nokta seçili olsun
  };

  // Logolar
  const logos = [
    "/bülübl.png",
    "/yalım.png",
    "/doralp.png",
    "/gna.png",
    "/ilgin.png",
    "/minerva.png",
    "/platin.png",
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto text-center text-sm">
        {/* Başlık */}
        <h2 className="text-4xl font-bold text-[#140342]">Örnek Projelerimiz</h2>
        <p className="text-gray-600 mt-4">
          Dünyanın dört bir tarafında çeşitli çözümler sunduğumuz farklı sektörlerden firmalar
        </p>

        {/* Slider */}
        <div className="mt-8">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="px-4">
                <Image
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  width={250} // Fotoğraf boyutları büyütüldü
                  height={250}
                  className="mx-auto object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SampleProjects;
