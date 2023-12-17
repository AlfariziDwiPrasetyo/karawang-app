"use client";
import SpinnerLoad from "@/components/SpinnerLoad";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/struktur/get`)
      .then((res) => {
        return res.json();
      })
      .then((newsData) => {
        console.log(newsData);
        setData(newsData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {loading ? (
        <div className="mt-10 h-screen">
          <SpinnerLoad width={6} height={6} />
        </div>
      ) : (
        <>
          <div className="bg-yellow-600 text-white mt-2 lg:mt-4 p-8 text-3xl">
            Struktur Pemerintahan
          </div>
          <div className="mt-12 text-center">
            <h1 className="font-bold text-md lg:text-2xl px-4">
              Struktur pemerintahan kelurahan Nagasari
            </h1>
            <h1 className="font-bold text-md lg:text-2xl px-4 p-1">
              Kecamatan Karawang Barat
            </h1>
            <h1 className="font-bold text-md lg:text-2xl px-4 p-1">
              Kabupaten Karawang
            </h1>
            <div className="flex items-center mb-20 justify-center">
              <img src={data.data.url} className="w-full" alt="" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default page;
