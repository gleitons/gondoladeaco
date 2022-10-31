import styles from '../styles/Lp.module.css';
import '../styles/Home.module.css'
import Link from 'next/link'
export default function LandPage() {
    return (
        <>
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
            <div className={styles.imgHeader}>
            <Link href="https://brasilgondolas.com.br" target="_blank"><img src="./img/gondolas-otimize-espaco-min-min.jpg" alt="" /></Link>
            </div>
        </>
    )
}