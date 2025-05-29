import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DisplayCars from "./DisplayCars";

const Dashboard = () => {
  const navigate = useNavigate();

  const notify = () => toast.info("Wow so easy !");
  return (
    <div className="bg-blue-50">
      <div className="container mx-auto flex justify-center items-center w-screen p-5 gap-5">
        <div className="h-full w-2/3 flex-1 flex flex-col flex-grow">
          <div className="w-full p-5 flex gap-5 flex-wrap h-fit">
            <div
              onClick={() => {
                navigate("/car-form");
              }}
              className="inline-block cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-xl transition h-[100px] flex justify-center items-center lg:flex-1 lg:min-w-[300px] w-full rounded-xl"
            >
              Add new car
            </div>
            <div
              className="h-[100px] lg:flex-1 bg-red-400 lg:min-w-[300px] w-full rounded-xl"
              onClick={notify}
            >
              notify
            </div>
            <div className="h-[100px] lg:flex-1 bg-red-400 lg:min-w-[300px] w-full rounded-xl"></div>
          </div>
        </div>
      </div>

      <DisplayCars />
    </div>
  );
};

export default Dashboard;
