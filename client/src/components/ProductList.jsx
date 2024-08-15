import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <>
      <div className="text-center text-3xl w-[25%] mx-auto  border-b-2 border-gray-200 mb-14 pb-10 ">
        <p className="text-gray-600 font-semibold pt-24">Products</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-12 w-[80%] mx-auto my-5 xl:w-[75%]">
        {products?.splice(0, 12).map((product) => (
          <ProductCard key={product.id} product={product} id={product.id} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
