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
      <div key={key} className="mt-5">
        <Link
          href={
            item.type === "layanan"
              ? `/layanan/${item.url}`
              : `/artikel/${item.id}`
          }
        >
          <h2 className="font-semibold text-red-700">{item.title}</h2>
        </Link>
        {removedTagContent(item.content).length > 100 ? (
          <p>{removedTagContent(item.content).slice(0, 100 - 6) + " ..."}</p>
        ) : (
          <p>{removedTagContent(item.content)}</p>
        )}
        <p className="text-sm">{`https://karawangnagasari.com${
          item.type === "layanan"
            ? `/layanan/${item.url}`
            : `/artikel/${item.id}`
        }`}</p>
      </div>
    ))
  ) : (
    <div className="text-center text-red-700 mt-20 flex items-center justify-center text-3xl">
      <h1>Not Found</h1>
    </div>
  );
};

export default SearchContent;
