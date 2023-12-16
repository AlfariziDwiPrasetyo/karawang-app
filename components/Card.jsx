import React from "react";

const Card = ({ image, title, content, id }) => {
  const removedTagContent = (content) => {
    let tmp = document.createElement("div");
    tmp.innerHTML = content;
    return tmp.textContent || tmp.innerText || "";
  };

  return (
    // <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
    //   <div className="aspect-w-16 aspect-h-9 h-52">
    //     <img className="object-cover w-full h-full" src={image} alt={title} />
    //   </div>
    //   <div className="px-6 py-4">
    //     <a href={`/artikel/${id}`} className="font-bold text-xl mb-2">
    //       {title}
    //     </a>
    //     <div className="mt-2 text-justify">
    //       {removedTagContent(content).length > 100 ? (
    //         <p>{removedTagContent(content).slice(0, 100 - 6) + " ..."}</p>
    //       ) : (
    //         <p>{removedTagContent(content)}</p>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <section className="text-gray-600 body-font">
      <div className="container mx-auto max-w-5x1">
        <div className="flex flex-wrap -m-4">
          <div className="w-96 p-4">
            <div className="bg-white p-6 rounded-lg">
              <a href={`/artikel/${id}`}>
                <img
                  className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                  src={image}
                  alt="Image Size 720x400"
                />
              </a>
              <a href={`/artikel/${id}`}>
                <h2 className="text-lg text-red-500 font-medium title-font mb-2">
                  {title}
                </h2>
              </a>
              {removedTagContent(content).length > 100 ? (
                <p>{removedTagContent(content).slice(0, 100 - 6) + " ..."}</p>
              ) : (
                <p>{removedTagContent(content)}</p>
              )}
              <a href={`/artikel/${id}`}>
                <p className="text-red-300 text-sm">Read More</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
