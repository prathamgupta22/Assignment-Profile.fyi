import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cartpage from "./pages/Cartpage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BuyMore from "./pages/BuyMore";
import Productpage from "./pages/Productpage";

const App = () => {
  return (
    <>
      <ToastContainer position="top-center" autoClose={500} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/buymore" element={<BuyMore />} />
      </Routes>
    </>
  );
};

export default App;
