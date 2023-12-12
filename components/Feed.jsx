import React from "react";
import getData from "./NewsData";

const Feed = async () => {
  const data = await getData();
  return (
    <div className="flex items-center justify-center">
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {data}
      </div>
    </div>
  );
};

export default Feed;
