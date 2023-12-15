"use client";
import React, { useEffect, useState } from "react";
import DynamicPage from "@/components/ActivityPage";
import SpinnerLoad from "@/components/SpinnerLoad";

const page = ({ params: { id } }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((newsData) => {
        setData(newsData);
        setLoading(false);
      });
  }, [id]);

  return loading ? (
    <div className="mt-10 flex items-center justify-center h-screen">
      <SpinnerLoad width={12} height={12} />
    </div>
  ) : (
    <DynamicPage
      title={data?.data.title}
      content={data?.data.content}
      image={data?.data.url}
    />
  );
};

export default page;
