"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchContent from "@/components/SearchContent";
import axios from "axios";
import SpinnerLoad from "@/components/SpinnerLoad";

const page = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [result, setResult] = useState(1);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");

  useEffect(() => {
    const formData = new FormData();
    formData.append("search", searchQuery);
    const getSearchData = async () => {
      try {
        const response = await axios.post(
          `/api/search?page=${currentPage}`,
          formData
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("There was an error submitting the form:", error.message);
      }
    };
    getSearchData();
  }, [searchQuery, currentPage]);

  const handleNextPage = () => {
    setCurrentPage((current) => current + 1);
    setResult((current) => current + 5);
  };
  const handlePreviousPage = () => {
    setCurrentPage((current) => current - 1);
    setResult((current) => current - 5);
  };

  console.log(data);

  return loading ? (
    <div className="flex h-screen items-center justify-center ">
      <SpinnerLoad height={12} width={12} />
    </div>
  ) : (
    <div className="h-screen mt-6 px-9 py-5">
      {data.count > 0 ? (
        <h1 className="mt-5 flex text-2xl lg:text-4xl">
          <span> Results</span>{" "}
          <span className="ml-5">
            {result} of {data.count}
          </span>
          <span className="ml-5"> {data.timeExecute} Seconds</span>
        </h1>
      ) : (
        <h1 className="mt-5 flex text-3xl">
          {searchQuery} Not Found ! ({data.timeExecute}) Seconds
        </h1>
      )}
      <SearchContent data={data} />
      <div className="join mt-5">
        <div className="join grid grid-cols-2">
          {currentPage === 1 ? (
            <button
              disabled
              onClick={handlePreviousPage}
              className="join-item btn"
            >
              Previous page
            </button>
          ) : (
            <button onClick={handlePreviousPage} className="join-item btn">
              Previous page
            </button>
          )}
          {data.data.length < 5 ? (
            <button disabled className="join-item btn ">
              Next
            </button>
          ) : (
            <button onClick={handleNextPage} className="join-item btn ">
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
