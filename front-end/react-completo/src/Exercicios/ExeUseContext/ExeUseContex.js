import React from 'react'
import { GlobalStorage } from './GlobalContext'
import Produtos from './Produtos'

export default function ExeUseContex() {
  return (
    <GlobalStorage>
      <Produtos />
    </GlobalStorage>
  )
}
