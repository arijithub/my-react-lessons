import React, { createContext, useState, useCallback, useMemo } from 'react';

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = useCallback((product) => {
    setCart(prev => [...prev, { ...product, cid: Math.random() }]);
    setCartOpen(true);
  }, []);

  const removeFromCart = useCallback((cid) => {
    setCart(prev => prev.filter(item => item.cid !== cid));
  }, []);

  const total = useMemo(() => cart.reduce((sum, item) => sum + (item.price || 0), 0), [cart]);

  return (
    <CartContext.Provider value={{ cart, cartOpen, setCartOpen, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};
