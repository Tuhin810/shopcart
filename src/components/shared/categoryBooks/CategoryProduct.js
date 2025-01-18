import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useCart } from "../../../context/cart";
import Layout from "../../Layout/Layout";
import { IconArrowRight, IconBook } from "@tabler/icons-react";
import BookCard from "../bookCard/BookCard";
import Spinner from "../../Spinner";
const CategoryProduct = ({ topic }) => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  const [cart, setCart] = useCart();
  useEffect(() => {
    getPrductsByCat();
  }, []);

  const getPrductsByCat = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://shopcart-backend-4f2a.onrender.com/api/v1/product/product-category/${topic}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="  pt-10 sm:px-20">
        <div className="flex justify-between items-center px-4  rounded-md shadow-sm">
          {/* Left Section: Category and Total Results */}
          <div>
            <h4 className="text-2xl font-bold text-gray-800 flex items-center">
              <IconBook size={24} className="mr-2" />
              {category?.name} Books
            </h4>
            <h6 className="-mt-2 pl-8   text-sm text-gray-600">
              {products?.length} Books in stock
            </h6>
          </div>

          {/* Right Section: View More */}
          <Link
            to={`/category/${category?.slug}`}
            className="hidden md:flex group flex items-center pr-8 gap-2 text-gray-800 cursor-pointer  transition"
          >
            <span className="text-sm font-medium group-hover:text-yellow-500">
              View More
            </span>
            <div
              className=" flex items-center justify-center w-10 h-10 bg-black rounded-full text-white
             group-hover:text-yellow-200 overflow-hidden"
            >
              <IconArrowRight
                size={16}
                className="transform transition-all duration-300 group-hover:-translate-x-1 group-hover:translate-x-0.5"
              />
            </div>
          </Link>
        </div>
        {loading && (
          <>
            <div class="text-center mx-auto">
              <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
              <h2 class="text-zinc-900  mt-4">Loading...</h2>
              <p class="text-zinc-600 dark:text-zinc-400">
                Your adventure is about to begin in few seconds
              </p>
            </div>
          </>
        )}
        <div className="items-center justify-center md:justify-between   md:flex pt-10">
          {products?.slice(-6).map((p) => (
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
    </>
  );
};

export default CategoryProduct;
