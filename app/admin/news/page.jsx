"use client";
import Container from "@/components/Container";
import {
  Button,
  Card,
  CardBody,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import CKeditor from "@/components/CKeditor";
import Link from "next/link";

const TABLE_HEAD = ["Image", "Title", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
  },
  {
    name: "Alexa Liras",
  },
];

export default function Page() {
  // handle untuk image file
  const [dataForm, setDataForm] = useState({});
  //   untuk ketika berhasil aplod, maka refresh agar konten yang baru muncul
  const [isUploaded, setIsUploaded] = useState(false);
  //   untuk ketika tombol submit dipencet, maka akan muncul icon loading
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState(null);
  //   untuk mengecek jika halaman belum sepenuhnya ter mount

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const imgRef = useRef(null);
  const fileRef = useRef(null);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  useEffect(() => {
    setIsUploaded(false);
    const fetchData = async () => {
      const get = await axios.get("/api/news");
      setPost(get.data);
      console.log(get);
    };
    fetchData();
  }, []);

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
      const del = await axios.delete(`/api/news/${key}`);
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
    data.append("title", title);
    data.append("content", content);
    try {
      const post = await axios.post("/api/news", data);
      if (post.data.success) {
        imgRef.current.src = "#";
        imgRef.current.hidden = true;
        setTitle("");
        setContent("");
        setIsUploaded(true);
      }
    } catch (err) {
      console.log(err.response);
    }

    fileRef.current.value = "";
    setIsLoading(false);
  };

  return (
    <section className="md:ml-[260px] text-white min-h-screen md:px-6 md:py-6 bg-[#092635] w-full">
      <Container>
        <nav className="md:block hidden">
          <Typography variant="h1" color="white" className="text-base">
            DASHBOARD
          </Typography>
        </nav>
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
              Add News
            </Typography>
            <img
              id="blah"
              ref={imgRef}
              onChange={handlerImg}
              src="#"
              className="mb-4 rounded-lg w-full max-h-[240px] object-cover"
              hidden
              alt="your image"
            />
            <form
              action=""
              onSubmit={handlerSubmit}
              encType="multipart/form-data"
            >
              <Typography variant="h6" color="blue-gray" className=" ">
                Image
              </Typography>
              <input
                required
                ref={fileRef}
                type="file"
                onChange={handlerImg}
                accept="image/png, image/jpeg, image/jpg"
                className="file-input file-input-bordered w-full max-w-xs"
              />
              <Typography variant="h6" color="blue-gray" className="mt-3">
                Title
              </Typography>
              <Input
                size="lg"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
                placeholder="title"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <Typography variant="h6" color="blue-gray" className="mt-3 ">
                Content
              </Typography>
              <CKeditor
                name="content"
                onChange={(data) => {
                  setContent(data);
                }}
                editorLoaded={editorLoaded}
                value={content}
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
                  {post &&
                    post.data.map(({ url, id, title }, index) => {
                      return (
                        <tr key={id}>
                          <td className={`p-4`}>
                            <div className="w-full  h-[160px] ">
                              <img
                                className="object-cover w-full h-full"
                                src={`${url}`}
                                alt="card-image"
                              />
                            </div>
                          </td>
                          <td className={`p-4`}>
                            <div className=" w-full h-full flex items-center">
                              <Typography>{title}</Typography>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex gap-4 justify-center">
                              <Link href={`/admin/news/${id}`}>
                                <Button
                                  key={id}
                                  className=""
                                  type="button"
                                  color="green"
                                >
                                  UPDATE
                                </Button>
                              </Link>
                              <Button
                                data-key={id}
                                key={id}
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
      </Container>
    </section>
  );
}
