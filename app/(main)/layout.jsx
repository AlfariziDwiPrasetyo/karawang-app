import Footer from "@/components/Footer";
import NavMain from "@/components/NavMain";
import NavSearch from "@/components/NavSearch";
import "@/styles/globals.css";

export const metadata = {
  icons: { icon: { url: "/favicon.ico" } },
  title: "Kelurahan Nagasari",
  description:
    "Situs web resmi Kelurahan Nagasari yang menyajikan informasi lengkap dan terkini tentang kehidupan, layanan, serta potensi yang dimiliki oleh kelurahan ini.",
};

const RootLayout = ({ children }) => {
  return (
    <html data-theme="light">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <NavSearch />
        <NavMain />
        <main className="z-0 pt-16 mt-10 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
