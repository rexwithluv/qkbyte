import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white text-center pt-3 pb-2">

            <Link href="/politica-privacidad" className="text-white">Política de privacidad</Link>
            &nbsp;|&nbsp;
            <Link href="/terminos" className="text-white">Términos de servicio</Link><br/>

            &copy; {currentYear} QKByte - Todos los derechos reservados
        </footer>
    )
}