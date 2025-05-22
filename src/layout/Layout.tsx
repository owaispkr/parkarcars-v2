import { FC } from "react";
import { Outlet } from "react-router-dom";
import "./../index.css";
import Header from "./Header/Header";
import Footer from "./Footer";

const Layout: FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
