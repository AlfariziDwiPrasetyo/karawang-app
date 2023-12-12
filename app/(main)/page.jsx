import React from "react";
import getData from "@/components/NewsData";
import CardFeed from "@/components/CardFeed";
import { CarouselComp } from "@/components/Carousel";
import Feed from "@/components/Feed";
const page = async () => {
  const data = await getData();
  return (
    <div>
      <CarouselComp />
      <h1 className="font-bold text-center space-x-2 text-3xl mt-20">
        Kecamatan Nagasari
      </h1>
      <Feed />
    </div>
  );
};

export default page;
