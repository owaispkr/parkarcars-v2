import React, { useState } from "react";
import FilterGroup from "../../../components/FilterGroup";
import useQueryCars from "../../../hooks/useQueryCars";
import CarListView from "./CarListView";
import {
  CarFilter,
  initialCarFilterValues,
} from "../../../types/app/CarFilter";
import { useNavigate } from "react-router-dom";

const ListView: React.FC = () => {
  const navigate = useNavigate();
  const { cars } = useQueryCars();
  const [carFilters, setCarFilters] = useState<CarFilter>(
    initialCarFilterValues
  );

  const onFilterGroupSerchClick = () => {
    // Build query string
    const query = new URLSearchParams();
    Object.entries(carFilters).forEach(([key, value]) => {
      if (value) query.set(key, value);
    });

    navigate(`/listing?${query.toString()}`);
  };

  return (
    <>
      <header className="bg-blue-900 text-white text-center py-12">
        <h1 className="text-4xl font-bold m-8">Inventory</h1>
      </header>
      <div className="pt-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Quick search
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use the filters below to easily search and refine our inventory
              based on your preferences, such as category, price, brand, and
              more
            </p>
          </div>

          <FilterGroup
            onFilterGroupSerchClick={onFilterGroupSerchClick}
            filter={carFilters}
            setFilter={setCarFilters}
          />
        </div>
      </div>
      <div className="bg-blue-50">
        {cars && cars?.length > 0 && <CarListView data={cars} />}
      </div>
    </>
  );
};

export default ListView;
