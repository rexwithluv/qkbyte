export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white text-center pt-3">
            <p>&copy; {currentYear} QKByte - Todos los derechos reservados</p>
            <p>
                <a href="/politica-privacidad" className="text-white">Política de privacidad</a> |
                <a href="/terminos" className="text-white"> Términos de servicio</a>
            </p>
        </footer>
    )
}