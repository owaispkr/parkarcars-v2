export type CarFilter = {
  maker?: string;
  model?: string;
  bodyType?: string;
  fuelType?: string;
  transmission?: string;
  engineFrom?: string;
  engineTo?: string;
  priceFrom?: string;
  priceTo?: string;
  yearFrom?: string;
  yearTo?: string;
};

export const initialCarFilterValues: CarFilter = {
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
