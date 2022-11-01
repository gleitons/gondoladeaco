import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

export async function getStaticProps(context) {
    const {params} = context;
    const data = await fetch (`https://jsonplaceholder.typicode.com/posts/${params.todoId}`);
    const todo = await data.json();

    return {
        props: {todo},
    }
}

export async function getStaticPaths() {
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts/');
    const datas = await response.json()
    const paths = datas.map((todo) => {
        return {
            params: {
                todoId: `${todo.id}`,
            },
        }
    })
    return { paths, fallback: false }
}
 
export default function Todo({todo}) {

    
    const Voltar = "<- Voltar"
    const moreComments = "Ver Mais"
    return (
        <>
            <Head>
                <title>ToDo - {todo.id}</title>
            </Head>
            <Link href='/todos'>{Voltar}</Link>
            <h3>Exibindo o Sorteio {todo.id}</h3>
            <h4>{todo.body}</h4>
            <p>Comentarios <Link href={`/todos/${todo.id}/comentarios/1`}>{moreComments}</Link></p>
            <p>Comentarios <Link href={`/todos/${todo.id}/comentarios/2`}> {moreComments}</Link></p>
            <p>Comentarios <Link href={`/todos/${todo.id}/comentarios/3`}>{moreComments}</Link></p>

        </>
    )
}