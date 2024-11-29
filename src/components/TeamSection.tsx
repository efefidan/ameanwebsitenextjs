"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const TeamSection = () => {
  const [users, setUsers] = useState([]);
  const router = useRouter();

  // Kullanıcı verilerini Strapi'den çekme
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/users?populate=*" // Strapi API endpoint
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Kullanıcıları çekerken hata oluştu:", error);
      }
    };

    fetchUsers();
  }, []);

  // Yalnızca "Authenticated" kullanıcıları filtreleme
  const authenticatedUsers = users.filter(
    (user) => user.role?.name === "Authenticated"
  );

  const handleCardClick = (id: number) => {
    // Profil sayfasına yönlendirme
    router.push(`/ekibimiz/${id}`);
  };

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#140342]">Ekibimiz</h2>
            <p className="text-gray-600 text-sm">
              Tecrübeli ve profesyonel ekibimizi tanıyın.
            </p>
          </div>
          <a
            href="/ekibimiz"
            className="bg-[#F4F0FF] text-[#6440FB] px-6 py-3 rounded-lg text-base font-semibold hover:bg-[#6440FB] hover:text-white transition-all duration-300"
          >
            Tüm Ekip
          </a>
        </div>

        <div className="flex items-center justify-start space-x-4 overflow-x-auto w-full py-4">
          {/* Kullanıcı Kartları */}
          {authenticatedUsers.map((user) => (
            <div
              key={user.id}
              onClick={() => handleCardClick(user.id)} // Kart tıklanınca yönlendirme yapılır
              className="cursor-pointer"
            >
              <div className="flex flex-col">
                {/* Avatar */}
                <div className="w-[300px] h-[200px] overflow-hidden rounded-lg">
                  <img
                    src={`http://localhost:1337${user.avatar?.url}`} // Strapi'den tam URL oluşturulması
                    alt={user.username}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Kullanıcı Bilgileri */}
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-[#140342]">
                    {user.username}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {user.title || "Unvan Belirtilmemiş"}
                  </p>

                  {/* Sabit Detaylar */}
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
                      4.5
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
                      25 Students
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
                      5 Courses
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alt Metin */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Alanında uzman bir yazılımcı olarak ekibimizde katılmak ister misiniz?{" "}
          <a href="#" className="text-[#6440FB] font-medium hover:underline">
            Ekibe Katıl
          </a>
        </p>
      </div>
    </div>
  );
};

export default TeamSection;
