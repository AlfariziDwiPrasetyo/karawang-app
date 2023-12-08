import React from "react";
import getData from "./action";
import Image from "next/image";

const Gallery = async () => {
  const data = await getData();
  return (
    <div className="mt-10">
      <h1 className="text-center font-bold text-red-800 text-3xl">Galeri</h1>
      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative w-full rounded-md overflow-hidden"
          >
            <img
              src={`https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80}`}
              alt={`Image ${index + 1}`}
              layout="fill"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
