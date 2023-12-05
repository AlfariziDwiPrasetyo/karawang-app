import React from "react";
import Feed from "@/components/Feed";
import { CarouselComp } from "../components/Carousel";
const page = () => {
  return (
    <div className="font-bold">
      <CarouselComp />
      <Feed />
    </div>
  );
};

export default page;
