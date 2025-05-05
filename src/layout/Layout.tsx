import { FC } from "react";
import { Outlet } from "react-router-dom";
import "./../index.css";
import Header from "./Header/Header";
import Footer from "./Footer";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
