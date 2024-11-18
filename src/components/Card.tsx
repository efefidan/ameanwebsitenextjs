"use client";
import React from "react";
import Image from "next/image";

type CardProps = {
  image: string;
  title: string;
  lessons: number;
  duration: string;
  level: string;
  author: string;
  authorImage: string;
  price: number;
  rating: number;
  reviews: number;
};

const Card: React.FC<CardProps> = ({
  image,
  title,
  lessons,
  duration,
  level,
  author,
  authorImage,
  price,
  rating,
  reviews,
}) => {
  return (
    <div className="flex h-[210px] border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white group p-2"> {/* Kart genelinde padding */}
      {/* Sol Resim */}
      <div className="w-2/5 h-full overflow-hidden relative rounded-md"> {/* Görsel yuvarlatıldı */}
        <Image
          src={image}
          alt={title}
          width={210}
          height={210}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125 group-hover:brightness-50"
        />
        {/* Renkli Katman */}
        <div className="absolute inset-0 bg-[#140342] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
      </div>

      {/* Sağ İçerik */}
      <div className="w-3/5 p-6 flex flex-col justify-between"> {/* Sağ içerik padding */}
        {/* Üst Kısım */}
        <div>
          {/* Değerlendirme */}
          <div className="flex items-center text-yellow-400 text-sm mb-2">
            <span className="font-medium text-[#140342] mr-1">{rating.toFixed(1)}</span>
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={i < Math.round(rating) ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
              ))}
            </div>
            <span className="ml-1 text-gray-500">({reviews})</span>
          </div>

          {/* Başlık */}
          <h3 className="text-sm font-semibold text-[#140342] mb-3">{title}</h3>

          {/* Detaylar */}
          <div className="flex items-center text-gray-600 text-xs">
            <div className="flex items-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20l-4-4m0 0l4-4m-4 4h8"
                />
              </svg>
              {lessons} Lessons
            </div>
            <div className="flex items-center mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h11m0 0H3m0 0h11m-4-6h4m-4 6h4"
                />
              </svg>
              {duration}
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h11m0 0H3m0 0h11m-4-6h4m-4 6h4"
                />
              </svg>
              {level}
            </div>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="flex items-center justify-between mt-4">
          {/* Yazar */}
          <div className="flex items-center">
            <Image
              src={authorImage}
              alt={author}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="ml-2 text-xs text-gray-600">{author}</span>
          </div>
          {/* Fiyat */}
          <div className="text-lg font-bold text-[#140342]">${price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
