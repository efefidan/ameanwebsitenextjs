"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Next.js router kullanımı için
import axios from "axios";

// Kullanıcı tipi
type TeamMember = {
  id: number; // Profil ID'si
  username: string;
  title: string;
  role: string;
  avatar: string;
  rating: number;
  students: number;
  courses: number;
};

const TeamSection2 = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const router = useRouter(); // Router'ı başlatıyoruz

  // Strapi'den kullanıcı verilerini çek
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/users?populate=*"); // Strapi'den kullanıcı verilerini çek
        const fetchedMembers = response.data.map((user: any) => ({
          id: user.id,
          username: user.username,
          title: user.title || "sdfsdf", // Varsayılan bir başlık ekle
          role: user.role.name,
          avatar: user.avatar?.url ? `http://localhost:1337${user.avatar.url}` : "/placeholder-avatar.jpg", // Avatar URL'sini ayarla
          rating: 4.5, // Sabit rating
          students: 25, // Sabit öğrenci sayısı
          courses: 5, // Sabit kurs sayısı
        }));
        setTeamMembers(fetchedMembers);
      } catch (error) {
        console.error("Kullanıcı verileri alınırken bir hata oluştu:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  const handleCardClick = (id: number) => {
    // İlgili profile yönlendirme
    router.push(`/ekibimiz/${id}`); // `/ekibimiz/:id` şeklinde bir sayfaya yönlendirir
  };

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start space-x-4 overflow-x-auto w-full py-4">
          {/* Kartlar */}
          {teamMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => handleCardClick(member.id)} // Kart tıklanınca yönlendirme yapılır
              className="cursor-pointer"
            >
              <div className="flex flex-col">
                {/* Profil Resmi */}
                <div className="w-[300px] h-[200px] overflow-hidden rounded-lg">
                  <img
                    src={member.avatar}
                    alt={member.username}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* İçerik */}
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-[#140342]">
                    {member.username}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{member.title}</p>
                  {/* Detaylar */}
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
                    {/* Rating */}
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-yellow-400 mr-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      {member.rating.toFixed(1)}
                    </div>
                    {/* Öğrenciler */}
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-[#140342] mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 16V14a4 4 0 00-8 0v2m8 0h2a2 2 0 012 2v4H4v-4a2 2 0 012-2h2m8 0V14m-4-6a4 4 0 110-8 4 4 0 010 8z"
                        />
                      </svg>
                      {member.students} Students
                    </div>
                    {/* Kurslar */}
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-[#140342] mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6M9 12H6a2 2 0 01-2-2m5 0V9a2 2 0 112 2m-7 0a2 2 0 014 0m2 0v3m-3-3a2 2 0 114 0"
                        />
                      </svg>
                      {member.courses} Courses
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection2;
