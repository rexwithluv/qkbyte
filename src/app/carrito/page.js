"use client"

import { useContext } from 'react';
import { CartContext } from '../context/carrito';

const CarritoPage = () => {
    const { carrito } = useContext(CartContext);

    return (
        <div>
            <h1>Carrito de Compras</h1>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map((item, index) => (
                        <tr key={index}>
                            <td>{item.productName}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CarritoPage;
