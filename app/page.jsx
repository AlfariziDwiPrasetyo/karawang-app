import React from "react";
import Feed from "@/components/Feed";
import Carousel from "@/components/Carousel";
const page = () => {
  return (
    <div className="font-bold">
      <Carousel />
      <Feed />
    </div>
  );
};

export default page;
