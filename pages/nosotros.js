import Layout from './../components/Layout';
import Image from 'next/image';
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
	return (
		<Layout
			pagina='Nosotros'>

			<main className='contenedor'>
				<h2 className='heading'>Nosotros</h2>
				<div className={ styles.contenido }>
					<Image layout="responsive" width={ 600 } height={ 450 } src='/img/nosotros.jpg' />
					<div>
						<p>Irure culpa dolore fugiat aliquip. Et aliqua do aliquip aliqua pariatur laboris proident cupidatat ex commodo culpa enim enim amet. Excepteur velit dolor pariatur non voluptate sit eu voluptate reprehenderit ad. Ea incididunt ad cupidatat laboris officia sit magna ad mollit nulla duis aliqua velit. Nostrud aliqua proident laborum sit magna aute.
						</p>
						<p>Ex amet commodo dolore in non. Sit tempor fugiat esse cillum consectetur tempor dolore aliqua sunt enim. Nulla ut ex ullamco reprehenderit adipisicing eiusmod culpa occaecat consectetur sit sit.</p>
					</div>
				</div>
			</main>

		</Layout>
	);
}

export default Nosotros;