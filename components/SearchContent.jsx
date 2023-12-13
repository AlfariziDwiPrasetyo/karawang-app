import React from "react";
import Link from "next/link";

const SearchContent = ({ data }) => {
  const removedTagContent = (content) => {
    let tmp = document.createElement("div");
    tmp.innerHTML = content;
    return tmp.textContent || tmp.innerText || "";
  };

  return data.count > 0 ? (
    data.data.map((item, key) => (
      <div key={key} className="mt-12 whitespace-nowrap">
        <h2 className="font-semibold">{item.title}</h2>
        {removedTagContent(item.content).length > 100 ? (
          <p>{removedTagContent(item.content).slice(0, 100 - 6) + " ..."}</p>
        ) : (
          <p>{removedTagContent(item.content)}</p>
        )}
      </div>
    ))
  ) : (
    <div>"Not Found"</div>
  );
};

export default SearchContent;
