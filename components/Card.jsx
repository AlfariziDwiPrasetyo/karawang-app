import React from "react";

const Card = ({ image, title, content, id }) => {
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(content, "text/html");
  const contentParsered = htmlDoc.getElementsByTagName("p");
  const splitContent = contentParsered[0].innerText.split(".");
  const trimmedContent = splitContent.slice(0, 2).join(".") + " ...";
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <div className="aspect-w-16 aspect-h-9 h-52">
        <img className="object-cover w-full h-full" src={image} alt={title} />
      </div>
      <div className="px-6 py-4">
        <a href={`/artikel/${id}`} className="font-bold text-xl mb-2">
          {title}
        </a>
        <div>{trimmedContent}</div>
      </div>
    </div>
  );
};

export default Card;
