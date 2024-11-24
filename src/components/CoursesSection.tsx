"use client";

import React from "react";

type Course = {
  title: string;
  lessons: number;
  hours: number;
  level: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  instructor: string;
};

const courses: Course[] = [
  {
    title: "SEO Hizmeti Nedir?",
    lessons: 1,
    hours: 6,
    level: "Tüm Seviyeler",
    price: "$125.00",
    rating: 4.0,
    reviews: 1,
    image: "/seoresim.jpeg",
    instructor: "Emin Kartcı",
  },
  {
    title: "IT Hizmeti Nedir?",
    lessons: 1,
    hours: 8,
    level: "Tüm Seviyeler",
    price: "$35.00",
    rating: 3.0,
    reviews: 1,
    image: "/it-course.jpg",
    instructor: "Emin Kartcı",
  },
  {
    title: "Sosyal Medya Yönetimi",
    lessons: 1,
    hours: 16,
    level: "İleri Seviye",
    price: "$35.00",
    rating: 5.0,
    reviews: 1,
    image: "/social-course.jpg",
    instructor: "Emin Kartcı",
  },
  {
    title: "Web Sitesi Tasarımı",
    lessons: 2,
    hours: 12,
    level: "Orta Seviye",
    price: "$50.00",
    rating: 4.5,
    reviews: 2,
    image: "/web-course.jpg",
    instructor: "Emin Kartcı",
  },
];

const CoursesSection: React.FC = () => {
  return (
    <div className="mt-10 w-full">
      <h2 className="text-2xl font-bold text-[#140342] mb-6">Courses</h2>
      {/* Grid Container */}
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: "repeat(3, 310px)", // 3 sabit sütun genişlik 310px
          justifyContent: "left", // Grid'i ortala
          gap: "30px", // Kartlar arasına boşluk
        }}
      >
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
            style={{
              width: "310px", // Kart genişliği
              height: "370px", // Kart yüksekliği
            }}
          >
            {/* Kart Görseli */}
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="text-lg font-semibold text-[#140342]">
                {course.title}
              </h3>
              {/* Derecelendirme */}
              <div className="flex items-center text-yellow-500 mt-2">
                <span className="text-sm mr-1">{course.rating.toFixed(1)}</span>
                <span>{"⭐".repeat(Math.round(course.rating))}</span>
                <span className="text-sm text-gray-500 ml-1">
                  ({course.reviews})
                </span>
              </div>
              {/* Ders Detayları */}
              <div className="text-sm text-gray-600 mt-2">
                <p>
                  {course.lessons} Lessons • {course.hours} Hours •{" "}
                  {course.level}
                </p>
              </div>
              {/* Eğitmen ve Fiyat */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-gray-600 text-sm flex items-center">
                  <img
                    src="/placeholder-avatar.jpg"
                    alt={course.instructor}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  {course.instructor}
                </p>
                <p className="text-[#6440FB] font-bold">{course.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
