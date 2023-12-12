import { Button, Typography } from "@material-tailwind/react";
// import { signOut } from "next-auth/react";
import { LogoutButton } from "@/components/Buttons";

export default function NavAdmin() {
  return (
    <nav className="md:flex justify-between items-center hidden ">
      <Typography variant="h1" color="white" className="text-base">
        DASHBOARD
      </Typography>
      <LogoutButton />
      {/* <Button
        variant="outlined"
        color="white"
        onClick={() => signOut({ callbackUrl: "/" })}
        className="p-2"
      >
        Log out
      </Button> */}
    </nav>
  );
}
