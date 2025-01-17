import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        "https://shopcart-backend-4f2a.onrender.com/api/v1/auth/orders"
      );
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <Layout title={"Your Orders"}>
      <div className="flex flex-col items-center bg-yellow-50 min-h-screen py-10">
        <h1 className="text-3xl font-bold text-center text-yellow-600 mb-8">
          All Orders
        </h1>
        <div className="w-full max-w-5xl">
          {orders?.map((o, i) => (
            <div
              key={i}
              className="border border-yellow-300 bg-white shadow rounded-lg mb-6"
            >
              <table className="table-auto w-full text-left">
                <thead className="bg-yellow-300 text-black">
                  <tr>
                    <th className="p-4">#</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Buyer</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Payment</th>
                    <th className="p-4">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-yellow-300">
                    <td className="p-4">{i + 1}</td>
                    <td className="p-4">{o?.status}</td>
                    <td className="p-4">{o?.buyer?.name}</td>
                    <td className="p-4">{moment(o?.createAt).fromNow()}</td>
                    <td className="p-4">
                      {o?.payment.success ? "Success" : "Failed"}
                    </td>
                    <td className="p-4">{o?.products?.length}</td>
                  </tr>
                </tbody>
              </table>
              <div className="p-4">
                {o?.products?.map((p) => (
                  <div
                    key={p._id}
                    className="flex items-start gap-4 mb-4 bg-yellow-100 p-3 rounded-lg shadow"
                  >
                    <div className="w-24 h-24">
                      <img
                        src={`https://shopcart-backend-4f2a.onrender.com/api/v1/product/product-photo/${p._id}`}
                        alt={p.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-yellow-600">{p.name}</p>
                      <p className="text-sm text-gray-700">
                        {p.description.substring(0, 30)}
                      </p>
                      <p className="font-bold text-gray-800">
                        Price: {p.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
