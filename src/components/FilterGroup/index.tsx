import { Input } from "antd";
import SelectDropdown from "../Common/SelectDropdown/SelectDropdown";
import AntdThemeProvider from "../../providers/themeProvider/AntdThemeProvider";
import SelectSearch from "../Common/SelectSearch/SelectSearch";
import CarList from "../../Data/Cars/CarList";
import { useState } from "react";
import {
  BodyTypeOptions,
  EngineOptions,
  FuelTypeOptions,
  makersOptions,
  TransmissionOptions,
} from "../../Data";
import { CarFilter } from "../../types/app/CarFilter";

const initialFilterValues: CarFilter = {
  maker: "All",
  model: "All",
  bodyType: "All",
  fuelType: "All",
  transmission: "All",
  engineFrom: "All",
  engineTo: "All",
  priceFrom: "",
  priceTo: "",
  yearFrom: "",
  yearTo: "",
};

const maker = "maker";
const model = "model";
const bodyType = "bodyType";
const fuelType = "fuelType";
const transmission = "transmission";
const engineFrom = "engineFrom";
const engineTo = "engineTo";
const priceFrom = "priceFrom";
const priceTo = "priceTo";
const yearFrom = "yearFrom";
const yearTo = "yearTo";

const FilterGroup = () => {
  const [filter, setFilter] = useState<CarFilter>(initialFilterValues);

  const modelOptions = CarList.find(
    (x) => x.brand === filter.maker
  )?.models.map((x) => {
    return { label: x, value: x };
  });

  const onSelectionChange = (name: string, value: string) => {
    let _filters = {
      ...filter,
      [name]: value, // But override this one
    };

    if (name === maker) {
      _filters.model = "All";
    }

    setFilter(_filters);
  };

  console.log(filter);

  return (
    <AntdThemeProvider>
      <div className="grid grid-cols-1 bg-white gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {/* //#region Make */}
          <div className="bg-white p-4 md:p-8 md:pb-0 rounded-lg  text-start">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Make</h3>
            <SelectSearch
              options={makersOptions}
              value={filter.maker}
              handleChange={(_maker) => onSelectionChange(maker, _maker)}
            />
          </div>
          {/* //#region Make end */}

          {/* //#region Model */}
          <div className="bg-white p-4 md:p-8 md:pb-0 rounded-lg  text-start">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Model</h3>
            <SelectSearch
              options={modelOptions ?? []}
              value={filter.model}
              handleChange={(_model) => onSelectionChange(model, _model)}
            />
          </div>
          {/* //#region Model end */}

          {/* //#region Body Type */}
          <div className="bg-white p-4 md:p-8 md:pb-0 rounded-lg  text-start">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Body type</h3>
            <SelectDropdown
              options={BodyTypeOptions}
              value={filter.bodyType}
              handleChange={(_bodyType) =>
                onSelectionChange(bodyType, _bodyType)
              }
            />
          </div>
          {/* //#region Body Type */}

          {/* //#region Fuel Type */}
          <div className="bg-white p-4 md:p-8 md:pb-0 rounded-lg  text-start">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Fuel type</h3>
            <SelectDropdown
              options={FuelTypeOptions}
              value={filter.fuelType}
              handleChange={(_fuelType) =>
                onSelectionChange(fuelType, _fuelType)
              }
            />
          </div>
          {/* //#region Fuel Type */}

          {/* //#region Transmission */}
          <div className="bg-white p-4 md:p-8 md:pb-0 rounded-lg  text-start">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Transmission
            </h3>
            <SelectDropdown
              options={TransmissionOptions}
              value={filter.transmission}
              handleChange={(_transmission) =>
                onSelectionChange(transmission, _transmission)
              }
            />
          </div>
          {/* //#region Transmission end */}

          {/* //#region Engine */}
          <div className="bg-white p-4 md:p-8 md:pb-0 rounded-lg  text-start">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Engine</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-4">
              <div>
                <SelectDropdown
                  options={EngineOptions}
                  value={filter.engineFrom}
                  handleChange={(_engineFrom) =>
                    onSelectionChange(engineFrom, _engineFrom)
                  }
                />
              </div>
              <div>
                <SelectDropdown
                  options={EngineOptions}
                  value={filter.engineTo}
                  handleChange={(_engineTo) =>
                    onSelectionChange(engineTo, _engineTo)
                  }
                />
              </div>
            </div>
          </div>
          {/* //#region Engine end */}

          {/* //#region Price */}
          <div className="bg-white p-4 md:p-8 md:pb-0 rounded-lg  text-start">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Price</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-4">
              <div>
                <Input
                  size="large"
                  onBlur={(event) => {
                    onSelectionChange(priceFrom, event.target.value);
                  }}
                  type="number"
                  placeholder="Min"
                />
              </div>
              <div>
                <Input
                  size="large"
                  type="number"
                  onBlur={(event) => {
                    onSelectionChange(priceTo, event.target.value);
                  }}
                  placeholder="Max"
                />
              </div>
            </div>
          </div>
          {/* //#region Price end */}

          {/* //#region Year */}
          <div className="bg-white p-4 md:p-8 md:pb-0 rounded-lg  text-start">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Year</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-4">
              <div>
                <Input
                  size="large"
                  onBlur={(event) => {
                    onSelectionChange(yearFrom, event.target.value);
                  }}
                  type="number"
                  placeholder="Min"
                />
              </div>
              <div>
                <Input
                  size="large"
                  type="number"
                  onBlur={(event) => {
                    onSelectionChange(yearTo, event.target.value);
                  }}
                  placeholder="Max"
                />
              </div>
            </div>
          </div>
          {/* //#region Engine Year */}
        </div>
        <div className="bg-white pt-0 p-8 rounded-lg text-end">
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
