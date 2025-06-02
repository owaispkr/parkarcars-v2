import MilageSVG from "../../../components/SVG/Milage";
import BodyTypeSVG from "../../../components/SVG/BodyType";
import FuelTypeSVG from "../../../components/SVG/FuelType";
import TransmissionSVG from "../../../components/SVG/Transmission";
import SeatSVG from "../../../components/SVG/Seat";
import CalendarSVG from "../../../components/SVG/Calendar";
import SteeringSVG from "../../../components/SVG/Steering";
import DriveSVG from "../../../components/SVG/Drive";
import EngineSVG from "../../../components/SVG/Engine";
import "react-photo-view/dist/react-photo-view.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../../providers/supabase/supabaseClient";
import { toast } from "react-toastify";
import FullScreenLoader from "../../../components/Common/FullScreenLoader";
import { currencyFormat, formatPrice } from "../../../utils";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ProductDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState<any>();
  const [loading, setLoading] = useState(true);

  console.log(id);

  useEffect(() => {
    if (id) fetchCar();
  }, [id]);

  const fetchCar = async () => {
    if (id) {
      setLoading(true);
      const { data, error } = await supabase
        .from("Cars")
        .select("*")
        .eq("identifier", id)
        .single(); // `.single()` ensures you get one object

      if (error) {
        toast.error(error.message);
        setCar(null);
      } else {
        setCar(data);
        console.log(data);
      }

      setLoading(false);
    }
  };

  return (
    <>
      {" "}
      {loading && <FullScreenLoader />}
      {car && (
        <div className="bg-gray-100">
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-2 py-8">
              {`${car.maker} ${car.model} ${car.year} ${car.package}`}
            </h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-2/3 px-4 mb-8">
                {/* <CarouselContainer data={data} /> */}
                <PhotoProvider
                  speed={() => 800}
                  easing={(type) =>
                    type === 2
                      ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                      : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                  }
                >
                  <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                    {car.gallery
                      .split(",")
                      .map((item: string, index: number) => (
                        <PhotoView key={index} src={item}>
                          <img src={item} alt="" />
                        </PhotoView>
                      ))}
                  </div>
                </PhotoProvider>
              </div>

              <div className="w-full md:w-1/3 px-4">
                <div className="flex space-x-4 mb-6">
                  <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                    Add to Cart
                  </button>
                  <button className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                    Wishlist
                  </button>
                </div>

                <p className="text-gray-600 mb-4">
                  {`SKU: ${car?.stockNumber}`}{" "}
                </p>
                <div className="mb-4">
                  <span className="text-2xl font-bold mr-2">
                    {currencyFormat.format(car.price)}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    {currencyFormat.format(car.price)}
                  </span>
                </div>

                <div className="flex justify-start gap-2 flex-wrap p-0">
                  <span className="flex items-center gap-2 bg-white rounded-full px-3 py-1 text-md font-semibold text-gray-600">
                    <MilageSVG />
                    {`${formatPrice(car.odometer)} km`}
                  </span>
                  <span className="flex items-center gap-2 bg-white rounded-full px-3 py-1 text-md font-semibold text-gray-600">
                    <EngineSVG />
                    {car.engine}
                  </span>
                  <span className="flex items-center gap-2 bg-white rounded-full px-3 py-1 text-md font-semibold text-gray-600">
                    <BodyTypeSVG />
                    {car.bodyType}
                  </span>
                  <span className="flex items-center gap-2 bg-white rounded-full px-3 py-1 text-md font-semibold text-gray-600">
                    <FuelTypeSVG />
                    {car.fuelType}
                  </span>
                  <span className="flex items-center gap-2 bg-white rounded-full px-3 py-1 text-md font-semibold text-gray-600">
                    <TransmissionSVG />
                    {car.transmission}
                  </span>
                  <span className="flex items-center gap-2 bg-white rounded-full px-3 py-1 text-md font-semibold text-gray-600">
                    <CalendarSVG /> {car.year}
                  </span>
                  <span className="flex items-center gap-2 bg-white rounded-full px-3 py-1 text-md font-semibold text-gray-600">
                    <SeatSVG /> {car.seats}
                  </span>
                  <span className="flex items-center gap-2 bg-white rounded-full px-3 py-1 text-md font-semibold text-gray-600">
                    <SteeringSVG /> {car.steering}
                  </span>
                  <span className="flex items-center gap-2 bg-white rounded-full px-3 py-1 text-md font-semibold text-gray-600">
                    <DriveSVG /> {car.drive}
                  </span>

                  <span className="flex items-center gap-2 bg-white rounded-full px-3 py-1 text-md font-semibold text-gray-600">
                    Color:
                    <button
                      style={{ backgroundColor: car.color }}
                      className="w-6 h-6 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red"
                    ></button>
                  </span>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                  <div className="flex justify-start gap-2 flex-wrap p-0">
                    {car.features
                      .split(";")
                      .map((feature: string, index: number) => {
                        return (
                          <span
                            key={index}
                            className="shrink-0 rounded-full bg-blue-500 px-3 text-md font-medium tracking-tight text-white"
                          >
                            {feature}
                          </span>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
