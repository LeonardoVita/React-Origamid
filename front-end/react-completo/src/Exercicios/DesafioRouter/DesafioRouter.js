import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header'
import Contato from './pages/Contato/Contato'
import Error404 from './pages/Error404'
import Home from './pages/Home/Home'
import Produto from './pages/Produto/Produto'

import './global.css'

export default function DesafioRouter() {
  return (
    <BrowserRouter>
      <div id="content">
        <Header />
        <Routes >
          <Route exact path="/" element={<Home />}/>
          <Route path="/contato" element={<Contato />}/>
          <Route path="/produto/:id" element={<Produto />}/>
          <Route path="*" element={<Error404 />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
