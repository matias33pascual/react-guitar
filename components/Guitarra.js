import Image from "next/image";
import Link from "next/link";
import Layout from "./Layout";
import styles from "../styles/Guitarra.module.css";

const Guitarra = ({ guitarra }) => {
    const { nombre, descripcion, precio, imagen, url } = guitarra;
    const imagenUrl = imagen[0].url;

    return (
        <div className={styles.guitarra}>
            <Image
                layout='responsive'
                width={180}
                height={350}
                src={imagenUrl}
                alt={`Imagen Guitarra ${nombre}`}
            />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>$ {precio}</p>
                <Link href={`/guitarras/${url}`}>
                    <a className={styles.enlace}>Ver producto</a>
                </Link>
            </div>
        </div>
    );
};

export default Guitarra;
