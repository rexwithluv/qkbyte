"use client";

import { useState, createContext } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

    const anyadirAlCarrito = (producto) => setCarrito([...carrito, producto]);

    return (
        <CartContext.Provider value={{ carrito, anyadirAlCarrito }}>
            {children}
        </CartContext.Provider>
    )
}