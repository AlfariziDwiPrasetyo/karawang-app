"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import Container from "@/components/Container";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import SidebarMenu from "./SidebarMenu";

export default function NavbarAdmin() {
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
          <span className="">ADMIN PAGE</span>
        </Container>
      </nav>
      <div
        className={`fixed inset-4 md:hidden block bg-white shadow rounded-md p-8 overflow-scroll  ${
          isActive ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center">
          <h1>ADMIN PAGE</h1>
          <button
            onClick={() => setIsActive((v) => !v)}
            className="border p-2 rounded-md"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="mt-7">
          <SidebarMenu className={"py-5"} />
          <SidebarMenu className={"py-5"} />
          <SidebarMenu className={"py-5"} />
        </div>
      </div>
    </>
  );
}
