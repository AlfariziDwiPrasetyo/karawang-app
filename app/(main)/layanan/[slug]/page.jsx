"use client";
import React, { useEffect, useState } from "react";
import SpinnerLoad from "@/components/SpinnerLoad";
import LayananPage from "@/components/LayananPage";
import { useRouter } from "next/navigation";

const page = ({ params: { slug } }) => {
  const router = useRouter();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/layanan/${slug}`)
      .then((res) => {
        return res.json();
      })
      .then((newsData) => {
        if (newsData.success) {
          setData(newsData);
        } else {
          router.push("/not-found");
        }
        setLoading(false);
        console.log({ newsData });
      })
      .catch((error) => {
        console.log({ error });
      });
  }, [slug]);

  return loading ? (
    <div className="mt-10 flex items-center justify-center h-screen">
      <SpinnerLoad width={12} height={12} />
    </div>
  ) : (
    <LayananPage name={data?.data?.name} content={data?.data?.content} />
  );
};

export default page;
