import Link from "next/link";
import { Box, Typography } from "@mui/material";

export default function PiePagina() {
    const anyoActual = new Date().getFullYear();

    return (
        <Box
            component="footer"
            bgcolor="primary.main"
            color="primary.contrastText"
            textAlign="center"
            pt={2}
            pb={1}
        >

            <Typography variant="body2">
                <Link href="/politica-privacidad">Política de privacidad</Link>
                &nbsp;|&nbsp;
                <Link href="/terminos">Términos de servicio</Link>
            </Typography>

            <Typography variant="body2" mt={1}>
                &copy; {anyoActual} QKByte - Todos los derechos reservados
            </Typography>

        </Box>
    );
}