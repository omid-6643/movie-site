import Footer from "@/components/footer";
import Header from "@/components/header";
import "../styles/globals.css";

const Layout = ({ children }) => {
  return (
    <html lang="fa-IR">
      <body className="flex flex-col gap-8">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
