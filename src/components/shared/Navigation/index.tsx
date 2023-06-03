"use client";
import { useState } from "react";
import Link from "next/link";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold text-white cursor-pointer hover:bg-blend-lighten">
              <Link href="/" passHref>
                <span>Logo</span>
              </Link>
            </h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" passHref>
                  <span className="text-gray-300 hover:text-white hover:bg-gray-700 font-medium transition duration-300 ease-in-out py-2 px-4 rounded-full">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <span className="text-gray-300 hover:text-white hover:bg-gray-700 font-medium transition duration-300 ease-in-out py-2 px-4 rounded-full">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services" passHref>
                  <span className="text-gray-300 hover:text-white hover:bg-gray-700 font-medium transition duration-300 ease-in-out py-2 px-4 rounded-full">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <span className="text-gray-300 hover:text-white hover:bg-gray-700 font-medium transition duration-300 ease-in-out py-2 px-4 rounded-full">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={toggleMenu}
            >
              <svg
                className={`${
                  isOpen ? "hidden" : "block"
                } h-6 w-6 transition ease-in-out duration-300`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${
                  isOpen ? "block" : "hidden"
                } h-6 w-6 transition ease-in-out duration-300`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden transition duration-500 ease-in-out`}
      >
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <li>
            <Link href="/" passHref>
              <span className="block text-gray-300 hover:text-white hover:bg-gray-700 font-medium transition duration-300 ease-in-out py-2 px-4 rounded-full">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <span className="block text-gray-300 hover:text-white hover:bg-gray-700 font-medium transition duration-300 ease-in-out py-2 px-4 rounded-full">
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/services" passHref>
              <span className="block text-gray-300 hover:text-white hover:bg-gray-700 font-medium transition duration-300 ease-in-out py-2 px-4 rounded-full">
                Services
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <span className="block text-gray-300 hover:text-white hover:bg-gray-700 font-medium transition duration-300 ease-in-out py-2 px-4 rounded-full">
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
