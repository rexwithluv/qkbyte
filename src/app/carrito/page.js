"use client"

import { useContext } from 'react';
import { CartContext } from '../context/carrito';

const CarritoPage = () => {
    const { carrito, eliminarDelCarrito } = useContext(CartContext);

    // Creamos un objeto para que los productos sean únicos
    const productosUnicos = carrito.reduce((acc, producto) => {
        acc[producto.id] = producto;
        return acc;
    }, {});

    const pagar = () => {
        localStorage.removeItem("carrito");
        window.location.href = "/";
    }

    const totalPrecio = carrito.reduce((acc, producto) => acc + producto.precio, 0).toFixed(2);

    return (
        <div className="container">
            <h1 className="text-center">Carrito de Compras</h1>
            <div className="table-responsive">
                <table className="table table-bordered table-hover table-dark mx-auto">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(productosUnicos).map(producto => (
                            <tr key={producto.id}>
                                <td>{producto.titulo}</td>
                                <td>{carrito.filter(p => p.id === producto.id).length}</td>
                                <td>{(producto.precio).toString().replace(".", ",")}€</td>
                                <td>
                                    <button type='button'
                                        className="btn btn-danger"
                                        onClick={() => eliminarDelCarrito(producto.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>{carrito.length}</strong></td>
                            <td><strong>{totalPrecio.toString().replace(".", ",")}€</strong></td>
                            <td>
                                <button type='button' className="btn btn-primary" onClick={() => pagar()}>
                                    Pagar
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CarritoPage;
