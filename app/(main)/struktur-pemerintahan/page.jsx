import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-yellow-600 text-white mt-4 p-8 text-3xl">
        Struktur Pemerintahan
      </div>
      <div className="mt-12 text-center">
        <h1 className="font-bold text-2xl px-4">
          Struktur pemerintahan kelurahan Nagasari
        </h1>
        <h1 className="font-bold text-2xl px-4 p-1">
          Kecamatan Karawang Barat
        </h1>
        <h1 className="font-bold text-2xl px-4 p-1">Kabupaten Karawang</h1>
        <div className="flex items-center justify-center">
          <img src="/struktur-pemerintahan.png" className="w-6/12" alt="" />
        </div>
      </div>
    </>
  );
};

export default page;
