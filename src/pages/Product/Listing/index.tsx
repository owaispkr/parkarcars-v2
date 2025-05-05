import React from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { List, Space } from "antd";
import FilterGroup from "../../../components/FilterGroup";
import AntdThemeProvider from "../../../providers/themeProvider/AntdThemeProvider";

const data = Array.from({ length: 230 }).map((_, i) => ({
  href: "https://ant.design",
  title: `ant design part ${i + 1}`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const ListView: React.FC = () => (
  <>
    <header className="bg-blue-900 text-white text-center py-12">
      <h1 className="text-4xl font-bold m-8">Inventory</h1>
    </header>
    <div className="pt-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Quick search
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use the filters below to easily search and refine our inventory
            based on your preferences, such as category, price, brand, and more
          </p>
        </div>

        <FilterGroup />
      </div>
    </div>
    <div className="bg-blue-50">
      <div className="container mx-auto px-4 py-8 pt-2">
        <AntdThemeProvider>
          <List
            // grid={{
            //   gutter: 16,
            //   xs: 1,
            //   sm: 2,
            //   md: 4,
            //   lg: 4,
            //   xl: 6,
            //   xxl: 3,
            // }}
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 10,
            }}
            dataSource={data}
            footer={
              <div>
                <b>ant design</b> footer part
              </div>
            }
            renderItem={(item) => (
              <List.Item
                className="bg-white"
                key={item.title}
                actions={[
                  <IconText
                    icon={StarOutlined}
                    text="156"
                    key="list-vertical-star-o"
                  />,
                  <IconText
                    icon={LikeOutlined}
                    text="156"
                    key="list-vertical-like-o"
                  />,
                  <IconText
                    icon={MessageOutlined}
                    text="2"
                    key="list-vertical-message"
                  />,
                ]}
                extra={
                  <img
                    className="object-cover rounded-xl h-80 w-96"
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }
              >
                <List.Item.Meta />
                <div className="px-4 py-3">
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      $149
                    </p>
                  </div>
                  <h3 className="text-xl font-bold text-gray-400 mr-3 uppercase">
                    Brand
                  </h3>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Product Name
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                    <div className="pt-2 rounded-lg text-start">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Milage
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        25,000
                      </p>
                    </div>
                    <div className="pt-2 rounded-lg text-start">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Year
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        2010
                      </p>
                    </div>
                    <div className="pt-2 rounded-lg text-start">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Engine
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        1500
                      </p>
                    </div>
                    <div className="pt-2 rounded-lg text-start">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Transmission
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Auto
                      </p>
                    </div>
                    <div className="pt-2 rounded-lg text-start">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Fuel
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Petrol
                      </p>
                    </div>
                    <div className="pt-2 rounded-lg text-start">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Seats
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">7</p>
                    </div>
                    <div className="pt-2 rounded-lg text-start">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Drive
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        AWD
                      </p>
                    </div>
                    <div className="pt-2 rounded-lg text-start">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Color
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">7</p>
                    </div>
                  </div>
                </div>
              </List.Item>
            )}
          />
        </AntdThemeProvider>
      </div>
    </div>
  </>
);

export default ListView;
