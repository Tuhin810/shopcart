import React, { useState } from "react";
import { IconCategory } from "@tabler/icons-react";

const CategoryForm = ({ handleSubmit, value, setValue, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4 flex items-center border-b border-gray-300">
            <IconCategory className="text-gray-500 mr-2" size={20} />
            <input
              type="text"
              className="flex-1 bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-400 p-2"
              placeholder="Enter new category"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const AddCategory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Category Submitted:", value);
    setValue(""); // Reset input value
    setIsModalOpen(false); // Close modal after submission
  };

  return (
    <div className="">
      {/* Add Category Button */}
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
        onClick={() => setIsModalOpen(true)}
      >
        Add Category
      </button>

      {/* Modal for Category Form */}
      {isModalOpen && (
        <CategoryForm
          handleSubmit={handleSubmit}
          value={value}
          setValue={setValue}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default AddCategory;
