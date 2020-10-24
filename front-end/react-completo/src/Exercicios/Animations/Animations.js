import React from 'react'
import './style.css'
import Produto from './Produto'

export default function Animations() {

  const [ativar, setAtivar] = React.useState(false)

  return (
    <div>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <Produto animate="animeLeft" />}
      {ativar && <Produto animate="animeZoom" />}
    </div>
  )
}
