import React from 'react'

export const GlobalContext = React.createContext();

export function GlobalStorage({ children }) {

  const [produto, setProduto] = React.useState(null)

  function limparDados() {
    setProduto(null)
  }

  React.useEffect(() => {

    async function fetchData() {

      const data = await fetch(`https://ranekapi.origamid.dev/json/api/produto/`)
      const json = await data.json();

      console.log(json)
      setProduto(json);
    }
    fetchData();
  }, [])

  return (
    <GlobalContext.Provider value={{ produto, setProduto, limparDados }}>
      {children}
    </GlobalContext.Provider>
  )
}