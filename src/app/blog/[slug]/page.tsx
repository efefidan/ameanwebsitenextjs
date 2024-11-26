"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const BlogDetail = () => {
  const params = useParams();
  const { slug } = params;

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/blogs?filters[slug][$eq]=${slug}&populate=*`
        );
        setBlog(response.data.data[0]); // İlk blogu al
      } catch (error) {
        console.error("Blog detayı alınırken hata oluştu:", error);
      }
    };

    fetchBlog();
  }, [slug]);

  if (!blog) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{blog.Title}</h1>
      <p className="text-gray-500 mb-4">
        Son Güncelleme:{" "}
        {new Date(blog.updatedAt).toLocaleDateString("tr-TR")}
      </p>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: blog.Body }}
      ></div>
    </div>
  );
};

export default BlogDetail;
