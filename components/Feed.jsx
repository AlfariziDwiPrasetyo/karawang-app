"use client";
import React from "react";
import { useEffect, useState } from "react";
import SpinnerLoad from "./SpinnerLoad";
import getData from "./NewsData";
import Card from "./Card";

const Feed = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/news`)
      .then((res) => {
        return res.json();
      })
      .then((newsData) => {
        setData(newsData);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex items-center justify-center">
      {loading ? (
        <div className="mt-10">
          <SpinnerLoad width={6} height={6} />
        </div>
      ) : (
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
        </div>
      )}
    </div>
  );
};

export default Feed;
