import "./index.css";
import FilterGroup from "../../components/FilterGroup";
import LogoHero from "./LogoHero";
import DisplayProducts from "./FeaturedProducts";
import FAQs from "./FAQs";

function App() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
                Welcome to Parkar Cars
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Your trusted destination for quality vehicles and exceptional
                service. Our website offers a seamless and user-friendly
                experience to help you browse our extensive inventory of new and
                pre-owned cars, trucks, and SUVs.
              </p>
              <ul className="space-y-6 mb-8">
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-200 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Where the Right Car Meets the Right Price
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-200 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13.24 7.289l-5.942 5.942a1.5 1.5 0 01-2.121 0l-2.121-2.121a1.5 1.5 0 012.121-2.121l1.061 1.061 4.882-4.882a1.5 1.5 0 012.121 2.121z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Driven by Trust. Powered by Quality
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-200 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Your Journey Starts Here
                  </span>
                </li>
              </ul>
              <a
                href="/listing"
                className="inline-block border-2 border-blue-800 text-gray-800 hover:bg-blue-800 hover:text-white px-8 py-3 rounded-full transition duration-300"
              >
                View our inventory
              </a>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10">
                <img
                  src="/assets/Home/home.png"
                  alt="home"
                  className="w-full rounded-lg shadow-xl"
                />
              </div>

              <div className="absolute -right-4 -bottom-8 -z-10">
                <div className="grid grid-cols-6 gap-2">
                  <div className="h-16 w-3 bg-blue-300 rounded-full"></div>
                  <div className="h-8 w-3 bg-green-500 rounded-full"></div>
                  <div className="h-12 w-3 bg-red-500 rounded-full"></div>
                  <div className="h-16 w-3 bg-yellow-500 rounded-full"></div>
                  <div className="h-10 w-3 bg-blue-500 rounded-full"></div>
                  <div className="h-6 w-3 bg-yellow-600 rounded-full"></div>

                  <div className="h-8 w-3 bg-blue-300 rounded-full"></div>
                  <div className="h-16 w-3 bg-green-500 rounded-full"></div>
                  <div className="h-10 w-3 bg-red-500 rounded-full"></div>
                  <div className="h-6 w-3 bg-yellow-500 rounded-full"></div>
                  <div className="h-12 w-3 bg-blue-500 rounded-full"></div>
                  <div className="h-8 w-3 bg-yellow-600 rounded-full"></div>

                  <div className="h-10 w-3 bg-blue-300 rounded-full"></div>
                  <div className="h-6 w-3 bg-green-500 rounded-full"></div>
                  <div className="h-12 w-3 bg-red-500 rounded-full"></div>
                  <div className="h-8 w-3 bg-yellow-500 rounded-full"></div>
                  <div className="h-16 w-3 bg-blue-500 rounded-full"></div>
                  <div className="h-10 w-3 bg-yellow-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoHero />

      <DisplayProducts />

      <section className="py-16 bg-blue-50">
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

          <FilterGroup />
        </div>
      </section>

      <FAQs />
    </>
  );
}

export default App;
