import { useQuery } from "@tanstack/react-query";
import { getCars } from "../services/api";

const useQueryCars = () => {
  const {
    data: cars,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["Cars"],
    queryFn: getCars,
  });

  return { cars, error, isLoading };
};

export default useQueryCars;
