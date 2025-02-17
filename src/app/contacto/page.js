import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';

export default function Contacto() {
    return (
        <Container className="mt-4 mb-4">
            <h3 className="text-center">Contacto</h3>

            <Row className="d-flex flex-column flex-md-row">
                {/* Contiene la imagen */}
                <Col md={6} className="mb-4 mb-md-0">
                    <Image src='/images/contact.jpg' alt="contact" height={600} width={400} />
                </Col>

                {/* Contiene el formulario de contacto */}
                <Col md={6} className="bg-dark text-white p-4 d-flex flex-column justify-content-between">
                    <div>
                        <h4 className="text-center">¡Contactamos contigo!</h4>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="name" placeholder="Nombre" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Correo</label>
                                <input type="email" className="form-control" id="email" placeholder="Correo" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Mensaje</label>
                                <textarea className="form-control" id="message" rows={4} placeholder="Mensaje" required></textarea>
                            </div>
                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </form>
                    </div>
                    <div className="p-2 mt-3 bg-dark border border-dark rounded">
                        <h5>O contactanos tú si lo prefieres...</h5>
                        <p>Correo: qkbyte@email.com</p>
                        <p>Teléfono: 123456789</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
