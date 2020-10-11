import React from 'react'
import Title from './Title'
import Produto from './Produto'

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  { nome: 'Tablet', propriedades: ['4gb ram', '524gb'] },
  { nome: 'PC', propriedades: ['8gb ram', '1t'] },
  { nome: 'xbox', propriedades: ['8gb ram', '600gb'] },
]

export default function Produtos() {


  return (
    <div>
      <Title title="Produtos" />
      {
        produtos.map((produto) => {
          return (
            <Produto key={produto.nome} {...produto} />
          )
        })
      }
    </div>
  )
}
