"use client";
import React from "react";
import { useState, useEffect } from "react";
import SpinnerLoad from "./SpinnerLoad";

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchImageData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/banner`
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    fetchImageData();
  }, []);

  console.log({ data });

  return loading ? (
    <div className="mt-10 flex items-center justify-center h-screen">
      <SpinnerLoad width={12} height={12} />
    </div>
  ) : (
    <div className="mt-10">
      <h1 className="text-center font-bold text-red-800 text-3xl">Galeri</h1>
      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.data.map((item, index) => (
          <div
            key={index}
            className="relative w-full rounded-md overflow-hidden"
          >
            <img src={item.url} alt={`Image ${index + 1}`} layout="fill" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
