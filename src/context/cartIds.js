import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const CartContext = createContext();

// Cart provider component
export const CartIdProvider = ({ children }) => {
  const [productIds, setProductIds] = useState(() => {
    // Initialize state from local storage
    const storedCart = localStorage.getItem("cartProductIds");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Sync state with local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartProductIds", JSON.stringify(productIds));
  }, [productIds]);

  // Function to add a new ID to the cart
  const addProduct = (id) => {
    setProductIds((prev) => {
      if (!prev.includes(id)) {
        console.log(`Product with ID ${id} added to the cart.`);
        return [...prev, id];
      }
      console.log(`Product with ID ${id} is already in the cart.`);
      return prev;
    });
  };

  // Function to remove an ID from the cart
  const removeProduct = (id) => {
    setProductIds((prev) => {
      if (prev.includes(id)) {
        console.log(`Product with ID ${id} removed from the cart.`);
        return prev.filter((productId) => productId !== id);
      }
      console.log(`Product with ID ${id} is not in the cart.`);
      return prev;
    });
  };

  // Function to check if a given ID is in the cart
  const isProductInCart = (id) => {
    const isInCart = productIds.includes(id);
    console.log(
      `Product with ID ${id} is ${isInCart ? "in" : "not in"} the cart.`
    );
    return isInCart;
  };

  // Provide state and functions to the context
  return (
    <CartContext.Provider
      value={{ productIds, addProduct, removeProduct, isProductInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};
