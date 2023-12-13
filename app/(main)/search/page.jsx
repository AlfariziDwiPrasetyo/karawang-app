"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchContent from "@/components/SearchContent";
import axios from "axios";
import SpinnerLoad from "@/components/SpinnerLoad";

const page = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");

  useEffect(() => {
    const formData = new FormData();
    formData.append("search", searchQuery);
    const getSearchData = async () => {
      try {
        const response = await axios.post("/api/search", formData);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("There was an error submitting the form:", error.message);
      }
    };
    getSearchData();
  }, [searchQuery]);
  console.log(data);

  return loading ? (
    <div className="flex h-screen items-center justify-center ">
      <SpinnerLoad height={12} width={12} />
    </div>
  ) : (
    <div className="h-screen mt-6 px-9 py-5">
      {data.count > 0 ? (
        <h1 className="mt-5 flex text-3xl">
          Result 1 of {data.count} {data.timeExecute}
        </h1>
      ) : (
        <h1 className="mt-5 flex text-3xl">
          Result 0 Not Found {data.timeExecute}
        </h1>
      )}
      <SearchContent data={data} />
    </div>
  );
};

export default page;
