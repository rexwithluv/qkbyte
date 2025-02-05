import Link from "next/link";

export default function NotFound() {
    return (
        <div >
            <h1>404 - Página no encontrada</h1>
            <p>Lo sentimos, la página que buscas no existe.</p>
            <Link href="/">Volver al inicio</Link>
        </div>
    )

}