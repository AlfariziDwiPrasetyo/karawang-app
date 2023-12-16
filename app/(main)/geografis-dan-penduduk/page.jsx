"use client";
import SpinnerLoad from "@/components/SpinnerLoad";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/penduduk/get`)
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
      <div className="bg-yellow-600 text-white mt-2 lg:mt-4 p-8 text-3xl">
        Geografis dan Kependudukan
      </div>
      {loading ? (
        <div className="mt-10 flex items-center justify-center h-screen">
          <SpinnerLoad width={6} height={6} />
        </div>
      ) : (
        <div
          className="px-20 mt-10 overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: data.data?.content }}
        ></div>
      )}
    </>
  );
};

export default page;
