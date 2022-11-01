import Head from 'next/head'
import Image from 'next/image'
import imageM from '../public/img/gondolas-o-que-uma-gondola.jpg'
// import styles from '../styles/Home.module.css'
// import Link from 'next/link'



export default function Home() {
  
  return (
    <>
      <Head>
        <title>Pagina Principal</title>
        <meta name="description" content="Gôndola de Aço a preço de fábrica, gondoladeaco.com.br" />
        <meta name="keywords" content="gôndola de aço, prateleira de aço, montar mercado, prateleiras com desconto" />
       
      </Head>
      <h1>Gôndola de Aço</h1>
      <h2>Orçamento gratuito</h2>
      <p>Gôndola é um tipo de móvel usado no comércio para expor produtos. Pode ser conhecido, também como prateleira, embora não seja o termo mais adequado</p>
      <Image src={imageM} />
    </>
  )
}
