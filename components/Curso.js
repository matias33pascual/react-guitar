import Image from "next/image";
import styles from "../styles/Curso.module.css";

const Curso = ({ curso }) => {
    const { titulo, contenido, imagen: imagenArray } = curso;
    const { url: imagen } = imagenArray[0];
    return (
        <section>
            <div className={`${styles.grid} contenedor`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <p className={styles.texto}>{contenido}</p>
                    <a className={styles.enlace} href='#'>
                        Mas Informacion
                    </a>
                </div>
            </div>
            {console.log(imagen)}

            <style jsx>{`
                section {
                    padding: 10rem 0;
                    margin-top: 10rem;
                    background-image: linear-gradient(
                            to right,
                            rgb(0 0 0 / 0.65),
                            rgb(0 0 0 / 0.7)
                        ),
                        url(${imagen};);
                    background-size: cover;
                    background-position: center;
                }
            `}</style>
        </section>
    );
};

export default Curso;
