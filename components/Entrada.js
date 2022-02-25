//* no hace falta especificar el archivo ya que su nombre es index.js
import Link from 'next/link'
import Image from 'next/image'
import { formatearFecha } from '../helpers'
import styles from '../styles/Entrada.module.css'

const Entrada = ({ entrada }) => {
	const { titulo, resumen, imagen, published_at, id, url } = entrada;
	const { url: imagenUrl } = imagen[0];
	return (
		<article>
			<Image
				priority='true'
				layout='responsive'
				width={ 800 }
				height={ 600 }
				src={ imagenUrl }
				alt={ `imagen blog ${titulo}` } />

			<div className={ styles.contenido }>
				<h3>{ titulo }</h3>
				<p className={ styles.fecha }>{ formatearFecha(published_at) }</p>
				<p className={ styles.resumen }>{ resumen }</p>
				<Link href={ `/blog/${url}` }>
					<a className={ styles.enlace }>
						Seguir leyendo
					</a>
				</Link>

			</div>
		</article>
	);
}

export default Entrada;