import Image from "next/image"
import Link from "next/link"

import styles from "../styles/Card.module.css"

export default function CardPokemon({ pokemon }) {
                //const linkUrl = pokemon.name.replace(/' '/g, '-')
    return (

        <div className={styles.card}>
            <Image
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                width='120'
                height='120'
                alt={pokemon.name}
            />

            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.title}>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`} className={styles.btn} >
                <p>Detalhes</p>
            </Link>
        </div>
    )
}