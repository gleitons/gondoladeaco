import Link from "next/link"
import styles from '../styles/Menu.module.css'
import { AiFillAlert } from "react-icons/ai";
import { BsBookshelf } from "react-icons/bs";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { RiLogoutCircleLine } from "react-icons/ri";
import { GiIsland } from "react-icons/gi";

export default function MenuTop() {
    return (
        <div className={styles.top}>
            <div className={styles.construcao}>
                <h3>SITE EM CONSTRUÇÃO - NÃO OTIMIZADO PARA CELULARES</h3>
            </div>
            <div className={styles.menuTop}>
                <div>
                    <Link rel="stylesheet" href="/"><RiLogoutCircleLine/></Link>
                </div>
                <div>
                    <ul>
                        <Link href="/"><li className={styles.aling}><AiFillAlert/> Inicio</li></Link>
                        <Link href="/gondolas"><li className={styles.aling}> <BsBookshelf/> Gôndolas</li></Link>
                        <Link href="/sobre"><li className={styles.aling}> <BsFillHandThumbsUpFill/> Sobre</li></Link>
                        <Link href="/lp"><li className={styles.aling}> <GiIsland/> Lp</li></Link>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}