import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://shopcart-backend-4f2a.onrender.com/api/v1/product/get-product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="flex">
      <div className="col-md-3 ">
        <AdminMenu />
      </div>
      <div className="w-full p-5">
        <div className="bg-gray-800 text-white py-6 flex justify-between items-center px-4 rounded-lg shadow-lg mb-6">
          <div className="text-xl">All Products</div>
          <button
            // onClick={handleCreate}
            className="bg-yellow-300 hover:bg-green-600 text-gray-800 text-center font-semibold font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Create Product
          </button>
        </div>
        <div className="overflow-x-auto overflow-y-scroll h-[80vh]">
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Image</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">
                  Description
                </th>
                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((p) => (
                <tr key={p._id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={`https://shopcart-backend-4f2a.onrender.com/api/v1/product/product-photo/${p._id}`}
                      alt={p.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{p.name}</td>
                  <td className="border border-gray-300 px-4 py-2 truncate max-w-xs">
                    {p.description}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 truncate max-w-xs">
                    {p.quantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex space-x-2">
                      <Link
                        to={`/dashboard/admin/product/${p.slug}`}
                        className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600"
                      >
                        See Details
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
