"use client";

import { useState, createContext } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito")));

    const anyadirAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        console.log(carrito);
    };

    return (
        <CartContext.Provider value={{ carrito, anyadirAlCarrito }}>
            {children}
        </CartContext.Provider>
    )
}