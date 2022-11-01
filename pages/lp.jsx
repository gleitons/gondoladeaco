import styles from '../styles/Lp.module.css';
import '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image';
import gondola from '../public/img/gondolas-otimize-espaco.jpg'
import gondola2 from '../public/img/gondolas-otimize-espaco-min-min-2-min.jpg'
export default function LandPage() {

    return (

        <>
            <Head>
                <title>Landing Page - Gôndola de Aço</title>
                <meta name="description" content="Gôndola de Aço a preço de fábrica, gondoladeaco.com.br" />
                <meta name="keywords" content="gôndola de aço, prateleira de aço, montar mercado, prateleiras com desconto" />
            </Head>
            <div className={styles.fundoForm}>
                <div className={styles.Iform} >
                    <div className={styles.InfoB} >
                        <h2>TODOS OS TIPOS DE GÔNDOLAS PARA O SEU NEGÓCIO!</h2>
                        <p>Orçamento online sem compromisso!</p>
                        <p>Preencha o formulário que, muito em breve, um de nossos consultores entrará em contato.</p>
                    </div>
                    <div>
                        <div className={styles.FormL}>
                            <form action="" method="post">
                                <div>
                                    <input type="text" name="01_Nome" id="nome" />
                                    <input type="email" name="02_Email" id="email" />
                                </div>

                                <select name="Selecione" id="selecione">
                                    <option value="gondola">Gôndolas</option>
                                    <option value="prateleira">Prateleira</option>
                                    <option value="portapallet">Porta Pallet</option>
                                    <option value="contato">Quero Ajuda</option>
                                </select>
                                <br />
                                <textarea name="message" id="info" cols="30" rows="10"></textarea>
                                <div>loadinGoogle</div>
                                <input type="submit" value="Enviar Agora" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={styles.imgHeader}>
                <Link href="https://brasilgondolas.com.br" target="_blank"><img src="./img/gondolas-otimize-espaco-min-min.jpg" alt="" /></Link>
            </div> */}

            <div className={styles.imgHeader}>
                <Link href="https://brasilgondolas.com.br" target="_blank"> <Image
                src={gondola2}
                // width={100}
                // height={300}
                // object-fit = 'fill'
                // display = 'block'
                // object-position = 'relative'
                alt="Fazer Orçamento de Gôndolas"
            /></Link>
            </div>
            {/* <Image
                src={gondola2}
                // width={100}
                // height={300}
                object-fit = 'fill'
                display = 'block'
                object-position = 'relative'
                alt="Fazer Orçamento de Gôndolas"
            /> */}
            {/* <div>
                <Image
                    alt=""
                    src={gondola}
                    // width={500} 
                    // height={500} 
                    priority
                    blurDataURL="data:..." 
                    placeholder="blur" // Optional blur-up while loading
                />
            </div> */}
        </>
    )
}