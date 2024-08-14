import React, { useState } from "react";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product, id }) => {
  const [cart, setCart] = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="border shadow-lg hover:shadow-2xl hover:shadow-gray-500 duration-500 ease-in-out transform transition-all hover:scale-105 bg-white flex flex-col gap-6">
      <div className="overflow-hidden rounded-lg">
        <img
          src={product.images[0]}
          alt={product.title}
          className="object-contain mx-auto h-40 transition-transform duration-300 transform hover:scale-110 p-2"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-sm  text-gray-800 text-center">
          {product.title.substring(0, 15)}
        </h3>
        <p className="text-gray-600 text-sm text-center font-semibold">
          ₹{product.price}
        </p>
        <button
          className="p-2 mt-4 w-full bg-[#f0c040] text-white font-semibold "
          onClick={() => {
            let res = cart.some((ele) => ele.id == id);
            let newCart = [...cart];
            if (res) {
              let index = cart.findIndex((ele) => ele.id == id);
              newCart[index].quantity++;
              setCart(newCart);
              localStorage.setItem("cart", JSON.stringify(newCart));
              toast.success("Added to cart");
            } else {
              setCart([...cart, { ...product, quantity: quantity }]);
              localStorage.setItem(
                "cart",
                JSON.stringify([...cart, { ...product, quantity: quantity }])
              );
              toast.success("Added to Cart");
              console.log(product);
            }
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
