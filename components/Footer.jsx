"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer className="w-full mt-10 bg-black p-3">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-black text-white text-center md:justify-between">
        <Typography
          as="a"
          href="#"
          color="blue-gray"
          className="font-normal transition-colors hover:text-red-500 focus:text-red-500 text-white"
        >
          &copy; 2023 all right reserved
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-red-500 focus:text-red-500 text-white"
            >
              Tentang Kami
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-red-500 focus:text-red-500 text-white"
            >
              Lisensi
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-red-500 focus:text-red-500 text-white"
            >
              Kontribusi
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-red-500 focus:text-red-500 text-white"
            >
              Kontak Kami
            </Typography>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
