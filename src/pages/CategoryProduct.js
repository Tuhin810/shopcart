import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/CategoryProductStyles.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";
import BookCard from "../components/shared/bookCard/BookCard";
import { IconArrowRight, IconBook } from "@tabler/icons-react";
const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useCart();
  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `https://shopcart-backend-4f2a.onrender.com/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
     <div className="  pt-24 sm:px-20">
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

        </div>

        <div className="items-center justify-center md:justify-between   md:flex pt-10">
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
    </Layout>
  );
};

export default CategoryProduct;