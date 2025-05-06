import CarList from "./Cars/CarList";

export const BodyTypeList = [
  "All",
  "Hatchback",
  "Sedan",
  "Coupe",
  "Station wagon",
  "SUV",
];

export const FuelType = [
  "All",
  "Hybrid",
  "Petrol",
  "Diesel",
  "Electric",
  "Plug-in Hybrid",
];

export const Transmission = ["All", "Automatic", "Manual"];

export const EngineOptions = [
  { label: "All", value: "All" },
  { label: "1 ltr", value: "1" },
  { label: "2 ltr", value: "2" },
  { label: "3 ltr", value: "3" },
  { label: "4 ltr", value: "4" },
  { label: "5 ltr", value: "5" },
  { label: "6 ltr", value: "6" },
];

export const makersOptions = CarList.map((x) => {
  return { label: x.brand, value: x.brand };
});

export const BodyTypeOptions = BodyTypeList.map((x) => {
  return { label: x, value: x.replace(" ", "-") };
});

export const FuelTypeOptions = FuelType.map((x) => {
  return { label: x, value: x.replace(" ", "-") };
});

export const TransmissionOptions = FuelType.map((x) => {
  return { label: x, value: x.replace(" ", "-") };
});
