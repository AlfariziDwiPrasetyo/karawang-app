"use client";
import React from "react";
import { useEffect, useState } from "react";
import SpinnerLoad from "./SpinnerLoad";
import Card from "./Card";
import SpinnerPagination from "./SpinnerPagination";

const Feed = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news?page=1`)
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
      <div className="flex items-center justify-center">
        {loading ? (
          <div className="mt-10 h-screen">
            <SpinnerLoad width={6} height={6} />
          </div>
        ) : (
          <>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
              {data.data.map((item, key) => (
                <Card
                  key={key}
                  image={item.url}
                  title={item.title}
                  content={item.content}
                  id={item.id}
                />
              ))}
              <SpinnerPagination />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Feed;
