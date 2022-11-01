import Link from "next/link"
import styles from '../styles/Menu.module.css'
export default function Footer() {
    return (
        <div>
            <p>Gôndola de Aço &copy; 2021</p>
            <ul className={styles.dflex} >
                <Link href="/">
                    <li>Inicio</li>
                </Link>
                <Link href="/gondolas">
                    <li>Gôndola</li>
                </Link>
                <Link href="/sobre">
                    <li>Sobre</li>
                </Link>
                <Link href="/lp">
                    <li>Landing Page</li>
                </Link>
                <Link href="/ToDo">
                    <li>ToDos</li>
                </Link>
               
            </ul>
        </div>
    )
}