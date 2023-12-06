"use client";

import Sidebar from "@/components/Sidebar";
import SidebarMenu from "@/components/SidebarMenu";
import { Inter } from "next/font/google";
import Container from "@/components/Container";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Page({ children }) {
  return (
    <div className="flex">
      <Sidebar>
        <div className="mb-7">
          <h1>Admin Panel</h1>
        </div>

        <SidebarMenu className={"mx-6 py-5"} />
        <SidebarMenu className={"mx-6 py-5"} />
        <SidebarMenu className={"mx-6 py-5"} />
      </Sidebar>
      <section className="md:ml-[220px] text-white min-h-screen md:px-20 md:py-6 bg-[#092635] w-full">
        <Container>
          <nav className="md:block hidden">Dashboard Admin</nav>
          <section className="md:mt-12">
            <div>KNT</div>
          </section>
        </Container>
      </section>
    </div>
  );
}
