export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white text-center pt-3">
            <p>
                <a href="/politica-privacidad" className="text-white">Política de privacidad</a>
                &nbsp;|&nbsp;
                <a href="/terminos" className="text-white">Términos de servicio</a> <br />

                &copy; {currentYear} QKByte - Todos los derechos reservados
            </p>
        </footer>
    )
}