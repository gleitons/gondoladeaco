import Link from "next/link"
import {CgPokemon} from "react-icons/cg";
import styles from '../../styles/IndexP.module.css'
import CardPokemon from "../../components/CardPokemon";


export async function getStaticProps() {
    const maxPokemo = 50;
    const api = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemo}`);
    const data = await api.json();
    
    data.results.forEach((item, index) => {
        item.id = index + 1
    })

    return {
        props: {
           pokemons: data.results,
        }
    }

}

export default function Pokemon({pokemons}) {
    return (
        <>
            <div className={styles.titleP}>
                <h2>POKE<span>NEXT</span></h2>
                <CgPokemon/>
            </div>
            <h3>Ultimo resultado</h3>
            <div className={styles.pokemon_container}>
                {pokemons.map((poke) => (
                     

                   <CardPokemon key={poke.id} pokemon={poke} />
                ))}
            </div>
        </>
    )
}