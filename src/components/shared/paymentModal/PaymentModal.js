import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/auth";
import { useCart } from "../../../context/cart";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import toast from "react-hot-toast";

const PaymentModal = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const navigate = useNavigate();

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

  // Handle payments
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
      setIsModalOpen(false); // Close modal after successful payment
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button
        className="w-full mt-4 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-gray-100"
        onClick={() => setIsModalOpen(true)} // Open the modal
      >
        Checkout
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-[90%] max-w-lg rounded-lg shadow-lg p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-black text-xl font-bold"
              onClick={() => setIsModalOpen(false)} // Close the modal
            >
              &times;
            </button>

            <h2 className="text-lg font-bold mb-4">Complete Payment</h2>

            {/* DropIn Component */}
            <DropIn
              options={{
                authorization: clientToken,
              }}
              onInstance={(instance) => setInstance(instance)}
            />

            {/* Payment Button */}
            <button
              className="w-full py-3 mt-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700"
              onClick={handlePayment}
              disabled={loading || !instance || !auth?.user?.address}
            >
              {loading ? "Processing ...." : "Make Payment"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentModal;
