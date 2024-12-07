"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Project {
  id: number;
  title: string;
  slug: string;
  createdAt: string;
  image: any[];
  users_permissions_user: {
    username: string;
    title: string;
  };
  project_category: {
    name: string;
  };
}

const Page: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/projects?populate=*"
        );
        setProjects(response.data.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const getFormattedDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Popular Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Büyük Kartlar */}
        {projects.slice(0, 2).map((project) => (
          <div key={project.id} className="relative group">
            <img
              src={`http://localhost:1337${project.image[0]?.formats?.large?.url}`}
              alt={project.title}
              className="w-[600px] h-[350px] object-cover "
            />
            <div className="mt-4">
              <div className="text-sm text-gray-500 flex items-center space-x-2">
                <span className="text-red-400 font-bold uppercase">
                  {project.project_category?.name || "Uncategorized"}
                </span>
                <span>•</span>
                <span>BY {project.users_permissions_user.username}</span>
                <span>•</span>
                <span>{getFormattedDate(project.createdAt)}</span>
              </div>
              <h2 className="text-lg font-bold mt-2">{project.title}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  mt-8">
        {/* Küçük Kartlar */}
        {projects.slice(2, 6).map((project) => (
          <div key={project.id} className="group">
            <img
              src={`http://localhost:1337${project.image[0]?.formats?.medium?.url}`}
              alt={project.title}
              className="w-[300px] h-[200px] object-cover"
            />
            <div className="mt-4">
              <div className="text-sm text-gray-500 flex items-center space-x-2">
                <span className="text-red-400 font-bold uppercase">
                  {project.project_category?.name || "Uncategorized"}
                </span>
                <span>•</span>
                <span>BY {project.users_permissions_user.username}</span>
              </div>
              <h3 className="text-base font-semibold mt-2">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
