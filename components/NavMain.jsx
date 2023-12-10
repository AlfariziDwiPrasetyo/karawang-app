"use client";
import React from "react";
import NavListMenu from "./NavListMenu";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
  DocumentTextIcon,
  DocumentPlusIcon,
  DocumentMinusIcon,
  ClipboardDocumentIcon,
  UserPlusIcon,
  UserMinusIcon,
} from "@heroicons/react/24/solid";
import LayananListMenu from "./LayananListMenu";
// layanan keluarahan
const layananKelurahanItems = [
  {
    title: "Surat Pengantaran Penerbitan KTP",
    description: "Halaman utama website.",
    kategori: "1",
    icon: DocumentTextIcon,
    subItems: [
      {
        name: "item 1",
        link: "item-1",
      },
      {
        name: "item 2",
        link: "item-2",
      },
      {
        name: "item 3",
        link: "item-3",
      },
    ],
  },
  {
    title: "Persyaratan Pembuatan Akta Kelahiran",
    kategori: "1",
    icon: UserPlusIcon,
  },
  {
    title: "Persyaratan Pembuatan Akta Kematian",
    kategori: "1",
    icon: UserMinusIcon,
  },
  {
    title: "Persyaratan Pembuatan KTP hilang/rusak",
    kategori: "1",
    icon: ClipboardDocumentIcon,
  },
  {
    title: "Persyaratan Pembuatan KK hilang/rusak",
    kategori: "2",
    icon: NewspaperIcon,
  },
  {
    title: "Persyaratan Perubahan Biodata",
    kategori: "2",
    icon: UserGroupIcon,
  },
  {
    title: "Persyaratan Pindah Datang",
    kategori: "2",
    icon: DocumentPlusIcon,
  },
  {
    title: "Persyaratan Pindah Keluar",
    kategori: "2",
    icon: DocumentMinusIcon,
  },
  {
    title: "Persyaratan Pembuatan Ahli Waris",
    kategori: "2",
    icon: NewspaperIcon,
  },
];

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
    icon: UserGroupIcon,
  },
  {
    title: "UMKM",
    description: "Informasi mengenai profil kelurahan.",
    icon: UserGroupIcon,
  },
];

function NavList() {
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
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Kegiatan
        </ListItem>
      </Typography>

      {/* Layanan kelurahan */}
      <LayananListMenu
        titleItem={"Layanan Kelurahan"}
        content={layananKelurahanItems}
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
      className={`fixed ${
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
