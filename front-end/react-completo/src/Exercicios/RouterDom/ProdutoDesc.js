import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProdutoDesc() {

  const params = useParams()

  return (
    <div>
      <h2>Produto Descrição</h2>
    </div>
  )
}
