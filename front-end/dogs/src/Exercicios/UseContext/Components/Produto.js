import React from 'react'
import { GlobalContext } from '../GlobalContext'


export default function Produto() {
  const global = React.useContext(GlobalContext)

  function handleAdd() {
    global.setCount((count) => count + 1)
  }

  return (
    <div>
      {global.count} <button onClick={() => handleAdd()}>Adcionar</button>
    </div>
  )
}
