import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";

import { useCart } from "../context/cart";
import toast from "react-hot-toast";


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
        `/api/v1/product/get-product/${params.slug}`
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
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="row bg-gray-300 ">
      <div class="min-w-screen  min-h-screen  flex items-center px-5 pb-5 pt-4  overflow-hidden relative">
    <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div class="relative">
                    <img src={`/api/v1/product/product-photo/${product._id}`} class="w-72 relative z-10 shadow-xl" alt=""/>
                    <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
                <div class="mb-10">
                    <h1 class="font-bold uppercase text-2xl mb-5">{product?.category?.name} <br/>{product.name}</h1>
                    <p class="text-sm">{product.description}Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis... <a href="#" class="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE <i class="mdi mdi-arrow-right"></i></a></p>
                </div>
                <div>
                    <div class="inline-block align-bottom mr-5">
                        <span class="text-2xl leading-none align-baseline">$</span>
                        <span class="font-bold text-5xl leading-none align-baseline">{product?.price-1}</span>
                        <span class="text-2xl leading-none align-baseline">.99</span>
                    </div>
                    <div class="inline-block align-bottom">
                        <button onClick={() => {
                        setCart([...cart, product]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, product])
                        );
                        toast.success("Item Added to cart");
                      }} class="bg-gray-800 
                         text-gray-100 
                        rounded-full px-10 py-2 font-semibold"><i class="mdi mdi-cart -ml-2 mr-2"></i>
                         ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        
        
      </div>
  
      <div className="  pt-10 bg-gray-200 ">
        <div className="w-full bg-gray-800 text-gray-100 py-3 px-20 font-bold mb-10 text-xl"> 
          <h4>Similar Products </h4><p>{relatedProducts.length < 1 && (
          <p className="text-center">( No Similar Products found)</p>
        )}</p>
        </div>
     
       
        <div className="col-md-9 ">
        <div className="flex flex-wrap flex-row justify-between  px-20 ">
          {relatedProducts?.map((p) => (
            <div className=" m-2" key={p._id}>
              <div  class="  gap-6 p-6 md:p-1 md:mb-4">
              <div class="rounded-md bg-gray-100 p-3 shadow-lg border border-gray-200 hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
           <a href="#">
             <div class="relative flex items-end overflow-hidden rounded-xl">
               <img className='h-[23rem] w-72 md:h-[16rem] md:w-[16rem]' src={`/api/v1/product/product-photo/${p._id}`}alt="Hotel Photo" />
              
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
            </div>
          ))}</div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
