import MilageSVG from "../../../components/SVG/Milage";
import BodyTypeSVG from "../../../components/SVG/BodyType";
import FuelTypeSVG from "../../../components/SVG/FuelType";
import TransmissionSVG from "../../../components/SVG/Transmission";
import SeatSVG from "../../../components/SVG/Seat";
import { PhotoProvider, PhotoView } from "react-photo-view";
import CalendarSVG from "../../../components/SVG/Calendar";
import "react-photo-view/dist/react-photo-view.css";

const data = [
  "https://trademe.tmcdn.co.nz/photoserver/plus/2208667384.jpg",
  "https://trademe.tmcdn.co.nz/photoserver/plus/2208667403.jpg",
  "https://trademe.tmcdn.co.nz/photoserver/plus/2208667428.jpg",
  "https://trademe.tmcdn.co.nz/photoserver/plus/2208667444.jpg",
  "https://trademe.tmcdn.co.nz/photoserver/plus/2208667458.jpg",
  "https://trademe.tmcdn.co.nz/photoserver/plus/2208667297.jpg",
  "https://trademe.tmcdn.co.nz/photoserver/plus/2208667314.jpg",
  "https://trademe.tmcdn.co.nz/photoserver/plus/2208667324.jpg",
  "https://trademe.tmcdn.co.nz/photoserver/plus/2208667349.jpg",
];

const ProductDetail = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-2 py-8">
            TOYOTA Aqua S Package
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
                  {data.map((item, index) => (
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
    </>
  );
};

export default ProductDetail;
