import React, { useState } from "react";
import { useAuth } from "../../../context/auth";
import PaymentModal from "../paymentModal/PaymentModal";

const CartCard = ({ totalPrice }) => {
  const [auth] = useAuth();
  const [totalAmount, setTotalAmount] = useState(totalPrice); // Initialize with passed value
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  // Predefined coupon codes with their discounts
  const coupons = [
    { code: "SAVE10", discount: 10 },
    { code: "OFF50", discount: 50 },
    { code: "FLAT20", discount: 20 },
  ];

  const applyCoupon = () => {
    const selectedCoupon = coupons.find((c) => c.code === coupon.toUpperCase());
    if (selectedCoupon) {
      const newTotal = totalPrice - selectedCoupon.discount; // Prevent negative total
      setDiscount(selectedCoupon.discount);
      setTotalAmount(newTotal);
      alert(`Coupon applied! ₹${selectedCoupon.discount} off.`);
    } else {
      alert("Invalid coupon code");
    }
  };

  return (
    <div>
      <div className="p-6 min-h-screen flex justify-center items-center">
        <div className="w-[22rem] px-5 bg-white shad rounded-[1.5rem] border p-6">
          {/* Current Address */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Current Address</h2>
            <div className="mt-2 mb-3">{auth?.user?.address}</div>
            <select className="w-full p-2.5 mb-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500">
              <option>Country</option>
            </select>
            <button className="w-full mt-4 py-2.5 bg-black text-white font-semibold rounded-full hover:bg-gray-800">
              Update Address
            </button>
          </div>

          {/* Coupon Code */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Coupon Code</h2>
            <p className="text-sm text-gray-500 mb-4">
              Apply a coupon code to get discounts. Select from the below
              options:
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {coupons.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setCoupon(c.code)}
                  className="px-3 items-center py-1 bg-yellow-300 text-black text-sm rounded-full hover:bg-yellow-200"
                >
                  {c.code}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Enter Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <button
              onClick={applyCoupon}
              className="w-full py-2.5 bg-black text-white font-semibold rounded-full hover:bg-gray-800"
            >
              Apply
            </button>
          </div>

          {/* Cart Total */}
          <div className="bg-yellow-200 p-4 rounded-2xl">
            <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
            <div className="text-sm text-gray-700">
              <div className="flex justify-between mb-1">
                <span>Cart Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="flex justify-between text-red-500 mb-1">
                <span>Discount</span>
                <span>-₹{discount}</span>
              </div>
              <div className="flex justify-between font-semibold text-black">
                <span>Cart Total</span>
                <span>₹{totalAmount}</span>
              </div>
            </div>
            <PaymentModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
