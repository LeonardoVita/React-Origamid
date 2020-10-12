import React from 'react'
import Produto from '../ExeComponents/components/Produto'
import Modal from './Components/Modal'

export default function ExeUseEffects() {
  const [pref, setPrefe] = React.useState('')
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    const produto = window.localStorage.getItem('produto')
    setPrefe(produto)
  }, [])

  React.useEffect(() => {
    async function getData() {
      const data = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${pref}`)
      const json = await data.json()

      setData(json)
    }
    pref && getData();
  }, [pref])


  function handleClick(e) {
    const produto = e.target.innerText
    window.localStorage.setItem('produto', produto)
    setPrefe(produto)
  }

  return (
    <div>
      <h1>Preferencia: <span>{pref}</span></h1>
      <button onClick={(e) => handleClick(e)} style={{ marginRight: '10px' }}>Notebook</button>
      <button onClick={(e) => handleClick(e)} style={{ marginRight: '10px' }}>Smartphone</button>
      {data && <Modal {...data} />}

    </div>
  )
}
