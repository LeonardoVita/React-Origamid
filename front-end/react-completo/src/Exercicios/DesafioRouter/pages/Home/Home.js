import React from 'react'
import {Link} from 'react-router-dom'
import Head from '../../components/Head'
import styles from './Home.module.css' 

export default function Home() {
  const [produtos, setProdutos] = React.useState(null)

  React.useEffect(()=>{
    async function fetchData(){
      const res = await fetch('https://ranekapi.origamid.dev/json/api/produto')
      const data = await res.json()
      
      setProdutos(data)
    }
    fetchData();
  },[])

  if(produtos === null) return <div className="loading"></div>

  return (
    <>
      <Head title="Home" Description="Desafio router Home com lista dos produtos"/>  
      <ul className={styles.produtoUl}>
        {
         produtos.map((produto)=>(
          <li key={produto.id} className={styles.produtoLi}>
            <Link to={`produto/${produto.id}`} >
              <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} className={styles.produtoImg}/>
              <h2>{produto.nome}</h2>
            </Link>
          </li>  
        ))
        } 
      </ul>
    </>
  )
}
