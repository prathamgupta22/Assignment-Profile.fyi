import React from "react";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const CartItem = ({ product }) => {
  const [cart, setCart] = useCart();
  const removeCartItem = (pid) => {
    try {
      const myCart = [...cart];
      // Find the index of the item to remove
      const index = myCart.findIndex((item) => item.id === pid);
      if (index !== -1) {
        // Remove the item at the found index
        myCart.splice(index, 1);
        // Update the cart in the context
        setCart(myCart);
        localStorage.setItem("cart", JSON.stringify(myCart));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-md shadow-gray-300">
      <div className="flex gap-4">
        <div className="w-28 h-28 ">
          <img
            src={product.images[0]}
            className="w-full h-full object-contain"
            alt={product.title}
          />
        </div>
        <div className="flex flex-col ">
          <div>
            <h3 className="text-base font-bold text-gray-700">
              {product.title}
            </h3>
          </div>
          <div className="mt-auto flex items-center gap-4">
            <button
              type="button"
              className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
              onClick={() => {
                let newCart = [...cart];
                if (product.quantity == 1) {
                  removeCartItem(product.id);
                } else {
                  let index = cart.findIndex((ele) => ele.id == product.id);
                  newCart[index].quantity--;
                  localStorage.setItem("cart", JSON.stringify(newCart));
                  setCart(newCart);
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-2 fill-white"
                viewBox="0 0 124 124"
              >
                <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
              </svg>
            </button>
            <p className="font-bold text-sm leading-[18px]  text-gray-500">
              Quantity : {product.quantity}
            </p>
            <button
              type="button"
              className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full"
              onClick={() => {
                let newCart = [...cart];
                let index = cart.findIndex((ele) => ele.id == product.id);
                newCart[index].quantity++;
                localStorage.setItem("cart", JSON.stringify(newCart));
                setCart(newCart);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-2 fill-white"
                viewBox="0 0 42 42"
              >
                <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="ml-auto flex flex-col">
        <button
          className="flex items-start gap-4 justify-end"
          onClick={() => removeCartItem(product.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 cursor-pointer fill-gray-400 inline-block"
            viewBox="0 0 24 24"
          >
            <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" />
          </svg>
        </button>
        <h3 className="text-base font-bold text-gray-800 mt-auto">
          ₹{(product.price * product.quantity).toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default CartItem;
