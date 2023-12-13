"use client";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NavSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setSearchValue(e.target.value);
    console.log(searchValue);
    router.push("/search");
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
            Karawang@unsika.ac.id
          </a>
        </div>
        <div className="md:flex hidden items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-red-700 placeholder-white text-white px-3 py-1 rounded-md focus:outline-none"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={keyPressHandle}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavSearch;
