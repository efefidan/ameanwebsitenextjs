"use client";

import React, { useState } from "react";

type Review = {
  title: string;
  content: string;
  author: string;
  authorImage: string;
};

const reviews: Review[] = [
  {
    title: "Profesyonel Ekip",
    content:
      "Çok memnun kaldığım bir yazılım danışmanlık süreci yaşadım. Proje sürecindeki iletişim mükemmeldi ve her adımda beni bilgilendirdiler. Proje zamanında ve bütçeyle tamamlandı ve sonuçlar beklediğimden daha iyi oldu. Profesyonel, güvenilir ve işlerini gerçekten iyi yapıyorlar.",
    author: "Başak Songül Işpir",
    authorImage: "/author1.jpg",
  },
  {
    title: "Harika Danışmanlık",
    content:
      "Yazılım Danışmanlığı sürecini başarıyla tamamladık. Ekip tam anlamıyla güven verici ve profesyoneldi.",
    author: "Eren Kartal",
    authorImage: "/author2.jpg",
  },
  {
    title: "Kaliteli Hizmet",
    content:
      "İhtiyaçlarımızı anlayıp bize en uygun çözümleri sundular. Kesinlikle tekrar çalışmayı düşünüyorum.",
    author: "Ayşe Yılmaz",
    authorImage: "/author3.jpg",
  },
];

const ReviewsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? reviews.length - 1 : (prev - 1) % reviews.length
    );
  };

  return (
    <div className="py-12 bg-[#1A064F] text-white relative">
      <div className="container mx-auto flex justify-center items-center overflow-hidden relative">
        {/* Sol Bulanık Yorum */}
        <div
          className="absolute left-[-20%] opacity-50 blur-[2px] transition-all duration-500"
          onClick={handlePrev}
        >
          <div className="bg-white text-[#140342] rounded-lg shadow-md p-6 max-w-[300px]">
            <h3 className="text-lg font-semibold text-[#6440FB]">
              {reviews[(activeIndex + reviews.length - 1) % reviews.length].title}
            </h3>
            <p className="text-sm mt-3">
              {reviews[(activeIndex + reviews.length - 1) % reviews.length].content}
            </p>
          </div>
        </div>

        {/* Aktif Yorum */}
<div className="z-10">
  <div className="bg-white text-[#140342] rounded-lg shadow-lg p-8 max-w-[500px] mx-auto">
    <h3 className="text-xl font-bold text-[#6440FB]">
      {reviews[activeIndex].title}
    </h3>
    <p className="text-sm mt-4 leading-relaxed text-[#000000] font-bold">
      {reviews[activeIndex].content}
    </p>
    <div className="flex items-center mt-6">
      <img
        src={reviews[activeIndex].authorImage}
        alt={reviews[activeIndex].author}
        className="w-12 h-12 rounded-full mr-4"
      />
      <span className="text-base font-semibold">
        {reviews[activeIndex].author}
      </span>
    </div>
  </div>
</div>


        {/* Sağ Bulanık Yorum */}
        <div
          className="absolute right-[-20%] opacity-50 blur-[2px] transition-all duration-500"
          onClick={handleNext}
        >
          <div className="bg-white text-[#140342] rounded-lg shadow-md p-6 max-w-[300px]">
            <h3 className="text-lg font-semibold text-[#6440FB]">
              {reviews[(activeIndex + 1) % reviews.length].title}
            </h3>
            <p className="text-sm mt-3">
              {reviews[(activeIndex + 1) % reviews.length].content}
            </p>
          </div>
        </div>
      </div>

      {/* Noktalar */}
      <div className="flex justify-center mt-8 space-x-3">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === activeIndex ? "bg-[#6440FB]" : "bg-gray-300"
            } transition-all duration-300 hover:scale-110`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSlider;
