import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";

import axios from "axios";
import toast from "react-hot-toast";
import "../styles/CartStyles.css";
import { IconShoppingBagX } from "@tabler/icons-react";
import CartCard from "../components/shared/cartSideCard/CartCard";

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total;
    } catch (error) {
      console.log(error);
    }
  };
  //detele item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  //get payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get(
        "https://shopcart-backend-4f2a.onrender.com/api/v1/product/braintree/token"
      );
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, [auth?.token]);

  //handle payments
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post(
        "https://shopcart-backend-4f2a.onrender.com/api/v1/product/braintree/payment",
        {
          nonce,
          cart,
        }
      );
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/orders");
      toast.success("Payment Completed Successfully ");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <Layout>
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto bg-gray-50">
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start bg-white shad mt-6 rounded-[1.5rem] border  px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <div className="flex justify-start item-start  flex-col ">
                {cart?.length ? (
                  <div className=" items-center justify-between  w-full">
                    <h1 className="text-xl lg:text-2xl font-semibold   text-gray-800">
                      Your Cart
                    </h1>
                    <div className="text-sm text-gray-600 -mt-2 mb-4">
                      {`You Have ${cart.length} items in your cart  ${
                        auth?.token ? "" : "please login to checkout !"
                      }`}
                    </div>
                  </div>
                ) : (
                  " Your Cart Is Empty"
                )}
              </div>
              <div className="flex h-[80vh] overflow-y-scroll hidescroll flex-col justify-start items-start w-full">
                {cart?.map((p) => (
                  <div
                    className="w-full px-10 rounded-lg  bg-white border rounded-2xl mb-3 flex-row"
                    key={p._id}
                  >
                    <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                      <div className="pb-4 md:pb-8 w-full md:w-40">
                        <img
                          className="w-20 hidden md:block shadow-lg rounded-md"
                          src={`https://shopcart-backend-4f2a.onrender.com/api/v1/product/product-photo/${p._id}`}
                          alt="dress"
                        />
                        <img
                          className="w-full md:hidden"
                          src={`https://shopcart-backend-4f2a.onrender.com/api/v1/product/product-photo/${p._id}`}
                          alt="dress"
                        />
                      </div>
                      <div className="  md:flex-row flex-col flex justify-between items-start w-full  pb-8 ">
                        <div className="w-full -ml-12 ">
                          <div className="text-sm  xl:text-lg font-semibold leading-6 mb-2 text-gray-800 flex md:w-[16rem]">
                            {p.name}
                          </div>
                          <div className="text-xs -mt-3 mb-4 leading-5 text-gray-600">
                            {p?.description}
                          </div>

                          <button
                            onClick={(e) => {
                              // e.stopPropagation();
                              removeCartItem(p?._id);
                            }}
                            className={` z-[20] flex gap-1 items-center mt-2 bg-yellow-300 px-4 rounded-full py-2 text-sm right-3 text-gray-800 transition`}
                          >
                            <IconShoppingBagX size={20} /> Remove
                          </button>
                        </div>
                        <div className="flex justify-between space-x-8 items-start w-full">
                          <p className="text-base xl:text-base leading-6">
                            ₹{p.price}{" "}
                            <span className="text-red-500 line-through">
                              {" "}
                              ₹{p.price + 10}
                            </span>
                          </p>
                          <p className="text-base xl:text-lg leading-6 text-gray-800">
                            01
                          </p>
                          <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                            ₹{p.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <CartCard totalPrice={totalPrice()} />
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
