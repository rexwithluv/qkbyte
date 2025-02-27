"use client";

import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function AdminPage() {
    const [userForm, setUserForm] = useState({ username: '', password: '' });
    const [productForm, setProductForm] = useState({ title: '', description: '', price: '' });

    const handleUserChange = (e) => {
        const { name, value } = e.target;
        setUserForm({ ...userForm, [name]: value });
    };

    const handleProductChange = (e) => {
        const { name, value } = e.target;
        setProductForm({ ...productForm, [name]: value });
    };

    const handleUserSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos del usuario al servidor
        console.log('Usuario creado:', userForm);
    };

    const handleProductSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos del producto al servidor
        console.log('Producto creado:', productForm);
    };

    return (
        <Container>
            <h1 className="text-center my-4">Panel de Administración</h1>
            <Row>
                <Col md={6}>
                    <h2>Crear Usuario</h2>
                    <Form onSubmit={handleUserSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre de usuario</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={userForm.username}
                                onChange={handleUserChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={userForm.password}
                                onChange={handleUserChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Crear Usuario
                        </Button>
                    </Form>
                </Col>
                <Col md={6}>
                    <h2>Crear Producto</h2>
                    <Form onSubmit={handleProductSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={productForm.title}
                                onChange={handleProductChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                value={productForm.description}
                                onChange={handleProductChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                value={productForm.price}
                                onChange={handleProductChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Crear Producto
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}