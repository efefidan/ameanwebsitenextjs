"use client";
import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const categories = [
    { title: "SEO Hizmeti", icon: "/seo.svg" },
    { title: "IT Hizmeti", icon: "/it.svg" },
    { title: "Sosyal Medya Yönetimi", icon: "/sosyal.svg" },
    { title: "Web Sitesi Tasarımı", icon: "/web.svg" },
    { title: "Video & Fotoğraf Çekimi", icon: "/video.svg" },
    { title: "Eğitim Koçluğu", icon: "/eğitim.svg" },
    { title: "Pazarlama Stratejisi", icon: "/pazarlama.svg" },
    { title: "Danışmanlık", icon: "/emlak.svg" },
    { title: "Veri Analizi", icon: "/reklam.svg" },
];

const CategorySlider = () => {
  // Slider ayarları
  const settings = {
    dots: true, // Alt noktalar görünsün
    infinite: true, // Sonsuz döngü
    speed: 1000, // Kaydırma hızı
    slidesToShow: 6, // Aynı anda görünen kart sayısı
    slidesToScroll: 1, // Her kaydırmada geçilen kart sayısı
    autoplay: true, // Otomatik kaydırma
    autoplaySpeed: 3000, // Kaydırma hızı (ms)
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: (i) => (
        <div className="w-2 h-2 bg-gray-300 rounded-full hover:bg-[#140342] transition cursor-pointer"></div>
      ),
      
    responsive: [
      {
        breakpoint: 1024, // Tablet ve daha küçük ekranlar
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Mobil
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto text-center">
        {/* Başlık */}
        <h2 className="text-4xl font-bold text-[#140342]">Hizmet & Eğitim Kategorilerimiz</h2>
        <p className="text-gray-600 mt-2">
          Her sektördeki girişim ve eğitimlerimizi detaylı şekilde inceleyebilirsiniz
        </p>

        {/* Slider */}
        <div className="mt-8 relative">
          <Slider {...settings}>
            {categories.map((category, index) => (
              <div key={index} className="px-4">
                <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
                  <div className="flex justify-center items-center mb-4">
                    <div className="w-20 h-20 bg-white rounded-full flex justify-center items-center shadow-md">
                      <img src={category.icon} alt={category.title} className="w-12 h-12" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#140342]">{category.title}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

// Sol ok
const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border border-[#140342] rounded-full flex justify-center items-center shadow-lg hover:bg-[#140342] hover:text-white transition"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    );
  };
  

// Sağ ok
const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border border-[#140342] rounded-full flex justify-center items-center shadow-lg hover:bg-[#140342] hover:text-white transition"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    );
  };
  

export default CategorySlider;
