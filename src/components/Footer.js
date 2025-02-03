export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white text-center py-3">
            <p>&copy; {currentYear} QKByte - Todos los derechos reservados</p>
            <p>
                <a href="/privacy-policy" className="text-white">Política de privacidad</a> |
                <a href="/terms" className="text-white"> Términos de servicio</a>
            </p>
        </footer>
    )
}