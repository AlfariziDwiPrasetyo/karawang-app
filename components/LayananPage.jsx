import React from "react";

const LayananPage = ({ name, content }) => {
  return (
    <div className="h-screen">
      <div className="w-full mt-1 lg:mt-4 bg-yellow-600 text-white p-8 text-3xl">
        {name}
      </div>
      <div className="mt-12 p-5">
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
};

export default LayananPage;
