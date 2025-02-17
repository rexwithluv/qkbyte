"use client";

import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function BarraNavegacion() {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="py-3">

            <Container>
                <Link href="/" passHref className='text-decoration-none'>
                    <Navbar.Brand className="me-5">
                        QKByte
                    </Navbar.Brand>
                </Link>

                {/* El desplegable */}
                <Navbar.Toggle aria-controls="navbarSupportedContent" className="ms-auto" />

                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="me-auto mb-2 mb-lg-0">
                        <Nav.Link href='/hardware-perifericos'>Hardware y periféricos</Nav.Link>
                        <Nav.Link href='/software'>Software</Nav.Link>
                        <Nav.Link href='/pcs-montados'>PCs montados</Nav.Link>
                        <Nav.Link href='/contacto'>Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}