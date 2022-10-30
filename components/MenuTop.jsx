import Link from "next/link"
import styles from '../styles/Menu.module.css'
export default function MenuTop() {
    return (
        <div className={styles.top}>
            <div className={styles.construcao}>
                <h3>SITE EM CONSTRUÇÃO - NÃO OTIMIZADO PARA CELULARES</h3>
            </div>
            <div className={styles.menuTop}>
                <div>
                    <img src="./img/logo-gondola-de-aco-2.png" alt="" />
                </div>
                <div>
                    <ul>
                        <Link href="/"><li>Inicio</li></Link>
                        <Link href="/gondolas"><li>Gôndolas</li></Link>
                        <Link href="/sobre"><li>Sobre</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}