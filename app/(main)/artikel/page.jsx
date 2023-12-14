"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/news")
      .then((res) => res.json())
      .then((newsData) => {
        setData(newsData);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(data);

  return <div>page</div>;
};

export default page;
