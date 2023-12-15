"use client";

import Sidebar from "@/components/Sidebar";
import SidebarMenu from "@/components/SidebarMenu";
import { Inter } from "next/font/google";
import Container from "@/components/Container";
import { useEffect } from "react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const inter = Inter({ subsets: ["latin"] });

export default function Page({ children }) {
  return (
    <div className="flex">
      <Sidebar>
        <div className="mb-7">

          <Typography variant="h1" color="blue-gray" className="text-md">
            ADMIN PANEL
          </Typography>

          <h1>Admin Panel</h1>

        </div>

        <SidebarMenu className={"mx-6 py-5"} />
        <SidebarMenu className={"mx-6 py-5"} />
        <SidebarMenu className={"mx-6 py-5"} />
      </Sidebar>
      <section className="md:ml-[220px] text-white min-h-screen md:px-20 md:py-6 bg-[#092635] w-full">
        <Container>

          <nav className="md:block hidden">
            <Typography variant="h1" color="white" className="text-lg">
              DASHBOARD
            </Typography>
          </nav>

          <Card className="md:mt-12 w-full">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                UI/UX Review Check
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>

          <nav className="md:block hidden">Dashboard Admin</nav>
          <section className="md:mt-12">
            <div>KNT</div>
          </section>

        </Container>
      </section>
    </div>
  );
}
