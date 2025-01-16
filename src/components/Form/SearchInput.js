import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";

const SearchInput = ({ values, setValues }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `https://shopcart-backend-4f2a.onrender.com/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      // navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div class="bg-white flex px-1 py-1 rounded-full border-none0 overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
          x-model="q"
          class="w-full outline-none bg-white pl-4 text-sm"
        />
        <button
          type="button"
          onClick={handleSubmit}
          class="bg-gray-900 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5"
        >
          Search
        </button>
      </div>
      {/* <div class=" bg-white shadow-lg rounded-lg flex items-center w-full p-3  border border-gray-200">
            <button
              oclick={handleSubmit}
              class="outline-none focus:outline-none"
            >
              <svg
                class=" w-5 text-gray-600 h-5 cursor-pointer"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={values.keyword}
              onChange={(e) =>
                setValues({ ...values, keyword: e.target.value })
              }
              x-model="q"
              class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
            />
          </div> */}
    </form>
  );
};

export default SearchInput;
