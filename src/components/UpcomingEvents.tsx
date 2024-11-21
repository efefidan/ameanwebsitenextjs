"use client";

import React from "react";
import EventCard from "./EventCard";

const UpcomingEvents = () => {
  return (
    <div className="bg-[#F7F8FB] py-12">
      <div className="container mx-auto px-4">
        {/* Başlık ve Açıklama */}
        <div className="flex justify-between items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-[#140342]">Yaklaşan Eğitim & Etkinlikler</h2>
            <p className="text-gray-600 text-sm py-2">
              Canlı yayın üzerinden veya fiziksel olarak farklı üniversite ve mekanlarda verdiğimiz eğitimlere katılın!
            </p>
          </div>
          <a
            href="#"
            className="bg-[#F4F0FF] text-[#6440FB] px-6 py-3 rounded-lg text-base font-semibold hover:bg-[#6440FB] hover:text-white transition-all duration-300"
          >
            Etkinlik Ara
          </a>
        </div>

        {/* Kartlar */}
        <div className="flex flex-wrap gap-6">
          <EventCard date="26" month="JUL" title="AMEAN Buluşma" location="AMEAN Ofis" />
          {/* Daha fazla kart eklenebilir */}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
