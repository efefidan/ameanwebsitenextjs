"use client";
import React, { useState } from "react";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  birthDate: string;
  university: string;
  department: string;
  year: string;
  linkedin: string;
  description: string;
  bio: string;
}

const initialData: UserData = {
  firstName: "Efe",
  lastName: "Fidan",
  email: "efefidan3@gmail.com",
  avatar: "https://via.placeholder.com/150",
  birthDate: "2005-09-22",
  university: "Akdeniz Üniversitesi",
  department: "Elektrik Elektronik",
  year: "1",
  linkedin: "https://linkedin.com/in/efefidan",
  description: "Kısa bir açıklama yazın",
  bio: "Hakkında daha detaylı bilgi yazabilirsiniz.",
};

const ProfilePage = () => {
  const [userData, setUserData] = useState<UserData>(initialData);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prev) => ({ ...prev, avatar: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="bg-black-50 py-4">
      <div className="container px-4 mx-auto">
        <div className="p-6 h-full border border-black-100 overflow-hidden bg-white rounded-md shadow-dashboard">
          <div className="pb-6 border-b border-black-100">
            <div className="flex flex-wrap items-center justify-between -m-2">
              <div className="w-full md:w-auto p-2">
                <h2 className="text-black-900 text-lg font-semibold">
                  Profil Bilgileri
                </h2>
                <p className="text-xs text-gray-500 font-medium">
                  Hesap detaylarınız
                </p>
              </div>
              <div className="w-full md:w-auto p-2">
                {isEditing ? (
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 text-sm text-gray-500 hover:text-black-600 border border-black-200 hover:border-black-300 rounded-md shadow-button"
                    >
                      İptal
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 text-sm text-white bg-primary hover:bg-primary-600 rounded-md shadow-button"
                    >
                      Kaydet
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 text-sm text-white bg-primary hover:bg-primary-600 rounded-md shadow-button"
                  >
                    Güncelle
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* İsim Bölümü */}
          <div className="py-6 border-b border-black-100">
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 p-3">
                <p className="text-sm text-black-800 font-semibold">Ad Soyad</p>
              </div>
              <div className="w-full md:flex-1 p-3">
                {isEditing ? (
                  <input
                    type="text"
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-base border border-black-200 rounded-lg shadow-input"
                  />
                ) : (
                  <p className="text-base text-black-900">
                    {userData.firstName} {userData.lastName}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Email Bölümü */}
          <div className="py-6 border-b border-black-100">
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 p-3">
                <p className="text-sm text-black-800 font-semibold">Email</p>
              </div>
              <div className="w-full md:flex-1 p-3">
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-base border border-black-200 rounded-lg shadow-input"
                  />
                ) : (
                  <p className="text-base text-black-900">{userData.email}</p>
                )}
              </div>
            </div>
          </div>

          {/* Avatar Bölümü */}
          <div className="py-6 border-b border-black-100">
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 p-3">
                <p className="text-sm text-black-800 font-semibold">
                  Profil Fotoğrafı
                </p>
              </div>
              <div className="w-full md:flex-1 p-3">
                <img
                  src={userData.avatar}
                  alt="Avatar"
                  className="w-20 h-20 rounded-full object-cover"
                />
                {isEditing && (
                  <div className="relative flex flex-col items-center justify-center p-6 h-44 text-center text-primary-500 focus-within:border-primary-500 border border-dashed border-black-200 rounded-lg flex-1">
                    <svg
                      className="mb-1.5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.71 7.71L11 5.41V15C11 15.2652 11.1054 15.5196 11.2929 15.7071C11.4804 15.8946 11.7348 16 12 16C12.2652 16 12.5196 15.8946 12.7071 15.7071C12.8946 15.5196 13 15.2652 13 15V5.41L15.29 7.71C15.383 7.80373 15.4936 7.87813 15.6154 7.92889C15.7373 7.97966 15.868 8.0058 16 8.0058C16.132 8.0058 16.2627 7.97966 16.3846 7.92889C16.5064 7.87813 16.617 7.80373 16.71 7.71C16.8037 7.61704 16.8781 7.50644 16.9289 7.38458C16.9797 7.26272 17.0058 7.13202 17.0058 7C17.0058 6.86799 16.9797 6.73729 16.9289 6.61543C16.8781 6.49357 16.8037 6.38297 16.71 6.29L12.71 2.29C12.6149 2.19896 12.5028 2.1276 12.38 2.08C12.1365 1.97999 11.8635 1.97999 11.62 2.08C11.4972 2.1276 11.3851 2.19896 11.29 2.29L7.29 6.29C7.19676 6.38324 7.1228 6.49393 7.07234 6.61575C7.02188 6.73758 6.99591 6.86814 6.99591 7C6.99591 7.13186 7.02188 7.26243 7.07234 7.38425C7.1228 7.50607 7.19676 7.61677 7.29 7.71C7.38324 7.80324 7.49393 7.8772 7.61575 7.92766C7.73757 7.97812 7.86814 8.00409 8 8.00409C8.13186 8.00409 8.26243 7.97812 8.38425 7.92766C8.50607 7.8772 8.61676 7.80324 8.71 7.71ZM21 12C20.7348 12 20.4804 12.1054 20.2929 12.2929C20.1054 12.4804 20 12.7348 20 13V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V13C4 12.7348 3.89464 12.4804 3.70711 12.2929C3.51957 12.1054 3.26522 12 3 12C2.73478 12 2.48043 12.1054 2.29289 12.2929C2.10536 12.4804 2 12.7348 2 13V19C2 19.7957 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7957 22 19V13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12Z"
                        fill="currentColor"
                      />
                    </svg>
                    <p className="mb-1 text-sm text-black-800 font-medium">
                      <span className="text-primary-500">
                        Dosya yüklemek için tıklayın
                      </span>{" "}
                      veya sürükleyip bırakın
                    </p>
                    <p className="text-xs text-gray-500 font-medium">
                      PNG, JPG, GIF veya en fazla 10MB
                    </p>
                    <input
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Doğum Günü Bölümü */}
          <div className="py-6 border-b border-black-100">
            <div className="w-full ">
              <div className="flex flex-wrap -m-3">
                <div className="w-full md:w-1/3 p-3">
                  <p className="text-sm text-black-800 font-semibold">
                    Doğum Tarihi
                  </p>
                </div>
                <div className="w-full md:flex-1 p-3">
                  {isEditing ? (
                    <input
                      type="date"
                      className="w-full px-4 py-2.5 text-base text-black-900 font-normal outline-none focus:border-primary-500 border border-black-200 rounded-lg shadow-input"
                      value={userData.birthDate}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p className="text-base text-black-900">
                      {new Date(userData.birthDate).toLocaleDateString("tr-TR")}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Üniversite Bilgileri */}
          <div className="py-6 border-b border-black-100">
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 p-3">
                <p className="text-sm text-black-800 font-semibold">
                  Üniversite Bilgileri
                </p>
              </div>
              <div className="w-full md:flex-1 p-3">
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      name="university"
                      value={userData.university}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-base border border-black-200 rounded-lg shadow-input"
                      placeholder="Üniversite"
                    />
                    <input
                      type="text"
                      name="department"
                      value={userData.department}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-base border border-black-200 rounded-lg shadow-input mt-2"
                      placeholder="Bölüm"
                    />
                    <select
                      name="year"
                      value={userData.year}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-base border border-black-200 rounded-lg shadow-input mt-2"
                    >
                      <option value="1">1. Sınıf</option>
                      <option value="2">2. Sınıf</option>
                      <option value="3">3. Sınıf</option>
                      <option value="4">4. Sınıf</option>
                      <option value="mezun">Mezun</option>
                    </select>
                  </>
                ) : (
                  <p className="text-base text-black-900">
                    {userData.university}, {userData.department},{" "}
                    {userData.year}. Sınıf
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="py-6 border-b border-black-100">
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 p-3">
                <p className="text-sm text-black-800 font-semibold">LinkedIn</p>
              </div>
              <div className="w-full md:flex-1 p-3">
                {isEditing ? (
                  <input
                    type="text"
                    name="linkedin"
                    value={userData.linkedin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-base border border-black-200 rounded-lg shadow-input"
                  />
                ) : (
                  <a
                    href={userData.linkedin}
                    className="text-blue-600 hover:underline"
                  >
                    {userData.linkedin}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Hakkında */}
          <div className="py-6 border-b border-black-100">
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 p-3">
                <p className="text-sm text-black-800 font-semibold">Hakkında</p>
              </div>
              <div className="w-full md:flex-1 p-3">
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={userData.bio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-base border border-black-200 rounded-lg shadow-input"
                  />
                ) : (
                  <p className="text-base text-black-900">{userData.bio}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
