"use client";

import { Inter } from "next/font/google";

import { LogoutButton } from "@/components/Buttons";
import Container from "@/components/Container";
import { useEffect, useRef, useState } from "react";

import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import axios from "axios";

import Link from "next/link";
import { signOut } from "next-auth/react";
import NavAdmin from "@/components/NavAdmin";

const TABLE_HEAD = ["Image", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
  },
  {
    name: "Alexa Liras",
  },
];

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  const [dataForm, setDataForm] = useState({});
  const [isUploaded, setIsUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [banner, setBanner] = useState(null);
  // const [isMount, setIsMount] = useState(true);

  const imgRef = useRef(null);
  const fileRef = useRef(null);

  useEffect(() => {
    setIsUploaded(false);
    const fetchData = async () => {
      const get = await axios.get("/api/banner");
      setBanner(get.data);
    };
    fetchData();
    // setIsMount(false);
  }, [isUploaded]);

  const handlerImg = (e) => {
    e.preventDefault();
    const [file] = e.target.files;

    if (file) {
      imgRef.current.hidden = false;

      imgRef.current.src = URL.createObjectURL(file);

      setDataForm((v) => {
        return {
          ...v,
          file,
        };
      });
    }
  };

  const handlerDelete = async (e) => {
    setIsLoading(true);
    const key = e.target.dataset.key;
    try {
      const del = await axios.delete(`/api/banner/${key}`);
      if (del.data.success) {
        setIsUploaded(true);
      }
    } catch (err) {}

    setIsLoading(false);
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData();
    data.append("file", dataForm["file"]);
    try {
      const post = await axios.post("/api/banner", data);
      if (post.data.success) {
        imgRef.current.src = "#";
        imgRef.current.hidden = true;
        setIsUploaded(true);
      }
    } catch (err) {
      console.log(err.response);
    }

    fileRef.current.value = "";
    setIsLoading(false);
  };
  // if (isMount) return null;
  return (
    <Card className="z-0 mt-6 md:mt-12 w-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-gray-300 z-50   animate-spin"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-900"
            ></path>
          </svg>
        </div>
      )}
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Add Image to Gallery
        </Typography>

        <img
          id="blah"
          ref={imgRef}
          src="#"
          className="mb-4 rounded-lg w-full max-h-[240px] object-cover"
          hidden
          alt="your image"
        />
        <form onSubmit={handlerSubmit} action="" encType="multipart/form-data">
          <input
            required
            ref={fileRef}
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handlerImg}
            className="file-input file-input-bordered w-full max-w-xs"
          />
          <Button type="submit" className="block mt-3" color="blue-gray">
            Submit
          </Button>
        </form>
        <Card className="h-full w-full mt-4 overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {banner &&
                banner.data.map(({ url, id }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={id}>
                      <td className={`${classes}`}>
                        <div className="w-full  h-[160px] ">
                          <img
                            className="object-cover w-full h-full"
                            src={`${url}`}
                            alt="card-image"
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex gap-4 justify-center">
                          <Link href={`/admin/banner/${id}`}>
                            <Button className="" color="green">
                              update
                            </Button>
                          </Link>
                          <Button
                            data-key={id}
                            className=""
                            onClick={handlerDelete}
                            color="red"
                          >
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </Card>
      </CardBody>
      {/* <CardFooter className="pt-0">
      <Button>Read More</Button>
    </CardFooter> */}
    </Card>
  );
}
