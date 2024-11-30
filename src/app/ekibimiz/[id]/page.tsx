"use client"
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CoursesSection from "@/components/CoursesSection";


const fixedData = {
  courses: 10,
  students: 50,
  rating: 4.5,
};
const TeamProfile = () => {
  const params = useParams(); // URL'den id alınır
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(
          `http://localhost:1337/api/users?filters[id][$eq]=${params.id}&populate=*`
        );
        const data = await res.json();
        if (data.length === 0) {
          console.error("Kullanıcı bulunamadı");
        } else {
          setUser(data[0]); // Kullanıcı verisini kaydet
        }
      } catch (error) {
        console.error("Kullanıcı verileri alınırken hata oluştu:", error);
      }
    };

    fetchUser();
  }, [params.id]);

  if (!user) {
    return <p>Kullanıcı yükleniyor...</p>;
  }



  return (
    <div className="container mx-auto py-8">
      <div
        className="relative w-full h-[352px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('/profilbg.jpeg')` }}
      >
        <div className="absolute -bottom-32 left-10 w-[235px] h-[275px] rounded-lg overflow-hidden border-8 border-white">
          <img
            src={`http://localhost:1337${user.avatar?.url || "/uploads/placeholder-avatar.jpg"}`}
            alt={user.username || "Kullanıcı"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-[320px] mt-48 text-white">
          <h1 className="text-3xl font-bold">{user.username}</h1>
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
              <span>{fixedData.courses} Courses</span>
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
              <span>{fixedData.students} Students</span>
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 right-10 flex items-center text-yellow-400 text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span>{fixedData.rating.toFixed(1)}</span>
        </div>
      </div>
      

      <div className="mt-10 px-80">
        <h2 className="text-2xl font-bold text-[#140342] mb-6">Biography</h2>
        <ul className="space-y-4 text-gray-700">
          {user.biography
            ?.split(",")
            .map((item: string, index: number) => (
              <li key={index} className="flex items-start space-x-2">
                
                <span>{item.trim()}</span>
              </li>
            ))}
        </ul>
      </div>

      <div className="mt-10 px-80">
        <CoursesSection />
      </div>
    </div>
     
  );
};

export default TeamProfile;
