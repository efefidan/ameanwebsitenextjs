"use client";

import React from "react";

type BlogCardProps = {
  category: string;
  title: string;
  date: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ category, title, date }) => {
  return (
    <div className="flex flex-col">
      <span className="text-sm font-bold text-[#6440FB] uppercase mb-2">
        {category}
      </span>
      <h3 className="text-lg font-bold text-[#140342] mb-2">{title}</h3>
      <span className="text-sm text-gray-500">{date}</span>
    </div>
  );
};

export default BlogCard;
