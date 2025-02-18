import Link from "next/link";
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NotFound() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center text-center" style={{ height: "75vh" }}>
            <Image src="/images/not-found.png" alt="Not Found" style={{ objectFit: "contain" }} width={500} height={350} />
            <h1>404 - Página no encontrada</h1>
            <p>Lo sentimos, la página que buscas no existe.</p>
            <Link href="/">Volver al inicio</Link>
        </div>
    )
}