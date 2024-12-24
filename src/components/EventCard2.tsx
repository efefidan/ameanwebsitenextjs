"use client";

import { FC, useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

const categories = [
  "Tümü",
  "City Tour",
  "Workshop",
  "Cultural",
  "Food",
  "Sport",
  "Meeting",
];

const EventsPage: FC = () => {
  const router = useRouter();
  const params = useParams();
  const [events, setEvents] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [sortBy, setSortBy] = useState("newest");
  const [loading, setLoading] = useState(true);
  const isEnrollmentClosed = (lastEnrollTime: string) => {
    return new Date(lastEnrollTime) < new Date();
  };
  const [error, setError] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

  useEffect(() => {
    if (params.id) {
      fetchEventDetails(params.id);
    } else {
      fetchEvents();
    }
  }, [params.id]);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:1337/api/events?populate=*"
      );
      setEvents(response.data.data);
      setSelectedEvent(null); // Liste görünümü için detay seçimi temizlenir
    } catch (err) {
      console.error("Error fetching events:", err);
      setError("Etkinlikler yüklenirken bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  const fetchEventDetails = async (id: string) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:1337/api/events/${id}?populate=*`
      );
      setSelectedEvent(response.data.data);
    } catch (err) {
      console.error("Error fetching event details:", err);
      setError("Etkinlik detayları yüklenirken bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  const getFilteredAndSortedEvents = () => {
    let filteredEvents = [...events];

    if (selectedCategory !== "Tümü") {
      filteredEvents = filteredEvents.filter(
        (event) => event.category === selectedCategory
      );
    }

    return filteredEvents.sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
    });
  };

  if (loading) return <div className="p-8">Yükleniyor...</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;

  if (selectedEvent) {
    // Etkinlik Detayları Görünümü
    const { title, location, description, date, image } = selectedEvent;
    return (
      <div className="container mx-auto p-8">
        <Link
          href="/dashboard/events"
          className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
        >
          ← Etkinliklere Dön
        </Link>
        <h1 className="text-3xl font-bold text-[#140342] mb-4">{title}</h1>
        <p className="text-gray-500 mb-2">{location}</p>
        <p className="text-gray-600 mb-4">
          {description || "Etkinlik açıklaması bulunmamaktadır."}
        </p>
        <p className="text-gray-600">
          Etkinlik Tarihi: {new Date(date).toLocaleDateString("tr-TR")}
        </p>
        {image && image[0]?.url && (
          <img
            src={`http://localhost:1337${image[0].url}`}
            alt={title}
            className="mt-6 w-full max-w-xl rounded"
          />
        )}
      </div>
    );
  }

  // Etkinlik Listesi Görünümü
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Etkinlikler</h1>

      {/* Filtreler */}
      <div className="flex flex-wrap gap-4 mb-6 items-center">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Kategori:</span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-600">Sırala:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="newest">En Yakın Tarih</option>
            <option value="oldest">En Uzak Tarih</option>
          </select>
        </div>
      </div>

      {/* Etkinlik Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-start">
        {getFilteredAndSortedEvents().map((event) => (
          <div
            key={event.id}
            className="border rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={() => router.push(`/dashboard/event/${event.id}`)}
          >
            <div className="relative h-48 overflow-hidden">
              {event.image && event.image[0]?.url ? (
                <img
                  src={`http://localhost:1337${event.image[0].url}`}
                  alt={event.title}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Resim Yok</span>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-3">{event.description}</p>

              <div className="text-sm text-gray-500 space-y-1">
                <p>
                  🗓 Etkinlik: {new Date(event.date).toLocaleDateString("tr-TR")}
                </p>
                <p>
                  ⏰ Son Kayıt:{" "}
                  {new Date(event.deadline).toLocaleDateString("tr-TR")}
                </p>
                <p>📍 Konum: {event.location}</p>

                {/* Kontenjan durumu */}
                <div className="mt-2">
                  <div className="flex justify-between items-center mb-1">
                    <span>Kontenjan Durumu</span>
                    <span className="text-sm font-medium">
                      {event.registered}/{event.quota}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{
                        width: `${(event.registered / event.quota) * 100}%`,
                        backgroundColor:
                          event.registered === event.quota
                            ? "#EF4444"
                            : "#2563EB",
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Butonlar */}
              <div className="mt-4 flex gap-2">
                <Link
                  href={`/dashboard/events/${event.id}`}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Detayları Gör
                </Link>
                <button
                  disabled={
                    event.registered === event.quota ||
                    isEnrollmentClosed(event.deadline)
                  }
                  className={`w-full py-3 rounded-lg text-white text-lg font-semibold ${
                    event.registered === event.quota
                      ? "bg-gray-400 cursor-not-allowed"
                      : isEnrollmentClosed(event.deadline)
                      ? "bg-primary cursor-wait"
                      : "bg-primary hover:bg-primary"
                  }`}
                >
                  {event.registered === event.quota
                    ? "Kontenjan Doldu"
                    : isEnrollmentClosed(event.deadline)
                    ? "Kayıt Süresi Doldu"
                    : "Kayıt Ol"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
