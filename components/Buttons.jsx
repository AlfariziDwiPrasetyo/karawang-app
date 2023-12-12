"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <Button
      onClick={() => signIn("credentials", { callbackUrl: "/admin/banner" })}
    >
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

export const LogoutButton = ({ variant, color }) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Sign Out
    </Button>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};
