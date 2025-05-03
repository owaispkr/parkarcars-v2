import { useState } from "react";
import { useParams } from "react-router-dom";
import Gallery from "./Gallery";
import MilageSVG from "../../../components/SVG/Milage";
import BodyTypeSVG from "../../../components/SVG/BodyType";
import FuelTypeSVG from "../../../components/SVG/FuelType";
import TransmissionSVG from "../../../components/SVG/Transmission";
import SeatSVG from "../../../components/SVG/Seat";
import { Calendar } from "antd";
import CalendarSVG from "../../../components/SVG/Calendar";

const data = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
];

const ProductDetail = () => {
  const params = useParams();
  const [coverImage, setCoverImage] = useState<string>(data[0]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const ChangeImage = (url: string) => {
    setCoverImage(url);
  };

  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-2/3 px-4 mb-8">
              <img
                src={coverImage}
                alt="Product"
                className="w-full h-auto rounded-lg shadow-md mb-4"
                id="mainImage"
                onClick={() => setOpenModal(!openModal)}
              />
              <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                <img
                  src={data[0]}
                  alt="Thumbnail 1"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => ChangeImage(data[0])}
                />
                <img
                  src={data[1]}
                  alt="Thumbnail 2"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => ChangeImage(data[1])}
                />
                <img
                  src={data[2]}
                  alt="Thumbnail 3"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => ChangeImage(data[2])}
                />
                <img
                  src={data[3]}
                  alt="Thumbnail 4"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => ChangeImage(data[3])}
                />
              </div>
            </div>

            <div className="w-full md:w-1/3 px-4">
              <div className="flex space-x-4 mb-6">
                <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  Wishlist
                </button>
              </div>
              <h2 className="text-3xl font-bold mb-2">TOYOTA Aqua S Package</h2>
              <p className="text-gray-600 mb-4">SKU: WH1000XM4</p>
              <div className="mb-4">
                <span className="text-2xl font-bold mr-2">$12,000</span>
                <span className="text-xl text-gray-500 line-through">
                  $12,500
                </span>
              </div>

              <div className="flex justify-start gap-2 flex-wrap p-0">
                <span className="flex items-center gap-2 bg-white rounded-full px-3 py-1 text-md font-semibold text-gray-600">
                  <MilageSVG />
                  150,152 km
                </span>
                <span className="flex items-center gap-2 bg-white rounded-full px-3 py-1 text-md font-semibold text-gray-600">
                  <BodyTypeSVG />
                  Hatchback
                </span>
                <span className="flex items-center gap-2 bg-white rounded-full px-3 py-1 text-md font-semibold text-gray-600">
                  <FuelTypeSVG />
                  Hybrid
                </span>
                <span className="flex items-center gap-2 bg-white rounded-full px-3 py-1 text-md font-semibold text-gray-600">
                  <TransmissionSVG />
                  Automatic
                </span>
                <span className="flex items-center gap-2 bg-white rounded-full px-3 py-1 text-md font-semibold text-gray-600">
                  <CalendarSVG /> 2015
                </span>
                <span className="flex items-center gap-2 bg-white rounded-full px-3 py-1 text-md font-semibold text-gray-600">
                  <SeatSVG /> 5
                </span>
                <span className="flex items-center gap-2 bg-white rounded-full px-3 py-1 text-md font-semibold text-gray-600">
                  Color:
                  <button
                    style={{ backgroundColor: "red" }}
                    className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red"
                  ></button>
                </span>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                <div className="flex justify-start gap-2 flex-wrap p-0">
                  <span className="shrink-0 rounded-full bg-blue-500 px-3 text-md font-medium tracking-tight text-white">
                    Power Mirrors
                  </span>
                  <span className="shrink-0 rounded-full bg-blue-500 px-3 text-md font-medium tracking-tight text-white">
                    FM Radio
                  </span>
                  <span className="shrink-0 rounded-full bg-blue-500 px-3 text-md font-medium tracking-tight text-white">
                    Navigation System
                  </span>
                  <span className="shrink-0 rounded-full bg-blue-500 px-3 text-md font-medium tracking-tight text-white">
                    Back Camera
                  </span>
                  <span className="shrink-0 rounded-full bg-blue-500 px-3 text-md font-medium tracking-tight text-white">
                    Power Steering
                  </span>
                  <span className="shrink-0 rounded-full bg-blue-500 px-3 text-md font-medium tracking-tight text-white">
                    Air Bags
                  </span>
                  <span className="shrink-0 rounded-full bg-blue-500 px-3 text-md font-medium tracking-tight text-white">
                    Power Windows
                  </span>
                  <span className="shrink-0 rounded-full bg-blue-500 px-3 text-md font-medium tracking-tight text-white">
                    Keyless Entry
                  </span>
                  <span className="shrink-0 rounded-full bg-blue-500 px-3 text-md font-medium tracking-tight text-white">
                    Power Windows
                  </span>
                  <span className="shrink-0 rounded-full bg-blue-500 px-3 text-md font-medium tracking-tight text-white">
                    Fog Lights
                  </span>
                  <span className="shrink-0 rounded-full bg-blue-500 px-3 text-md font-medium tracking-tight text-white">
                    Cruise Control
                  </span>
                  <span className="shrink-0 rounded-full bg-blue-500 px-3 text-md font-medium tracking-tight text-white">
                    Push Start
                  </span>
                  <span className="shrink-0 rounded-full bg-blue-500 px-3 text-md font-medium tracking-tight text-white">
                    Lane Assistance
                  </span>
                  <span className="shrink-0 rounded-full bg-blue-500 px-3 text-md font-medium tracking-tight text-white">
                    Air Condition
                  </span>
                  <span className="shrink-0 rounded-full bg-blue-500 px-3 text-md font-medium tracking-tight text-white">
                    Spoiler
                  </span>
                  <span className="shrink-0 rounded-full bg-blue-500 px-3 text-md font-medium tracking-tight text-white">
                    Power Seat
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="galleryModal"
        data-dialog-backdrop="modal"
        data-dialog-backdrop-close="true"
        className={`${
          openModal ? "block" : "hidden"
        } overflow-y-auto overflow-x-${
          openModal ? "block" : "hidden"
        } fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full `}
      >
        <Gallery openModalObj={[setOpenModal]} />
      </div>
    </>
  );
};

export default ProductDetail;
