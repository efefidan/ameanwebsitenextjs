"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faPhone, faGraduationCap, faCode } from "@fortawesome/free-solid-svg-icons";
import { YazilimTeknolojileri } from "@/types/enums";
import { kayitOl } from "@/services/api";
import { useRouter } from "next/navigation";

export default function KayitFormu() {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    ad: "",
    email: "",
    telefon: "",
    sifre: "",
    sifreTekrar: "",
    okul: "",
    bolum: "",
    sinif: "",
    teknolojiler: [] as YazilimTeknolojileri[],
  });

  const siniflar = ["1", "2", "3", "4", "Mezun"];

  const handleTeknolojilerChange = (teknoloji: YazilimTeknolojileri) => {
    setFormData(prev => ({
      ...prev,
      teknolojiler: prev.teknolojiler.includes(teknoloji)
        ? prev.teknolojiler.filter(t => t !== teknoloji)
        : [...prev.teknolojiler, teknoloji]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (formData.sifre !== formData.sifreTekrar) {
      setError("Şifreler eşleşmiyor");
      setLoading(false);
      return;
    }

    try {
      const phoneNumber = parseInt(formData.telefon.replace(/\D/g, ''), 10);
      
      const response = await kayitOl({
        ad: formData.ad,
        email: formData.email,
        telefon: phoneNumber.toString(),
        sifre: formData.sifre,
        okul: formData.okul,
        bolum: formData.bolum,
        sinif: formData.sinif,
        teknolojiler: formData.teknolojiler,
      });

      router.push('/giris?kayit=basarili');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Kayıt sırasında bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl w-full mx-auto space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-[#140342]">
          Hesap Oluştur
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Zaten hesabınız var mı?{" "}
          <a href="/giris" className="font-medium text-[#6b46c1] hover:text-[#553597]">
            Giriş yapın
          </a>
        </p>
      </div>
      
      {error && (
        <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kişisel Bilgiler */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#140342]">Kişisel Bilgiler</h3>
            
            <div className="relative">
              <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#6b46c1] focus:border-[#6b46c1]"
                placeholder="Ad Soyad"
                value={formData.ad}
                onChange={(e) => setFormData({...formData, ad: e.target.value})}
              />
            </div>

            <div className="relative">
              <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#6b46c1] focus:border-[#6b46c1]"
                placeholder="E-posta"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="relative">
              <FontAwesomeIcon icon={faPhone} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="tel"
                required
                className="appearance-none rounded-md relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#6b46c1] focus:border-[#6b46c1]"
                placeholder="Telefon"
                value={formData.telefon}
                onChange={(e) => setFormData({...formData, telefon: e.target.value})}
              />
            </div>

            <div className="relative">
              <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#6b46c1] focus:border-[#6b46c1]"
                placeholder="Şifre"
                value={formData.sifre}
                onChange={(e) => setFormData({...formData, sifre: e.target.value})}
              />
            </div>

            <div className="relative">
              <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#6b46c1] focus:border-[#6b46c1]"
                placeholder="Şifre Tekrar"
                value={formData.sifreTekrar}
                onChange={(e) => setFormData({...formData, sifreTekrar: e.target.value})}
              />
            </div>
          </div>

          {/* Eğitim ve Teknoloji Bilgileri */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#140342]">Eğitim ve Teknoloji Bilgileri</h3>
            
            <div className="relative">
              <FontAwesomeIcon icon={faGraduationCap} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#6b46c1] focus:border-[#6b46c1]"
                placeholder="Okul"
                value={formData.okul}
                onChange={(e) => setFormData({...formData, okul: e.target.value})}
              />
            </div>

            <div className="relative">
              <FontAwesomeIcon icon={faGraduationCap} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#6b46c1] focus:border-[#6b46c1]"
                placeholder="Bölüm"
                value={formData.bolum}
                onChange={(e) => setFormData({...formData, bolum: e.target.value})}
              />
            </div>

            <div className="relative">
              <FontAwesomeIcon icon={faGraduationCap} className="absolute left-3 top-3 text-gray-400" />
              <select
                required
                className="appearance-none rounded-md relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#6b46c1] focus:border-[#6b46c1]"
                value={formData.sinif}
                onChange={(e) => setFormData({...formData, sinif: e.target.value})}
              >
                <option value="">Sınıf Seçiniz</option>
                {siniflar.map((sinif) => (
                  <option key={sinif} value={sinif}>{sinif}. Sınıf</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                <FontAwesomeIcon icon={faCode} className="mr-2" />
                Bildiğiniz Teknolojiler
              </label>
              <div className="flex flex-wrap gap-2 p-4 border border-gray-300 rounded-md">
                {Object.values(YazilimTeknolojileri).map((teknoloji) => (
                  <button
                    key={teknoloji}
                    type="button"
                    onClick={() => handleTeknolojilerChange(teknoloji)}
                    className={`
                      px-4 py-2 rounded-full text-sm font-medium 
                      transition-all duration-200 
                      ${formData.teknolojiler.includes(teknoloji)
                        ? 'bg-green-100 text-green-800 border-2 border-green-500 hover:bg-green-200'
                        : 'bg-red-50 text-red-800 border-2 border-red-300 hover:bg-red-100'
                      }
                    `}
                  >
                    {teknoloji}
                  </button>
                ))}
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Teknolojileri seçmek için üzerlerine tıklayın
              </p>
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white 
              ${loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-[#6b46c1] hover:bg-[#553597] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6b46c1]'
              }`}
          >
            {loading ? 'Kaydediliyor...' : 'Kayıt Ol'}
          </button>
        </div>
      </form>
    </div>
  );
} 