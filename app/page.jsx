import React from "react";
import Feed from "@/components/Feed";
import { CarouselComp } from "../components/Carousel";
const page = () => {
  return (
    <div className="pt-16">
      <CarouselComp />
      <h1 className="font-bold text-center space-x-2 text-3xl mt-20">
        Kabupaten Karawang
      </h1>
      <Feed />
    </div>
  );
};

export default page;
