import { Box, Typography, Link } from "@mui/material";

export default function Home() {
  return (
    <Box
      component={"div"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="80vh"
    >
      <Box
        component="img"
        src="/images/qkbyte.png"
        alt="Una imagen con el nombre de nuestro sitio web hecha con IA"
        height="350px" width="auto"
      />

      <Typography variant="h3" >
        Bienvenida/o
      </Typography>
      <Typography variant="subtitle1" >
        Te recomendamos <Link href="/login">iniciar sesión</Link> para poder comprar productos.
      </Typography>
    </Box>
  );
}
