"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito")));

    useEffect(() => {
        const carritoExistente = JSON.parse(localStorage.getItem("carrito"));
        if (carritoExistente) {
            setCarrito(carritoExistente);
        } else {
            localStorage.setItem("carrito", JSON.stringify([]));
        }
    }, []);

    const anyadirAlCarrito = (producto) => {
        setCarrito((carrito) => {
            const nuevoCarrito = [...carrito, producto];
            localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
            return nuevoCarrito;
        });
    };

    return (
        <CartContext.Provider value={{ carrito, anyadirAlCarrito }}>
            {children}
        </CartContext.Provider>
    )
}

/*     useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("carrito"));
        if (storedCart) {
            setCarrito(storedCart);
        } else {
            localStorage.setItem("carrito", JSON.stringify([]));
        }
    }, []);
} */