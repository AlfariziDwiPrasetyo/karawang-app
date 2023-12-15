import React from "react";
import getData from "./action";
import CardFeed from "./CardFeed";

const Feed = async () => {
  const data = await getData();
  return (
    <div className="flex items-center justify-center">
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item, id) => {
          return (
            <CardFeed key={item.id} content={item.body} title={item.title} />
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
