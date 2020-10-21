import React, { useState } from 'react'

export default function ExecInput() {

  const [dados, setDados] = useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: ''
  })

  const [status, setStatus] = useState()

  async function handleSubmit(event) {
    event.preventDefault()
    console.log({ dados })

    try {

      const response = await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados)
      })

      const data = await response.json()
      console.log({ response, data })
      setStatus({
        ok: response.ok,
        status: response.status
      })

    } catch (error) {
      console.log(error)
    }

  }

  function handlechange({ target }) {
    const { id, value } = target
    setDados({ ...dados, [id]: value })
    // console.log({ id, value })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          value={dados.nome}
          onChange={(e) => handlechange(e)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={dados.email}
          onChange={(e) => handlechange(e)}
        />
        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          type="password"
          value={dados.senha}
          onChange={(e) => handlechange(e)}
        />
        <label htmlFor="cep">Cep</label>
        <input
          id="cep"
          type="text"
          value={dados.cep}
          onChange={(e) => handlechange(e)}
        />

        <label htmlFor="rua">Rua</label>
        <input
          id="rua"
          type="text"
          value={dados.rua}
          onChange={(e) => handlechange(e)}
        />
        <label htmlFor="numero">Numero</label>
        <input
          id="numero"
          type="text"
          value={dados.numero}
          onChange={(e) => handlechange(e)}
        />
        <label htmlFor="bairro">Bairro</label>
        <input
          id="bairro"
          type="text"
          value={dados.bairro}
          onChange={(e) => handlechange(e)}
        />
        <label htmlFor="cidade">Cidade</label>
        <input
          id="cidade"
          type="text"
          value={dados.cidade}
          onChange={(e) => handlechange(e)}
        />
        <label htmlFor="estado">Estado</label>
        <input
          id="estado"
          type="text"
          value={dados.estado}
          onChange={(e) => handlechange(e)}
        />

        <button type="submit">Enviar</button>
        {status !== undefined && (

          status.ok === true
            ? <span style={{ marginLeft: '15px', color: 'green' }}>{"Cadastrado com sucesso"}</span>
            : <span style={{ marginLeft: '15px', color: 'red' }}>{`Error ${status.status} no cadastro`}</span>

        )}
      </form>

    </div>
  )
}
