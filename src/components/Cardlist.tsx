"use client";
import React, { useState } from "react";
import CardHeader from "./CardHeader";
import Card from "./Card";

const cardsData = [
  {
    category: "Tasarım",
    image: "/seoresim.jpeg",
    title: "SEO Hizmeti Nedir?",
    lessons: 1,
    duration: "6 Hours",
    level: "Tüm Seviyeler",
    author: "Emin Kartcı",
    authorImage: "/author1.jpg",
    price: 125.0,
    rating: 4.0,
    reviews: 1,
  },
  {
    category: "Yazılım & IT",
    image: "/social-media.png",
    title: "IT Hizmeti Nedir?",
    lessons: 1,
    duration: "8 Hours",
    level: "Tüm Seviyeler",
    author: "Emin Kartcı",
    authorImage: "/author1.jpg",
    price: 35.0,
    rating: 3.0,
    reviews: 1,
  },
  {
    category: "Tasarım",
    image: "/seoresim.jpeg",
    title: "SEO Hizmeti Nedir?",
    lessons: 1,
    duration: "6 Hours",
    level: "Tüm Seviyeler",
    author: "Emin Kartcı",
    authorImage: "/author1.jpg",
    price: 125.0,
    rating: 4.0,
    reviews: 1,
  },
  {
    category: "Tasarım",
    image: "/seoresim.jpeg",
    title: "SEO Hizmeti Nedir?",
    lessons: 1,
    duration: "6 Hours",
    level: "Tüm Seviyeler",
    author: "Emin Kartcı",
    authorImage: "/author1.jpg",
    price: 125.0,
    rating: 4.0,
    reviews: 1,
  },
  // Daha fazla kart ekleyebilirsiniz...
];

const categories = ["Hepsi", "Tasarım", "Yazılım & IT", "Eğitim"];

const CardList = () => {
  const [filteredCategory, setFilteredCategory] = useState("Hepsi");

  const handleCategorySelect = (category: string) => {
    setFilteredCategory(category);
  };

  const filteredCards =
    filteredCategory === "Hepsi"
      ? cardsData
      : cardsData.filter((card) => card.category === filteredCategory);

  return (
    <div className="py-12">
      <div className="container mx-auto">
        {/* Başlık ve Kategoriler */}
        <CardHeader categories={categories} onCategorySelect={handleCategorySelect} />

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {filteredCards.map((card, index) => (
            <div
              key={index}
              className="w-full max-w-[630px] max-h-[210px] mx-auto shadow-md rounded-lg overflow-hidden border border-gray-200"
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
