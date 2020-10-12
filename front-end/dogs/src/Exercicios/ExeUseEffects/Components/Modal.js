import React from 'react'

export default function Modal({ nome, preco }) {
  return (
    <React.Fragment>
      <h2>{nome}</h2>
      <p>R$ {preco}</p>
    </React.Fragment>
  )
}
