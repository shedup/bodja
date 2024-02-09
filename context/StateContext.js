import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty == 1) return 1;
      return prevQty - 1;
    });
  };

  const onAdd = (product, quantity) => {
    const isInCart = cartItems.find((item) => item._id === product._id);
    setTotalPrice((prevPrice) =>
      Number(Number(prevPrice + product.price * quantity).toFixed(2))
    );
    setTotalQuantities((prevQuantity) => prevQuantity + quantity);
    if (isInCart) {
      const updatedItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        return cartProduct;
      });
      setCartItems(updatedItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart`, {
      position: "top-center",
      className: "toast",
    });
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) =>
      Number(
        Number(
          prevTotalPrice - foundProduct.price * foundProduct.quantity
        ).toFixed(2)
      )
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    // const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc") {
      const updatedItems = cartItems.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
      setTotalPrice((prevTotalPrice) =>
        Number(Number(prevTotalPrice + foundProduct.price).toFixed(2))
      );
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        const updatedItems = cartItems.map((item) =>
          item._id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(updatedItems);
        setTotalPrice((prevTotalPrice) =>
          Number(Number(prevTotalPrice - foundProduct.price).toFixed(2))
        );
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  const notAvail = () => {
    toast.error("Not available yet");
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart,
        onRemove,
        toggleCartItemQuantity,
        notAvail,
        setQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
