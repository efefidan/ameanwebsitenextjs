"use client";

import React from "react";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();

  // Pathname'i breadcrumb formatına dönüştür
  const breadcrumbItems = pathname
    .split("/")
    .filter((item) => item)
    .map((item, index, arr) => {
      const isLast = index === arr.length - 1; // Son eleman mı?
      return (
        <span
          key={index}
          className={`${
            isLast ? "text-[#140342] font-semibold" : "text-gray-500"
          }`}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </span>
      );
    });

  return (
    <div className="w-full bg-[#F5F7FE] py-4">
      <div className="container mx-auto px-4">
        <div className="text-sm text-gray-500 flex items-center space-x-2">
          <span>Home</span>
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-gray-400">•</span>
              {item}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
