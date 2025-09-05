import React, { createContext, useContext, useState, ReactNode } from "react";
import type { Product } from "../data/stores";

type CartItem = Product & { quantity: number };

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeAt: (index: number) => void;
  clearCart: () => void;
  increase: (index: number) => void;
  decrease: (index: number) => void;
  totalPoints: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((p) => p.id === product.id);
      if (existingIndex >= 0) {
        // já existe → aumenta quantidade
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      // novo produto
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeAt = (index: number) =>
    setCart((prev) => prev.filter((_, i) => i !== index));

  const increase = (index: number) =>
    setCart((prev) =>
      prev.map((p, i) => (i === index ? { ...p, quantity: p.quantity + 1 } : p))
    );

  const decrease = (index: number) =>
    setCart((prev) =>
      prev
        .map((p, i) =>
          i === index ? { ...p, quantity: Math.max(p.quantity - 1, 0) } : p
        )
        .filter((p) => p.quantity > 0)
    );

  const clearCart = () => setCart([]);

  const totalPoints = cart.reduce((sum, p) => sum + p.points * p.quantity, 0);
  const totalPrice = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeAt,
        clearCart,
        increase,
        decrease,
        totalPoints,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro do CartProvider");
  return ctx;
};
