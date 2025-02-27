"use client";

import { CartContext } from "@/app/context/carrito";
import { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import styles from './page.module.css';

export default function HardwarePerifericosPage() {
    const { anyadirAlCarrito } = useContext(CartContext);

    const [productos, setProductos] = useState([]);

    const productosURL = "http://localhost:5000/hardware";
    const getProductos = async () => {
        try {
            const response = await fetch(productosURL);
            const data = await response.json();
            setProductos(data);
        } catch (error) {
            console.error("Error obteniendo los productos:", error);
        }
    };

    useEffect(() => {
        getProductos();
    }, []);

    return (
        <Container>
            <h1 className="text-center my-4">Productos de Hardware y Periféricos</h1>
            <Row className="justify-content-center">
                {productos.map(product => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
                        <Card className="text-center shadow" bg="dark" text="white">
                            <Card.Img variant="top" src={product.imagen} alt={product.titulo} className={styles['product-image']} />
                            <Card.Body className={styles['card-body']}>
                                <Card.Title>{product.titulo}</Card.Title>
                                <Card.Text>{product.descripcion}</Card.Text>
                                <Row>
                                    <Col className="d-flex justify-content-between align-items-center">
                                        <Card.Text className="mb-0">{product.precio.toString().replace(".", ",")}€</Card.Text>
                                        <Button variant="primary" className="ms-2" onClick={() => anyadirAlCarrito(product)}>Añadir al carrito</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
