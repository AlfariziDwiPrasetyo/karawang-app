import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <div className="aspect-w-16 aspect-h-9">
        <img className="object-cover w-full h-full" src={image} alt={title} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
