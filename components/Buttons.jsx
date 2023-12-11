"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <Button onClick={() => signIn({ callbackUrl: "/admin/banner" })}>
      Sign in
    </Button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/register" style={{ marginRight: 10 }}>
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button
      style={{ marginRight: 10 }}
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Sign Out
    </button>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};
