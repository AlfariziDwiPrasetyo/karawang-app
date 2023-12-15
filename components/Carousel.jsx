"use client";
import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import SpinnerLoad from "./SpinnerLoad";

export function CarouselComp() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/banner`)
        .then((res) => {
          return res.json();
        })
        .then((bannerData) => {
          setData(bannerData);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(data);
  return loading ? (
    <div className="mt-5 flex items-center justify-center">
      <SpinnerLoad width={12} height={12} />
    </div>
  ) : (
    <Carousel className="hidden z-0 lg:flex">
      {data.data.length > 1 ? (
        data.data.map((url) => (
          <div>
            <img
              src={`${url.url}`}
              alt="image 1"
              className="h-full w-full object-cover"
              width={500}
              height={500}
            />
          </div>
        ))
      ) : (
        <div>
          <img
            src={`/banner.jpg`}
            alt="image 1"
            className="h-full w-full object-cover"
            width={500}
            height={500}
          />
        </div>
      )}
    </Carousel>
  );
}
