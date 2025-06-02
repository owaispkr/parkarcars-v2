import { Cars } from "../types/api/forms/Cars";
import { CarFilter } from "../types/app/CarFilter";

const filterCars = (cars: Cars[], filters: CarFilter) => {
  console.log(filters.yearFrom);
  return cars.filter((car) => {
    return (
      (!filters.maker ||
        filters.maker === "All" ||
        car.maker === filters.maker) &&
      (!filters.model ||
        filters.model === "All" ||
        car.model === filters.model) &&
      (!filters.bodyType ||
        filters.bodyType === "All" ||
        car.bodyType === filters.bodyType) &&
      (!filters.fuelType ||
        filters.fuelType === "All" ||
        car.fuelType === filters.fuelType) &&
      (!filters.transmission ||
        filters.transmission === "All" ||
        car.transmission === filters.transmission) &&
      (!filters.engineFrom ||
        Number(car.engine) >= Number(filters.engineFrom)) &&
      (!filters.engineTo || Number(car.engine) <= Number(filters.engineTo)) &&
      (!filters.priceFrom || Number(car.price) >= Number(filters.priceFrom)) &&
      (!filters.priceTo || Number(car.price) <= Number(filters.priceTo)) &&
      (!filters.yearFrom || Number(car.year) >= Number(filters.yearFrom)) &&
      (!filters.yearTo || Number(car.year) <= Number(filters.yearTo))
    );
  });
};

export default filterCars;
