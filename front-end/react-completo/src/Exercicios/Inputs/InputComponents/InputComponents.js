import React from 'react'
import Checkbox from './components/Checkbox'
import Input from './components/Input'
import Radio from './components/Radio'
import Select from './components/Select'

export default function InputComponents() {

  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [produto, setProduto] = React.useState('')
  const [cor, setCor] = React.useState('Vermelho')
  const [fruta, setFruta] = React.useState('')
  const [linguagem, setLinguagem] = React.useState([])
  const [termos, setTermos] = React.useState([])

  return (
    <form onSubmit={e => e.preventDefault()}>

      <Select
        options={['smartphone', 'tablet', 'notebooks']}
        value={produto}
        setValue={setProduto}
      />

      <Input
        id="nome"
        label="Nome"
        value={nome}
        setValue={setNome}
        required
      />

      <Input
        id="email"
        label="Email"
        value={email}
        setValue={setEmail}
        required
      />

      <h2>Cores</h2>
      <Radio
        options={['Azul', 'Vermelho', 'Amarelo']}
        value={cor}
        setValue={setCor}
      />

      <h2>Frutas</h2>
      <Radio
        options={['limão', 'Laranja', 'Morango']}
        value={fruta}
        setValue={setFruta}
      />

      <h2>Checkbox</h2>
      <Checkbox
        options={['Javascript', 'Php', 'Ruby']}
        value={linguagem}
        setValue={setLinguagem}
      />

      <h2>Termos</h2>
      <Checkbox
        options={['li e aceito os termos.']}
        value={termos}
        setValue={setTermos}
      />

      <button type="submit">Enviar</button>
    </form>
  )
}
