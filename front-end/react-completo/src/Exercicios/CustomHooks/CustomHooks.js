import React from 'react'
import useLocalStorage from './Hooks/useLocalStorage'

export default function CustomHooks() {

  const [produto, setProduto] = useLocalStorage('produto', '')


  function handleClick({ target }) {
    setProduto(target.innerText)
  }

  return (
    <div>
      <button onClick={(e) => handleClick(e)}>Notebook</button>
      <button onClick={(e) => handleClick(e)}>Smartphone</button>
    </div>
  )
}


