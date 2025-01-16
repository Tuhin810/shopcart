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
import BookCard from "../components/shared/bookCard/BookCard";
import FilterSection from "../components/shared/searchPage/filter/FilterSection";
import { useSearch } from "../context/search";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { IconX } from "@tabler/icons-react";
const AllProducts = () => {
  const [searchvalues, setSearchValues] = useSearch();

  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useSearch();

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "https://shopcart-backend-4f2a.onrender.com/api/v1/category/get-category"
      );
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
      const { data } = await axios.get(
        `https://shopcart-backend-4f2a.onrender.com/api/v1/product/product-list/${page}`
      );
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
      const { data } = await axios.get(
        "https://shopcart-backend-4f2a.onrender.com/api/v1/product/product-count"
      );
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
      const { data } = await axios.get(
        `https://shopcart-backend-4f2a.onrender.com/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

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

  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        "https://shopcart-backend-4f2a.onrender.com/api/v1/product/product-filters",
        {
          checked,
          radio,
        }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"ALl Products - Best offers "}>
      <div className="flex pl-16">
        <div className="w-1/4 h-screen pt-24 p-4">
          <FilterSection
            categories={categories}
            handleFilter={handleFilter}
            setRadio={setRadio}
            Prices={Prices}
            values={searchvalues}
            setValues={setSearchValues}
          />
        </div>

        <div className="w-3/4 pt-28 pl-8 h-screen overflow-y-scroll ">
          {values?.results.length > 0 && (
            <div className="inline-flex items-center justify-between px-4 py-2 mb-5 border text-center text-sm text-black rounded-full">
              <span>search for {searchvalues?.keyword}</span>
              <button
                onClick={() => window.location.reload()} // Refresh the page
                className="ml-2 text-gray-500 hover:text-black focus:outline-none"
              >
                <IconX size={16} />
              </button>
            </div>
          )}

          <div className="items-center justify-center md:justify-start   md:flex flex-wrap">
            {values?.results.length < 1 ? (
              <>
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
              </>
            ) : (
              <>
                {values?.results?.map((p) => (
                  <BookCard
                    key={p.id} // Ensure a unique key for each item
                    p={p}
                    cart={cart}
                    setCart={setCart}
                    toast={toast}
                    navigate={navigate}
                  />
                ))}
              </>
            )}
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
                {loading ? "Loading ..." : <> Loadmore</>}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AllProducts;
