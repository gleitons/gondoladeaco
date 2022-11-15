import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import imageM from '../public/img/gondolas-o-que-uma-gondola.jpg'
import styles from '../styles/Home.module.css'
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
      <div>
      <div>
        <div class="dominioAVenda">
            <div class="esquerdo">
                <h2>ATENÇÃO</h2>
                <h3>ESSE DOMÍNIO PODE FAZER SUA EMPRESA DECOLAR</h3>
                <p>Domínio disponível para <strong>venda</strong> ou <strong>locação</strong></p>
                <div id="btnT"></div>       
            </div>
            <div class="direito" id="direito">
                
            </div>
        </div>
    </div>
    <div id="foter">
        
        
    </div>
      <Link href="https://api.whatsapp.com/send?phone=+5551980652808&text=Ol%C3%A1,%20gostaria%20de%20adquirir%20o%20dom%C3%ADnio%20https://www.gondoladeaco.com.br/"><button className={styles.botaoDominio}>CLIQUE AQUI PARA ADQUIRIR ESTE DOMINÍO</button></Link>
    </div>
    {/* </div> */}
     
    </>
  )
  }