import Link from "next/link"


export async function getStaticProps() {
    const Data = await fetch('https://loteriascaixa-api.herokuapp.com/api');
    const megaSena = await Data.json();
    
    return {
        props: { megaSena },
    }

}

export default function Megasena({megaSena}) {
    return (
        <>
            <h2>Resultado da Mega Sena</h2>
            <h3>Ultimo resultado</h3>
            {megaSena.map((mega) => (
                <li >{mega}</li>
            ))}
        </>
    )
}