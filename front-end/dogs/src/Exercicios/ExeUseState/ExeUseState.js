import React from 'react'
import Modal from './Components/Modal'

export default function ExeUseState() {

  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(null)

  async function getData(e) {
    setLoading(true)
    const item = e.target.innerText
    const data = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${item}`)
    const json = await data.json()

    console.log({ json })
    setLoading(false)
    setData(json)
  }

  return (
    <div>
      <button onClick={(e) => getData(e)} style={{ marginRight: '10px' }}>Tablet</button>
      <button onClick={(e) => getData(e)} style={{ marginRight: '10px' }}>Smartphone</button>
      <button onClick={(e) => getData(e)} style={{ marginRight: '10px' }}>Notebook</button>
      {loading && <p>Carregando...</p>}
      {!loading && data && <Modal {...data} />}

    </div>
  )
}
