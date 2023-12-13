import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-yellow-600 text-white mt-2 lg:mt-4 p-8 text-3xl">
        Sarana Prasarana
      </div>
      <div className=" mt-5">
        <h1 className="text-center text-3xl font-bold">Sarana Prasarana</h1>
        <div className="mt-5">
          <h1 className="font-bold pl-5">Sarana Olahraga</h1>
          <table className="min-w-full mt-5 text-center border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">
                  Jenis Sarana
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Sarana Prasarana
                </th>
                <th className="border border-gray-300 px-4 py-2">Alamat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold">Lapangan Sepak Bola</td>
                <td className="border border-gray-300 px-4 py-2">
                  Lapang Tanah Merah Moksen
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Jl. Mangga, Guro I Rt 005, Rw 001
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default page;
