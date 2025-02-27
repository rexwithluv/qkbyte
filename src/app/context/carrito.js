"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [carrito, setCarrito] = useState(() => {
        const carritoExistente = JSON.parse(localStorage.getItem("carrito"));
        return carritoExistente || [];
    });

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    const anyadirAlCarrito = (producto) => {
        setCarrito((carrito) => [...carrito, producto]);
    };

    const eliminarDelCarrito = (productoId) => {
        setCarrito((carrito) => {
            const index = carrito.findIndex(producto => producto.id === productoId);
            if (index !== -1) {
                const nuevoCarrito = [...carrito];
                nuevoCarrito.splice(index, 1);
                localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
                return nuevoCarrito;
            }
            return carrito;
        });
    };

    return (
        <CartContext.Provider value={{ carrito, anyadirAlCarrito, eliminarDelCarrito }}>
            {children}
        </CartContext.Provider>
    )
}