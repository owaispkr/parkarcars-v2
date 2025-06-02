import React from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { List, Space } from "antd";
import AntdThemeProvider from "../../../providers/themeProvider/AntdThemeProvider";
import { useNavigate } from "react-router-dom";
import { currencyFormat, formatPrice } from "../../../utils";

type Props = {
  data: any[];
};

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const CarListing: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  //#region Getting filters from query parameters

  //#endregion

  return (
    <AntdThemeProvider>
      <div className="container mx-auto px-4 py-8 pt-2 rounded-xl">
        <p className="text-md text-start text-gray-600 max-w-3xl py-5">
          {`${data.length} car(s) found`}
        </p>
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
              key={item.id}
              onClick={() => navigate(`/details/${item.identifier}`)}
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
                <div className="px-4 h-full max-h-full flex items-center">
                  <img
                    className="object-cover rounded-xl h-60 w-96"
                    alt="logo"
                    src={
                      item.gallery?.split(",", 1)[0] ??
                      "/assets/Makers/honda.jpg"
                    }
                  />
                </div>
              }
            >
              <List.Item.Meta />
              <div className="px-4">
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    {`${currencyFormat.format(item.price ?? 0)}`}
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
                    <p className="text-gray-600 font-semibold text-sm leading-relaxed">
                      Milage
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {`${formatPrice(item.odometer)} km`}
                    </p>
                  </div>
                  <div className="pt-2 rounded-lg text-start">
                    <p className="text-gray-600 font-semibold text-sm leading-relaxed">
                      Year
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {`${item.year}`}
                    </p>
                  </div>
                  <div className="pt-2 rounded-lg text-start">
                    <p className="text-gray-600 font-semibold text-sm leading-relaxed">
                      Engine
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {`${item.engine}`}
                    </p>
                  </div>
                  <div className="pt-2 rounded-lg text-start">
                    <p className="text-gray-600 font-semibold text-sm leading-relaxed">
                      Transmission
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {`${item.transmission}`}
                    </p>
                  </div>
                  <div className="pt-2 rounded-lg text-start">
                    <p className="text-gray-600 font-semibold text-sm leading-relaxed">
                      Fuel
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {`${item.fuelType}`}
                    </p>
                  </div>
                  <div className="pt-2 rounded-lg text-start">
                    <p className="text-gray-600 font-semibold text-sm leading-relaxed">
                      Seats
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">{`${item.seats}`}</p>
                  </div>
                  <div className="pt-2 rounded-lg text-start">
                    <p className="text-gray-600 font-semibold text-sm leading-relaxed">
                      Drive
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">{`${item.drive}`}</p>
                  </div>
                  <div className="pt-2 rounded-lg text-start">
                    <p className="text-gray-600 font-semibold text-sm leading-relaxed">
                      Color
                    </p>
                    <button
                      style={{ backgroundColor: item.color }}
                      className="w-6 h-6 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red"
                    ></button>
                    {/* <p className="text-gray-600 text-sm leading-relaxed">{`${item.color}`}</p> */}
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

export default CarListing;
