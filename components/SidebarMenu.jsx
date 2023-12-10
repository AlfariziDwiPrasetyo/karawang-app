import { Typography } from "@material-tailwind/react";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  style: "normal",
  weight: ["400", "300", "500"],
  subsets: ["cyrillic"],
});

const SidebarMenu = ({ className, children }) => {
  return (
    <div
      className={`border-blue-gray-100 border-t ${className} ${openSans.className}`}
    >
      {children}
    </div>
  );
};

export default SidebarMenu;
