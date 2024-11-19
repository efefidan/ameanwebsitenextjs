"use client";

import React from "react";
import { FaSearch, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const ProcessCard = ({ step, title, description, icon }: any) => {
  return (
    <div className="group relative border border-[#2E1B74] p-8 rounded-xl text-center bg-[#1A064F] hover:bg-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <div className="flex justify-center items-center h-20 w-20 mx-auto rounded-full bg-[#140342] group-hover:bg-[#6440FB] transition-all duration-300">
        <div className="text-green-500 text-5xl group-hover:text-white transition-all duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-white font-bold text-xl mt-6 group-hover:text-[#140342] transition-all duration-300">
        {step}. {title}
      </h3>
      <p className="text-gray-300 text-sm mt-4 group-hover:text-gray-700 transition-all duration-300">
        {description}
      </p>
    </div>
  );
};

const ProcessSection = () => {
  const processSteps = [
    {
      step: "01",
      title: "Keşif & İhtiyaç",
      description:
        "Firmanızın veya kendinizin hedeflerini göz önünde bulundurarak ihtiyacınızı net bir şekilde bulun. Bizimle iletişime geçmekten ve soru sormaktan çekinmeyin.",
      icon: <FaSearch />,
    },
    {
      step: "02",
      title: "Hizmet & Plan",
      description:
        "İhtiyacınızı karşılamak için hangi dijital çözümleri kullanabileceğimize dair raporumuzu inceleyin. Böylece bütçe, zaman ve hedef planlarımızı oluşturalım.",
      icon: <FaGraduationCap />,
    },
    {
      step: "03",
      title: "İş & Sonuç",
      description:
        "Sonuç odaklı bir firma olarak ihtiyacınızı en kısa sürede karşılayabilmek için çalışmaya başlayalım. Hedeflerimizi takip ederek başarımızı ölçelim.",
      icon: <FaLaptopCode />,
    },
  ];

  return (
    <div className="py-16 bg-[#1A064F]">
      <div className="container mx-auto">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            Hizmet Sürecimiz Nasıl İşler?
          </h2>
          <p className="text-gray-400 mt-2 text-base">
            Tavsiye: Bize ihtiyaçlarınızı belirtin, böylece gereksiz harcama ve uğraştan kurtulmuş olursunuz.
          </p>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={index}
              step={step.step}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
