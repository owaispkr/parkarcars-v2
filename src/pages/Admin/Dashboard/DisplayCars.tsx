import { toast } from "react-toastify";
import useQueryCars from "../../../hooks/useQueryCars";
import CarListView from "../../Product/Listing/CarListView";

const DisplayCars = () => {
  const { cars, error, isLoading } = useQueryCars();

  if (error) {
    toast.error(error.message);
  }

  if (isLoading) {
    return <></>;
  }

  return <>{cars && cars?.length > 0 && <CarListView data={cars} />}</>;
};

export default DisplayCars;
