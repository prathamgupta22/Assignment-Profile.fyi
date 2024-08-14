import React from "react";
import { useNavigate } from "react-router-dom";

const BuyMore = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[88vh] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg shadow-yellow-50 text-center">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">
          Thank You for Shopping with Us!
        </h1>
        <p className="text-gray-600 mb-6">
          We appreciate your purchase. If you’d like to explore more items,
          click the button below.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#f0c040] text-white px-6 py-3 rounded-lg hover:bg-gradient-to-tr from-yellow-200 to-yellow-400"
        >
          Buy More Items
        </button>
      </div>
    </div>
  );
};

export default BuyMore;
