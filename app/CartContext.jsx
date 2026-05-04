'use client';

import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (sticker) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.imagen === sticker.imagen);
      if (exists) {
        return prev.map((item) =>
          item.imagen === sticker.imagen
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...sticker, cantidad: 1 }];
    });
  };

  const removeFromCart = (imagen) => {
    setCartItems((prev) => prev.filter((item) => item.imagen !== imagen));
  };

  const changeQuantity = (imagen, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.imagen === imagen
          ? { ...item, cantidad: Math.max(1, item.cantidad + delta) }
          : item
      )
    );
  };

  const emptyCart = () => setCartItems([]);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const cartCount = cartItems.reduce((acc, item) => acc + item.cantidad, 0);

  const value = useMemo(
    () => ({
      cartItems,
      cartCount,
      isCartOpen,
      addToCart,
      removeFromCart,
      changeQuantity,
      emptyCart,
      openCart,
      closeCart,
    }),
    [cartItems, cartCount, isCartOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
