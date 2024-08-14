import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import banner from "../assets/banner.jpg";

const Home = () => {
  return (
    <div className="relative min-h-screen pt-16 overflow-hidden">
      <img
        src={banner}
        alt="Banner"
        className="object-cover w-full h-full absolute inset-0"
      />
      <div className="absolute top-40 left-12 lg:top-48 lg:left-32 w-full h-full z-10">
        <h1 className="text-white text-4xl font-bold">Welcome to Our Site!</h1>
        <div className="mt-6 mx-20">
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-4 border-2 border-black text-black bg-transparent font-semibold rounded hover:bg-black hover:text-white transition duration-300"
          >
            Shop Now <FontAwesomeIcon icon={faBagShopping} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
