"use client";
import React from "react";
import { Spinner } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "./Card";

let page = 2;
const SpinnerPagination = () => {
  const [data, setData] = useState([]);
  const [ref, inView] = useInView();
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (inView) {
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news?page=${page}`)
        .then((res) => {
          return res.json();
        })
        .then((newsData) => {
          console.log(newsData);
          if (newsData.data.length > 0) {
            setData([...data, newsData]);
            page++;
          } else {
            setIsEnd(true);
          }
        })
        .catch((error) => {
          console.log(error);
          setIsEnd(true);
        });
    }
  }, [inView]);

  console.log(data);

  return (
    <>
      {data && Object.keys(data).length > 0 && (
        <>
          {data &&
            Object.keys(data).length > 0 &&
            Object.keys(data).map(
              (key) =>
                data[key].data &&
                data[key].data.length > 0 &&
                data[key].data.map((item, index) => (
                  <Card
                    key={index}
                    image={item.url}
                    title={item.title}
                    content={item.content}
                    id={item.id}
                  />
                ))
            )}
        </>
      )}
      <section className="flex justify-center items-center w-full">
        {!isEnd && (
          <div ref={ref}>
            <Spinner className={`h-${12} w-${12}`} />
          </div>
        )}
      </section>
    </>
  );
};

export default SpinnerPagination;
