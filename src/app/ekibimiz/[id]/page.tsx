"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import CoursesSection from "@/components/CoursesSection"; // Kurallarınıza göre yolu ayarlayın.

type UserProfile = {
  id: string;
  name: string;
  role: string;
  rating: number;
  students: number;
  courses: number;
  image: string;
  biography: string[];
};

// Kullanıcı Verileri
const users: UserProfile[] = [
  {
    id: "1",
    name: "Emin Kartcı",
    role: "Proje Yöneticisi",
    rating: 4.4,
    students: 17,
    courses: 15,
    image: "/seoresim.jpeg",
    biography: [
      "🎓 Emin Kartcı 🚀",
      "👨‍🎓 Elektrik Elektronik Mühendisliği'nden birincilikle mezun olan.",
      "💼 5+ yıldır profesyonel olarak yazılım projeleri yöneten ve eğitim veren.",
      "💻 Uzmanlık alanı web uygulamaları geliştirmek olan bir yazılım gurusu.",
      "🌟 Döneminin biricisi olarak bilgi ve deneyimini öğrencilere aktarıyor.",
      "🌐 Web dünyasında kendini kanıtlamış ve ilham veren bir eğitmen.",
      "🚀 Kariyerinizi geliştirmek ve yeni beceriler kazanmak için Emin Kartcı'nın eğitimlerine katılın!",
    ],
  },
  {
    id: "2",
    name: "Umut Arslan",
    role: "Yazılım Uzmanı",
    rating: 4.0,
    students: 10,
    courses: 8,
    image: "/placeholder-avatar.jpg",
    biography: [
      "🎓 Bilgisayar Mühendisliği mezunu.",
      "💻 Frontend ve Backend geliştirme alanında uzman.",
      "🌐 Projelerde yenilikçi çözümler sunmayı hedefler.",
      "🌟 Global standartlarda yazılım geliştirme deneyimine sahip.",
      "📈 Kod kalitesini artırma ve yeni teknolojilere adapte olma konusunda lider.",
    ],
  },
];

const TeamProfile = () => {
  const params = useParams(); // URL'deki dinamik parametreleri al
  const router = useRouter();

  // Kullanıcı verisini ID'ye göre getir
  const user = users.find((user) => user.id === params.id);

  if (!user) {
    return (
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold">Kullanıcı Bulunamadı</h1>
        <button
          onClick={() => router.back()}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Geri Dön
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      {/* Arka Plan */}
      <div
        className="relative w-full h-[352px] bg-cover bg-center flex items-center "
        style={{ backgroundImage: `url('/profilbg.jpeg')` }}
      >
        {/* Profil Resmi */}
        <div className="absolute -bottom-32 left-10 w-[235px] h-[275px] rounded-lg overflow-hidden border-8 border-white">
          <img
            src={user.image}
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profil Bilgileri */}
        <div className="ml-[320px] mt-48 text-white">
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <div className="flex items-center space-x-6 mt-2">
            <p className="flex items-center space-x-1 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17 10h4v11H3V10h4V5a5 5 0 0110 0v5z" />
              </svg>
              <span>{user.courses} Courses</span>
            </p>
            <p className="flex items-center space-x-1 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 14a4 4 0 10-8 0 4 4 0 008 0z" />
                <path d="M12 2a5 5 0 00-5 5v3h10V7a5 5 0 00-5-5z" />
              </svg>
              <span>{user.students} Students</span>
            </p>
          </div>
        </div>

        {/* Değerlendirme */}
        <div className="absolute bottom-8 right-10 flex items-center text-yellow-400 text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span>{user.rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Biyografi */}
      <div className="mt-10 px-80">
        <h2 className="text-2xl font-bold text-[#140342] mb-6">Biography</h2>
        <ul className="space-y-4 text-gray-700">
          {user.biography.map((item, index) => (
            <li key={index} className="flex items-start space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#6440FB]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Kurslar */}
      <div className="mt-10 px-80">
        <CoursesSection />
      </div>
    </div>
  );
};

export default TeamProfile;
