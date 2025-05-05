import { FC } from "react";

const FeaturedProductDetails: FC = () => {
  return (
    <>
      {" "}
      <div className="grid grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-0">
        <div className="bg-white pt-2 rounded-lg text-start">
          <p className="text-gray-600 text-sm font-semibold leading-relaxed">
            Milage
          </p>
          <p className="text-black text-sm leading-relaxed">25,000</p>
        </div>
        <div className="bg-white pt-2 rounded-lg text-start">
          <p className="text-gray-600 text-sm font-semibold leading-relaxed">
            Year
          </p>
          <p className="text-black text-sm leading-relaxed">2010</p>
        </div>
        <div className="bg-white pt-2 rounded-lg text-start">
          <p className="text-gray-600 text-sm font-semibold leading-relaxed">
            Engine
          </p>
          <p className="text-black text-sm leading-relaxed">1500</p>
        </div>
        <div className="bg-white pt-2 rounded-lg text-start">
          <p className="text-gray-600 text-sm font-semibold leading-relaxed">
            Transmission
          </p>
          <p className="text-black text-sm leading-relaxed">Auto</p>
        </div>
        <div className="bg-white pt-2 rounded-lg text-start">
          <p className="text-gray-600 text-sm font-semibold leading-relaxed">
            Fuel
          </p>
          <p className="text-black text-sm leading-relaxed">Petrol</p>
        </div>
        <div className="bg-white pt-2 rounded-lg text-start">
          <p className="text-gray-600 text-sm font-semibold leading-relaxed">
            Seats
          </p>
          <p className="text-black text-sm leading-relaxed">7</p>
        </div>
        <div className="bg-white pt-2 rounded-lg text-start">
          <p className="text-gray-600 text-sm font-semibold leading-relaxed">
            Drive
          </p>
          <p className="text-black text-sm leading-relaxed">AWD</p>
        </div>
        <div className="bg-white pt-2 rounded-lg text-start">
          <p className="text-gray-600 text-sm font-semibold leading-relaxed">
            Color
          </p>
          <p className="text-black text-sm leading-relaxed">7</p>
        </div>
      </div>
    </>
  );
};

export default FeaturedProductDetails;
