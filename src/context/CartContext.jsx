import { createContext, useState } from "react";

//Creamos el contexto

export const CartContext = createContext();

//Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //todas las funciones que modifican el estado del carro
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = () => {
    return cart.reduce((aux, item) => aux + item.precio, 0);
  };

  const cartLength = () => {
    return cart.length;
  };

  const isInCart = (id) => cart.some((item) => item.id === id); //devuelve true of false para saber is un evento esta en la agenda (carrito) o no

  return <CartContext.Provider value={{ cart, addToCart, removeCart, isInCart, clearCart, cartTotal, cartLength }}>{children}</CartContext.Provider>;
};
