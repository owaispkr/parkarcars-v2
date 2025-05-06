import { FC } from "react";
import { Outlet } from "react-router-dom";
import "./../index.css";

const BlankLayout: FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default BlankLayout;
