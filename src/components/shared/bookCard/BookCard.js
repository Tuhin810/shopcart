/* eslint-disable jsx-a11y/alt-text */
import { IconHeart } from "@tabler/icons-react";
import React from "react";

const BookCard = ({ p, cart, setCart, toast, navigate }) => {
  const handleAddToCart = () => {
    if (cart.some((item) => item.id === p.id)) {
      toast.error("Item already in cart");
    } else {
      setCart([...cart, p]);
      toast.success("Item added to cart");
    }
  };
  return (
    <div>
      <div className="mr-10  relative hover:shadow-xl transition-shadow duration-300">
        {/* Favorite Icon */}
        <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition">
          <IconHeart size={20} />
        </button>

        {/* Image Section */}
        <div className="relative">
  <img
    src={`https://shopcart-backend-4f2a.onrender.com/api/v1/product/product-photo/${p?._id}`}
    className="w-full h-72 object-cover rounded-md"
  />
  <div className="absolute inset-0 bg-gradient-to-tl from-black/40 to-transparent rounded-md"></div>
</div>




        {/* Text Section */}
      </div>
      <div className="flex justify-between items-center w-48 px-2">
        <div className="mt-4 ">
          <h4 className="text-md font-bold text-gray-800">{p?.name}</h4>
          <h4 className="text-lg font-base text-gray-600 -mt-2">
            {" "}
            {p.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h4>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <button
            class="text-sm bg-gray-800 px-5 text-white py-2"
            onClick={() => {
              setCart([...cart, p]);
              localStorage.setItem("cart", JSON.stringify([...cart, p]));
              toast.success("Item Added to cart");
            }}
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
