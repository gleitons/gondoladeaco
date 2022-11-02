import Head from "next/head";
import styles from '../../styles/InfoPokemon.module.css'
import Image from "next/image";
import {IoArrowBackCircleSharp} from 'react-icons/io5'
import Link from "next/link";
import { useRouter } from "next/router";
import loading from "../../public/img/loading-gleiton-aparecido-soares-de-souza.svg"


export const getStaticPaths = async () => {
    const maxPokemo = 50;
    const api = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemo}`);
    const data = await api.json();

    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemonId: (index + 1).toString() },
        }

    })
    return {
        paths, fallback: true,
    }

}
export const getStaticProps = async (context) => {
    const id = context.params.pokemonId;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    return {
        props: { pokemon: data },
    }
}
export default function Pokemon({ pokemon }) {
    const route = useRouter();

    if (route.isFallback) {
        return (
            <>
            
            <div className={styles.title}>
            <h3 >Carregando...</h3>
            <Image src={loading} alt="Carregando Pokemon" />
            </div>
            
            </>
        
        )
    }
    const namePage = pokemon.name
    const page = namePage[0].toUpperCase() + namePage.substring(1);
    return (
        <>
            <Head>
                <title>{page} - Pokenext (Projeto Gleiton Ap. Soares de Souza)</title>
            </Head>
            <div className={styles.pokemon_container}>
            <div className={styles.IconBack}>
                    <Link href="/pokemon" >
                        <IoArrowBackCircleSharp  />
                    </Link>
                </div>
                <h1 className={styles.title}>{pokemon.name}</h1>
                
                <Image
                    src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                    width='200'
                    height='200'
                    alt={pokemon.name}
                />
                <div>
                    <h4>Número</h4>
                    <p className={styles.id}>#{pokemon.id}</p>
                </div>
                <div>
                    <h4>Tipo:</h4>
                    <div className={styles.types_container}>
                        {pokemon.types.map((item, index) => (
                            <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`} >{item.type.name}</span>
                        ))}
                    </div>
                </div>
                <div className={styles.data_conteiner}>
                    <div className={styles.data_height}>
                            <h4>Altura:</h4>
                            <p>{pokemon.height * 10} cm</p>
                    </div>
                    <div className={styles.data_weight}>
                            <h4>Peso:</h4>
                            <p>{pokemon.weight / 10} kg</p>
                    </div>
                </div>
                
            </div>
        </>

    )
}