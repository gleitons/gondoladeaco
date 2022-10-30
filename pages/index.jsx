import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import MenuTop from '../components/MenuTop'

export default function Home() {
  return (
    <div>
      <MenuTop/>
      <h1>Gôndola de Aço</h1>
      <h2>Orçamento gratuito</h2>
      <div className={styles.imgHeader}>
      <img src="./img/gondolas-otimize-espaco-min-min.jpg" alt="" />
      </div>
      
    </div>
  )
}
