import React from "react";

import getData from "@/components/action";
import CardFeed from "@/components/CardFeed";
import { CarouselComp } from "@/components/Carousel";
import Feed from "@/components/Feed";
const page = async () => {
  const data = await getData();
  return (
    <div>
      <CarouselComp />
      <h1 className="font-bold text-center space-x-2 text-3xl mt-20">
        Kabupaten Karawang
      </h1>

import Feed from "@/components/Feed";
import { CarouselComp } from "@/components/Carousel";
const page = () => {
  return (
    <div className="font-bold">
      <CarouselComp />

      <Feed />
    </div>
  );
};

export default page;
