import React from "react";

const page = () => {
  return (
    <div className="mt-5 p-5">
      <h1 className="text-2xl font-bold">Kependudukan</h1>
      <p className="pt-5 pl-3">
        Jumlah Penduduk seluruhnya adalah{" "}
        <span className="font-bold">19.375</span> jiwa dan{" "}
        <span className="font-bold">9.272</span> Kepala Keluarga (KK), yang
        terdiri dari:
      </p>
      <ul className="pt-3 pl-3">
        <li>
          - Laki Laki : <span className="font-bold">8.838</span> Jiwa
        </li>
        <li>
          - Perempuan : <span className="font-bold">10.537</span> Jiwa
        </li>
      </ul>

      <div className="pl-3 pt-5 mt-10">
        <h1 className="text-1xl font-bold">
          Tabel klarifikasi jumlah penduduk
        </h1>
        <div className="overflow-x-auto mt-5">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Lingkungan</th>
                <th className="border border-gray-300 px-4 py-2">Jumlah RW</th>
                <th className="border border-gray-300 px-4 py-2">Jumlah RT</th>
                <th className="border border-gray-300 px-4 py-2">Laki-laki</th>
                <th className="border border-gray-300 px-4 py-2">Perempuan</th>
                <th className="border border-gray-300 px-4 py-2">Jumlah KK</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Krajan Barat
                </td>
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">6</td>
                <td className="border border-gray-300 px-4 py-2">438</td>
                <td className="border border-gray-300 px-4 py-2">452</td>
                <td className="border border-gray-300 px-4 py-2">334</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Krajan Timur
                </td>
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">6</td>
                <td className="border border-gray-300 px-4 py-2">277</td>
                <td className="border border-gray-300 px-4 py-2">467</td>
                <td className="border border-gray-300 px-4 py-2">425</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Sadamalun I
                </td>
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">9</td>
                <td className="border border-gray-300 px-4 py-2">754</td>
                <td className="border border-gray-300 px-4 py-2">759</td>
                <td className="border border-gray-300 px-4 py-2">567</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Sadamalun III
                </td>
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">7</td>
                <td className="border border-gray-300 px-4 py-2">652</td>
                <td className="border border-gray-300 px-4 py-2">659</td>
                <td className="border border-gray-300 px-4 py-2">459</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Santiong Selatan
                </td>
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">8</td>
                <td className="border border-gray-300 px-4 py-2">310</td>
                <td className="border border-gray-300 px-4 py-2">590</td>
                <td className="border border-gray-300 px-4 py-2">289</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Santiong Utara
                </td>
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">7</td>
                <td className="border border-gray-300 px-4 py-2">318</td>
                <td className="border border-gray-300 px-4 py-2">340</td>
                <td className="border border-gray-300 px-4 py-2">251</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Babakan Cianjur
                </td>
                <td className="border border-gray-300 px-4 py-2">5</td>
                <td className="border border-gray-300 px-4 py-2">15</td>
                <td className="border border-gray-300 px-4 py-2">1.241</td>
                <td className="border border-gray-300 px-4 py-2">1.235</td>
                <td className="border border-gray-300 px-4 py-2">813</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Dipo</td>
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">9</td>
                <td className="border border-gray-300 px-4 py-2">613</td>
                <td className="border border-gray-300 px-4 py-2">600</td>
                <td className="border border-gray-300 px-4 py-2">745</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Karang Anyar
                </td>
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">9</td>
                <td className="border border-gray-300 px-4 py-2">679</td>
                <td className="border border-gray-300 px-4 py-2">691</td>
                <td className="border border-gray-300 px-4 py-2">482</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Kepuh</td>
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">10</td>
                <td className="border border-gray-300 px-4 py-2">1.215</td>
                <td className="border border-gray-300 px-4 py-2">2.390</td>
                <td className="border border-gray-300 px-4 py-2">2.836</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Guro I</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">6</td>
                <td className="border border-gray-300 px-4 py-2">579</td>
                <td className="border border-gray-300 px-4 py-2">573</td>
                <td className="border border-gray-300 px-4 py-2">510</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Perum Green Garden
                </td>
                <td className="border border-gray-300 px-4 py-2">5</td>
                <td className="border border-gray-300 px-4 py-2">19</td>
                <td className="border border-gray-300 px-4 py-2">1.470</td>
                <td className="border border-gray-300 px-4 py-2">1.475</td>
                <td className="border border-gray-300 px-4 py-2">1.404</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Perum Bhakti Praja
                </td>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">292</td>
                <td className="border border-gray-300 px-4 py-2">306</td>
                <td className="border border-gray-300 px-4 py-2">210</td>
              </tr>
              <tr>
                <td className="border bg-red-400 text-white border-red-500 px-4 py-2">
                  Jumlah
                </td>
                <td className="border bg-red-400 text-white border-red-500 px-4 py-2">
                  37
                </td>
                <td className="border bg-red-400 text-white border-red-500 px-4 py-2">
                  114
                </td>
                <td className="border bg-red-400 text-white border-red-500 px-4 py-2">
                  8.838
                </td>
                <td className="border bg-red-400 text-white border-red-500 px-4 py-2">
                  10.537
                </td>
                <td className="border bg-red-400 text-white border-red-500 px-4 py-2">
                  9.272
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
