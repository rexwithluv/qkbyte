"use client";

import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function BarraNavegacion() {
    const [smallScreen, setSmallScreen] = useState(false);

    const logout = () => {
        localStorage.removeItem("login");
        window.location.href = "/";
    };

    useEffect(() => {
        const handleResize = () => {
            setSmallScreen(window.innerWidth < 992); // 992px es el breakpoint para lg
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

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