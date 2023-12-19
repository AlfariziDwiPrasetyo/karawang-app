"use client";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import SpinnerLoad from "./SpinnerLoad";

const NavSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchEmail = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user`
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    fetchEmail();
  }, []);

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
      <div className="container mx-auto flex justify-between items-center   py-1  px-0">
        <div className="flex items-center">
          {loading ? (
            <SpinnerLoad width={4} height={4} />
          ) : (
            <>
              <MdEmail className="text-white mr-2 flex" />
              <a href="/" className="text-white flex">
                {data.data.email}
              </a>
            </>
          )}
        </div>
        <div className="flex items-center">
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
