import React from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { List, Space } from "antd";
import AntdThemeProvider from "../../../providers/themeProvider/AntdThemeProvider";
import { useNavigate } from "react-router-dom";

type Props = {
  data: any[];
};

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const CarListView: React.FC<Props> = ({ data }) => {
  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  console.log(data);
  const navigate = useNavigate();
  return (
    <AntdThemeProvider>
      <div className="container mx-auto px-4 py-8 pt-2 rounded-xl">
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
            onChange: () => {},
            pageSize: 10,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              className="bg-white cursor-pointer"
              key={item.title}
              onClick={() => navigate("/details/2")}
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
                  src={
                    item.gallery?.split(",", 1)[0] ?? "/assets/Makers/honda.jpg"
                  }
                />
              }
            >
              <List.Item.Meta />
              <div className="px-4 py-3">
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    {`${currencyFormat.format(item.price)}`}
                  </p>
                </div>
                <h3 className="text-xl font-bold text-gray-400 mr-3 uppercase">
                  {`${item.maker}`}
                </h3>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {`${item.model}`} {`${item.package}`}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                  <div className="pt-2 rounded-lg text-start">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Milage
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {`${item.odometer}`}
                    </p>
                  </div>
                  <div className="pt-2 rounded-lg text-start">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Year
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {`${item.year}`}
                    </p>
                  </div>
                  <div className="pt-2 rounded-lg text-start">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Engine
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {`${item.engine}`}
                    </p>
                  </div>
                  <div className="pt-2 rounded-lg text-start">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Transmission
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {`${item.transmission}`}
                    </p>
                  </div>
                  <div className="pt-2 rounded-lg text-start">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Fuel
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {`${item.fuelType}`}
                    </p>
                  </div>
                  <div className="pt-2 rounded-lg text-start">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Seats
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">{`${item.seats}`}</p>
                  </div>
                  <div className="pt-2 rounded-lg text-start">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Drive
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">{`${item.drive}`}</p>
                  </div>
                  <div className="pt-2 rounded-lg text-start">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Color
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">{`${item.color}`}</p>
                  </div>
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
    </AntdThemeProvider>
  );
};

export default CarListView;
