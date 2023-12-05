import "@/styles/globals.css";

export const metadata = {
  title: "Karawang App",
  description: "{desc}",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
