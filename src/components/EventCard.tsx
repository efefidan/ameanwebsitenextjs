"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

type EventCardProps = {
  date: string;
  month: string;
  title: string;
  location: string;
};

const EventCard: React.FC<EventCardProps> = ({ date, month, title, location }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-64">
      {/* Tarih ve Başlık */}
      <div className="flex items-center gap-4 mb-4">
        {/* Tarih Kutusu */}
        <div className="bg-[#140342] text-white rounded-lg p-2 w-16 text-center">
          <p className="text-xl font-bold">{date}</p>
          <p className="text-sm uppercase">{month}</p>
        </div>
        {/* Etkinlik Adı */}
        <div>
          <h3 className="text-lg font-bold text-[#140342]">{title}</h3>
        </div>
      </div>

      {/* Konum Bilgisi */}
      <div className="flex items-center text-sm text-gray-500 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-[#6440FB] mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2C8.686 2 6 4.686 6 8c0 3.957 5.486 11.375 5.771 11.761a.992.992 0 001.457 0C12.514 19.374 18 11.957 18 8c0-3.314-2.686-6-6-6z"
          />
          <circle cx="12" cy="8" r="2" />
        </svg>
        {location}
      </div>
    </div>
  );
};

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/events?populate=*");
        const fetchedEvents = response.data.data.map((event: any) => ({
          id: event.id,
          title: event.title,
          location: event.location,
          date: new Date(event.date),
        }));
        setEvents(fetchedEvents);
      } catch (error) {
        console.error("Etkinlik verileri alınırken hata oluştu:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className=" bg-gray-50">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              location={event.location}
              date={event.date.getDate().toString()}
              month={event.date.toLocaleString("en-US", { month: "short" }).toUpperCase()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
