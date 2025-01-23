import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center">
      <main className="container mx-auto px-4 text-center pt-12 md:pt-20">
        <h1
          className="text-6xl lg:text-8xl font-bold mb-6"
          aria-label="404 - Page not found"
        >
          4<span className="inline-block">0</span>4
        </h1>
        <p className="text-xl lg:text-2xl mb-8">
          Oops! The page you&rsquo;re looking is not found.
        </p>
        <Link
          to={"/"}
          className="inline-block py-3 px-6 bg-[#F0DECA] font-semibold rounded-full hover:bg-[#F9EEDD] transition duration-300 mb-12 focus:outline-none focus:ring-2"
          aria-label="Go back to home page"
        >
          Take Me Home.
        </Link>
        <div
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
          aria-hidden="true"
        ></div>
      </main>
    </div>
  );
};

export default NotFound;
