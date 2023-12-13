"use client";
import SidebarMenu from "@/components/SidebarMenu";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
const openSans = Open_Sans({
  style: "normal",
  weight: ["400", "300", "500"],
  subsets: ["cyrillic"],
});
const Sidebar = ({ children }) => {
  const pathname = usePathname();

  return (
    <aside className="md:block hidden overflow-y-auto overflow-x-hidden fixed inset-y-0 w-[260px]  px-8 py-6 bg-white">
      <div className="mb-7">
        <h1 className={`${openSans.className} font-semibold`}>ADMIN PANEL</h1>
      </div>

      <SidebarMenu className={"py-5"}>
        <h2 className=" text-blue-gray-700 font-semibold text-sm">
          ADMIN LAYOUT PAGES
        </h2>

        <ul className="list-none flex-col flex mt-4 gap-4">
          <li>
            <Link href={"/admin/banner"}>
              <h3
                className={`${
                  pathname == "/admin/banner" ? "text-blue-600" : "text-black"
                } text-sm `}
              >
                BANNNER
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
                NEWS
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
                CATEGORY LAYANAN
              </h3>
            </Link>
          </li>
          <li>
            <Link href={"/admin/layanan"}>
              <h3
                className={`${
                  pathname == "/admin/layanan" ? "text-blue-600" : "text-black"
                } text-sm `}
              >
                LAYANAN
              </h3>
            </Link>
          </li>
        </ul>
      </SidebarMenu>
      <SidebarMenu className={"py-5"}>
        <h2 className=" text-blue-gray-700 font-semibold text-sm">
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
                CHANGE EMAIL
              </h3>
            </Link>
          </li>
        </ul>
      </SidebarMenu>
    </aside>
  );
};

export default Sidebar;
