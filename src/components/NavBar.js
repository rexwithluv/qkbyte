"use client";

import { CartContext } from "@/app/context/carrito";
import { UserContext } from "@/app/context/user";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { BsPersonFill, BsCartFill } from "react-icons/bs"; // Importar el icono del carrito

export default function NavBar() {
    const { isLogueado } = useContext(UserContext);
    const { carrito } = useContext(CartContext);

    const [smallScreen, setSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setSmallScreen(window.innerWidth < 992); // 992px es el breakpoint para lg
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const logout = () => {
        localStorage.removeItem("login");
        window.location.href = "/";
    };

    return (
        <Navbar
            bg="primary"
            variant="dark"
            expand="lg"
            className="py-3"
        >
            {!smallScreen && (
                <Link
                    href="/"
                    passHref
                    className="text-decoration-none"
                >
                    <Navbar.Brand className="ms-4 d-flex align-items-center">
                        QKByte
                    </Navbar.Brand>
                </Link>
            )}

            <Container>
                {smallScreen && (
                    <Link
                        href="/"
                        passHref
                        className="text-decoration-none"
                    >
                        <Navbar.Brand className="ms-4 d-flex align-items-center">
                            QKByte
                        </Navbar.Brand>
                    </Link>
                )}
                <Navbar.Toggle
                    aria-controls="navbarSupportedContent"
                    className="ms-auto"
                />

                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="me-auto mb-2 mb-lg-0">
                        <Nav.Link href="/hardware-perifericos">
                            Hardware y periféricos
                        </Nav.Link>
                        <Nav.Link href="/software">Software</Nav.Link>
                        <Nav.Link href="/pcs-montados">PCs montados</Nav.Link>
                        <Nav.Link href="/contacto">Contacto</Nav.Link>
                    </Nav>

                    <Nav className="gap-3">
                        <Nav.Link href="/cart" className="d-flex align-items-center">
                            <BsCartFill />
                            <span className="ms-2">{carrito.length}</span>
                        </Nav.Link>
                        <NavDropdown
                            title={<BsPersonFill />}
                            id="user-dropdown"
                            align={"start"}
                            drop={smallScreen ? "down" : "start"}
                        >
                            {!isLogueado ? (
                                <NavDropdown.Item href="/login">Iniciar sesión</NavDropdown.Item>
                            ) : (
                                <NavDropdown.Item onClick={logout}>
                                    Cerrar sesión
                                </NavDropdown.Item>
                            )}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
