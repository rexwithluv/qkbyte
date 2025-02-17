import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <Container className='d-flex flex-column align-items-center justify-content-center' style={{ height: "80vh" }}>
      <Row>
        <Col className='text-center'>
          <Image
            src="/images/qkbyte.png"
            alt="Una imagen con el nombre de nuestro sitio web hecha con IA"
            width={700}
            height={400}
            style={{ objectFit: "contain" }}
          />
        </Col>
      </Row>
      <Row>
        <Col className='text-center'>
          <h3 className='mt-3'>
            Bienvenida/o
          </h3>
          <p>
            Te recomendamos <Link href="/login">iniciar sesión</Link> para poder comprar productos.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
