import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import { useSearch } from "../context/search";
import { useNavigate } from "react-router-dom";
import SearchInput from "../components/Form/SearchInput";
const Search = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div >
        <div className="w-full bg-gray-800   py-3 px-20 font-bold mb-5 "> 
        <h1 className="text-center text-xl flex text-gray-100">Search Resuts <div className="text-center">
            {values?.results.length < 1
              ? "No Products Found"
              : `(Found ${values?.results.length})`}
          </div></h1>
          <SearchInput/>
       
        </div>
          
         
          <div className="col-md-9 px-10">
          <div className="flex flex-wrap flex-row justify-between  mt-2">
            {values?.results.map((p) => (
            
              <div  class="  gap-6 p-6 md:p-1 md:mb-4">
              <div class="rounded-md bg-gray-100 p-3 shadow-lg border border-gray-200 hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
           <a href="#">
             <div class="relative flex items-end overflow-hidden rounded-xl">
               <img className='h-[23rem] w-72 md:h-[21rem] md:w-[16rem]' src={`/api/v1/product/product-photo/${p._id}`}alt="Hotel Photo" />
              
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
            ))}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
