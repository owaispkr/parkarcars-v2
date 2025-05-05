import { Input } from "antd";
import SelectDropdown from "../Common/SelectDropdown/SelectDropdown";
import AntdThemeProvider from "../../providers/themeProvider/AntdThemeProvider";

const FilterGroup = () => {
  return (
    <AntdThemeProvider>
      <div className="grid grid-cols-1 bg-white gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {/* //#region Make */}
          <div className="bg-white p-4 md:p-8 md:pb-0 rounded-lg  text-start">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Make</h3>
            <SelectDropdown
              options={[{ label: "All", value: "All" }]}
              value={"All"}
              handleChange={() => console.log("selected")}
            />
          </div>
          {/* //#region Make end */}
          {/* //#region Model */}
          <div className="bg-white p-4 md:p-8 md:pb-0 rounded-lg  text-start">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Model</h3>
            <SelectDropdown
              options={[{ label: "All", value: "All" }]}
              value={"All"}
              handleChange={() => console.log("selected")}
            />
          </div>
          {/* //#region Model end */}
          {/* //#region Body Type */}
          <div className="bg-white p-4 md:p-8 md:pb-0 rounded-lg  text-start">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Body type</h3>
            <SelectDropdown
              options={[{ label: "All", value: "All" }]}
              value={"All"}
              handleChange={() => console.log("selected")}
            />
          </div>
          {/* //#region Body Type */}

          {/* //#region Steering */}
          <div className="bg-white p-4 md:p-8 md:pb-0 rounded-lg  text-start">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Steering</h3>
            <SelectDropdown
              options={[{ label: "All", value: "All" }]}
              value={"All"}
              handleChange={() => console.log("selected")}
            />
          </div>
          {/* //#region Steering end */}

          {/* //#region Transmission */}
          <div className="bg-white p-4 md:p-8 md:pb-0 rounded-lg  text-start">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Transmission
            </h3>
            <SelectDropdown
              options={[{ label: "All", value: "All" }]}
              value={"All"}
              handleChange={() => console.log("selected")}
            />
          </div>
          {/* //#region Transmission end */}

          {/* //#region Price */}
          <div className="bg-white p-4 md:p-8 md:pb-0 rounded-lg  text-start">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Price</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-4">
              <div>
                <Input size="large" placeholder="From" />
              </div>
              <div>
                <Input size="large" placeholder="To" />
              </div>
            </div>
          </div>
          {/* //#region Price end */}

          {/* //#region Engine size */}
          <div className="bg-white p-4 md:p-8 md:pb-0 rounded-lg  text-start">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Engine</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-4">
              <div>
                <Input size="large" placeholder="Min" />
              </div>
              <div>
                <Input size="large" placeholder="Max" />
              </div>
            </div>
          </div>
          {/* //#region Engine size end */}

          {/* //#region Year */}
          <div className="bg-white p-4 md:p-8 md:pb-0 rounded-lg  text-start">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Year</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-4">
              <div>
                <Input size="large" placeholder="Min" />
              </div>
              <div>
                <Input size="large" placeholder="Max" />
              </div>
            </div>
          </div>
          {/* //#region Engine Year */}
        </div>
        <div className="bg-white pt-0 p-8 rounded-lg  text-end">
          <a
            href="/listing"
            className="inline-block border-2 border-blue-800 text-gray-800 hover:bg-blue-800 hover:text-white px-8 py-3 rounded-full transition duration-300"
          >
            Search
          </a>
        </div>
      </div>
    </AntdThemeProvider>
  );
};

export default FilterGroup;
