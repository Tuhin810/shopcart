import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import CategoryForm from "../../components/Form/CategoryForm";
import { Modal } from "antd";
const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  //handle Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("https://shopcart-backend-4f2a.onrender.com/api/v1/category/create-category", {
        name,
      });
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      // toast.error("somthing went wrong in input form");
    }
  };

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("https://shopcart-backend-4f2a.onrender.com/api/v1/category/get-category");
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

  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `https://shopcart-backend-4f2a.onrender.com/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data?.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `https://shopcart-backend-4f2a.onrender.com/api/v1/category/delete-category/${pId}`
      );
      if (data.success) {
        toast.success(`category is deleted`);

        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };
  return (
      <div className="container-fluid m-3 p-3 ">
        <div className="flex ">
          <div className="col-md-3">
            <AdminMenu />
          </div>

          <div className="w-full p-5">
            <div className="flex justify-between items-center bg-gray-800 py-6 px-4 w-full rounded-lg shadow-lg  text-white">
            <div className="text-xl">All Categories</div>
            <CategoryForm
                handleSubmit={handleSubmit}
                value={name}
                setValue={setName}
              />
              </div>
           
            <div className="w-full mt-5 bg-white shadow-md rounded-md">
  <table className="w-full border border-gray-300 rounded-md overflow-hidden">
    <thead>
      <tr className="bg-gray-100 text-left">
        <th className="p-3 text-sm font-semibold text-gray-800">Name</th>
        <th className="p-3 text-sm font-semibold text-gray-800">Actions</th>
      </tr>
    </thead>
    <tbody>
      {categories?.map((c) => (
        <tr
          key={c._id}
          className="border-b last:border-none hover:bg-gray-50 transition"
        >
          <td className="p-3 text-sm text-gray-800">{c.name}</td>
          <td className="p-3 text-sm flex items-center space-x-2">
            {/* <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm font-medium"
              onClick={() => {
                setVisible(true);
                setUpdatedName(c.name);
                setSelected(c);
              }}
            >
              Edit
            </button> */}
            <button
              className="bg-yellow-300 hover:bg-red-600 text-white py-1 px-3 rounded text-sm font-medium"
              onClick={() => handleDelete(c._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={visible}
            >
              <CategoryForm
                value={updatedName}
                setValue={setUpdatedName}
                handleSubmit={handleUpdate}
              />
            </Modal>
          </div>
        </div>
      </div>
  );
};

export default CreateCategory;
