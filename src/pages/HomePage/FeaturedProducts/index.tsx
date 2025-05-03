import FeaturedProductDetails from "./FeaturedProductDetails";

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured products
          </h2>
        </div>
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
          <div className="w-96 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="/details/2">
              <img
                src="/assets/Makers/toyota.jpg"
                alt="Product"
                className="h-80 w-96 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-96">
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    $14,900
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      $19,900
                    </p>
                  </del>
                </div>
                <span className="text-gray-400 font-bold mr-3 uppercase text-md">
                  TOYOTA
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Aqua S Package
                </p>

                <FeaturedProductDetails />
              </div>
            </a>
          </div>
          {/* <!--   🛑 Product card 1 - Ends Here  --> */}

          {/* <!--   ✅ Product card 2 - Starts Here 👇 --> */}
          <div className="w-96 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="/details/2">
              <img
                src="/assets/Makers/honda.jpg"
                alt="Product"
                className="h-80 w-96 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-96">
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    $15,000
                  </p>
                </div>
                <span className="text-gray-400 font-bold mr-3 uppercase text-md">
                  HONDA
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Fit
                </p>

                <FeaturedProductDetails />
              </div>
            </a>
          </div>
          {/* <!--   🛑 Product card 2- Ends Here  --> */}

          {/* <!--   ✅ Product card 3 - Starts Here 👇 --> */}
          <div className="w-96 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="/details/2">
              <img
                src="/assets/Makers/mazda.jpg"
                alt="Product"
                className="h-80 w-96 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-96">
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    $17,900
                  </p>
                </div>
                <span className="text-gray-400 font-bold mr-3 uppercase text-md">
                  MAZDA
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Atenza
                </p>

                <FeaturedProductDetails />
              </div>
            </a>
          </div>
          {/* <!--   🛑 Product card 3 - Ends Here  --> */}

          {/* <!--   ✅ Product card 4 - Starts Here 👇 --> */}
          <div className="w-96 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="/details/2">
              <img
                src="/assets/Makers/nissan.jpg"
                alt="Product"
                className="h-80 w-96 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-96">
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    $34,900
                  </p>
                </div>
                <span className="text-gray-400 font-bold mr-3 uppercase text-md">
                  NISSAN
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  X-Trail
                </p>

                <FeaturedProductDetails />
              </div>
            </a>
          </div>
          {/* <!--   🛑 Product card 4 - Ends Here  --> */}

          {/* <!--   ✅ Product card 5 - Starts Here 👇 --> */}
          <div className="w-96 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="/details/2">
              <img
                src="/assets/Makers/subaru.jpg"
                alt="Product"
                className="h-80 w-96 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-96">
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    $29,000
                  </p>
                </div>
                <span className="text-gray-400 font-bold mr-3 uppercase text-md">
                  SUBARU
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Impreza
                </p>

                <FeaturedProductDetails />
              </div>
            </a>
          </div>
          {/* <!--   🛑 Product card 5 - Ends Here  --> */}

          {/* <!--   ✅ Product card 6 - Starts Here 👇 --> */}
          <div className="w-96 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="/details/2">
              <img
                src="/assets/Makers/honda.jpg"
                alt="Product"
                className="h-80 w-96 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-96">
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    $12,950
                  </p>
                </div>
                <span className="text-gray-400 font-bold mr-3 uppercase text-md">
                  HONDA
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Fit
                </p>

                <FeaturedProductDetails />
              </div>
            </a>
          </div>
          {/* <!--   🛑 Product card 6 - Ends Here  --> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
