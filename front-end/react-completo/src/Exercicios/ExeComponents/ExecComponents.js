import React from 'react'

import Header from './components/Header'

import Home from './components/Home'
import Produtos from './components/Produtos'

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)


export default function ExecComponents() {
  const { pathname } = window.location;

  return (
    <React.Fragment>
      <Header />
      {pathname === '/' && <Home />}
      {pathname === '/produtos' && <Produtos />}
    </React.Fragment>
  )
}
