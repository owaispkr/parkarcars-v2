import { ConfigProvider } from 'antd';
import { FC } from 'react';

const AntdThemeProvider: FC<any> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        components: {},

        token: {
          fontSize: 16,
          fontFamily: 'Montserrat, sans-serif',
        },
      }}
      prefixCls="ant"
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdThemeProvider;
