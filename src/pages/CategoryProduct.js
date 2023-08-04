import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/CategoryProductStyles.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";
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
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3 category">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} result found </h6>
        <div className="col-md-9 ">
        
          <div className="flex flex-wrap flex-row ">
            {products?.map((p) => (
           
              <div  class="  gap-6 p-6  ">
              <div class="rounded-md bg-gray-100 p-3 shadow-lg border border-gray-200 hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
           <a href="#">
             <div class="relative flex items-end overflow-hidden rounded-xl">
               <img className='h-72 w-72' src={`/api/v1/product/product-photo/${p._id}`}alt="Hotel Photo" />
              
             </div>
     
             <div class="mt-1 p-2">
               <h2 class="text-slate-700">{p.name}</h2>
               <p class="mt-1 text-sm text-slate-400"  onClick={() => navigate(`/product/${p.slug}`)}>More details</p>
     
               <div class="mt-3 flex items-end justify-between">
                   <p class="text-lg font-bold text-gray-800">
                   {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                       })}
                   </p>
     
                 <div class="flex items-center space-x-1.5 rounded-lg bg-gray-800 px-4 py-3 text-white duration-100 hover:bg-gray-600">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                   </svg>
     
                   <button class="text-sm "  onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}>Add to cart</button>
                 </div>
               </div>
             </div>
           </a>
         </div>
             </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;