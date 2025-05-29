import { useRef, useState } from "react";
import AntdThemeProvider from "../../../../providers/themeProvider/AntdThemeProvider";
import { Button, Steps } from "antd";
import UploadCarInformation from "./UploadCarInformation";
import UploadGallery from "./UploadGallery";
import { Cars } from "../../../../types/api/forms/Cars";

const UploadCarPage = () => {
  const childButtonRef = useRef<HTMLButtonElement>(null);
  const [current, setCurrent] = useState<number>(0);
  const [insertedCar, setInsertedCar] = useState<Cars | null>();

  const triggerChildClick = () => {
    if (childButtonRef.current) {
      childButtonRef.current?.click(); // triggers child button click
    }
  };

  const postCarInformationSuccess = (_insertedCar: Cars[] | null) => {
    if (_insertedCar && _insertedCar?.length > 0) {
      setInsertedCar(_insertedCar[0]);
    }
    setCurrent(current + 1);
  };

  const steps = [
    {
      title: "Car details",
      content: (
        <UploadCarInformation
          ref={childButtonRef}
          postCarInformationSuccess={postCarInformationSuccess}
        />
      ),
    },
    {
      title: "Gallery",
      content: (
        <>{insertedCar ? <UploadGallery newCar={insertedCar} /> : <></>}</>
      ),
    },
  ];

  const next = () => {
    if (current === 0) {
      triggerChildClick();
    } else {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",

    marginTop: 16,
  };

  return (
    <>
      <AntdThemeProvider>
        <header className="bg-blue-900 text-white text-center py-12">
          <h1 className="text-4xl font-bold m-8">Car upload form</h1>
        </header>
        <div className="container mx-auto my-8">
          <Steps current={current} items={items} />
          <div style={contentStyle}>{steps[current].content}</div>
          <div style={{ marginTop: 24 }}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}

            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </div>
      </AntdThemeProvider>
    </>
  );
};

export default UploadCarPage;
