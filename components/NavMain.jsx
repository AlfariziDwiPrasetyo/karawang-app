"use client";
import React, { useEffect, useState } from "react";
import NavListMenu from "./NavListMenu";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLayananData } from "@/utils/getLayananData";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  NewspaperIcon,
  RectangleGroupIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import LayananListMenu from "./LayananListMenu";

// profile kelurahan items
const profileKelurahanItems = [
  {
    title: "Visi Misi",
    icon: NewspaperIcon,
    link: "/visi-misi",
  },
  {
    title: "Alamat",
    icon: NewspaperIcon,
    link: "/alamat",
  },
  {
    title: "Geografis dan Penduduk",
    icon: RectangleGroupIcon,
    link: "/geografis-dan-penduduk",
  },
  {
    title: "Struktur Pemerintahan",
    icon: TagIcon,
    link: "/struktur-pemerintahan",
  },
  {
    title: "Sarana Prasarana",
    icon: UserGroupIcon,
    link: "/sarana-prasarana",
  },
];

// lembaga kemasyarakatan items
const lembagaKemasyarakatanItems = [
  {
    title: "LPMK",
    description: "Halaman utama website.",
    link: "/lpmk",
    icon: UserGroupIcon,
  },
  {
    title: "UMKM",
    link: "/umkm",
    description: "Informasi mengenai profil kelurahan.",
    icon: UserGroupIcon,
  },
];

function NavList() {
  const [layananKelurahanItems, setLayananKelurahanItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLayananKelurahanData = async () => {
      try {
        const data = await getLayananData();
        setLayananKelurahanItems(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLayananKelurahanData();
  }, []);

  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      {/* Beranda */}
      <Typography
        as="a"
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Beranda
        </ListItem>
      </Typography>

      {/* Profile Kelurahan */}
      <NavListMenu
        content={profileKelurahanItems}
        titleItem={"Profil Kelurahan"}
      />

      {/* Kegiatan */}
      <Typography
        as="a"
        href="/artikel"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Artikel
        </ListItem>
      </Typography>

      {/* Layanan kelurahan */}
      <LayananListMenu
        titleItem={"Layanan Kelurahan"}
        content={layananKelurahanItems}
        loading={loading}
      />

      {/* lembaga kemasyarakatan */}
      <NavListMenu
        content={lembagaKemasyarakatanItems}
        titleItem={"Lembaga Kemasyarakatan"}
      />

      {/* Gallery */}
      <Typography
        as="a"
        href="/galeri"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Galeri
        </ListItem>
      </Typography>

      {/* Kontak */}
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Kontak
        </ListItem>
      </Typography>
    </List>
  );
}

export default function NavMain() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      className={`fixed max-w-full ${
        openNav ? "h-screen" : "h-auto lg:h-20"
      } overflow-y-auto z-40 top-10 rounded-none w-full px-4 py-2`}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href="/">
          <Image
            src="/logo.png"
            width={50}
            className="ml-8"
            height={50}
            alt=""
          />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full h-screen flex-nowrap items-center gap-2 lg:hidden"></div>
      </Collapse>
    </Navbar>
  );
}
