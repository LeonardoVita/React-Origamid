import React from 'react'
import Produto from './Components/Produto'
import { GlobalStorage } from './GlobalContext'

export default function UseContext() {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  )
}
