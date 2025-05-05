import { ConfigProvider } from "antd";
import { FC } from "react";

const AntdThemeProvider: FC<any> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            controlOutline: "#3b82f6",
            controlOutlineWidth: 1,
          },
          Select: {
            controlOutline: "#3b82f6",
            controlOutlineWidth: 1,
          },
        },

        token: {
          fontSize: 16,
          fontFamily: "Montserrat, sans-serif",
        },
      }}
      prefixCls="ant"
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdThemeProvider;
