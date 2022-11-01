import Link from "next/link"
import { useRouter } from "next/router"
export default function Comentarios() {
    const route = useRouter();
    const todoID = route.query.todoId;
    const commentsID = route.query.commentsId;
    const voltar = "<- Voltar"

    return (
        <>
            <Link href={`/todos/${todoID}`} >{voltar}</Link>
            <h3>Exibindo o Comentário {commentsID}</h3>
        </>
    )
}