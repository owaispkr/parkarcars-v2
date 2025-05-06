import { FC } from "react";
import { Outlet } from "react-router-dom";
import "./../index.css";

const AuthenticationLayout: FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthenticationLayout;
