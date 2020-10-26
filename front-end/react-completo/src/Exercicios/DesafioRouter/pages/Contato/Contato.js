import React from 'react'
import Head from '../../components/Head'
import styles from './Contato.module.css'

export default function Contato() {
  return (
    <>
      <Head title="Contato" Description="Entre em contato conosco"/>  
      <div className={styles.content}>
        <img src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartwatch.jpg" alt="ilustração contato" className={styles.img}/>
        <div>
          <h1>Entre em contato</h1>
          <p>-- leonardo.vita0606@gmail.com</p>
          <p>-- 99999-9999</p>
          <p>-- Rua Ali Perto, 099</p>
        </div>
      </div>

    </>
  )
}
