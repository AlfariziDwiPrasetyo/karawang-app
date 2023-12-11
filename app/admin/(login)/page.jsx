"use client";
import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/Buttons";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  // if (status === "loading") {
  //   return <p>Loading....</p>;
  // }
  return (
    <main className="h-screen w-full">
      <div className="flex w-full h-full justify-center items-center">
        <LoginButton />
      </div>
    </main>
  );
}
