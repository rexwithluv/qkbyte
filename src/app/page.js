"use client";

import { UserContext } from '@/app/context/user';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';


export default function Home() {

  const { isLogueado, user } = useContext(UserContext);

  return (
    <Container className='d-flex flex-column align-items-center justify-content-center vh-80'>
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
            Bienvenida/o {user ? user.nombre : "usuario"}
          </h3>

          {isLogueado ? (
            <p>
              Ya puedes <Link href="/productos">comprar productos</Link>.
            </p>
          ) : (
            <p>
              Te recomendamos <Link href="/login">iniciar sesión</Link> para poder comprar productos.
            </p>
          )}
        </Col>
      </Row>
    </Container>
  );
}
