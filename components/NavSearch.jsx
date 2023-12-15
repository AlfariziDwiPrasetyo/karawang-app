"use client";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const NavSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    router.push(`/search?q=${searchValue}`);
  };

  const keyPressHandle = (e) => {
    if (e.key === "Enter") {
      handleOnSubmit(e);
    }
  };

  return (
    <nav className="bg-red-800 z-50 fixed w-full top-0 text-white">
      <div className="container mx-auto flex justify-between items-center py-5 md:py-1 px-6 md:px-0">
        <div className="flex items-center">
          <MdEmail className="text-white mr-2 hidden md:flex" />
          <a href="/" className="text-white hidden md:flex">
            nagasarikarawang@gmail.com
          </a>
        </div>
        <div className="md:flex hidden items-center">
          <form action="" onSubmit={handleOnSubmit}>
            <input
              type="text"
              placeholder="Search..."
              className="bg-red-700 placeholder-white text-white px-3 py-1 rounded-md focus:outline-none"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={keyPressHandle}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavSearch;
