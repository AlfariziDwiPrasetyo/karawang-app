"use client";
import React, { useEffect, useState } from "react";
import SpinnerLoad from "@/components/SpinnerLoad";
import LayananPage from "@/components/LayananPage";

const page = ({ params: { slug } }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/layanan/${slug}`)
      .then((res) => {
        return res.json();
      })
      .then((newsData) => {
        setData(newsData);
        setLoading(false);
        console.log({ newsData });
      });
  }, [slug]);

  return loading ? (
    <div className="mt-10 flex items-center justify-center h-screen">
      <SpinnerLoad width={12} height={12} />
    </div>
  ) : (
    <LayananPage name={data?.data.name} content={data?.data.content} />
  );
};

export default page;
