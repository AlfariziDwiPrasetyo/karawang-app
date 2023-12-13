"use client";

import {
  Alert,
  Button,
  Card,
  CardBody,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

export default function Page() {
  //   untuk ketika tombol submit dipencet, maka akan muncul icon loading
  const [isLoading, setIsLoading] = useState(false);

  // untuk flash message
  const [message, setMessage] = useState({ msg: null, color: null });

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const session = useSession();

  useEffect(() => {
    setMessage({ msg: null, color: null });
    console.log("WOI");
  }, []);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData();

    try {
      const idUser = session.data.user.id;
      data.append("password", password);
      data.append("new password", newPassword);
      const user = await axios.put(`/api/user/password/${idUser}`, data);

      if (user.data.success) {
        setNewPassword("");
        setPassword("");
        setMessage({ msg: user.data.message, color: "green" });
      }
    } catch (err) {
      setMessage({ msg: err.response.data.message, color: "red" });
      setPassword("");
      setNewPassword("");
    }

    setIsLoading(false);
  };

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
        {message.msg && <Alert color={message.color}>{message.msg}</Alert>}
        <Typography variant="h5" color="blue-gray" className="mb-2">
          CHANGE PASSWORD
        </Typography>

        <form action="" onSubmit={handlerSubmit} encType="multipart/form-data">
          <Typography variant="h6" color="blue-gray" className="mt-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
            placeholder="example@gmail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="mt-3">
            New Password
          </Typography>
          <Input
            type="password"
            size="lg"
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            value={newPassword}
            required
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          <Button type="submit" className="block mt-3" color="blue-gray">
            Submit
          </Button>
        </form>
      </CardBody>
      {/* <CardFooter className="pt-0">
      <Button>Read More</Button>
    </CardFooter> */}
    </Card>
  );
}
