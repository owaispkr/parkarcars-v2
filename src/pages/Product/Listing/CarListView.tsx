import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CarFilter } from "../../../types/app/CarFilter";
import filterCars from "../../../utils/filterCars";
import { Cars } from "../../../types/api/forms/Cars";
import CarListing from "./CarListing";

type Props = {
  data: any[];
};

const CarListView: React.FC<Props> = ({ data }) => {
  const { search } = useLocation();
  const [filteredCars, setFilteredCars] = useState<Cars[]>(data);

  //#region Getting filters from query parameters
  const queryParams = new URLSearchParams(search);

  const filter: CarFilter = {
    maker: queryParams.get("maker") || undefined,
    model: queryParams.get("model") || undefined,
    bodyType: queryParams.get("bodyType") || undefined,
    fuelType: queryParams.get("fuelType") || undefined,
    transmission: queryParams.get("transmission") || undefined,
    engineFrom: queryParams.get("engineFrom") || undefined,
    engineTo: queryParams.get("engineTo") || undefined,
    priceFrom: queryParams.get("priceFrom") || undefined,
    priceTo: queryParams.get("priceTo") || undefined,
    yearFrom: queryParams.get("yearFrom") || undefined,
    yearTo: queryParams.get("yearTo") || undefined,
  };

  useEffect(() => {
    const _cars = filterCars(data, filter);

    console.log(_cars);
    setFilteredCars(_cars);
  }, [
    filter.maker,
    filter.model,
    filter.bodyType,
    filter.fuelType,
    filter.transmission,
    filter.engineFrom,
    filter.engineTo,
    filter.priceFrom,
    filter.priceTo,
    filter.yearFrom,
    filter.yearTo,
  ]);

  //#endregion

  return <CarListing data={filteredCars ?? []} />;
};

export default CarListView;
