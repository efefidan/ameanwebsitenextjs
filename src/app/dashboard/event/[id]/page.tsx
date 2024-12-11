"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from 'next/link';

const EventDetails = () => {
  const { id } = useParams(); // URL'den id'yi alıyoruz
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true); // Yükleme durumunu izlemek için
  const [enrollingEventId, setEnrollingEventId] = useState<number | null>(null);
  const isEnrollmentClosed = (lastEnrollTime: string) => {
    return new Date(lastEnrollTime) < new Date();
  };

  useEffect(() => {
    if (id) {
      const fetchEvent = async () => {
        try {
          const response = await axios.get(
            `http://localhost:1337/api/events?filters[id][$eq]=${id}&populate=*`
          );

          // Gelen verilerin kontrolü ve setEvent ile güncelleme
          const fetchedEvent = response.data.data?.[0];
          setEvent(fetchedEvent || null);
        } catch (error) {
          console.error("Etkinlik detayları alınırken hata oluştu:", error);
        } finally {
          setLoading(false); // Yükleme tamamlandı
        }
      };

      fetchEvent();
    }
  }, [id]);

  if (loading) {
    return <div className="p-8">Yükleniyor...</div>;
  }

  if (!event) {
    return <div className="p-8">Etkinlik bulunamadı.</div>;
  }

  const {
    title,
    location,
    description,
    date,
    deadline,
    quota,
    registered,
    image,
  } = event;

  return (
    <div className="max-w-4xl mx-auto p-8">
        <Link 
        href="/dashboard/event" 
        className="text-primary hover:text-blue-800 mb-6 inline-block"
      >
        ← Etkinliklere Dön
      </Link>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-96">
          {event.image && event.image[0]?.url ? (
            <img
              src={`http://localhost:1337${event.image[0].url}`}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Resim Yok</span>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">{title}</h1>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                kategori(yapılcak)
              </span>
            </div>
            <div className="text-right">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-lg font-semibold">Kontenjan Durumu</p>
                <p className="text-2xl font-bold text-primary">
                  {registered}/{quota}
                </p>
                <p className="text-sm text-gray-600">
                  {quota - registered} kişilik yer kaldı
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-gray-600">Etkinlik Tarihi</p>
                <p className="font-semibold">
                  {new Date(date).toLocaleDateString("tr-TR")}
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-gray-600">Son Kayıt Tarihi</p>
                <p className="font-semibold">
                  {new Date(deadline).toLocaleDateString("tr-TR")}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Etkinlik Detayları</h2>
              <p className="text-gray-600">{description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Buluşma Noktası</h2>
              <p className="text-gray-600">{location}</p>
            </div>
          </div>
          <div className="mt-8">
            <button 
              disabled={
                registered === quota ||
                enrollingEventId === event.id ||
                isEnrollmentClosed(deadline)
              }
              className={`w-full py-3 rounded-lg text-white text-lg font-semibold ${
                registered === quota 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : isEnrollmentClosed(deadline)
                  ? 'bg-gray-400 cursor-not-allowed'
                  : enrollingEventId === event.id
                  ? 'bg-primary cursor-wait'
                  : 'bg-primary hover:bg-primary'
              }`}
            >
              {registered === quota 
                ? 'Kontenjan Doldu' 
                : isEnrollmentClosed(deadline)
                ? 'Kayıt Süresi Doldu'
                : enrollingEventId === event.id
                ? 'Kaydediliyor...'
                : 'Kayıt Ol'}
            </button>

            {/* Son kayıt tarihi bilgisi */}
            <p className="text-sm text-gray-500 text-center mt-2">
              Son Kayıt Tarihi: {new Date(deadline).toLocaleDateString('tr-TR')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
