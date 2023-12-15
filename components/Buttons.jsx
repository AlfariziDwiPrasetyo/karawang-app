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
