import NavMain from "@/components/NavMain";
import NavSearch from "@/components/NavSearch";
import "@/styles/globals.css";

export const metadata = {
  title: "Karawang App",
  description: "{desc}",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <NavSearch />
        <NavMain />
        <main className="z-0 mt-20">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
