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

        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
