import React from 'react'
import useFetch from './Hooks/useFetch'
import useLocalStorage from './Hooks/useLocalStorage'

export default function CustomHooks() {

  const [produto, setProduto] = useLocalStorage('produto', '')

  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(`https://ranekapi.origamid.dev/json/api/produto`)
      console.log({ response, json })
    }
    fetchData();
  }, [request])


  function handleClick({ target }) {
    setProduto(target.innerText)
    console.log(produto)
  }

  return (
    <div>
      <h1>useLocalStorage</h1>
      <button onClick={(e) => handleClick(e)} style={{ marginRight: '10px' }}>Notebook</button>
      <button onClick={(e) => handleClick(e)} style={{ marginRight: '10px' }}>Smartphone</button>

      <h1>useFetch</h1>
      {loading && <p>Carregando...</p>}
      <ul>
        {data && data.map(item => <li key={item.id}><h3>{item.nome}</h3></li>)}
      </ul>
      {error && <div><span>{error.message}</span></div>}

    </div>
  )
}


