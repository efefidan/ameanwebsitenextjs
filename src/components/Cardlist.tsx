"use client";

import React, { useEffect, useState } from "react";

type CardProps = {
  id: number;
  title: string;
  lessons: number;
  hours: number;
  levels: string;
  price: number;
  image: string;
  author: string;
  authorAvatar: string;
  category: string;
};

const Card: React.FC<CardProps> = ({
  title,
  lessons,
  hours,
  levels,
  price,
  image,
  author,
  authorAvatar,
}) => {
  return (
    <div className="flex flex-col sm:flex-row h-auto sm:h-[210px] border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white group p-2">
      {" "}
      {/* Sol Resim */}
      <div className="w-full sm:w-2/5 h-52 sm:h-full overflow-hidden relative rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125 group-hover:brightness-50"
        />
      </div>
      {/* Sağ İçerik */}
      <div className="w-full sm:w-3/5 p-4 flex flex-col justify-between">
        <div>
          {/* Değerlendirme */}
          <div className="flex items-center text-yellow-400 text-sm mb-2">
            <span className="font-medium text-[#140342] mr-1">4.5</span>
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={i < 4.5 ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
              ))}
            </div>
            <span className="ml-1 text-gray-500">(10)</span>
          </div>

          {/* Başlık */}
          <h3 className="text-sm font-semibold text-[#140342] mb-3 ">
            {title}
          </h3>

          {/* Detaylar */}
          <div className="flex items-center text-gray-600 text-xs">
            <div className="flex items-center mr-3">
              <span>{lessons} Lessons</span>
            </div>
            <div className="flex items-center mr-3">
              <span>{hours} Hours</span>
            </div>
            <div className="flex items-center">
              <span>{levels}</span>
            </div>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="flex items-center justify-between mt-4 ">
          {/* Yazar */}
          <div className="flex items-center">
            <img
              src={authorAvatar}
              alt={author}
              className="w-6 h-6 rounded-full"
            />
            <span className="ml-2 text-xs text-gray-600">{author}</span>
          </div>
          {/* Fiyat */}
          <div className="text-lg font-bold text-[#140342]">
            ${price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

const CardList = () => {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [filteredCategory, setFilteredCategory] = useState("Hepsi");
  const [categories, setCategories] = useState<string[]>([]);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Kurs verilerini çek
        const coursesResponse = await fetch(
          "http://localhost:1337/api/courses?populate=*"
        );
        const coursesData = await coursesResponse.json();

        // Kullanıcı verilerini çek
        const usersResponse = await fetch(
          "http://localhost:1337/api/users?populate=*"
        );
        const usersData = await usersResponse.json();
        setUsers(usersData);

        const formattedCards = coursesData.data.map((course: any) => {
          const userId = course.users_permissions_users[0]?.id;
          const user = usersData.find((u: any) => u.id === userId) || {};

          return {
            id: course.id,
            title: course.title,
            lessons: course.lessons,
            hours: course.hours,
            levels: course.levels,
            price: course.price,
            image: `http://localhost:1337${course.image[0]?.url}`,
            author: user.username || "Unknown",
            authorAvatar: `http://localhost:1337${user.avatar?.url || ""}`,
            category: course.categories[0]?.name || "Uncategorized",
          };
        });

        setCards(formattedCards);

        // Kategorileri belirle
        const uniqueCategories = [
          "Hepsi",
          ...new Set(
            coursesData.data.flatMap((course: any) =>
              course.categories.map((cat: any) => cat.name)
            )
          ),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Veriler alınırken bir hata oluştu:", error);
      }
    };

    fetchData();
  }, []);

  const filteredCards =
    filteredCategory === "Hepsi"
      ? cards
      : cards.filter((card) => card.category === filteredCategory);

  return (
    <div className="py-12">
      <div className="container mx-auto">
        {/* Başlık ve Kategoriler */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-4xl font-bold text-[#140342]">
              Eğitim ve Hizmetlerimizi Keşfet
            </h2>
            <p className="text-gray-600 mt-2">
              Başka firmalara bağımlı kalmamanız için sunduğumuz eğitimlerimize
              göz atın.
            </p>
          </div>
          <div className="bg-gray-100 rounded-full flex p-1 space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilteredCategory(category)}
                className={`py-2 px-4 rounded-full transition-colors duration-300 ${
                  filteredCategory === category
                    ? "bg-white text-[#6440FB] shadow"
                    : "text-gray-600 hover:bg-white hover:text-[#6440FB]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="w-full max-w-full   mx-auto shadow-md rounded-lg overflow-hidden border border-gray-200"
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
