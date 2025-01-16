/* eslint-disable jsx-a11y/alt-text */
import { IconShoppingBagCheck, IconShoppingBagPlus } from "@tabler/icons-react";
import React from "react";
import { useCart } from "../../../context/cartIds";

const BookCard = ({ p,cart,setCart, toast, navigate }) => {
  const { addProduct, removeProduct, isProductInCart } = useCart(); // Destructure context methods

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
  
  const handleCartToggle = () => {
    if (isProductInCart(p._id)) {
      removeProduct(p._id); // Remove product from cart
      removeCartItem(p._id)
      toast.info("Item removed from cart");
    } else {
      addProduct(p._id); // Add product to cart
      setCart([...cart, p]);
      localStorage.setItem("cart", JSON.stringify([...cart, p]));
      toast.success("Item added to cart");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        onClick={() => navigate(`/product/${p.slug}`)}
        className="md:mr-10 w-48 cursor-pointer relative hover:shadow-xl transition-shadow duration-300"
      >
        {/* Add to Cart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent navigation when clicking the button
            handleCartToggle();
          }}
          className={`absolute bottom-3 z-[20] flex gap-1 items-center ${
            isProductInCart(p._id) ? "bg-yellow-300 text-black" : "bg-black text-gray-50"
          } px-4 rounded-full py-2 text-sm right-3  transition`}
        >
          {
            isProductInCart(p._id) ?    <IconShoppingBagCheck size={20} />:   <IconShoppingBagPlus size={20} />
          }
       
          {isProductInCart(p._id) ? "Added" : "Add"}
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
      <div className="justify-between items-center w-48 px-2">
        <div className="mt-3">
          <h4 className="text-sm font-semibold text-gray-90">
            {p?.name?.length > 20 ? `${p.name.substring(0, 20)}...` : p?.name}
          </h4>

          <h4 className="text-lg font-base text-gray-800 -mt-2">
            {p.price.toLocaleString("en-US", {
              style: "currency",
              currency: "INR",
            })}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
