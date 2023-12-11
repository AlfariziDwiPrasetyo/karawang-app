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
  // const { status } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/api/auth/signin");
  //   },
  // });

  // if (status === "loading") {
  //   return <p>Loading....</p>;
  // }
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
      </div>
    </main>
  );
}
