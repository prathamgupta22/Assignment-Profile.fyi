import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

const Cartpage = () => {
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);

  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((ele) => (total = total + Number(ele.price * ele.quantity)));
    setTotalPrice(total.toFixed(2));
  };

  useEffect(() => {
    getTotalPrice();
  }, [cart, setCart]);

  const checkOut = () => {
    try {
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/buymore");
    } catch (error) {
      console.log(error);
    }
  };
  // Convert totalPrice to a number for proper calculations
  const totalPriceNum = parseFloat(totalPrice);

  return (
    <div className="font-sans max-w-4xl md:max-w-[60%] mx-auto p-4 ">
      <div className="text-center text-3xl w-[25%] mx-auto border-b-2 border-gray-200 pb-4 pt-20">
        <p className="text-gray-600 font-semibold ">Your Cart</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className="flex flex-col gap-8 space-y-4 w-full">
          {cart.length > 0 ? (
            cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))
          ) : (
            <p className=" w-full text-3xl font-bold font-sans text-center text-gray-600">
              Your cart is empty 🛒
            </p>
          )}
        </div>

        {cart.length > 0 && (
          <div className="bg-white h-max md:w-[50%] flex-grow-1 shadow-sm shadow-gray-700">
            <div className="text-center text-md mx-auto border-b-4 w-[25%] py-2">
              <p className="text-gray-500  font-semibold">Summary</p>
            </div>
            <div className="text-gray-800 space-y-4 px-4">
              <div className="flex flex-wrap gap-4 text-sm">
                <p>Subtotal</p>
                <p className="ml-auto font-bold">₹{totalPrice}</p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <p>Shipping</p>
                <p className="ml-auto font-bold">₹40.00</p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <p>Tax</p>
                <p className="ml-auto font-bold">₹4.00</p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <p>Discount </p>
                <p className="ml-auto font-bold">20% off</p>
              </div>
              <hr className="border-gray-300" />
              <div className="flex gap-4 text-base font-bold">
                <p>Total</p>
                <p className="ml-auto">
                  ₹
                  {(totalPriceNum + 44 - (totalPriceNum + 44) * 0.2).toFixed(2)}
                </p>
              </div>
            </div>
            <button
              className="w-full mt-4 py-2 text-white  bg-[#f0c040] hover:bg-red-500 font-semibold"
              onClick={() => checkOut()}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cartpage;
