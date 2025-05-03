import { useState } from 'react';
import './index.css';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-lg py-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* <!-- Logo --> */}
          <a
            href="#"
            className="flex items-center text-primary hover:text-secondary"
          >
            {' '}
            <svg
              className="h-8 w-8 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707.707m12.728 0l.707.707M6.343 17.657l.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span className="text-2xl font-bold">MyBrand</span>
          </a>

          {/* <!-- Mobile Menu Button (Hidden on larger screens) --> */}
          <div className={isNavOpen ? 'md:block' : 'md:hidden'}>
            <button
              onClick={() => setIsNavOpen((prev) => !prev)}
              className="md:hidden text-white z-40 p-2 fixed top-2 right-4 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-8 h-8 relative flex justify-center items-center">
                <span
                  className={`absolute h-1 w-8 bg-yellow-500  rounded-full transform transition-all duration-300 ${
                    isNavOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  }`}
                ></span>

                <span
                  className={`absolute h-1 w-8 bg-yellow-500  rounded-full transition-all duration-300 ${
                    isNavOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>

                <span
                  className={`absolute h-1 w-8 bg-yellow-500  rounded-full transform transition-all duration-300 ${
                    isNavOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* <!-- Desktop Navigation (Hidden on smaller screens) --> */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Homeee
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li className="group relative">
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Services
                </a>
                {/* <!-- Dropdown Menu --> */}
                <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md py-2 mt-1 rounded-md w-48 transition-all duration-300">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Service 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Service 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Service 3
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md transition-colors duration-300"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* <!-- Mobile Menu (Hidden by default) --> */}
        <nav
          id="mobile-menu"
          className={
            isNavOpen
              ? 'block md:hidden bg-gray-50 border-t border-gray-200 top-16 fixed transition-height duration-300 ease-in-out w-full'
              : 'hidden'
          }
        >
          <ul className="px-4 py-2">
            <li>
              <a href="#" className="block py-2 hover:text-primary">
                Homeee
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-primary">
                Aboutss
              </a>
            </li>
            <li>
              <a
                href="#"
                id="services-dropdown-toggle"
                className="block py-2 hover:text-primary"
              >
                Services
              </a>
              {/* <!-- Mobile Dropdown --> */}
              <ul id="services-dropdown" className="hidden pl-4">
                <li>
                  <a href="#" className="block py-2 hover:text-primary">
                    Service 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 hover:text-primary">
                    Service 2
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 hover:text-primary">
                    Service 3
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-primary">
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 bg-primary hover:bg-secondary text-white rounded-md text-center transition-colors duration-300"
              >
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
                Explore the wonders of Australia
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From the iconic Sydney Opera House to the breathtaking Great
                Barrier Reef, Australia offers unforgettable experiences for
                every traveler. Plan your perfect Australian adventure with our
                expert guides.
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
                    Iconic cities & landmarks
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
                    Natural wonders & wildlife
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
                    Cultural experiences & local cuisine
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="inline-block border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-full transition duration-300"
              >
                View Destinations
              </a>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Sydney Opera House"
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

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Plan Your Australian Adventure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to create your perfect trip to the land
              down under.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center relative">
              <div className="w-16 h-16 bg-yellow-500 text-blue-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Choose Your Destinations
              </h3>
              <p className="text-gray-600">
                Select from our curated list of must-see Australian locations
                and attractions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center relative">
              <div className="w-16 h-16 bg-yellow-500 text-blue-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Customize Your Experience
              </h3>
              <p className="text-gray-600">
                Tailor your trip with experiences that match your interests and
                travel style.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center relative">
              <div className="w-16 h-16 bg-yellow-500 text-blue-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Book With Confidence
              </h3>
              <p className="text-gray-600">
                Secure your adventure with our flexible booking options and
                price guarantee.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center relative">
              <div className="w-16 h-16 bg-yellow-500 text-blue-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Enjoy Australia
              </h3>
              <p className="text-gray-600">
                Relax and enjoy your trip with 24/7 support from our local
                Australian experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                Brand
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                Product Name
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  $149
                </p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 1 - Ends Here  --> */}

        {/* <!--   ✅ Product card 2 - Starts Here 👇 --> */}
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                Brand
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                Product Name
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  $149
                </p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 2- Ends Here  --> */}

        {/* <!--   ✅ Product card 3 - Starts Here 👇 --> */}
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                Brand
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                Product Name
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  $149
                </p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 3 - Ends Here  --> */}

        {/* <!--   ✅ Product card 4 - Starts Here 👇 --> */}
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                Brand
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                Product Name
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  $149
                </p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 4 - Ends Here  --> */}

        {/* <!--   ✅ Product card 5 - Starts Here 👇 --> */}
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                Brand
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                Product Name
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  $149
                </p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 5 - Ends Here  --> */}

        {/* <!--   ✅ Product card 6 - Starts Here 👇 --> */}
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                Brand
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                Product Name
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  $149
                </p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 6 - Ends Here  --> */}
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Compare Our Popular Tours
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect Australian experience for your travel style and
              budget.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-4 text-left">Tour Package</th>
                  <th className="p-4 text-center">Duration</th>
                  <th className="p-4 text-center">Destinations</th>
                  <th className="p-4 text-center">Activities</th>
                  <th className="p-4 text-center">Price</th>
                  <th className="p-4 text-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4">
                    <div className="font-bold text-lg">Coastal Explorer</div>
                    <div className="text-gray-600">
                      Sydney, Gold Coast, Brisbane
                    </div>
                  </td>
                  <td className="p-4 text-center">7 Days</td>
                  <td className="p-4 text-center">3 Cities</td>
                  <td className="p-4 text-center">
                    Beach, City Tours, Wildlife
                  </td>
                  <td className="p-4 text-center font-bold">$1,299</td>
                  <td className="p-4 text-center">
                    <a
                      href="#"
                      className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      View Details
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4">
                    <div className="font-bold text-lg">Outback Adventure</div>
                    <div className="text-gray-600">
                      Alice Springs, Uluru, Katherine
                    </div>
                  </td>
                  <td className="p-4 text-center">10 Days</td>
                  <td className="p-4 text-center">5 Locations</td>
                  <td className="p-4 text-center">
                    Hiking, Cultural, Star Gazing
                  </td>
                  <td className="p-4 text-center font-bold">$2,199</td>
                  <td className="p-4 text-center">
                    <a
                      href="#"
                      className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      View Details
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4">
                    <div className="font-bold text-lg">Reef & Rainforest</div>
                    <div className="text-gray-600">
                      Cairns, Port Douglas, Daintree
                    </div>
                  </td>
                  <td className="p-4 text-center">8 Days</td>
                  <td className="p-4 text-center">4 Locations</td>
                  <td className="p-4 text-center">
                    Snorkeling, Hiking, Boat Tours
                  </td>
                  <td className="p-4 text-center font-bold">$1,799</td>
                  <td className="p-4 text-center">
                    <a
                      href="#"
                      className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      View Details
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4">
                    <div className="font-bold text-lg">Complete Australia</div>
                    <div className="text-gray-600">
                      Sydney, Melbourne, Uluru, Cairns
                    </div>
                  </td>
                  <td className="p-4 text-center">14 Days</td>
                  <td className="p-4 text-center">7+ Locations</td>
                  <td className="p-4 text-center">All-inclusive Experience</td>
                  <td className="p-4 text-center font-bold">$3,499</td>
                  <td className="p-4 text-center">
                    <a
                      href="#"
                      className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      View Details
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <img
            src="/api/placeholder/1920/600?text=Australia+Map+Outline"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready for the Adventure of a Lifetime?
            </h2>
            <p className="text-xl mb-8">
              Book your Australian journey today and save up to 20% on selected
              tours when you book before June.
            </p>
            <a
              href="#"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-xl px-10 py-4 rounded-full transition"
            >
              Book Your Adventure Now
            </a>
            <p className="mt-6 text-blue-200">
              No booking fees • Free cancellation • Best price guarantee
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
