"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { NextAuthProvider } from "@/app/providers";
import Container from "@/components/Container";
import NavAdmin from "@/components/NavAdmin";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({ children }) {
  return (
    <section className="md:ml-[260px] text-white min-h-screen md:px-6 md:py-6 bg-[#092635] w-full">
      <Container>
        <NavAdmin />
        {children}
      </Container>
    </section>
  );
}
