import React from "react";

const page = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="font-bold text-2xl">Alamat</h1>
      <p className="">
        Jalan Raya Nagasari, Kelurahan Nagasari, Kecamatan Karawang Barat,
        Kabupaten Karawang, Jawa Barat 41314
      </p>
      <div className="flex items-center justify-center mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.674638123069!2d107.30480620000002!3d-6.3064081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977c31f1c5125%3A0x527ddfcd63dedf71!2sKantor%20Kelurahan%20Nagasari!5e0!3m2!1sid!2sid!4v1702042287816!5m2!1sid!2sid"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
