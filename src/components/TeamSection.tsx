"use client";

import TeamMemberCard from "./TeamMemberCard";
import React from "react";
import { useRouter } from "next/navigation"; // Next.js router kullanımı için

type TeamMember = {
  id: string; // Profil ID'si
  name: string;
  role: string;
  rating: number;
  students: number;
  courses: number;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    id: "1", // Profil ID
    name: "Emin Kartcı",
    role: "Proje Yöneticisi",
    rating: 4.4,
    students: 50,
    courses: 15,
    image: "/seoresim.jpeg",
  },
  {
    id: "2", // Profil ID
    name: "Umut Arslan",
    role: "Yazılım Uzmanı",
    rating: 0.0,
    students: 0,
    courses: 0,
    image: "/placeholder-avatar.jpg",
  },
];

const TeamSection = () => {
  const router = useRouter(); // Router'ı başlatıyoruz

  const handleCardClick = (id: string) => {
    // İlgili profile yönlendirme
    router.push(`/ekibimiz/${id}`); // `/team/:id` şeklinde bir sayfaya yönlendirir
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
          {/* Kartlar */}
          {teamMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => handleCardClick(member.id)} // Kart tıklanınca yönlendirme yapılır
              className="cursor-pointer"
            >
              <TeamMemberCard
                image={member.image}
                name={member.name}
                role={member.role}
                rating={member.rating}
                students={member.students}
                courses={member.courses}
              />
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
