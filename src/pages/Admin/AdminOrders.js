/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { Select } from "antd";
const { Option } = Select;

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "deliverd",
    "cancel",
  ]);
  const [changeStatus, setCHangeStatus] = useState("");
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        "https://shopcart-backend-4f2a.onrender.com/api/v1/auth/all-orders"
      );
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(
        `https://shopcart-backend-4f2a.onrender.com/api/v1/auth/order-status/${orderId}`,
        {
          status: value,
        }
      );
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex">
      <div className="col-md-3">
        <AdminMenu />
      </div>
      <div className="w-full p-5">
        <div className="bg-gray-800 text-white py-6 flex justify-between items-center px-4 rounded-lg shadow-lg mb-6">
          <div className="text-xl">All Orders</div>
          <button
            // onClick={handleCreate}
            className="bg-yellow-300 hover:bg-green-600 text-gray-800 text-center font-semibold font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Download List
          </button>
        </div>
        <div className="h-[80vh]">
          {orders.length <= 0 && (
            <img
              className="h-[80%] mx-auto"
              src="https://img.freepik.com/free-photo/cardboard-box-with-cargo-checklist-pencil_107791-16644.jpg?t=st=1737137768~exp=1737141368~hmac=0357c969dfa1523cbd859daa92ca028a741f2fb1702e2efbbbf4da321c891353&w=740"
            />
          )}

          <div className="overflow-y-scroll h-[80vh]">
            {orders?.map((o, i) => {
              return (
                <div className="border rounded-lg shadow-lg mb-6 bg-white">
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="px-4 py-2 border">#</th>
                          <th className="px-4 py-2 border">Status</th>
                          <th className="px-4 py-2 border">Buyer</th>
                          <th className="px-4 py-2 border">Date</th>
                          <th className="px-4 py-2 border">Payment</th>
                          <th className="px-4 py-2 border">Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-100">
                          <td className="px-4 py-2 border">{i + 1}</td>
                          <td className="px-4 py-2 border">
                            <select
                              className="bg-white border border-gray-300 rounded px-2 py-1 focus:ring focus:ring-blue-200"
                              onChange={(e) =>
                                handleChange(o._id, e.target.value)
                              }
                              defaultValue={o?.status}
                            >
                              {status.map((s, i) => (
                                <option key={i} value={s}>
                                  {s}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td className="px-4 py-2 border">{o?.buyer?.name}</td>
                          <td className="px-4 py-2 border">
                            {moment(o?.createAt).fromNow()}
                          </td>
                          <td className="px-4 py-2 border">
                            {o?.payment?.success ? "Success" : "Failed"}
                          </td>
                          <td className="px-4 py-2 border">
                            {o?.products?.length}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 bg-white">
                    {o?.products?.map((p, i) => (
                      <div
                        className="flex items-start overflow-hidden border"
                        key={p._id}
                      >
                        <div className="w-24 h-full flex-shrink-0">
                          <img
                            src={`https://shopcart-backend-4f2a.onrender.com/api/v1/product/product-photo/${p._id}`}
                            alt={p.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 flex-1">
                          <h4 className="font-semibold text-gray-800">
                            {p.name}
                          </h4>
                          <p className="text-gray-600 text-sm mb-1">
                            {p.description.substring(0, 30)}
                          </p>
                          <p className="text-blue-500 font-bold">
                            Price: ₹{p.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
