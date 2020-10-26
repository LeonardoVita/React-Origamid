import React from 'react'
import { useParams } from 'react-router-dom'
import Head from '../../components/Head'
import styles from './Produto.module.css'

export default function Produto() {
  const [produto, setProduto] = React.useState(null)
  const params = useParams()

  React.useEffect(()=>{
    async function fetchData(){
      const res = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
      const data = await res.json()

      setProduto(data)
    }
    fetchData();
  },[])

  if(produto === null ) return <div className="loading"></div>

  return (    
    <div className={styles.content}>
      <Head title={params.id} Description={`Descrição do produto ${params.id}`}/>  
      <div>
        {
          produto.fotos.map(foto => <img key={foto.src} src={foto.src} title={foto.titulo} className={styles.img}/>)
        }
      </div>
      <div className={styles.infos}>
        <h1>{produto.nome}</h1>
        <h2>R$ {produto.preco}</h2>
        <p>{produto.descricao}</p>
      </div>
    </div>
  )
}
