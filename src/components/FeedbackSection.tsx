"use client";

import React from "react";
import ReviewsSlider from "./ReviewsSlider";

const FeedbackSection = () => {
  return (
    <div className="bg-[#1A064F] py-12 text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Sol Taraf */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            İnsanlar & Sektör Hakkımızda Ne Düşünüyor?
          </h2>
          <p className="text-white mb-8 text-sm">
            Beraber çalıştığımız firmaların ve danışmanlık alan bireylerin AMEAN Danışmanlık
            hakkındaki görüş ve yorumlarını Google Yorumlar üzerinden aratabilirsiniz.
          </p>

          {/* İstatistikler */}
          <div className="flex gap-12 py-6">
            <div>
              <h3 className="text-5xl font-bold">9/10</h3>
              <p className="mt-2 text-white text-sm">
                8 Aydan uzun süre yazılım eğitimi alan öğrencilerimizin büyük oranı yazılım
                alanında çalışmaktadır.
              </p>
            </div>
            <div>
              <h3 className="text-5xl font-bold">95%</h3>
              <p className="mt-2 text-white text-sm">
                Projelerimizin %95’ini teslim tarihinden önce teslim edip hedeflerimizin üzerinde
                başarıya götürdük.
              </p>
            </div>
          </div>
        </div>

        {/* Sağ Taraf */}
        <div>
          <ReviewsSlider />
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
