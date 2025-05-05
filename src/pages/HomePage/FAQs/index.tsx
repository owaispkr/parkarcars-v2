import type { CSSProperties } from "react";
import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";
import AntdThemeProvider from "../../../providers/themeProvider/AntdThemeProvider";

const text = `
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: "What could possibly be your first question?",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "2",
    label: "What could possibly be your first question?",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "3",
    label: "What could possibly be your first question?",
    children: <p>{text}</p>,
    style: panelStyle,
  },
];

const FAQs = () => {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  return (
    <AntdThemeProvider>
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the answers to questions about pricing, shipping and
              conversion rates
            </p>
          </div>

          <div className="overflow-x-auto">
            <Collapse
              bordered={false}
              defaultActiveKey={["1"]}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              style={{ background: token.colorBgContainer }}
              items={getItems(panelStyle)}
            />
          </div>
        </div>
      </section>
    </AntdThemeProvider>
  );
};

export default FAQs;
