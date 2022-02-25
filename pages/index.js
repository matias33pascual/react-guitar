import Layout from "../components/Layout";
import Listado from "./../components/Listado";
import Curso from "./../components/Curso";
import ListadoBlog from "../components/ListadoBlog";

export default function Home({ guitarras, cursos: curso, entradas }) {
    return (
        <Layout pagina='Inicio' guitarra={guitarras[0]}>
            <main className='contenedor'>
                <h1 className='heading'>Nuestra Coleccion</h1>
                <Listado guitarras={guitarras} />
            </main>
            <Curso curso={curso} />
            <section className='contenedor'>
                <ListadoBlog entradas={entradas} />
            </section>
        </Layout>
    );
}

export async function getServerSideProps() {
    const urlGuitarras = `${process.env.API_URL}/guitarras`;
    const urlCursos = `${process.env.API_URL}/cursos`;
    const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;

    //* ambos funcionan al mismo tiempo
    const [respuestaGuitarras, respuestaCursos, respuestaBlog] =
        await Promise.all([
            fetch(urlGuitarras),
            fetch(urlCursos),
            fetch(urlBlog),
        ]);

    const [guitarras, cursos, entradas] = await Promise.all([
        respuestaGuitarras.json(),
        respuestaCursos.json(),
        respuestaBlog.json(),
    ]);

    return {
        props: {
            guitarras,
            cursos,
            entradas,
        },
    };
}
