import React from 'react'
import { GlobalContext } from './GlobalContext'

export default function Produtos() {
  const { produto, setProduto, limparDados } = React.useContext(GlobalContext)

  return (
    <>
      <ul>
        {
          produto != null && produto.map((item) => <li>{item.nome}</li>)
        }
      </ul>
      <button onClick={() => limparDados()}>Apagar todos os dados</button>
    </>
  )
}
