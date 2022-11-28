import Image from "next/image"
import Link from "next/link"

import styles from "../styles/Card.module.css"

export default function MegaSena({ megasenaR }) {
                //const linkUrl = pokemon.name.replace(/' '/g, '-')
    return (

        <div className={styles.card}>
            <Image
                src={`https://cdn.traction.one/pokedex/pokemon/${megasenaR.id}.png`}
                width='120'
                height='120'
                alt={megasenaR.id}
            />

            {/* <p className={styles.id}>#{megasenaR.sorteio}</p>
            <h3 className={styles.title}>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`} className={styles.btn} >
                <p>Detalhes</p>
            </Link> */}
        </div>
    )
}