import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useCart } from "../../../context/cart";
import Layout from "../../Layout/Layout";
import { IconArrowRight } from "@tabler/icons-react";
import BookCard from "../bookCard/BookCard";
const CategoryProduct = ({topic}) => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useCart();
  useEffect(() => {
    getPrductsByCat();
  }, []);

  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `https://shopcart-backend-4f2a.onrender.com/api/v1/product/product-category/${topic}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="  pt-10 px-20">
      <div className="flex justify-between items-center px-4  rounded-md shadow-sm">
      {/* Left Section: Category and Total Results */}
      <div>
        <h4 className="text-2xl font-bold text-gray-800">Category - {category?.name}</h4>
        <h6 className="text-sm text-gray-600">{products?.length} Books in stock</h6>
      </div>

      {/* Right Section: View More */}
      <div className="flex items-center gap-2 text-blue-600 cursor-pointer hover:text-blue-800 transition">
        <span className="text-sm font-medium">View More</span>
        <IconArrowRight size={16} />
      </div>
    </div>
        <div className="col-md-9 ">
        
          <div className="flex flex-wrap flex-row py-10">
            {products?.map((p) => (
           
           <BookCard
           key={p.id} // Ensure a unique key for each item
           p={p}
           cart={cart}
           setCart={setCart}
           toast={toast}
           navigate={navigate}
         />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryProduct;