import React from 'react'

export default function Modal({ nome, preco, fotos }) {

  console.log(fotos)

  return (
    <div>
      <h2>{nome}</h2>
      <p>R$ {preco}</p>
      <ul>
        {
          fotos.map((item, i) => <li key={i}><img src={item.src} alt={item.titulo} /></li>)
        }
      </ul>
    </div>
  )
}
