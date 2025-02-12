import Link from "next/link";
import { Box, Typography } from "@mui/material";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            bgcolor="primary.main"
            color="primary.contrastText"
            textAlign="center"
            py={2}
        >
            <Typography variant="body2">
                <Link href="/politica-privacidad" style={{ color: 'inherit', textDecoration: 'none' }}>Política de privacidad</Link>
                &nbsp;|&nbsp;
                <Link href="/terminos" style={{ color: 'inherit', textDecoration: 'none' }}>Términos de servicio</Link>
            </Typography>
            <Typography variant="body2" mt={1}>
                &copy; {currentYear} QKByte - Todos los derechos reservados
            </Typography>
        </Box>
    );
}