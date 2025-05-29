import { Form, FormProps, Input } from "antd";
import SelectSearch from "../../../../components/Common/SelectSearch/SelectSearch";
import {
  BodyTypeOptions,
  FuelTypeOptions,
  makersOptions,
  TransmissionOptions,
} from "../../../../Data";
import TextArea from "antd/es/input/TextArea";
import { Cars } from "../../../../types/api/forms/Cars";
import CarList from "../../../../Data/Cars/CarList";
import { FC, useState } from "react";
import { supabase } from "../../../../providers/supabase/supabaseClient";
import { toast } from "react-toastify";

type Props = {
  ref: any;
  postCarInformationSuccess: (_insertedCar: any[] | any) => void;
};

const initialValues: Cars = {
  maker: "Toyota",
  model: "Camry",
  package: "L Package",
  bodyType: "Sedan",
  fuelType: "Hybrid",
  transmission: "Automatic",
  engine: "2400",
  price: 150000,
  odometer: "27000",
  year: 2019,
  color: "Red",
  stockNumber: "22515asd5151",
  seats: 5,
  drive: "AWD",
  steering: "LHS",
};

const UploadCarInformation: FC<Props> = ({
  ref,
  postCarInformationSuccess,
}) => {
  const [form] = Form.useForm();
  const [maker, setMaker] = useState<string>("");

  const onFinish: FormProps<Cars>["onFinish"] = async (values) => {
    console.log("Success:", values);

    const { data, error } = await supabase
      .from("Cars")
      .insert([values])
      .select();

    if (error) {
      console.log(error);
    }

    setTimeout(() => {
      toast.info("Car information uploaded!");
      postCarInformationSuccess(data);
    }, 1000);
  };

  const onFinishFailed: FormProps<Cars>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        form={form}
        name="car-upload"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={initialValues}
      >
        <div className="flex justify-center w-full p-5 gap-5">
          <div className="mx-14 w-full bg-blue-50 my-10 border-2 border-blue-100 rounded-lg">
            <div className="p-8">
              <div className="flex gap-3">
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Make</h3>
                  <Form.Item<Cars>
                    name="maker"
                    style={{ width: "100%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please select maker",
                      },
                    ]}
                  >
                    <SelectSearch
                      options={makersOptions.filter((x) => x.label !== "All")}
                      handleChange={(_maker) => {
                        setMaker(_maker);
                        form.setFieldsValue({ maker: _maker });
                        form.setFieldsValue({ model: "" });
                      }}
                    />
                  </Form.Item>
                </div>
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Model
                  </h3>
                  <Form.Item<Cars>
                    name="model"
                    style={{ width: "100%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please select model",
                      },
                    ]}
                  >
                    <SelectSearch
                      value={form?.getFieldValue("model")}
                      options={
                        CarList.find((x) => x.brand === maker)?.models.map(
                          (x) => {
                            return { label: x, value: x };
                          }
                        ) ?? []
                      }
                      handleChange={(value) => {
                        form.setFieldsValue({ model: value });
                      }}
                    />
                  </Form.Item>
                </div>
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Package
                  </h3>

                  <Form.Item<Cars> name="package" style={{ width: "100%" }}>
                    <Input size="large" type="text" placeholder="Package" />
                  </Form.Item>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Body type
                  </h3>
                  <Form.Item<Cars>
                    name="bodyType"
                    style={{ width: "100%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please select body type",
                      },
                    ]}
                  >
                    <SelectSearch
                      options={BodyTypeOptions.filter((x) => x.label !== "All")}
                      handleChange={(value) => {
                        form.setFieldsValue({ bodyType: value });
                      }}
                    />
                  </Form.Item>
                </div>
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Fuel type
                  </h3>
                  <Form.Item<Cars>
                    name="fuelType"
                    style={{ width: "100%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please select fuel type",
                      },
                    ]}
                  >
                    <SelectSearch
                      options={FuelTypeOptions.filter((x) => x.label !== "All")}
                      handleChange={(value) => {
                        form.setFieldsValue({ fuelType: value });
                      }}
                    />
                  </Form.Item>
                </div>
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Transmission
                  </h3>
                  <Form.Item<Cars>
                    name="transmission"
                    style={{ width: "100%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please select transmission",
                      },
                    ]}
                  >
                    <SelectSearch
                      options={TransmissionOptions.filter(
                        (x) => x.label !== "All"
                      )}
                      handleChange={(value) => {
                        form.setFieldsValue({ transmission: value });
                      }}
                    />
                  </Form.Item>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Engine
                  </h3>
                  <Form.Item<Cars>
                    name="engine"
                    style={{ width: "100%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please select engine",
                      },
                    ]}
                  >
                    <Input size="large" type="number" placeholder="Engine" />
                  </Form.Item>
                </div>

                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Price
                  </h3>
                  <Form.Item<Cars>
                    name="price"
                    style={{ width: "100%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please select price",
                      },
                    ]}
                  >
                    <Input size="large" type="number" placeholder="Price" />
                  </Form.Item>
                </div>

                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Odometer
                  </h3>
                  <Form.Item<Cars>
                    name="odometer"
                    style={{ width: "100%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please select odometer",
                      },
                    ]}
                  >
                    <Input size="large" type="number" placeholder="Odometer" />
                  </Form.Item>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Year</h3>
                  <Form.Item<Cars>
                    name="year"
                    style={{ width: "100%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please select year",
                      },
                    ]}
                  >
                    <Input size="large" type="number" placeholder="Year" />
                  </Form.Item>
                </div>
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Color
                  </h3>
                  <Form.Item<Cars>
                    name="color"
                    style={{ width: "100%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please select color",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="Color" />
                  </Form.Item>
                </div>

                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Stock #
                  </h3>
                  <Form.Item<Cars>
                    name="stockNumber"
                    style={{ width: "100%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please select stockNumber",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="Stock Number" />
                  </Form.Item>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Drive
                  </h3>
                  <Form.Item<Cars>
                    name="drive"
                    style={{ width: "100%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please select drive",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="Drive" />
                  </Form.Item>
                </div>
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Seats
                  </h3>
                  <Form.Item<Cars>
                    name="seats"
                    style={{ width: "100%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please select seats",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="Seats" type="number" />
                  </Form.Item>
                </div>

                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Steering
                  </h3>
                  <Form.Item<Cars>
                    name="steering"
                    style={{ width: "100%" }}
                    rules={[
                      {
                        required: true,
                        message: "Please select Steering",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="Steering" />
                  </Form.Item>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Features
                  </h3>
                  <TextArea
                    name="textarea"
                    id="text"
                    className="h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300"
                  >
                    Message
                  </TextArea>
                </div>
              </div>

              <button
                ref={ref}
                type="submit"
                value="login"
                id="login"
                className="mt-6 hidden w-full shadow-xl bg-gradient-to-tr from-blue-900 to-blue-400 hover:to-blue-700 text-blue-100 py-2 rounded-md text-lg tracking-wide transition duration-1000"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default UploadCarInformation;
