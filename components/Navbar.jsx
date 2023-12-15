"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import Container from "@/components/Container";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import SidebarMenu from "./SidebarMenu";
import { Typography } from "antd";
import { LogoutButton } from "./Buttons";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const openSans = Open_Sans({
  style: "normal",
  weight: ["400", "300", "500"],
  subsets: ["cyrillic"],
});

export default function NavbarAdmin() {
  useEffect(() => {
    setIsActive(false);
  }, []);

  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <nav className="md:hidden block">
        <Container className="flex items-center justify-between m-4 mx-auto">
          <button
            onClick={() => setIsActive((v) => !v)}
            className="border p-2 rounded"
          >
            <RxHamburgerMenu />
          </button>
          <div className="flex gap-4 items-center">
            <h1
              className={`${openSans.className} text-blue-gray-700 font-semibold text-sm`}
            >
              ADMIN LAYOUT PAGES
            </h1>
            <LogoutButton />
          </div>
        </Container>
      </nav>
      <div
        className={`fixed z-10 inset-4 md:hidden block bg-white shadow rounded-md p-8 overflow-scroll  ${
          isActive ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center">
          <h2
            className={`${openSans.className} text-blue-gray-700 font-semibold`}
          >
            ADMIN LAYOUT PAGES
          </h2>
          <button
            onClick={() => setIsActive((v) => !v)}
            className="border p-2 rounded-md"
          >
            <IoMdClose />
          </button>
        </div>
        <SidebarMenu className={"mt-4"}>
          <ul className="list-none flex-col flex mt-4 gap-4">
            <li>
              <Link href={"/admin/banner"}>
                <h3
                  className={`${
                    pathname == "/admin/banner" ? "text-blue-600" : "text-black"
                  } text-sm `}
                >
                  Gambar
                </h3>
              </Link>
            </li>
            <li>
              <Link href={"/admin/news"}>
                <h3
                  className={`${
                    pathname == "/admin/news" ? "text-blue-600" : "text-black"
                  } text-sm `}
                >
                  Artikel
                </h3>
              </Link>
            </li>
            <li>
              <Link href={"/admin/categoryLayanan"}>
                <h3
                  className={`${
                    pathname == "/admin/categoryLayanan"
                      ? "text-blue-600"
                      : "text-black"
                  } text-sm `}
                >
                  Kategori Layanan
                </h3>
              </Link>
            </li>
            <li>
              <Link href={"/admin/layanan"}>
                <h3
                  className={`${
                    pathname == "/admin/layanan"
                      ? "text-blue-600"
                      : "text-black"
                  } text-sm `}
                >
                  Layanan
                </h3>
              </Link>
            </li>
          </ul>
        </SidebarMenu>

        <SidebarMenu className={"mt-4 py-4"}>
          <h2 className=" text-blue-gray-700 font-semibold">
            ACCOUNT SETTINGS
          </h2>

          <ul className="list-none flex-col flex mt-4 gap-4">
            <li>
              <Link href={"/admin/change-email"}>
                <h3
                  className={`${
                    pathname == "/admin/change-email"
                      ? "text-blue-600"
                      : "text-black"
                  } text-sm `}
                >
                  Ganti Email
                </h3>
              </Link>
            </li>
            <li>
              <Link href={"/admin/change-password"}>
                <h3
                  className={`${
                    pathname == "/admin/change-password"
                      ? "text-blue-600"
                      : "text-black"
                  } text-sm `}
                >
                  Ganti Password
                </h3>
              </Link>
            </li>
          </ul>
        </SidebarMenu>
      </div>
    </>
  );
}
