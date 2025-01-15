/* eslint-disable jsx-a11y/alt-text */
import { IconHeart, IconShoppingBagPlus } from "@tabler/icons-react";
import React from "react";

const BookCard = ({ p, cart, setCart, toast, navigate }) => {
  return (
    <div>
      <div className="mr-10  relative hover:shadow-xl transition-shadow duration-300">
        {/* Favorite Icon */}
        <button
          onClick={() => {
            setCart([...cart, p]);
            localStorage.setItem("cart", JSON.stringify([...cart, p]));
            toast.success("Item Added to cart");
          }}
          className="absolute bottom-3 z-[20] flex gap-1 items-center bg-black px-4 rounded-full py-2 text-sm right-3 text-gray-50 hover:text-red-500 transition"
        >
          <IconShoppingBagPlus size={20} /> Add
        </button>

        {/* Image Section */}
        <div className="relative">
          <img
            src={`https://shopcart-backend-4f2a.onrender.com/api/v1/product/product-photo/${p?._id}`}
            className="w-48 h-72 object-cover rounded-md"
          />
          <div className="absolute inset-0 bg-gradient-to-tl from-black/70 to-transparent rounded-md"></div>
        </div>

        {/* Text Section */}
      </div>
      <div className=" justify-between items-center w-48 px-2">
        <div className="mt-3 ">
          <h4 className="text-sm font-semibold text-gray-90">
            {p?.name?.length > 20 ? `${p.name.substring(0, 20)}...` : p?.name}
          </h4>

          <h4 className="text-lg font-base text-red-600 -mt-2">
            {" "}
            {p.price.toLocaleString("en-US", {
              style: "currency",
              currency: "INR",
            })}
          </h4>
        </div>
        {/* <div className="-mt-2 flex justify-start  items-center">
          <button
            class="text-sm bg-gray-200 px-2 py-2  font-semibold text-black"
            onClick={() => {
              setCart([...cart, p]);
              localStorage.setItem("cart", JSON.stringify([...cart, p]));
              toast.success("Item Added to cart");
            }}
          >
           Add to cart
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default BookCard;
