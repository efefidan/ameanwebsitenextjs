"use client";

import React, { useState } from "react";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  const blogs = [
    { category: "Hizmetlerimiz", title: "Pazarlama Danışmanlığı", date: "Temmuz 4, 2024" },
    { category: "Hizmetlerimiz", title: "Emlak Danışmanlığı", date: "Temmuz 4, 2024" },
    { category: "Hizmetlerimiz", title: "Eğitim Koçluğu", date: "Temmuz 4, 2024" },
    { category: "Hizmetlerimiz", title: "Pazarlama Danışmanlığı", date: "Temmuz 4, 2024" },
    { category: "Hizmetlerimiz", title: "Pazarlama Danışmanlığı", date: "Temmuz 4, 2024" },
    { category: "Hizmetlerimiz", title: "Pazarlama Danışmanlığı", date: "Temmuz 4, 2024" },
  ];

  const [currentPage, setCurrentPage] = useState(0); // Mevcut sayfa
  const itemsPerPage = 3; // Her sayfada 3 kart göster

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const handlePageChange = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Başlık ve Açıklama */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-[#140342]">Blog & Haberler</h2>
            <p className="text-sm text-gray-600 py-2">
              Yazılım, Tasarım ve Eğitim alanlarındaki işinize yarayacak gelişmelerden
              haberdar olun.
            </p>
          </div>
          <a
            href="#"
            className="bg-[#F4F0FF] text-[#6440FB] px-6 py-3 rounded-lg text-base font-semibold hover:bg-[#6440FB] hover:text-white transition-all duration-300"
          >
            Tüm Haberler
          </a>
        </div>

        {/* Blog Kartları */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
              width: `${100 * totalPages}%`,
            }}
          >
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="w-1/3 flex-shrink-0 px-4"
                style={{ flex: "0 0 33.3333%", maxWidth: "33.3333%" }}
              >
                <BlogCard
                  category={blog.category}
                  title={blog.title}
                  date={blog.date}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Noktalar */}
        <div className="mt-8 flex justify-center items-center space-x-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentPage
                  ? "bg-[#6440FB] scale-125"
                  : "bg-gray-400 hover:bg-[#6440FB]"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
