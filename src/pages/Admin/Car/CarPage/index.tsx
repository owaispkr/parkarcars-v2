import { Input } from "antd";
import SelectSearch from "../../../../components/Common/SelectSearch/SelectSearch";
import { makersOptions } from "../../../../Data";
import AntdThemeProvider from "../../../../providers/themeProvider/AntdThemeProvider";
import TextArea from "antd/es/input/TextArea";
import Dragger from "antd/es/upload/Dragger";

const CarPage = () => {
  return (
    <>
      <AntdThemeProvider>
        <header className="bg-blue-900 text-white text-center py-12">
          <h1 className="text-4xl font-bold m-8">Car upload form</h1>
        </header>
        <div className="container mx-auto flex justify-center items-center w-screen p-5 gap-5">
          <div className="mx-14 w-full bg-blue-50 my-10 border-2 border-blue-100 rounded-lg">
            <div className="p-8">
              <div className="flex gap-3">
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Make</h3>
                  <SelectSearch
                    options={makersOptions}
                    handleChange={(_maker) => {}}
                  />
                </div>
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Model
                  </h3>
                  <SelectSearch options={[]} handleChange={(_maker) => {}} />
                </div>
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Body type
                  </h3>
                  <SelectSearch options={[]} handleChange={(_maker) => {}} />
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Fuel type
                  </h3>
                  <SelectSearch
                    options={makersOptions}
                    handleChange={(_maker) => {}}
                  />
                </div>
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Transmission
                  </h3>
                  <SelectSearch options={[]} handleChange={(_maker) => {}} />
                </div>
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Engine
                  </h3>
                  <SelectSearch options={[]} handleChange={(_maker) => {}} />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Price
                  </h3>
                  <Input size="large" type="number" placeholder="Price" />
                </div>
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Year</h3>
                  <Input size="large" type="number" placeholder="Year" />
                </div>
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Seat</h3>
                  <Input size="large" type="number" placeholder="Seat" />
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Color
                  </h3>
                  <SelectSearch options={[]} handleChange={(_maker) => {}} />
                </div>
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Odometer
                  </h3>
                  <Input size="large" type="number" placeholder="Odometer" />
                </div>
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Stock #
                  </h3>
                  <Input size="large" type="number" placeholder="Stock #" />
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

              <div className="flex gap-3">
                <div className="w-full p-2 rounded-lg  text-start">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Features
                  </h3>
                  <Dragger>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload. Strictly prohibited
                      from uploading company data or other banned files.
                    </p>
                  </Dragger>
                </div>
              </div>

              <div className="text-center rounded-lg mt-16">
                <button className="inline-block border-2 border-blue-800 text-gray-800 hover:bg-blue-800 hover:text-white px-8 py-3 rounded-full transition duration-300">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </AntdThemeProvider>
    </>
  );
};

export default CarPage;
