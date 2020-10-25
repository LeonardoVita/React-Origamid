import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Header from './Header'

import Home from './Home'
import Sobre from './Sobre'
import NotFund from './NotFund'
import Login from './Login'
import Produto from './Produto'
import ProdutoAval from './ProdutoAval'
import ProdutoCustomizado from './ProdutoCustomizado'
import ProdutoDesc from './ProdutoDesc'

export default function RouterDom() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />

        <Route path="produto/:id/*" element={<Produto />} >
          <Route path="" element={<ProdutoDesc />} />
          <Route path="avaliacao" element={<ProdutoAval />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
        </Route>

        <Route path="*" element={<NotFund />} />
      </Routes>
    </BrowserRouter>
  )
}
