"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPhone, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);

  return (
    <>
      <nav
        className="flex items-center justify-between bg-[#140342] py-4 px-20 border-b"
        style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.15)" }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/ameanlogo.png" alt="AMEAN Logo" width={150} height={150} />
        </div>

        {/* Menü Öğeleri */}
        <ul className="flex space-x-2 items-center text-white text-sm">
          <li>
            <Link
              href="/"
              className="relative flex items-center justify-center w-28 h-10 rounded-md transition-all duration-300 hover:bg-[#36275f] hover:shadow-md"
            >
              Anasayfa
            </Link>
          </li>

          {/* Hakkımızda Dropdown */}
          <li
            className="relative"
            onMouseOver={() => setShowAboutDropdown(true)}
            onMouseOut={() => setShowAboutDropdown(false)}
          >
            <Link
              href="/hakkimizda"
              className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-[#36275f] hover:shadow-md transition-colors duration-300"
            >
              <span>Hakkımızda</span>
              <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
            </Link>
            {showAboutDropdown && (
              <div className="absolute top-12 left-0 bg-white text-[#140342] rounded-lg shadow-md py-2 w-48">
                <div className="absolute -top-2 left-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white"></div>
                <Link
                  href="/ekibimiz"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Ekibimiz
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link
              href="/hizmetlerimiz"
              className="relative flex items-center justify-center w-28 h-10 rounded-md transition-all duration-300 hover:bg-[#36275f] hover:shadow-md"
            >
              Hizmetlerimiz
            </Link>
          </li>

          {/* İletişim Dropdown */}
          

          <li>
            <Link
              href="/blog"
              className="relative flex items-center justify-center w-28 h-10 rounded-md transition-all duration-300 hover:bg-[#36275f] hover:shadow-md"
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              href="/magaza"
              className="relative flex items-center justify-center w-28 h-10 rounded-md transition-all duration-300 hover:bg-[#36275f] hover:shadow-md"
            >
              Mağaza
            </Link>
          </li>
          <li
            className="relative"
            onMouseOver={() => setShowContactDropdown(true)}
            onMouseOut={() => setShowContactDropdown(false)}
          >
            <Link
              href="/iletisim"
              className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-[#36275f] hover:shadow-md transition-colors duration-300"
            >
              <span>İletişim</span>
              <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
            </Link>
            {showContactDropdown && (
              <div className="absolute top-12 left-0 bg-white text-[#140342] rounded-lg shadow-md py-2 w-56">
                <div className="absolute -top-2 left-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white"></div>
                <Link
                  href="/yardim-merkezi"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Yardım Merkezi
                </Link>
                <Link
                  href="/bizimle-calis"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Bizimle Çalışmak İster Misiniz?
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* Sağdaki Arama ve Buton */}
        <div className="flex items-center space-x-6">
          {/* Arama İkonu */}
          <div
            onClick={() => setShowSearch(true)}
            className="flex items-center justify-center text-white text-lg cursor-pointer hover:text-gray-300"
          >
            <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
          </div>
          {/* Şimdi Arayın Butonu */}
          <button className="flex items-center bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Şimdi Arayın</span>
          </button>
        </div>
      </nav>

      {/* Opak Arka Plan ve Arama Alanı */}
      {showSearch && (
        <>
          {/* Opak Arka Plan */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setShowSearch(false)} // Arka plana tıklandığında arama alanı kapanır
          ></div>

          {/* Arama Alanı */}
          <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4 flex items-center space-x-4 animate-slide-down">
            <FontAwesomeIcon icon={faSearch} className="text-[#140342] w-5 h-5" />
            <input
              type="text"
              placeholder="Aradığınız bir konuyu araştırabilirsiniz..."
              className="flex-1 border-b border-gray-300 outline-none text-[#140342] text-lg"
            />
            <button
              onClick={() => setShowSearch(false)}
              className="text-[#6b46c1] hover:bg-gray-200 p-2 rounded-full transition"
            >
              <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
