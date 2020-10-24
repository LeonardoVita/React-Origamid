import React from 'react'
import styles from './Produto.module.css'

export default function Produto() {
  return (
    <>
      <h1 className={styles.titulo}>Notebook</h1>
      <p className={styles.preco}>R$ 3000</p>
      <button className={styles.comprar}>Comprar</button>
    </>
  )
}
