import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
const { Option } = Select;

const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");
  const [id, setId] = useState("");

  //get single product
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://shopcart-backend-4f2a.onrender.com/api/v1/product/get-product/${params.slug}`
      );
      setName(data.product.name);
      setId(data.product._id);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setPrice(data.product.price);
      setQuantity(data.product.quantity);
      setShipping(data.product.shipping);
      setCategory(data.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
    //eslint-disable-next-line
  }, []);
  //get all category
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
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      photo && productData.append("photo", photo);
      productData.append("category", category);
      const { data } = axios.put(
        `https://shopcart-backend-4f2a.onrender.com/api/v1/product/update-product/${id}`,
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Updated Successfully");
        // navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  //delete a product
  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are You Sure want to delete this product ? ");
      if (!answer) return;
      const { data } = await axios.delete(
        `https://shopcart-backend-4f2a.onrender.com/api/v1/product/delete-product/${id}`
      );
      toast.success("Product DEleted Succfully");
      navigate("/dashboard/admin/products");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="flex">
      <div className="col-md-3">
        <AdminMenu />
      </div>
      <div className="w-full p-5">
        <div className="bg-gray-800 text-white py-6 flex justify-between items-center px-4 rounded-lg shadow-lg mb-6">
          <div className="text-xl">Update Products Details</div>
          <div className="flex gap-5">
            <button
              onClick={handleUpdate}
              className="bg-yellow-300 hover:bg-green-600 text-gray-800 text-center font-semibold font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Save Details
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
              onClick={handleDelete}
            >
              Delete Product
            </button>
          </div>
        </div>
        <div>
          <div className="">
            <h2 className="text-2xl font-bold mb-6">Update Product Details</h2>
            <div className="mb-4">
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="w-full border border-gray-300 rounded-lg"
                onChange={(value) => setCategory(value)}
                value={category}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                value={name}
                placeholder="Product Name"
                className="border border-gray-300 p-2 rounded-lg w-full"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="number"
                value={price}
                placeholder="Price"
                className="border border-gray-300 p-2 rounded-lg w-full"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <textarea
                value={description}
                placeholder="Description"
                className="border border-gray-300 p-2 rounded-lg w-full col-span-2"
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type="number"
                value={quantity}
                placeholder="Quantity"
                className="border border-gray-300 p-2 rounded-lg w-full"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <Select
                bordered={false}
                placeholder="Select Shipping"
                size="large"
                className="w-full border border-gray-300 rounded-lg"
                onChange={(value) => setShipping(value)}
                value={shipping ? "Yes" : "No"}
              >
                <Option value="0">No</Option>
                <Option value="1">Yes</Option>
              </Select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                {photo ? photo.name : "Upload Photo"}
              </label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                className="border border-gray-300 p-2 rounded-lg w-full"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </div>
            {photo ? (
              <div className="text-center">
                <img
                  src={URL.createObjectURL(photo)}
                  alt="product_photo"
                  className="img img-responsive h-48"
                />
              </div>
            ) : (
              <div className="text-center">
                <img
                  src={`https://shopcart-backend-4f2a.onrender.com/api/v1/product/product-photo/${id}`}
                  alt="product_photo"
                  className="img img-responsive h-48"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
