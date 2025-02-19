import Link from "next/link";
import { Container } from 'react-bootstrap';

export default function Footer() {
    const anyoActual = new Date().getFullYear();

    return (
        <Container fluid className="bg-primary text-center pt-2">
            <p>
                <Link href="/politica-privacidad">Política de privacidad</Link>
                &nbsp;|&nbsp;
                <Link href="/terminos">Términos de servicio</Link>

                <br />

                &copy; {anyoActual} QKByte - Todos los derechos reservados
            </p>
        </Container>
    );
}