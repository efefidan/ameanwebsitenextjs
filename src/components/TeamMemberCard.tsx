"use client";

import React from "react";

type TeamMemberProps = {
  image: string;
  name: string;
  role: string;
  rating: number;
  students: number;
  courses: number;
};

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  image,
  name,
  role,
  rating,
  students,
  courses,
}) => {
  return (
    <div className="flex flex-col">
      {/* Profil Resmi */}
      <div className="w-full h-[200px] overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* İçerik */}
      <div className="mt-4">
        <h3 className="text-lg font-bold text-[#140342]">{name}</h3>
        <p className="text-sm text-gray-500 mt-1">{role}</p>
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
            {rating.toFixed(1)}
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
            {students} Students
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
            {courses} Courses
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
