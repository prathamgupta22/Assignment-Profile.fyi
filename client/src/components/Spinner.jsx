import React from "react";
import loader from "../assets/loader.gif";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <img src={loader} alt={loader} height={150} width={150} />
    </div>
  );
};

export default Spinner;
