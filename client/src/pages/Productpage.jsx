import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import axios from "axios";
import Spinner from "../components/Spinner";

const Productpage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  // Fetch products
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response?.data.products);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <>{loading ? <Spinner /> : <ProductList products={products} />}</>;
};

export default Productpage;
