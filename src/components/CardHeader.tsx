"use client"
import React, { useState } from "react";

const CardHeader = ({ categories, onCategorySelect }: { categories: string[]; onCategorySelect: (category: string) => void }) => {
  const [selectedCategory, setSelectedCategory] = useState("Hepsi");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="flex justify-between items-center mb-8">
      {/* Başlık */}
      <div>
        <h2 className="text-4xl font-bold text-[#140342]">Eğitim ve Hizmetlerimizi Keşfet</h2>
        <p className="text-gray-600 mt-2">
          Başka firmalara bağımlı kalmamanız için sunduğumuz eğitimlerimize göz atın.
        </p>
      </div>

      {/* Kategoriler */}
      <div className="bg-gray-100 rounded-full flex p-1 space-x-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`py-2 px-4 rounded-full transition-colors duration-300 ${
              selectedCategory === category
                ? "bg-white text-[#6440FB]  shadow"
                : "text-gray-600 hover:bg-white hover:text-[#6440FB]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CardHeader;
