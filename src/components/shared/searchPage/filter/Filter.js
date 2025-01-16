import React from "react";
import SearchInput from "../../../Form/SearchInput";
import { Checkbox, Radio } from "antd";

const FilterSection = ({ categories, handleFilter, setRadio, Prices }) => {
  return (
    <div>
      <div className="space-y-6 bg-yellow-300 h-[80vh] p-4 rounded-2xl shadow-lg mt-4">
        {/* Search Bar */}
        <div>
          <h2 className="text-lg font-bold mb-2">Search</h2>
          <SearchInput
            placeholder="Search categories..."
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-bold mb-2">Categories</h2>
          <div className="space-y-2">
            {categories.map((category) => (
              <Checkbox
                key={category.id}
                onChange={(e) => handleFilter(category.id, e.target.checked)}
                className="text-gray-700"
              >
                {category.name}
              </Checkbox>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h2 className="text-lg font-bold mb-2">Price Range</h2>
          <div className="space-y-2">
            {Prices.map((price, index) => (
              <Radio
                key={index}
                value={price.value}
                onChange={() => setRadio(price.value)}
                className="text-gray-700"
              >
                {price.label}
              </Radio>
            ))}
          </div>
        </div>
      </div>
      <div class="box   ">
        <div className="w-full bg-[#343d4a] pt-16   md:pt-7 pb-4  font-bold mb-5 ">
          <div className="md:pl-20 md:pr-10 flex gap-3 w-full">
            <div className="w-full">
              <SearchInput />
            </div>

            <div class="relative parent hidden md:inline">
              <a href="#" class="flex  items-center  ">
                <span className="text-sm text-gray-100 mr-1 pt-2 items-center">
                  Filter
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 fill-current pt-1 text-gray-100"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                </svg>
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
                  ))}
                </div>
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
    </div>
  );
};

export default FilterSection;
