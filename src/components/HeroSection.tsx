import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className="bg-[#1A0B2E] min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sol Taraf - Metin İçeriği */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              Sektörünüzde <span className="text-[#00F5A0]">Dijital Stratejilerle</span> Satışlarınızı Yükseltin
            </h1>
            
            <p className="text-gray-300 text-lg">
              Dijital Dönüşüm İçin Kapsamlı Danışmanlık: Web Sitesi, SEO, 
              Sosyal Medya, Facebook Ve Google Reklamları, Sunucu Bakım Ve 
              Güvenlik. Çalışanlarınıza Sağladığınız Eğitimlerle Dışa Bağımlılığı 
              Azaltın.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/iletisim" className="px-8 py-3 bg-[#6C3AE1] text-white rounded-lg hover:bg-[#5B2ECD] transition">
                İletişime Geç
              </Link>
              <Link href="/hizmetler" className="px-8 py-3 border border-[#00F5A0] text-[#00F5A0] rounded-lg hover:bg-[#00F5A0] hover:text-black transition">
                Hizmetler
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Image src="/student-icon.svg" alt="Öğrenci" width={24} height={24} />
                <span className="text-white">2 Binden Fazla Öğrenci</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/corporate-icon.svg" alt="Kurumsal" width={24} height={24} />
                <span className="text-white">Kurumsal Eğitimler</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/solution-icon.svg" alt="Çözümler" width={24} height={24} />
                <span className="text-white">Size Özel Çözümler</span>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Görsel */}
          <div className="relative">
            <Image 
              src="/herophoto.png" 
              alt="Hero Görsel" 
              width={600} 
              height={400} 
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection 