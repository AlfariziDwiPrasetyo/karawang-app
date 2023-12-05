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
        <div className="pb-8 border-slate-500 border-b">
          <h1>Admin Panel</h1>
        </div>

        <SidebarMenu />
        <SidebarMenu />
        <SidebarMenu />
        <SidebarMenu />
      </Sidebar>
      <section className="md:ml-[260px] md:px-20 md:py-6">
        <Container>COY</Container>
      </section>
    </div>
  );
}
