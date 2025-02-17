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
                        <Link href="/hardware-perifericos" passHref>
                            <Nav.Link>Hardware y periféricos</Nav.Link>
                        </Link>
                        <Link href="/software" passHref>
                            <Nav.Link>Software</Nav.Link>
                        </Link>
                        <Link href="/pcs-montados" passHref>
                            <Nav.Link>PCs montados</Nav.Link>
                        </Link>
                        <Link href="/contacto" passHref>
                            <Nav.Link>Contacto</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
}