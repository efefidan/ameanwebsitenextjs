"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import { useRouter } from "next/navigation";

const BlogSection = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Mevcut sayfa
  const itemsPerPage = 3; // Masaüstünde maksimum 3 blog göster
  const itemsPerPageMobile = 1; // Mobilde 1 blog göster

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/blogs?populate=*"
        ); // Strapi API URL'i
        const fetchedBlogs = response.data.data.map((blog) => ({
          id: blog.id,
          title: blog.Title,
          summary: blog.Summary,
          date: new Date(blog.updatedAt).toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          slug: blog.slug, // Slug bilgisini ekle
        }));
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("Blogları çekerken bir hata oluştu:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handlePageChange = (index) => {
    setCurrentPage(index);
  };

  // Blogları sayfalara bölme
  const totalPagesDesktop = Math.ceil(blogs.length / itemsPerPage);
  const totalPagesMobile = Math.ceil(blogs.length / itemsPerPageMobile);
  const paginatedBlogs = Array.from(
    { length: window.innerWidth <= 768 ? totalPagesMobile : totalPagesDesktop },
    (_, index) => {
      const itemsPerPageDynamic =
        window.innerWidth <= 768 ? itemsPerPageMobile : itemsPerPage;
      const start = index * itemsPerPageDynamic;
      const end = Math.min(start + itemsPerPageDynamic, blogs.length); // Kalanları da hesaba kat
      return blogs.slice(start, end);
    }
  );

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Başlık ve Açıklama */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-3xl font-bold text-[#140342]">
              Blog & Haberler
            </h2>
            <p className="text-sm text-gray-600 py-2">
              Yazılım, Tasarım ve Eğitim alanlarındaki işinize yarayacak
              gelişmelerden haberdar olun.
            </p>
          </div>
          <button
            onClick={() => router.push("/blog")}
            className="bg-[#F4F0FF] text-[#6440FB] px-6 py-3 rounded-lg text-base font-semibold hover:bg-[#6440FB] hover:text-white transition-all duration-300 self-start md:self-auto"
          >
            Tüm Haberler
          </button>
        </div>

        {/* Blog Kartları */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
              width: `${100 * paginatedBlogs.length}%`,
            }}
          >
            {paginatedBlogs.map((page, pageIndex) => (
              <div
                key={pageIndex}
                className="flex w-full"
                style={{
                  flex: "0 0 100%",
                  maxWidth: "100%",
                }}
              >
                {page.map((blog) => (
                  <div
                    key={blog.id}
                    className="w-full px-4"
                    style={{
                      flex: "1 1 auto",
                      maxWidth: "100%",
                    }}
                  >
                    <div
                      key={blog.id}
                      className="cursor-pointer p-0"
                      onClick={() => router.push(`/blog/${blog.slug}`)}
                    >
                      <BlogCard
                        category="Kategori (Yapılacak)" // İstersen bu değeri dinamik hale getirebilirsin
                        title={blog.title}
                        date={blog.date}
                      />
                      <p className="text-gray-500 text-sm mt-2 break-words">
                        {blog.summary}
                      </p>
                      <span className="text-sm text-gray-400 mt-1 block">
                        Son Güncelleme: {blog.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Noktalar */}
        <div className="mt-8 flex justify-center items-center space-x-4">
          {Array.from({
            length: window.innerWidth <= 768 ? totalPagesMobile : totalPagesDesktop,
          }).map((_, index) => (
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
