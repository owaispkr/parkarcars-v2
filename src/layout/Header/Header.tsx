import { useState } from 'react';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {' '}
      <header className="bg-white shadow-lg py-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* <!-- Logo --> */}
          <a
            href="#"
            className="flex items-center text-primary hover:text-secondary"
          >
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
                  href="#"
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
              <a href="/" className="block py-2 hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a
                href="/listing"
                id="services-dropdown-toggle"
                className="block py-2 hover:text-primary"
              >
                Inventory
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-primary">
                About
              </a>
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
    </>
  );
};

export default Header;
