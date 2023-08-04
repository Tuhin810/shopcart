import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container px-8 py-10" style={{ marginTop: "100px" }}>
        <div className="row container flex-row flex justify-between gap-5 flex-wrap">
          {categories.map((c) => (
            <div className="col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <div className="card">
              <div class="wrapper w-72  antialiased text-gray-900">
<div>
    
    <img src={`https://source.unsplash.com/random/350x350/?${c.name}`} alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md"/>    
    
 <div class="relative px-4 -mt-16  ">
   <div class="p-6 rounded-lg shadow-lg bg-gray-50 flex justify-center">
   
    
    <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate ">   <Link to={`/category/${c.slug}`} className="btn cat-btn">
                  {c.name}
                </Link></h4>
 
  
  
  </div>
 </div>
  
</div>
  </div>
             
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
