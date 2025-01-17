import React from "react";
import SearchInput from "../../../Form/SearchInput";
import { Checkbox, Radio } from "antd";

const FilterSection = ({
  categories,
  handleFilter,
  setRadio,
  Prices,
  values,
  setValues,
}) => {
  return (
    <div>
      <div className="space-y-6 bg-[#ffe86b]  p-4 rounded-2xl shadow-lg mt-4 md:hidden">
        <SearchInput
          values={values}
          setValues={setValues}
          placeholder="Search categories..."
          className="w-full p-2 border border-gray-300 rounded-lg "
        />
      </div>
      <div className="space-y-6 bg-[#ffe86b] h-[80vh] p-4 rounded-2xl shadow-lg mt-4 hidden md:flex flex-col">
        {/* Search Bar */}
        <div>
          <h2 className="text-lg font-bold mb-2">Search</h2>
          <SearchInput
            values={values}
            setValues={setValues}
            placeholder="Search categories..."
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <ul class="  ">
          <h2 className="text-xl font-bold text-gray-800">Categories</h2>
          <div className="">
            {categories?.map((c) => (
              <Checkbox
                color="black"
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
                className="px-4 py-2 text-sm text-black font-medium text-gray-800 bg-white rounded-full hover:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-300"
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          <h2 className="text-xl font-bold text-gray-800 pt-5">Price</h2>
          <div className="flex flex-wrap ">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <Radio
                  className="px-2 py-2 text-sm font-medium text-gray-800 bg-white rounded-full hover:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-300"
                  value={p.array}
                >
                  {p.name}
                </Radio>
              ))}
            </Radio.Group>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default FilterSection;
