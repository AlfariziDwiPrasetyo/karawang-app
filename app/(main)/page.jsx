import React from "react";
import getData from "@/components/action";
import CardFeed from "@/components/CardFeed";
import { CarouselComp } from "../components/Carousel";
import Feed from "@/components/Feed";
const page = async () => {
  const data = await getData();
  return (
    <div className="font-bold">
      <h1>Hello W asdf orld</h1>
      <Feed />
    </div>
  );
};

export default page;
