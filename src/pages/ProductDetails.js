import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";

import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import ProductDetailsSection from "../components/shared/profuctDetails/ProductDetails";
import BookCard from "../components/shared/bookCard/BookCard";
import { IconArrowRight, IconBook } from "@tabler/icons-react";

const ProductDetails = () => {
  const [cart, setCart] = useCart();
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://shopcart-backend-4f2a.onrender.com/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `https://shopcart-backend-4f2a.onrender.com/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <ProductDetailsSection product={product} />
    

      <div className="  pt-10 bg-white ">
      <div className="px-20 flex justify-between items-center pb-8 rounded-md shadow-sm">
          <div>
            <h4 className="text-2xl font-bold text-gray-800 flex items-center">
              <IconBook size={24} className="mr-2" />
              Similar Products
            </h4>
            <h6 className="-mt-2 pl-8   text-sm text-gray-600">
            {relatedProducts.length >0 ?
          <>
            {relatedProducts?.length} Books found
          </>
            :
            (
              <p className="text-center">( No Similar Products found)</p>
            )}
            </h6>
          </div>

          {/* Right Section: View More */}
          <div className="group flex items-center pr-8 gap-2 text-gray-800 cursor-pointer  transition">
            <span className="text-sm font-medium group-hover:text-red-500">
              View More
            </span>
            <div className=" flex items-center justify-center w-10 h-10 bg-black rounded-full text-white group-hover:text-red-500 overflow-hidden">
              <IconArrowRight
                size={16}
                className="transform transition-all duration-300 group-hover:-translate-x-1 group-hover:translate-x-0.5"
              />
            </div>
          </div>
        </div>
       

          <div className="flex flex-wrap flex-row justify-start  px-20 ">
            {relatedProducts?.map((p) => (
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

export default ProductDetails;
