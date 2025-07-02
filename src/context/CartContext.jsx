import { createContext, useState } from "react";

//Creamos el contexto

export const CartContext = createContext();

//Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  let totalItems = 0;
  //todas las funciones que modifican el estado del carro
  const addToCart = (item, cantidad) => {
    const existing = cart.find((e) => e.id === item.id);
    if (existing) {
      setCart((prev) => prev.map((e) => (e.id === item.id ? { ...e, cantidad: e.cantidad + cantidad } : e)));
    } else {
      setCart((prev) => [...prev, { ...item, cantidad: cantidad }]);
    }
  };

  const removeCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = () => {
    return cart.reduce((aux, item) => aux + item.precio * item.cantidad, 0);
  };

  const cartLength = () => {
    return cart.reduce((aux, item) => aux + item.cantidad, 0);
  };

  const isInCart = (id) => cart.some((item) => item.id === id); //devuelve true of false para saber is un evento esta en la agenda (carrito) o no

  return <CartContext.Provider value={{ cart, addToCart, removeCart, isInCart, clearCart, cartTotal, cartLength }}>{children}</CartContext.Provider>;
};
