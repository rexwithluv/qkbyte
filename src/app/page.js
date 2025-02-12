import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import qkbyteImage from "@/assets/images/qkbyte.webp";

export default function Home() {
  return (
    <div className={`${styles.container} d-flex flex-column align-items-center justify-content-center text-center mt-5`}>
      <Image src={qkbyteImage} alt="Una imagen con el nombre de nuestro sitio web hecha con IA" className="mb-4" style={{ height: '300px', width: 'auto' }} />
      <h1 className="mb-4">Bienvenida/o</h1>
      <p className="mb-3">Te recomendamos <Link href="/login">iniciar sesión</Link> para poder comprar productos.</p>
    </div>
  );
}
