import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { IconUpload, IconCategory, IconShoppingCart } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

  // Get all categories
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
      toast.error("Something went wrong in getting categories");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      const { data } = await axios.post(
        "https://shopcart-backend-4f2a.onrender.com/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="container-fluid m-3 p-3">
      <div className="flex">
      <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="w-full p-5">
          <div className="bg-gray-800 text-white py-6 flex justify-between items-center px-4 rounded-lg shadow-lg mb-6">
            <div className="text-xl">Create Product</div>
            <button
            onClick={handleCreate}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
      >
        Save Details
      </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg animate-fade-in">
            <form className="space-y-4" onSubmit={handleCreate}>
            <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
                <label className="block text-sm font-medium text-gray-700">
                  Select Category
                </label>
                <Select
                  placeholder="Select a category"
                  size="large"
                  className="w-full"
                  onChange={(value) => setCategory(value)}
                >
                  {categories?.map((c) => (
                    <Option key={c._id} value={c._id}>
                      {c.name}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col gap-3">
                <label className="block text-sm font-medium text-gray-700">
                  Product Name
                </label>
                <div className="flex items-center gap-2">
                  <IconShoppingCart size={20} className="text-gray-500" />
                  <input
                    type="text"
                    value={name}
                    placeholder="Enter product name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              </div>
            
              <div className="flex flex-col gap-3">
                <label className="block text-sm font-medium text-gray-700">
                  Product Image
                </label>
                <div className="flex items-center gap-3">
                  <label className="cursor-pointer flex items-center justify-center w-full h-12 bg-gray-100 rounded-md border border-gray-300 hover:bg-gray-200 transition duration-200">
                    <IconUpload size={20} className="text-gray-500 mr-2" />
                    {photo ? photo.name : "Upload Photo"}
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={(e) => setPhoto(e.target.files[0])}
                      hidden
                    />
                  </label>
                </div>
                {photo && (
                  <div className="text-center mt-4">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      className="h-48 w-auto rounded-md border"
                    />
                  </div>
                )}
              </div>

             

              <div className="flex flex-col gap-3">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={description}
                  placeholder="Enter product description"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Price
                  </label>
                  <input
                    type="number"
                    value={price}
                    placeholder="Enter price"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Quantity
                  </label>
                  <input
                    type="number"
                    value={quantity}
                    placeholder="Enter quantity"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="block text-sm font-medium text-gray-700">
                  Shipping
                </label>
                <Select
                  placeholder="Select Shipping"
                  size="large"
                  className="w-full"
                  onChange={(value) => setShipping(value)}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>

            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
