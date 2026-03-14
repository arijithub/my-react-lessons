import React, { createContext, useState, useCallback, useMemo, useEffect } from 'react';

export const CartContext = createContext(null);

const CART_STORAGE_KEY = 'learn-react-cart';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const stored = window.localStorage.getItem(CART_STORAGE_KEY);
      const parsed = stored ? JSON.parse(stored) : [];
      return Array.isArray(parsed)
        ? parsed.map((item) => ({ ...item, quantity: item.quantity ?? 1 }))
        : [];
    } catch {
      return [];
    }
  });
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === product.id);
      if (existingIndex !== -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: (next[existingIndex].quantity || 1) + 1,
        };
        return next;
      }
      return [...prev, { ...product, cid: Math.random(), quantity: 1 }];
    });
    setCartOpen(true);
  }, []);

  const updateQuantity = useCallback((cid, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.cid !== cid) return item;
          const nextQty = (item.quantity || 1) + delta;
          return { ...item, quantity: nextQty };
        })
        .filter((item) => item.quantity > 0),
    );
  }, []);

  const removeFromCart = useCallback((cid) => {
    setCart((prev) => prev.filter((item) => item.cid !== cid));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0),
    [cart],
  );

  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // ignore storage failures
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, cartOpen, setCartOpen, addToCart, updateQuantity, removeFromCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
