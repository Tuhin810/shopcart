import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import "../styles/Homepage.css";
import Card from "./Card";
import { Button } from "@material-tailwind/react";
import SearchInput from "../components/Form/SearchInput";
const AllProducts = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("https://shopcart-backend-4f2a.onrender.com/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://shopcart-backend-4f2a.onrender.com/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("https://shopcart-backend-4f2a.onrender.com/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://shopcart-backend-4f2a.onrender.com/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("https://shopcart-backend-4f2a.onrender.com/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"ALl Products - Best offers "}>
    
    <div class="box   ">
    <div className="w-full bg-[#343d4a] pt-16   md:pt-7 pb-4  font-bold mb-5 "> 
       
          <div className="md:pl-20 md:pr-10 flex gap-3 w-full">
            <div className="w-full"><SearchInput/></div>
            
          <div class="relative parent hidden md:inline">
                <a href="#" class="flex  items-center  ">
                    <span className="text-sm text-gray-100 mr-1 pt-2 items-center">Filter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current pt-1 text-gray-100" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                </a>
                <ul class="child h-20 z-10 transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b ">
                  <div className="">
                Category
                {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}</div>
            <div className="flex flex-row">
           Price
                       <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
                   </div>
                
                </ul>
               
            </div>
         
         
          </div>
          
       
        </div>
               
            </div>
      {/* banner image */}
      <div className="  row mt-3 p-7 ">
        
        <div className="hidden w-full filters  p-1 shadow-xl bg-gray-100 rounded-lg flex justify-between  gap-4">
          <div className="items-center flex pl-5"> <span className="text-center text-gray-600 font-bold  font-sans">All Products</span></div>
          <div className="flex gap-2">
       
      
           
 
<div className="w-36"><Button className="bg-blue-300 " onClick={() => window.location.reload()}>Reset filters</Button>
</div>
   
          
        </div>
        
        </div>


        
        <div className="col-md-9 ">
        
          <div className="flex flex-wrap flex-row justify-between ">
            {products?.map((p) => (
           
              <div  class="  gap-6 p-6 md:p-1 md:mb-4">
              <div class="rounded-md bg-gray-100 p-3 shadow-lg border border-gray-200 hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
           <a href="#">
             <div class="relative flex items-end overflow-hidden rounded-xl">
               <img className='h-[23rem] w-72 md:h-[21rem] md:w-[16rem]' src={`https://shopcart-backend-4f2a.onrender.com/api/v1/product/product-photo/${p._id}`}alt="Hotel Photo" />
              
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
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Loadmore 
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AllProducts;
