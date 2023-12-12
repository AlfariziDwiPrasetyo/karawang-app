import React from "react";

const DynamicPage = ({ title, content, image }) => {
  return (
    <>
      <div className="w-full mt-4 bg-yellow-600 text-white p-8 text-3xl">
        Kegiatan Keluarahan Nagasari
      </div>
      <div className="mt-10 grid lg:grid-cols-2 px-5">
        <div className="w-full">
          <img src={image} className="w-full object-contain" alt="" />
        </div>
        <div className=" lg:ml-5 p-3 lg:p-1">
          <h1 className="text-center lg:px-5 lg:text-left font-bold text-3xl lg:text-4xl">
            {title}
          </h1>
          <div
            className="mt-5 text-justify"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default DynamicPage;