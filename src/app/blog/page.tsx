"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import BlogCard from "@/components/BlogCard"; // BlogCard bileşenini düzenlediğiniz yere göre bu yolu güncelleyin.

const BlogPage = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/blogs?populate=*"); // Strapi API URL'i
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

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#140342] mb-6">Tüm Bloglar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="cursor-pointer"
              onClick={() => router.push(`/blog/${blog.slug}`)}
            >
              <BlogCard
                category="Kategori (Yapılacak)" // Dinamik kategori eklenebilir
                title={blog.title}
                date={blog.date}
              />
              {/* Yazı taşmasını engellemek için break-words ekliyoruz */}
              <p className="text-gray-500 text-sm mt-2 break-words">
                {blog.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
