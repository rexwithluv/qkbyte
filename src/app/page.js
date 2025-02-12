import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import qkbyteImage from "@/assets/images/qkbyte.webp";
import { Box, Typography, Link as MuiLink } from "@mui/material";

export default function Home() {
  return (
    <Box
      className={styles.container}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      mt={5}
    >
      <Image
        src={qkbyteImage}
        alt="Una imagen con el nombre de nuestro sitio web hecha con IA"
        className="mb-4"
        style={{ height: "300px", width: "auto" }}
      />

      <Typography variant="h1" component="h1" className="mb-4">
        Bienvenida/o
      </Typography>
      <Typography variant="body1" className="mb-3">
        Te recomendamos <MuiLink href="/login">iniciar sesión</MuiLink> para poder comprar productos.
      </Typography>
    </Box>
  );
}
