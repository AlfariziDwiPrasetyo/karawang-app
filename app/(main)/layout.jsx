import Footer from "@/components/Footer";
import NavMain from "@/components/NavMain";
import NavSearch from "@/components/NavSearch";
import "@/styles/globals.css";

export const metadata = {
  title: "Kelurahan Nagasari",
  description:
    "Situs web resmi Kelurahan Nagasari merupakan portal online yang menyajikan informasi lengkap dan terkini tentang kehidupan, layanan, serta potensi yang dimiliki oleh kelurahan ini.",
};

const RootLayout = ({ children }) => {
  return (
    <html data-theme="light">
      <body>
        <NavSearch />
        <NavMain />
        <main className="z-0 pt-16 mt-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
