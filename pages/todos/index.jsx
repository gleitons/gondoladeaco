import styles from '../../styles/Todos.module.css'
import Head from 'next/head';
import Link from 'next/link';

export async function getStaticProps() {
    const Data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const todos = await Data.json();
    console.log(todos)
    return {
        props: { todos },
    }

}
export default function Todos({ todos }) {
    return (

        <>
            <Head>
                <title>ToDo List</title>
            </Head>
            <h1>Tarefas para Fazer</h1>
            <ul className={styles.todolist}>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.id} - {todo.title} - <Link href={`/todos/${todo.id}`} >More...</Link></li>
                ))}


            </ul>
        </>
    )
}