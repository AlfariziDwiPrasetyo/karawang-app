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
          {/* Start  */}
          <ul className="pl-5 pt-4 sarana-list">
            <li>a. Lapangan Sepak Bola</li>
            <ul className="pl-10 list-disc">
              <li>
                Lapangana Tanah Merah Moksen : Jl.Mangga Guro I, Rt 005/011
              </li>
            </ul>
            {/*  */}
            <li>b. Lapangan Bola Futsal</li>
            <ul className="pl-10 list-disc">
              <li>
                SAR center futsal : Jl. Dewi Sartika, Rt. 001/019 Santiong
                Selatan
              </li>
              <li>
                RD Futsal Seroja : Jl. KH Dewantara No.83 Rt. 003/013 Sadalamun
                III
              </li>
            </ul>
            {/*  */}
            <li>c. Lapangan Bola Volley</li>
            <ul className="pl-10 list-disc">
              <li>GOR Panatayuda : Jl. Panatayuda I Rt. 002/11</li>
            </ul>
            {/*  */}
            <li>d. Lapangan Bola Basket</li>
            <ul className="pl-10 list-disc">
              <li>GOR Panatayuda : Jl. Panatayuda I Rt. 002/11</li>
              <li>
                Lapang Bermain Segitiga : Jl. RK Sastra Kusumah, Rt 003 Rw 014
                Sadalamun III
              </li>
            </ul>
            {/*  */}
            <li>d. Lapangan Bulu Tangkis</li>
            <ul className="pl-10 list-disc">
              <li>
                Lap. Bulu Tangkis Karang Anyar : JI. R. A. Tohir Mangku Joyo
                No.7, RT.003 RW.027, Karang Anyar
              </li>
              <li>
                Lap. Bulu Tangkis Gg. Bojong : JI. Nagasari No.59, RT.002
                RW.001, Krajan Barat
              </li>
              <li>
                Lap. Bulu Tangkis Perum Bhakti Praja : Perum Bhakti Praja Rt.
                001 Rw. 037
              </li>
              <li>
                Lap. Bulu Tangkis Cihuni, Sadalamun I : Cihuni Sadamalun I
                Rt.002 Rw. 009
              </li>
              <li>
                Lap. Bulu Tangkis GOR Panatayuda: Panatayuda I, Rt. 002 Rw. 011
                Guro I
              </li>
            </ul>
            {/*  */}
            <li>f. Gedung Olahraga</li>
            <ul className="pl-10 list-disc">
              <li>Jam Gadang GOR Panatayuda : Jl. Panatayuda I Rt. 002/11</li>
            </ul>
            {/*  */}
            <li>f. Kolam Renang</li>
            <ul className="pl-10 list-disc">
              <li>PD. Prakasa : Jl. KH Dewantara No 79 Rt 003 Rw 13</li>
            </ul>
            {/*  */}
          </ul>
          {/* End */}
        </div>
      </div>
    </>
  );
};

export default page;