import React from "react";

const page = () => {
  return (
    <div className="mt-1 md:mt-4 md:mb-28">
      <div className="w-full font-bold mt-1 lg:mt-4 bg-yellow-600 text-white p-8 text-3xl">
        UKM Perdagangan dan Jasa
      </div>
      <div className="md:px-20 px-10 text-justify">
        <h1 className="mt-5 text-3xl font-bold">
          Industri kecil perdaganan dan jasa
        </h1>
        <div className="mt-5 md:pr-20 md:mr-10">
          <p className="text-justify">
            Sektor industri kecil merupakan salah satu bidang yang tidak kalah
            pentingnya dalam kehidupan perekonomian, industri kecil merupakan
            kegiatan usaha yang menyerap tenaga kerja dan tentunya akan
            mengurangi pengangguran, dengan adanya insdutri kecil maka kegiatan
            perekonomian, khsususnya dilingkungan industri tersebut meningkat,
            dimana daya beli masyarakat untuk memenuhi kebutuhan hidup akan
            dapat dipenuhi sejalan dengan berkembangnya indsutri kecil, adapun
            industri kecil yang ada di Kelurahan Nagasari sbb :
          </p>

          {/* tabel */}
          <div className="overflow-x-auto mt-5">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">No</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Jenis Industri
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Jumlah tenaga kerja
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Lokasi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">1</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pabrik Tahu
                  </td>
                  <td className="border border-gray-300 px-4 py-2">12</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Kepuh Nagasari Rw 36
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">2</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pabrik Tahu
                  </td>
                  <td className="border border-gray-300 px-4 py-2">10</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Kepuh Nagasari Rw 36
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">3</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pabrik Tahu
                  </td>
                  <td className="border border-gray-300 px-4 py-2">6</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Jl. Nagasari Rw 002/002
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">4</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Roti Juwita
                  </td>
                  <td className="border border-gray-300 px-4 py-2">10</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Jl. Pepaya Guro I Rt. 4/11
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">5</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Kecap Cap Kunci
                  </td>
                  <td className="border border-gray-300 px-4 py-2">18</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Jl. Tuparev No 134
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">6</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Makanan / Roti Dewi
                  </td>
                  <td className="border border-gray-300 px-4 py-2">46</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Jl. Dewi Sartika No 26
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* isi */}
          <p className="text-justify pt-5">
            Sektor perdagangan dan jasa di Kelurahan Nagasari cukup dominan,
            warga banyak yang mempunyai mata pencaharian dengan berdagang, usaha
            berdagang berupa pertokoan yang besar sampai pedagang kaki lima, dan
            ada juga usaha lainya berupa perbengkelan kendaraan otomotif sampai
            pembuatan aksesoris serta usaha lainya karena letak kelurahan
            Nagasari yang merupakan daerah perkotaan, sehingga perekonomian
            dilingkungan Kelurahan Nagasari cukup menjanjikan dimana usaha
            perdaganan dan jasa banyak yang berhasil.
          </p>
          {/* tabel */}
          <div className="overflow-x-auto mt-5">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">No</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Jenis Usaha
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Banyaknya
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">1</td>
                  <td className="border border-gray-300 px-4 py-2">Warung</td>
                  <td className="border border-gray-300 px-4 py-2">375</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">2</td>
                  <td className="border border-gray-300 px-4 py-2">Toko</td>
                  <td className="border border-gray-300 px-4 py-2">241</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">3</td>
                  <td className="border border-gray-300 px-4 py-2">Kios</td>
                  <td className="border border-gray-300 px-4 py-2">71</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">4</td>
                  <td className="border border-gray-300 px-4 py-2">Apotek</td>
                  <td className="border border-gray-300 px-4 py-2">15</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">5</td>
                  <td className="border border-gray-300 px-4 py-2">Bengkel</td>
                  <td className="border border-gray-300 px-4 py-2">17</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">6</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Furniture
                  </td>
                  <td className="border border-gray-300 px-4 py-2">6</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">7</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Percetakan
                  </td>
                  <td className="border border-gray-300 px-4 py-2">7</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">8</td>
                  <td className="border border-gray-300 px-4 py-2">Notaris</td>
                  <td className="border border-gray-300 px-4 py-2">12</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">9</td>
                  <td className="border border-gray-300 px-4 py-2">Wartel</td>
                  <td className="border border-gray-300 px-4 py-2">2</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">10</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Showroom / Dealer
                  </td>
                  <td className="border border-gray-300 px-4 py-2">3</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">11</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Salon dan kecantikan
                  </td>
                  <td className="border border-gray-300 px-4 py-2">4</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">12</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Jasa Pertukangan
                  </td>
                  <td className="border border-gray-300 px-4 py-2">153</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">13</td>
                  <td className="border border-gray-300 px-4 py-2">Material</td>
                  <td className="border border-gray-300 px-4 py-2">5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
