"use client";
import React from "react";
import NavListMenu from "./NavListMenu";
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
// layanan keluarahan
const layananKelurahanItems = [
  {
    title: "Surat Pengantaran Penerbitan KTP",
    description: "Halaman utama website.",
    icon: DocumentTextIcon,
  },
  {
    title: "Persyaratan Pembuatan Akta Kelahiran",
    description: "Halaman utama website.",
    icon: UserPlusIcon,
  },
  {
    title: "Persyaratan Pembuatan Akta Kematian",
    description: "Halaman utama website.",
    icon: UserMinusIcon,
  },
  {
    title: "Persyaratan Pembuatan KTP hilang/rusak",
    description: "Halaman utama website.",
    icon: ClipboardDocumentIcon,
  },
  {
    title: "Persyaratan Pembuatan KK hilang/rusak",
    description: "Halaman utama website.",
    icon: NewspaperIcon,
  },
  {
    title: "Persyaratan Perubahan Biodata",
    description: "Halaman utama website.",
    icon: UserGroupIcon,
  },
  {
    title: "Persyaratan Pindah Datang",
    description: "Halaman utama website.",
    icon: DocumentPlusIcon,
  },
  {
    title: "Persyaratan Pindah Keluar",
    description: "Halaman utama website.",
    icon: DocumentMinusIcon,
  },
  {
    title: "Persyaratan Pembuatan Ahli Waris",
    description: "Halaman utama website.",
    icon: NewspaperIcon,
  },
];

// profile kelurahan items
const profileKelurahanItems = [
  {
    title: "Visi Misi",
    description: "Halaman utama website.",
    icon: NewspaperIcon,
  },
  {
    title: "Geografis dan Penduduk",
    description: "Informasi mengenai profil kelurahan.",
    icon: RectangleGroupIcon,
  },
  {
    title: "Struktur Pemerintahan",
    description: "Berbagai layanan yang tersedia di kelurahan.",
    icon: TagIcon,
  },
  {
    title: "Sarana Prasarana",
    description: "Berbagai lembaga yang ada di masyarakat.",
    icon: UserGroupIcon,
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
        href="#"
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
      <NavListMenu
        content={layananKelurahanItems}
        titleItem={"Layanan Kelurahan"}
      />

      {/* lembaga kemasyarakatan */}
      <NavListMenu
        content={lembagaKemasyarakatanItems}
        titleItem={"Lembaga Kemasyarakatan"}
      />

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
    <Navbar className="mx-auto fixed z-40 top-10 rounded-none w-full px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          Material Tailwind
        </Typography>
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
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden"></div>
      </Collapse>
    </Navbar>
  );
}
