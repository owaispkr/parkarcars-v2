import { useState } from "react";
import LoginSVG from "../../components/SVG/Login";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {" "}
      <header className="bg-white shadow-lg py-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* <!-- Logo --> */}
          <a
            href="#"
            className="flex items-center text-primary hover:text-secondary"
          >
            <span className="text-2xl font-bold">Parkar Cars</span>
          </a>

          {/* <!-- Mobile Menu Button (Hidden on larger screens) --> */}
          <div className={isNavOpen ? "md:block" : "md:hidden"}>
            <button
              onClick={() => setIsNavOpen((prev) => !prev)}
              className="md:hidden text-white z-40 p-2 fixed top-2 right-4 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-8 h-8 relative flex justify-center items-center">
                <span
                  className={`absolute h-1 w-8 bg-yellow-500  rounded-full transform transition-all duration-300 ${
                    isNavOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                ></span>

                <span
                  className={`absolute h-1 w-8 bg-yellow-500  rounded-full transition-all duration-300 ${
                    isNavOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>

                <span
                  className={`absolute h-1 w-8 bg-yellow-500  rounded-full transform transition-all duration-300 ${
                    isNavOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
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
                  href="/"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li className="group relative">
                <a
                  href="/listing"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Inventory
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-primary transition-colors duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-md px-2 py-0 rounded-full transition"
                >
                  <LoginSVG />
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* <!-- Mobile Menu (Hidden by default) --> */}
        <div
          id="mobile-menu"
          className={
            isNavOpen
              ? "block md:hidden h-full bg-gray-50 border-t border-gray-200 top-16 fixed transition-height duration-300 ease-in-out w-full"
              : "hidden"
          }
        >
          <div className="flex justify-between items-center mx-4 mt-4">
            <h2 className="text-2xl font-extrabold text-gray-900">Menu</h2>
          </div>
          <div>
            <ul className="px-4 py-4 w-full divide-y divide-gray-200">
              <li>
                <a href="/" className="block py-4 hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/listing"
                  id="services-dropdown-toggle"
                  className="block py-4 hover:text-primary"
                >
                  Inventory
                </a>
              </li>
              <li>
                <a href="/about" className="block py-4 hover:text-primary">
                  About
                </a>
              </li>

              <li>
                <a href="/contact" className="block py-4 hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="bottom-0 fixed px-4 py-2 w-full">
            <div className="bg-blue-800 pt-0 rounded-lg text-center w-full">
              <a
                href="/login"
                className="inline-block border-2 border-blue-800 text-gray-800 hover:bg-blue-800 text-white px-8 py-3 rounded-full transition duration-300 w-full"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
