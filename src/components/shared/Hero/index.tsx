import React from "react";

function Hero() {
  return (
    <div className="bg-gray-900">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:py-24 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl">
              Discover Your Dream Destination
            </h2>
            <p className="mt-4 text-xl leading-7 text-gray-300">
              Explore breathtaking locations, experience unique cultures, and
              create lifelong memories.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
